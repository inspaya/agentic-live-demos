"use strict";
/* 003 CAC validator UI — single FormData path: file OR image_url. Falls back to
   frozen mock (../sample-docs/expected_response.json) when backend is down. */

const $ = (id) => document.getElementById(id);
const apiBase = $("apiBase"), healthDot = $("healthDot"), healthBtn = $("healthBtn");
const dropzone = $("dropzone"), fileInput = $("fileInput"), fileName = $("fileName");
const sampleUrl = $("sampleUrl"), loadSampleBtn = $("loadSampleBtn"), preview = $("preview");
const analyzeBtn = $("analyzeBtn"), elapsed = $("elapsed"), errorBox = $("error");
const emptyState = $("emptyState"), resultBody = $("resultBody"), verdictBadge = $("verdictBadge");
const confFill = $("confFill"), confLabel = $("confLabel"), sampleFlag = $("sampleFlag");
const fieldsBody = $("fieldsBody"), qrBlock = $("qrBlock"), checksList = $("checksList");
const rawJson = $("rawJson"), metaLine = $("metaLine");

let chosenFile = null;
let sampleLoaded = false;
const MAX_BYTES = 10 * 1024 * 1024;

dropzone.addEventListener("click", () => fileInput.click());
dropzone.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") fileInput.click(); });
["dragover", "dragenter"].forEach((ev) => dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add("over"); }));
["dragleave", "drop"].forEach((ev) => dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove("over"); }));
dropzone.addEventListener("drop", (e) => {
  const f = e.dataTransfer.files && e.dataTransfer.files[0];
  if (f) setFile(f);
});
fileInput.addEventListener("change", () => { if (fileInput.files[0]) setFile(fileInput.files[0]); });

function setFile(f) {
  chosenFile = f; sampleLoaded = false;
  fileName.textContent = `${f.name} (${(f.size / 1024).toFixed(0)} KB)`;
  if (f.type.startsWith("image/")) {
    preview.src = URL.createObjectURL(f);
    preview.style.display = "block";
  } else { preview.style.display = "none"; preview.removeAttribute("src"); }
  hideError();
}

loadSampleBtn.addEventListener("click", () => {
  chosenFile = null; fileInput.value = ""; sampleLoaded = true;
  fileName.textContent = "Sample URL staged (TEST FOUNDATION)";
  preview.src = sampleUrl.value.trim();
  preview.style.display = "block";
  hideError();
});
preview.addEventListener("error", () => { preview.style.display = "none"; });

healthBtn.addEventListener("click", checkHealth);
async function checkHealth() {
  const base = apiBase.value.trim().replace(/\/$/, "");
  try {
    const r = await fetch(`${base}/health`);
    const ok = r.ok;
    healthDot.className = `dot ${ok ? "ok" : "down"}`;
    healthDot.title = ok ? "backend reachable" : `backend HTTP ${r.status}`;
  } catch { healthDot.className = "dot down"; healthDot.title = "backend unreachable"; }
}

analyzeBtn.addEventListener("click", async () => {
  hideError();
  const base = apiBase.value.trim().replace(/\/$/, "");
  if (!chosenFile && !sampleLoaded) return showError("Choose a file or click “Load sample” first.");
  if (chosenFile && chosenFile.size > MAX_BYTES) return showError(`File exceeds 10MB (${(chosenFile.size / 1048576).toFixed(1)}MB).`);

  analyzeBtn.disabled = true;
  const t0 = performance.now();
  const timer = setInterval(() => { elapsed.textContent = `${((performance.now() - t0) / 1000).toFixed(1)}s…`; }, 100);

  try {
    const fd = new FormData();
    if (chosenFile) fd.append("file", chosenFile);
    else fd.append("image_url", sampleUrl.value.trim());
    const res = await fetch(`${base}/api/analyze`, { method: "POST", body: fd });
    if (!res.ok) {
      let detail = `HTTP ${res.status}`;
      try { const j = await res.json(); if (j.detail) detail = j.detail; } catch {}
      throw new Error(`Backend rejected the request: ${detail}`);
    }
    const data = await res.json();
    render(data, { source: `live backend ${base}`, ms: Math.round(performance.now() - t0) });
  } catch (err) {
    // Fallback: frozen mock so the UI is clickable with zero backend.
    try {
      const m = await (await fetch("../sample-docs/expected_response.json")).json();
      render(m, { source: "frozen mock (backend unreachable)", ms: Math.round(performance.now() - t0), mock: true });
      showError(`Backend unreachable at ${base} — showing frozen mock verdict.\nStart it: uvicorn main:app --reload --app-dir demo/backend\nHealth: curl ${base}/health\n(${err.message})`);
    } catch { showError(`Backend unreachable at ${base}.\nStart it: uvicorn main:app --reload --app-dir demo/backend\n(${err.message})`); }
  } finally {
    clearInterval(timer); elapsed.textContent = ""; analyzeBtn.disabled = false;
    checkHealth();
  }
});

const FIELD_LABELS = [
  ["registration_number", "Registration number (RC)"],
  ["entity_name", "Entity name"],
  ["trustees", "Trustees"],
  ["incorporation_date", "Incorporation date"],
  ["registrar_name", "Registrar"],
];

function render(d, meta) {
  emptyState.hidden = true; resultBody.hidden = false;
  const v = (d.verdict || "").toLowerCase();
  verdictBadge.textContent = d.verdict || "—";
  verdictBadge.className = "badge " + (v === "valid" ? "valid" : v === "invalid" ? "invalid" : "review");
  const pct = Math.round((d.confidence ?? 0) * 100);
  confFill.style.width = `${pct}%`; confLabel.textContent = `${pct}%`;
  sampleFlag.hidden = !d.is_sample;
  fieldsBody.innerHTML = FIELD_LABELS.map(([k, label]) =>
    `<tr><td>${label}</td><td>${d.fields && d.fields[k] ? escapeHtml(d.fields[k]) : "—"}</td></tr>`).join("");
  qrBlock.textContent = d.qr && d.qr.present ? (d.qr.payload || "(empty payload)") : "QR not detected — flagged for review, OCR still evaluated.";
  checksList.innerHTML = (d.checks || []).map((c) =>
    `<li><span class="s-${c.status}">${c.status === "pass" ? "●" : c.status === "warn" ? "▲" : "■"}</span><span><strong>${escapeHtml(c.id)}</strong> — ${escapeHtml(c.message)}</span></li>`).join("");
  rawJson.textContent = JSON.stringify(d, null, 2);
  const t = d.timings_ms || {};
  metaLine.textContent = `doc ${d.doc_id || "—"} · ${meta.source} · round-trip ${meta.ms}ms` +
    (t.total != null ? ` (backend qr ${t.qr}ms / ocr ${t.ocr}ms / total ${t.total}ms)` : "") +
    (meta.mock ? " · MOCK" : "");
}

function showError(msg) { errorBox.textContent = msg; errorBox.hidden = false; }
function hideError() { errorBox.hidden = true; errorBox.textContent = ""; }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, (c) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c])); }

checkHealth();
