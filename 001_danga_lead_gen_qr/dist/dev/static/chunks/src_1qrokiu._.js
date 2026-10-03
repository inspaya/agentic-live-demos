(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/QrGenerator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QrGenerator",
    ()=>QrGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content/tools-qr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/qr.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/** Copy helper: Clipboard API → legacy textarea fallback (same chain as FallbackPanel). */ async function copyText(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch  {
    /* fall through */ }
    try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        return ok;
    } catch  {
        return false;
    }
}
function QrGenerator({ siteUrl, activePlacements }) {
    _s();
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activePlacements[0]?.label ?? "");
    const [qrDataUrl, setQrDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugifyLabel"])(label);
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPlacementUrl"])(siteUrl, code);
    const isKnown = activePlacements.some((p)=>p.code === code);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QrGenerator.useEffect": ()=>{
            let cancelled = false;
            // NOTE: old QR stays visible until the new one resolves — avoids a
            // synchronous setState-in-effect while the URL changes.
            __turbopack_context__.A("[project]/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/browser.js [app-client] (ecmascript, async loader)").then({
                "QrGenerator.useEffect": (m)=>m.toDataURL(url, {
                        width: 256,
                        margin: 2
                    })
            }["QrGenerator.useEffect"]).then({
                "QrGenerator.useEffect": (dataUrl)=>{
                    if (!cancelled) setQrDataUrl(dataUrl);
                }
            }["QrGenerator.useEffect"]).catch({
                "QrGenerator.useEffect": ()=>{
                    if (!cancelled) setQrDataUrl("");
                }
            }["QrGenerator.useEffect"]);
            return ({
                "QrGenerator.useEffect": ()=>{
                    cancelled = true;
                }
            })["QrGenerator.useEffect"];
        }
    }["QrGenerator.useEffect"], [
        url
    ]);
    const handleCopy = async ()=>{
        const ok = await copyText(url);
        setCopyStatus(ok ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].copiedLabel : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].copyFailedLabel);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-10 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold tracking-tight",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].title
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].intro
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "qr-label",
                className: "mt-6 block text-sm font-medium text-zinc-900 dark:text-zinc-100",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].labelLabel
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "qr-label",
                type: "text",
                value: label,
                onChange: (e)=>setLabel(e.target.value),
                placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].labelPlaceholder,
                "data-qr-input": true,
                className: "mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-base dark:border-zinc-700 dark:bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "mt-6 space-y-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "font-medium text-zinc-500",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].codeLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/QrGenerator.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                "data-qr-code": true,
                                className: "font-mono font-semibold",
                                children: code
                            }, void 0, false, {
                                fileName: "[project]/src/components/QrGenerator.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QrGenerator.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "font-medium text-zinc-500",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].urlLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/QrGenerator.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                "data-qr-url": true,
                                className: "break-all font-mono text-xs",
                                children: url
                            }, void 0, false, {
                                fileName: "[project]/src/components/QrGenerator.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QrGenerator.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            "data-qr-badge": true,
                            "data-known": isKnown ? "true" : "false",
                            className: "inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800",
                            children: isKnown ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].knownBadge : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].newBadge
                        }, void 0, false, {
                            fileName: "[project]/src/components/QrGenerator.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/QrGenerator.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: qrDataUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: qrDataUrl,
                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].qrAlt,
                    width: 256,
                    height: 256,
                    unoptimized: true,
                    "data-qr-image": true,
                    className: "h-64 w-64 rounded-xl border border-zinc-200 dark:border-zinc-800"
                }, void 0, false, {
                    fileName: "[project]/src/components/QrGenerator.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-zinc-500",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].generatingLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/QrGenerator.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-col gap-3 sm:flex-row",
                children: [
                    qrDataUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: qrDataUrl,
                        download: `qr-${code}.png`,
                        "data-qr-download": true,
                        className: "inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].downloadLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/QrGenerator.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCopy,
                        "data-qr-copy": true,
                        className: "inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].copyUrlLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/QrGenerator.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "aria-live": "polite",
                className: "mt-2 min-h-5 text-sm text-emerald-700",
                children: copyStatus
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-10 text-lg font-semibold",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].existingTitle
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-2",
                children: activePlacements.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-3 rounded-xl border border-zinc-200 px-4 py-3 text-sm dark:border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QrGenerator.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-zinc-500",
                                        children: p.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QrGenerator.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QrGenerator.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setLabel(p.label),
                                "data-qr-use": p.code,
                                className: "rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-semibold hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$tools$2d$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsQr"].useLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/QrGenerator.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, p.code, true, {
                        fileName: "[project]/src/components/QrGenerator.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/QrGenerator.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QrGenerator.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(QrGenerator, "gwtGidRYNf9kiNQqeK4SaOGJ874=");
_c = QrGenerator;
var _c;
__turbopack_context__.k.register(_c, "QrGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/content/tools-qr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal QR generator copy (NFR-8 — no string literals inside components).
 * Internal tool only; not customer-facing marketing copy.
 */ __turbopack_context__.s([
    "toolsQr",
    ()=>toolsQr
]);
const toolsQr = {
    title: "QR code generator",
    intro: "Type a placement label to preview its QR URL. Add new codes to placements.json first, then download the PNG for print.",
    labelLabel: "Placement label",
    labelPlaceholder: "e.g. Plot 13 Site Signage",
    codeLabel: "Placement code",
    urlLabel: "QR URL",
    knownBadge: "known placement ✓",
    newBadge: "new — add to placements.json first",
    downloadLabel: "Download PNG",
    copyUrlLabel: "Copy URL",
    copiedLabel: "Copied ✓",
    copyFailedLabel: "Copy failed — select the URL manually",
    qrAlt: "QR code for the placement URL",
    generatingLabel: "Generating QR…",
    existingTitle: "Active placements",
    useLabel: "Use"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/qr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * QR generator helpers — Phase 8 (TQR-1).
 *
 * Pure, framework-free (architect spec §6 boundary rule): no React/Next/DOM
 * imports. Used by the internal `/tools/qr` page to turn a human label into
 * the placement URL that gets encoded in the printed QR (FR-1).
 */ __turbopack_context__.s([
    "MAX_PLACEMENT_CODE_LENGTH",
    ()=>MAX_PLACEMENT_CODE_LENGTH,
    "buildPlacementUrl",
    ()=>buildPlacementUrl,
    "slugifyLabel",
    ()=>slugifyLabel
]);
const MAX_PLACEMENT_CODE_LENGTH = 60;
function slugifyLabel(label) {
    const slug = label.toLowerCase().trim().replace(/[_\s]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-+|-+$/g, "").slice(0, MAX_PLACEMENT_CODE_LENGTH);
    return slug || "unknown";
}
function buildPlacementUrl(siteUrl, code) {
    const origin = siteUrl.replace(/\/+$/, "");
    return `${origin}/l/${code}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1qrokiu._.js.map