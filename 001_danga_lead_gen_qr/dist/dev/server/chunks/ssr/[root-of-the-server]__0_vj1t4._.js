module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/analytics/context.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAttribution",
    ()=>clearAttribution,
    "commonContext",
    ()=>commonContext,
    "currentRoute",
    ()=>currentRoute,
    "ensureAttribution",
    ()=>ensureAttribution,
    "getAppAttribution",
    ()=>getAppAttribution,
    "getAppSession",
    ()=>getAppSession,
    "persistDiscountCode",
    ()=>persistDiscountCode
]);
/**
 * App-level singletons + FR-23 event dimensions.
 *
 * Attribution/session controllers live here (rather than in `src/lib`) because
 * `src/lib` is dependency-injected and framework-free by contract; this module
 * is the wiring layer that binds it to `browserStorage` and build-time config.
 * Client components import these — never construct their own.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/attribution.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/subscription.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
let attribution = null;
let session = null;
function getAppAttribution() {
    attribution ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAttribution"])({
        storage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserStorage"],
        windowDays: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributionWindowDays"],
        isKnownPlacement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKnownPlacement"]
    });
    return attribution;
}
function getAppSession() {
    session ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSession"])({
        storage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserStorage"]
    });
    return session;
}
function currentRoute() {
    if ("TURBOPACK compile-time truthy", 1) return "other";
    //TURBOPACK unreachable
    ;
}
function ensureAttribution(loc) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const result = undefined;
}
function persistDiscountCode(code) {
    getAppAttribution().setCode(code);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyAttribution"])();
}
function clearAttribution() {
    getAppAttribution().clear();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyAttribution"])();
}
function commonContext() {
    const hasDom = ("TURBOPACK compile-time value", "undefined") !== "undefined";
    const attr = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    return {
        session_id: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "server",
        placement_code: attr?.placement ?? "unknown",
        route: attr?.ref === "qr" ? "qr" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "other",
        offer: attr?.offer ?? null,
        referrer: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
        device_type: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "desktop",
        timestamp: new Date().toISOString()
    };
}
}),
"[project]/src/analytics/filter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBlockedTraffic",
    ()=>isBlockedTraffic
]);
/**
 * Traffic filter — R6, G1 exclusion rules (spec §4.1 of the PM doc).
 *
 * Bot/QA traffic in the denominator would make G1 look artificially low, so
 * this runs before every event. The provider-side blocklist configured in
 * Phase 7 (T17) is a second, independent layer.
 */ const BOT_PATTERN = /bot|crawler|spider|slurp|preview|headless|curl|wget|facebookexternalhit|python-requests|node-fetch/i;
function isBlockedTraffic() {
    if ("TURBOPACK compile-time truthy", 1) return true;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/analytics/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAnalytics",
    ()=>getAnalytics
]);
/**
 * Analytics entry point — FR-22.
 *
 * One `track()` wrapper applies the R6 filter and merges the FR-23 dimensions,
 * so no call site ever assembles a payload by hand.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$filter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/filter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/port.ts [app-ssr] (ecmascript)");
;
;
;
;
const SINKS = {
    console: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleSink"]
};
let analytics = null;
function getAnalytics() {
    analytics ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnalytics"])({
        sink: SINKS[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_ANALYTICS_PROVIDER] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleSink"],
        context: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonContext"],
        blocked: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$filter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockedTraffic"]
    });
    return analytics;
}
}),
"[project]/src/analytics/port.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Analytics port — AD-7, C-11 (architect spec §8).
 *
 * Components only ever depend on the `Analytics` interface from `lib/types`.
 * The concrete provider (GA4 / PostHog / Plausible) is a `Sink`, so closing
 * open question Q5 is a one-file change rather than a redesign.
 *
 * `track()` is deliberately defensive: a broken analytics pipeline must never
 * break the conversion funnel (product principle 5 is about *us* measuring,
 * not the customer waiting on us).
 */ __turbopack_context__.s([
    "ConsoleAnalytics",
    ()=>ConsoleAnalytics,
    "consoleSink",
    ()=>consoleSink,
    "createAnalytics",
    ()=>createAnalytics
]);
const consoleSink = (event, payload)=>{
    console.debug("[analytics]", event, payload);
};
function createAnalytics(opts) {
    const { sink, context, blocked } = opts;
    return {
        track (event, props) {
            try {
                if (blocked?.()) return;
                const payload = {
                    ...context(),
                    ...props
                };
                sink(event, payload);
            } catch  {
            /* swallow — analytics must never break the funnel */ }
        }
    };
}
class ConsoleAnalytics {
    context;
    constructor(context){
        this.context = context;
    }
    track(event, props) {
        try {
            console.debug("[analytics]", event, {
                ...this.context(),
                ...props
            });
        } catch  {
        /* ignore */ }
    }
}
}),
"[project]/src/analytics/subscription.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tiny pub/sub for the attribution store.
 *
 * Cookies have no change event, so mutations must notify subscribers
 * explicitly. This lives in its own module to keep `context.ts` (the wiring
 * layer) and `store.ts` (the React binding) from importing each other in a
 * cycle.
 */ __turbopack_context__.s([
    "notifyAttribution",
    ()=>notifyAttribution,
    "subscribeAttribution",
    ()=>subscribeAttribution
]);
const listeners = new Set();
function subscribeAttribution(listener) {
    listeners.add(listener);
    return ()=>{
        listeners.delete(listener);
    };
}
function notifyAttribution() {
    for (const listener of Array.from(listeners)){
        try {
            listener();
        } catch  {
        /* a broken subscriber must not break the funnel */ }
    }
}
}),
"[project]/src/analytics/vitals.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reportWebVitals",
    ()=>reportWebVitals
]);
/**
 * Web Vitals reporting — architect spec §8 / §10.3, supports R3 and NFR-1.
 *
 * LCP in particular lets us correlate page speed with the WhatsApp click rate
 * (§4.3 measurement plan), which is how we'd diagnose a G1 miss caused by
 * performance rather than copy.
 *
 * `web-vitals` (~8 KB gzip) is deliberately loaded with a dynamic import after
 * the browser is idle rather than statically. It is diagnostic telemetry: it
 * must never compete with the CTA for bandwidth on a QR visitor's first load.
 * Nothing here is required for the funnel to work — every path is guarded so a
 * failure degrades to "no vitals", not "broken page".
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/index.ts [app-ssr] (ecmascript)");
;
const IDLE_TIMEOUT_MS = 3000;
let started = false;
function start() {
    try {
        // Dynamic import keeps `web-vitals` out of the initial page weight.
        void __turbopack_context__.A("[project]/node_modules/.pnpm/web-vitals@6.2.2/node_modules/web-vitals/dist/web-vitals.js [app-ssr] (ecmascript, async loader)").then(({ onLCP })=>{
            onLCP((metric)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnalytics"])().track("web_vital", {
                    name: metric.name,
                    value: metric.value,
                    rating: metric.rating
                });
            });
        }).catch(()=>{
        /* diagnostics only — never block the funnel */ });
    } catch  {
    /* diagnostics only — never block the funnel */ }
}
function reportWebVitals() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const schedule = undefined;
}
}),
"[project]/src/components/ClientBootstrap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientBootstrap",
    ()=>ClientBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$vitals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/vitals.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/attribution.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discount$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/discount.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ClientBootstrap() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const attr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureAttribution"])(window.location);
        const minted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discount$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureDiscountCode"])({
            read: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppAttribution"])().read,
            setCode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistDiscountCode"],
            prefix: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_DISCOUNT_PREFIX,
            length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_DISCOUNT_RAND_LEN
        });
        if (minted.created && minted.code) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnalytics"])().track("discount_code_generated", {
                discount_code: minted.code
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnalytics"])().track("page_view", {
            path: window.location.pathname
        });
        const { hasQrContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseQrContext"])(window.location);
        if (hasQrContext && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppSession"])().claimQrScan()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnalytics"])().track("qr_scan", {
                landing_path: window.location.pathname,
                placement_valid: attr?.placementValid ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppAttribution"])().read()?.placementValid ?? false
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$vitals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reportWebVitals"])();
    }, []);
    return null;
}
}),
"[project]/src/config/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Typed runtime config — architect spec §7.4.
 *
 * This module is imported by client components, so it must stay dependency-free:
 * plain constants only, no zod. `import type` is erased at compile time, so the
 * *type* of the validated config is available without pulling the validator
 * into the browser bundle.
 *
 * Values are validated by `validateEnv()` — called from `next.config.ts` (the
 * earliest possible gate) and from the root layout during prerender (AD-9).
 * The two layers read the same `process.env`, so what ships is what was checked.
 *
 * `process.env.NEXT_PUBLIC_*` is written out key-by-key on purpose: Next.js
 * inlines direct member expressions only, not whole objects.
 */ __turbopack_context__.s([
    "attributionWindowDays",
    ()=>attributionWindowDays,
    "config",
    ()=>config,
    "discountPercent",
    ()=>discountPercent,
    "whatsappNumber",
    ()=>whatsappNumber
]);
const raw = {
    NEXT_PUBLIC_WHATSAPP_NUMBER: ("TURBOPACK compile-time value", "2348137553699") ?? "",
    NEXT_PUBLIC_SITE_URL: ("TURBOPACK compile-time value", "http://localhost:3000") ?? "",
    NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS: ("TURBOPACK compile-time value", "30") ?? "30",
    NEXT_PUBLIC_DISCOUNT_PERCENT: ("TURBOPACK compile-time value", "5") ?? "5",
    NEXT_PUBLIC_DISCOUNT_PREFIX: ("TURBOPACK compile-time value", "QR5") ?? "QR5",
    NEXT_PUBLIC_DISCOUNT_RAND_LEN: ("TURBOPACK compile-time value", "6") ?? "6",
    NEXT_PUBLIC_DISCOUNT_EXPIRY: ("TURBOPACK compile-time value", "2026-12-31") ?? "2026-12-31",
    NEXT_PUBLIC_FALLBACK_TIMEOUT_MS: ("TURBOPACK compile-time value", "1600") ?? "1600",
    NEXT_PUBLIC_ANALYTICS_PROVIDER: ("TURBOPACK compile-time value", "console") ?? "console"
};
const config = {
    NEXT_PUBLIC_WHATSAPP_NUMBER: raw.NEXT_PUBLIC_WHATSAPP_NUMBER,
    NEXT_PUBLIC_SITE_URL: raw.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS: Number(raw.NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS),
    NEXT_PUBLIC_DISCOUNT_PERCENT: Number(raw.NEXT_PUBLIC_DISCOUNT_PERCENT),
    NEXT_PUBLIC_DISCOUNT_PREFIX: raw.NEXT_PUBLIC_DISCOUNT_PREFIX,
    NEXT_PUBLIC_DISCOUNT_RAND_LEN: Number(raw.NEXT_PUBLIC_DISCOUNT_RAND_LEN),
    NEXT_PUBLIC_DISCOUNT_EXPIRY: raw.NEXT_PUBLIC_DISCOUNT_EXPIRY,
    NEXT_PUBLIC_FALLBACK_TIMEOUT_MS: Number(raw.NEXT_PUBLIC_FALLBACK_TIMEOUT_MS),
    NEXT_PUBLIC_ANALYTICS_PROVIDER: raw.NEXT_PUBLIC_ANALYTICS_PROVIDER
};
const whatsappNumber = config.NEXT_PUBLIC_WHATSAPP_NUMBER;
const attributionWindowDays = config.NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS;
const discountPercent = config.NEXT_PUBLIC_DISCOUNT_PERCENT;
}),
"[project]/src/data/placements.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "billboard-main-st": {
        "label": "Main Street Billboard",
        "active": true
    },
    "brochure-2026q4": {
        "label": "Q4 Property Brochure",
        "active": true
    },
    "site-signage-plot12": {
        "label": "Plot 12 Site Signage",
        "active": true
    }
};
}),
"[project]/src/lib/attribution.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTRIBUTION_COOKIE",
    ()=>ATTRIBUTION_COOKIE,
    "ATTRIBUTION_SESSION_KEY",
    ()=>ATTRIBUTION_SESSION_KEY,
    "createAttribution",
    ()=>createAttribution,
    "decodeAttribution",
    ()=>decodeAttribution,
    "encodeAttribution",
    ()=>encodeAttribution,
    "parseQrContext",
    ()=>parseQrContext
]);
/**
 * Attribution — FR-2, FR-3, FR-4 · AD-5 · C-5, C-6, C-15.
 *
 * Rules that must not regress:
 *  1. Never overwrite an existing valid record — that is what preserves `code`
 *     and `ts` across the 30-day window (FR-16, C-6).
 *  2. An unknown/corrupt `v` resets silently; it must never throw (§7.2).
 *  3. Every read/write passes through the consent gate (C-15) so open question
 *     Q1 becomes a gate flip, not a refactor.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/base64.ts [app-ssr] (ecmascript)");
;
const ATTRIBUTION_COOKIE = "danga_attr";
const ATTRIBUTION_SESSION_KEY = "danga_attr_session";
const SECONDS_PER_DAY = 86_400;
function encodeAttribution(attr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64UrlEncode"])(JSON.stringify(attr));
}
function decodeAttribution(raw) {
    if (!raw) return null;
    try {
        const parsed = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64UrlDecode"])(raw));
        if (parsed?.v !== 1 || parsed.ref !== "qr" || parsed.offer !== "disc5") {
            return null;
        }
        return {
            v: 1,
            ref: "qr",
            // Missing or garbled fields normalise to safe defaults instead of
            // failing the whole record: a partly-tampered cookie must not
            // permanently disable attribution (FR-4, C-6).
            placement: typeof parsed.placement === "string" ? parsed.placement : "unknown",
            placementValid: Boolean(parsed.placementValid),
            offer: "disc5",
            ts: typeof parsed.ts === "string" ? parsed.ts : new Date(0).toISOString(),
            code: typeof parsed.code === "string" ? parsed.code : ""
        };
    } catch  {
        return null;
    }
}
function parseQrContext(loc) {
    const match = /(?:^|\/)l\/([^/?#]+)/.exec(loc.pathname ?? "");
    let placement = null;
    if (match?.[1]) {
        try {
            placement = decodeURIComponent(match[1]);
        } catch  {
            placement = match[1];
        }
    }
    let hasSrcQr = false;
    try {
        hasSrcQr = new URLSearchParams(loc.search ?? "").get("src") === "qr";
    } catch  {
        hasSrcQr = false;
    }
    return {
        placement,
        hasQrContext: placement !== null || hasSrcQr
    };
}
function createAttribution(deps) {
    const storage = deps.storage;
    const windowDays = deps.windowDays;
    const consent = deps.consent ?? (()=>true);
    const isKnown = deps.isKnownPlacement ?? (()=>false);
    const now = deps.now ?? (()=>new Date());
    /** Read order: sessionStorage → cookie → none (§7.2). */ function read() {
        if (!consent()) return null;
        return decodeAttribution(storage.sessionGet(ATTRIBUTION_SESSION_KEY)) ?? decodeAttribution(storage.getCookie(ATTRIBUTION_COOKIE));
    }
    /** Write both media so a blocked cookie degrades to session scope (R5). */ function write(attr) {
        if (!consent()) return;
        const raw = encodeAttribution(attr);
        storage.setCookie(ATTRIBUTION_COOKIE, raw, windowDays * SECONDS_PER_DAY);
        storage.sessionSet(ATTRIBUTION_SESSION_KEY, raw);
    }
    /**
   * Called from the inline boot script and again on hydration (idempotent).
   * Existing records are returned untouched — never overwritten.
   */ function ensureFromUrl(loc) {
        if (!consent()) return null;
        const existing = read();
        if (existing) return existing;
        const { placement, hasQrContext } = parseQrContext(loc);
        if (!hasQrContext) return null;
        const known = placement !== null && isKnown(placement);
        const created = {
            v: 1,
            ref: "qr",
            // Unknown/inactive codes collapse to "unknown" (FR-4, C-14, FR-23).
            placement: known ? placement : "unknown",
            placementValid: known,
            offer: "disc5",
            ts: now().toISOString(),
            code: ""
        };
        write(created);
        return created;
    }
    /** Persist a minted code — only ever fills an empty slot (FR-16, C-6). */ function setCode(code) {
        const attr = read();
        if (!attr || attr.code) return;
        write({
            ...attr,
            code
        });
    }
    function clear() {
        storage.removeCookie(ATTRIBUTION_COOKIE);
        storage.sessionRemove(ATTRIBUTION_SESSION_KEY);
    }
    function getRoute() {
        return read()?.ref === "qr" ? "qr" : "direct";
    }
    return {
        read,
        write,
        ensureFromUrl,
        setCode,
        clear,
        getRoute
    };
}
}),
"[project]/src/lib/base64.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * URL-safe base64 codec for the attribution cookie (architect spec §7.2).
 *
 * UTF-8 is encoded explicitly so non-ASCII placement codes survive the round
 * trip — `btoa` alone throws on code points above 0xFF.
 *
 * `btoa`/`atob` are available as globals in Node ≥ 18 and every browser we
 * support (NFR-8), so this stays dependency-free and framework-free.
 */ __turbopack_context__.s([
    "base64UrlDecode",
    ()=>base64UrlDecode,
    "base64UrlEncode",
    ()=>base64UrlEncode
]);
function base64UrlEncode(input) {
    const bytes = new TextEncoder().encode(input);
    let binary = "";
    for(let i = 0; i < bytes.length; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64UrlDecode(input) {
    let b64 = input.replace(/-/g, "+").replace(/_/g, "/");
    while(b64.length % 4 !== 0)b64 += "=";
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
}
}),
"[project]/src/lib/discount.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Discount codes — FR-16, FR-17 · C-12, C-13.
 *
 * Accepted risk (R1 / Q8): with FR-19 deferred there is no validation endpoint,
 * so the only controls are format strength, per-session uniqueness and expiry
 * terms. That is deliberate and documented in the architect spec (§14.2).
 */ __turbopack_context__.s([
    "DISCOUNT_ALPHABET",
    ()=>DISCOUNT_ALPHABET,
    "MAX_RAND_LEN",
    ()=>MAX_RAND_LEN,
    "MIN_RAND_LEN",
    ()=>MIN_RAND_LEN,
    "buildDiscountCode",
    ()=>buildDiscountCode,
    "cryptoRandom",
    ()=>cryptoRandom,
    "ensureDiscountCode",
    ()=>ensureDiscountCode,
    "mintRandomSegment",
    ()=>mintRandomSegment,
    "sanitisePlacement",
    ()=>sanitisePlacement
]);
const DISCOUNT_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const MIN_RAND_LEN = 4;
const MAX_RAND_LEN = 16;
const cryptoRandom = (count)=>{
    const buffer = new Uint32Array(count);
    const webcrypto = globalThis.crypto;
    if (!webcrypto || typeof webcrypto.getRandomValues !== "function") {
        throw new Error("crypto.getRandomValues is unavailable (FR-17 requires CSPRNG)");
    }
    webcrypto.getRandomValues(buffer);
    return buffer;
};
function sanitisePlacement(placement) {
    const cleaned = placement.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
    return cleaned || "QR";
}
function mintRandomSegment(length, random = cryptoRandom) {
    const requested = Math.trunc(length);
    const bounded = Math.min(Math.max(Number.isFinite(requested) ? requested : MIN_RAND_LEN, MIN_RAND_LEN), MAX_RAND_LEN);
    const values = random(bounded);
    let out = "";
    for(let i = 0; i < bounded; i++){
        out += DISCOUNT_ALPHABET[values[i] % DISCOUNT_ALPHABET.length];
    }
    return out;
}
function buildDiscountCode(placement, opts) {
    return `${opts.prefix}-${sanitisePlacement(placement)}-${mintRandomSegment(opts.length, opts.random)}`;
}
function ensureDiscountCode(deps) {
    const attr = deps.read();
    if (!attr) return {
        code: null,
        created: false
    };
    if (attr.code) return {
        code: attr.code,
        created: false
    };
    const code = buildDiscountCode(attr.placement, {
        prefix: deps.prefix,
        length: deps.length,
        random: deps.random
    });
    deps.setCode(code);
    return {
        code,
        created: true
    };
}
}),
"[project]/src/lib/placements.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPlacementEntry",
    ()=>getPlacementEntry,
    "isKnownPlacement",
    ()=>isKnownPlacement,
    "listActivePlacements",
    ()=>listActivePlacements,
    "resolvePlacement",
    ()=>resolvePlacement
]);
/**
 * Placement registry — architect spec AD-10.
 *
 * Marketing adds a placement by editing `src/data/placements.json` and
 * regenerating its QR code; adding one already implies a redeploy (a new QR
 * must be printed), so data-file + rebuild is the correct workflow.
 *
 * The *active* keys are what the boot script embeds for `placementValid`, so
 * `listActivePlacements()` is the single source of truth for validity.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$placements$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/placements.json.[json].cjs [app-ssr] (ecmascript)");
;
const REGISTRY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$placements$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
function isKnownPlacement(code) {
    return Object.prototype.hasOwnProperty.call(REGISTRY, code) && REGISTRY[code].active === true;
}
function getPlacementEntry(code) {
    return REGISTRY[code] ?? null;
}
function listActivePlacements() {
    return Object.entries(REGISTRY).filter(([, entry])=>entry.active).map(([code, entry])=>({
            code,
            label: entry.label
        }));
}
function resolvePlacement(code) {
    return isKnownPlacement(code) ? {
        placement: code,
        valid: true
    } : {
        placement: "unknown",
        valid: false
    };
}
}),
"[project]/src/lib/session.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Session identity + the `qr_scan` once-guard — C-3, FR-23.
 *
 * The guard is the single most important line of G1 measurement: if `qr_scan`
 * fires more than once per session the denominator inflates and the reported
 * metric is wrong.
 */ __turbopack_context__.s([
    "QR_SCAN_FIRED_KEY",
    ()=>QR_SCAN_FIRED_KEY,
    "SESSION_ID_KEY",
    ()=>SESSION_ID_KEY,
    "createSession",
    ()=>createSession,
    "getDeviceType",
    ()=>getDeviceType,
    "newId",
    ()=>newId
]);
const SESSION_ID_KEY = "session_id";
const QR_SCAN_FIRED_KEY = "qr_scan_fired";
function newId() {
    const buffer = new Uint32Array(4);
    globalThis.crypto.getRandomValues(buffer);
    return Array.from(buffer, (n)=>n.toString(36).padStart(7, "0")).join("");
}
function createSession(deps) {
    const { storage } = deps;
    function getSessionId() {
        let id = storage.sessionGet(SESSION_ID_KEY);
        if (!id) {
            id = newId();
            storage.sessionSet(SESSION_ID_KEY, id);
        }
        return id;
    }
    /**
   * Returns `true` exactly once per session. Callers must additionally check
   * QR context first (C-3): a returning visitor on `/` has no `qr_scan`.
   */ function claimQrScan() {
        if (storage.sessionGet(QR_SCAN_FIRED_KEY) === "1") return false;
        storage.sessionSet(QR_SCAN_FIRED_KEY, "1");
        return true;
    }
    return {
        getSessionId,
        claimQrScan
    };
}
function getDeviceType(userAgent) {
    const ua = userAgent ?? "";
    if (/(iPad|Tablet|PlayBook|Silk)/i.test(ua)) return "tablet";
    if (/Android(?![\s\S]*Mobile)/i.test(ua)) return "tablet";
    if (/(Mobi|Android|iPhone|iPod|IEMobile|Opera Mini|BlackBerry|Windows Phone)/i.test(ua)) {
        return "mobile";
    }
    return "desktop";
}
}),
"[project]/src/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Storage abstraction — architect spec §7.2.
 *
 * All cookie/sessionStorage access goes through this interface so that:
 *  - `src/lib` stays free of DOM globals and is unit-testable in a plain Node
 *    environment (architect spec §6, plan Phase 1);
 *  - a future consent gate (C-15, open question Q1) is a single seam rather
 *    than a refactor across the codebase.
 */ __turbopack_context__.s([
    "browserStorage",
    ()=>browserStorage,
    "createMemoryStorage",
    ()=>createMemoryStorage
]);
function createMemoryStorage(seed) {
    const cookies = new Map(Object.entries(seed?.cookies ?? {}));
    const session = new Map(Object.entries(seed?.session ?? {}));
    return {
        getCookie: (name)=>cookies.get(name) ?? null,
        setCookie: (name, value)=>{
            cookies.set(name, value);
        },
        removeCookie: (name)=>{
            cookies.delete(name);
        },
        sessionGet: (key)=>session.get(key) ?? null,
        sessionSet: (key, value)=>{
            session.set(key, value);
        },
        sessionRemove: (key)=>{
            session.delete(key);
        }
    };
}
const browserStorage = {
    getCookie (name) {
        if (typeof document === "undefined") return null;
        try {
            const parts = document.cookie ? document.cookie.split("; ") : [];
            for (const part of parts){
                const eq = part.indexOf("=");
                if (eq <= 0) continue;
                if (decodeURIComponent(part.slice(0, eq)) !== name) continue;
                try {
                    return decodeURIComponent(part.slice(eq + 1));
                } catch  {
                    return part.slice(eq + 1);
                }
            }
        } catch  {
        /* fall through */ }
        return null;
    },
    setCookie (name, value, maxAgeSec) {
        if (typeof document === "undefined") return;
        try {
            const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
            document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAgeSec};SameSite=Lax${secure}`;
        } catch  {
        /* no-op — attribution degrades, the funnel must not break */ }
    },
    removeCookie (name) {
        if (typeof document === "undefined") return;
        try {
            document.cookie = `${name}=;path=/;max-age=0;SameSite=Lax`;
        } catch  {
        /* no-op */ }
    },
    sessionGet (key) {
        if (typeof sessionStorage === "undefined") return null;
        try {
            return sessionStorage.getItem(key);
        } catch  {
            return null;
        }
    },
    sessionSet (key, value) {
        if (typeof sessionStorage === "undefined") return;
        try {
            sessionStorage.setItem(key, value);
        } catch  {
        /* no-op */ }
    },
    sessionRemove (key) {
        if (typeof sessionStorage === "undefined") return;
        try {
            sessionStorage.removeItem(key);
        } catch  {
        /* no-op */ }
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_vj1t4._.js.map