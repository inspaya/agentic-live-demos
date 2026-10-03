module.exports = [
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientBootstrap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientBootstrap.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/attribution.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boot$2f$attribution$2d$boot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/boot/attribution-boot.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placements$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placements.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Second AD-9 gate: runs while prerendering, so even if someone bypasses
 * `next.config` (a custom entry point, `next start` against a stale build) a
 * malformed config still fails loudly rather than shipping silently.
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateEnv"])();
/**
 * AD-3 / architect spec §9.1 — the attribution boot script is inlined into
 * `<head>` so it runs while the HTML parses, before first paint and before the
 * app bundle. This guarantees attribution is captured even if the bundle is
 * slow or fails, and that `/l/*` renders the right banner on first paint.
 *
 * `suppressHydrationWarning` on `<html>` is required because the script adds a
 * `data-route` attribute React did not render (the documented pattern for
 * pre-paint DOM fixes).
 */ const bootScript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$boot$2f$attribution$2d$boot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildBootScript"])({
    knownPlacements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placements$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listActivePlacements"])().map((p)=>p.code),
    windowDays: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS,
    cookieName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ATTRIBUTION_COOKIE"],
    sessionKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ATTRIBUTION_SESSION_KEY"]
});
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_SITE_URL),
    title: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].metaTitleDefault,
        // `%s` is Next's title token; the separator/brand come from content (NFR-8).
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].brand}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].metaDescription
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    dangerouslySetInnerHTML: {
                        __html: bootScript
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "flex min-h-screen flex-col bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientBootstrap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientBootstrap"], {}, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/boot/attribution-boot.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Inline attribution boot script — AD-3, architect spec §9.1.
 *
 * Inlined into `<head>` so it runs synchronously while the HTML is parsed —
 * before first paint and before the app bundle. That guarantees:
 *  - attribution is captured even if the bundle is slow or fails (R5, G1 denominator);
 *  - `/l/*` renders the correct banner on the very first paint (C-4, no flash).
 *
 * This function returns a *string* of JavaScript. It is intentionally tiny,
 * dependency-free and wrapped in try/catch — a storage failure must never
 * break page load. **Must stay under 1.5 KB**; the size is asserted in
 * `tests/unit/boot-script.test.ts`.
 *
 * Contract parity with `src/lib/attribution.ts` is enforced by
 * `tests/unit/boot-script.test.ts` — the two MUST produce interchangeable
 * cookies or attribution silently breaks.
 */ __turbopack_context__.s([
    "buildBootScript",
    ()=>buildBootScript
]);
function buildBootScript(opts) {
    const known = JSON.stringify(opts.knownPlacements);
    const days = Number(opts.windowDays);
    const cookie = JSON.stringify(opts.cookieName);
    const session = JSON.stringify(opts.sessionKey);
    // Written to a size budget, so identifiers are short and there is no
    // decorative whitespace. Do not "prettify" this — it ships to every visitor
    // on the critical render path.
    return `(function(){try{
var K=${known},W=${days},C=${cookie},S=${session},L=location,D=document;
function E(s){return btoa(String.fromCharCode.apply(null,new TextEncoder().encode(s))).replace(/\\+/g,"-").replace(/\\//g,"_").replace(/=+$/,"")}
function N(s){var t=s.replace(/-/g,"+").replace(/_/g,"/");while(t.length%4)t+="=";return new TextDecoder().decode(Uint8Array.from(atob(t),c=>c.charCodeAt(0)))}
function G(n){var p=n+"=",c=D.cookie.split("; ");for(var s of c)if(s.indexOf(p)===0)return s.slice(p.length);return null}
var m=/(?:^|\\/)l\\/([^/?#]+)/.exec(L.pathname),p=null;
if(m&&m[1])try{p=decodeURIComponent(m[1])}catch(e){p=m[1]}
var q=p!==null||/(?:^|[?&])src=qr(?:&|$)/.test(L.search);
var r=null;try{r=sessionStorage.getItem(S)}catch(e){}
if(!r)try{r=G(C)}catch(e){}
var a=null;if(r)try{a=JSON.parse(N(r))}catch(e){}
if((!a||a.v!==1||a.ref!=="qr"||a.offer!=="disc5")&&q){
var ok=p!==null&&K.indexOf(p)>-1;
a={v:1,ref:"qr",placement:ok?p:"unknown",placementValid:ok,offer:"disc5",ts:new Date().toISOString(),code:""};
var x=E(JSON.stringify(a));
try{D.cookie=C+"="+x+";path=/;max-age="+(W*86400)+";SameSite=Lax"+(L.protocol==="https:"?";Secure":"");sessionStorage.setItem(S,x)}catch(e){}
}
D.documentElement.setAttribute("data-route",a&&a.ref==="qr"?"qr":"direct");
}catch(e){}})();`;
}
}),
"[project]/src/components/ClientBootstrap.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientBootstrap",
    ()=>ClientBootstrap
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ClientBootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientBootstrap() from the server but ClientBootstrap is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ClientBootstrap.tsx", "ClientBootstrap");
}),
"[project]/src/components/ClientBootstrap.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientBootstrap",
    ()=>ClientBootstrap
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ClientBootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientBootstrap() from the server but ClientBootstrap is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ClientBootstrap.tsx <module evaluation>", "ClientBootstrap");
}),
"[project]/src/components/ClientBootstrap.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientBootstrap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ClientBootstrap.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientBootstrap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ClientBootstrap.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientBootstrap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/config/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/config/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "envSchema",
    ()=>envSchema,
    "readRawEnv",
    ()=>readRawEnv,
    "validateEnv",
    ()=>validateEnv
]);
/**
 * Environment schema — architect spec §7.4, AD-9.
 *
 * **This module must never be reached from the client bundle.** Zod is
 * ~93 KB gzip, and shipping a validator to the browser to check values that
 * were already validated at build time would be indefensible (NFR-1). The
 * client reads plain constants from `src/config/index.ts`, which imports only
 * the *type* from here (`import type` is erased at compile time).
 *
 * Validation runs at build/dev start via `next.config.ts`, and again during
 * prerender via the root layout, so a malformed value fails `next build`
 * instead of shipping a broken WhatsApp CTA. There is deliberately no runtime
 * config fetch: that would add a failure mode to the critical path (AD-1).
 *
 * Every key must be `NEXT_PUBLIC_*` to be inlined into the client bundle
 * (Next.js env rules) — these are not secrets, and must never be (NFR-6).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** FR-10 / Q3 — E.164 digits only; wa.me rejects "+" and spaces. */ NEXT_PUBLIC_WHATSAPP_NUMBER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{8,15}$/, "must be E.164 digits only, e.g. 2348137553699"),
    NEXT_PUBLIC_SITE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    /** FR-2 — attribution cookie TTL. */ NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(365),
    /** FR-15 — banner copy. */ NEXT_PUBLIC_DISCOUNT_PERCENT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100),
    /** FR-16 — `QR5` style prefix. */ NEXT_PUBLIC_DISCOUNT_PREFIX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[A-Z0-9]{1,10}$/, "uppercase alphanumerics only"),
    /** FR-16 / C-13 — spec floor is 4. */ NEXT_PUBLIC_DISCOUNT_RAND_LEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(4).max(16),
    /** FR-18 / Q2 — render-only until terms land. */ NEXT_PUBLIC_DISCOUNT_EXPIRY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD"),
    /** FR-13 / Q12 — deeplink failure timeout. */ NEXT_PUBLIC_FALLBACK_TIMEOUT_MS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(500).max(10_000),
    /** AD-7 / Q5 — adapter selection; `console` until the provider is chosen. */ NEXT_PUBLIC_ANALYTICS_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "console"
    ])
});
function readRawEnv() {
    return {
        NEXT_PUBLIC_WHATSAPP_NUMBER: ("TURBOPACK compile-time value", "2348137553699"),
        NEXT_PUBLIC_SITE_URL: ("TURBOPACK compile-time value", "http://localhost:3000"),
        NEXT_PUBLIC_ATTRIBUTION_WINDOW_DAYS: ("TURBOPACK compile-time value", "30"),
        NEXT_PUBLIC_DISCOUNT_PERCENT: ("TURBOPACK compile-time value", "5"),
        NEXT_PUBLIC_DISCOUNT_PREFIX: ("TURBOPACK compile-time value", "QR5"),
        NEXT_PUBLIC_DISCOUNT_RAND_LEN: ("TURBOPACK compile-time value", "6"),
        NEXT_PUBLIC_DISCOUNT_EXPIRY: ("TURBOPACK compile-time value", "2026-12-31"),
        NEXT_PUBLIC_FALLBACK_TIMEOUT_MS: ("TURBOPACK compile-time value", "1600"),
        NEXT_PUBLIC_ANALYTICS_PROVIDER: ("TURBOPACK compile-time value", "console")
    };
}
function validateEnv(raw = readRawEnv()) {
    const result = envSchema.safeParse(raw);
    if (!result.success) {
        const detail = result.error.issues.map((issue)=>`  ${issue.path.join(".")}: ${issue.message}`).join("\n");
        throw new Error(`Invalid environment configuration — fix .env.local (see .env.example):\n${detail}`);
    }
    return result.data;
}
}),
"[project]/src/data/content/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "site",
    ()=>site
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript)");
;
;
/**
 * Site-wide copy: chrome (header/footer), document metadata and shared link
 * labels — NFR-8 / plan T13. No component renders a literal; everything comes
 * from `src/data/content/*.ts` so a future locale is a new file, not a refactor.
 *
 * Placeholders are substituted here at module scope (`{percent}` ←
 * `NEXT_PUBLIC_DISCOUNT_PERCENT`, `{year}` ← `Intl`), so call sites render
 * plain strings.
 */ const percent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_DISCOUNT_PERCENT;
const site = {
    brand: "Danga",
    /* --- document metadata (SERP / browser tab) --- */ metaTitleDefault: "Danga — your next property is one message away",
    metaDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])("Scan a Danga QR code, browse the portfolio and talk to a real agent on WhatsApp. QR scans unlock an automatic {percent}% discount.", {
        percent
    }),
    homeTitle: "Talk to a Danga agent",
    /** `/l` with no code, and `/l/<unknown>` — never a 404 (FR-4). */ qrTitle: "Scan offer",
    /** Suffix for a known placement: `<label> — scan offer`. */ qrTitleSuffix: "scan offer",
    qrDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])("You scanned a Danga QR code. Claim your {percent}% discount and talk to a real agent on WhatsApp.", {
        percent
    }),
    /* --- header --- */ primaryNavLabel: "Primary",
    headerTermsLabel: "QR discount terms",
    headerPrivacyLabel: "Privacy",
    headerQrLabel: "QR generator",
    /* --- footer --- */ footerNavLabel: "Footer",
    footerTermsLabel: "5% QR discount terms",
    footerPrivacyLabel: "Privacy policy",
    footerQrLabel: "QR generator",
    copyright: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])("© {year} Danga. All rights reserved.", {
        year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatYear"])()
    }),
    /* --- shared link --- */ backToChat: "Back to chat with an agent"
};
}),
"[project]/src/data/placements.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/lib/attribution.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/base64.ts [app-rsc] (ecmascript)");
;
const ATTRIBUTION_COOKIE = "danga_attr";
const ATTRIBUTION_SESSION_KEY = "danga_attr_session";
const SECONDS_PER_DAY = 86_400;
function encodeAttribution(attr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64UrlEncode"])(JSON.stringify(attr));
}
function decodeAttribution(raw) {
    if (!raw) return null;
    try {
        const parsed = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64UrlDecode"])(raw));
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
"[project]/src/lib/base64.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copy helpers for NFR-8 — "i18n-ready string externalisation" (architect
 * spec §11.4: *all* user-facing strings live in `src/data/content/*.ts`, and
 * date/copy formatting goes through `Intl`, never hand-rolled).
 *
 * Content modules hold plain `{ key: string }` values so a future locale is a
 * new file rather than a refactor (plan T13). Anything needing a runtime value
 * — a configured percentage, an expiry date — carries a `{placeholder}` that is
 * interpolated *here*, never by concatenating fragments in a component: word
 * order differs between languages, so "You're getting" + value + "off" cannot
 * be reassembled by a translator.
 *
 * Framework-free by design: this file is part of `src/lib/**`, which must not
 * import React, Next.js or the DOM (architect spec §6 / AD-2).
 */ /** Values substituted into a copy template. */ __turbopack_context__.s([
    "DEFAULT_LOCALE",
    ()=>DEFAULT_LOCALE,
    "format",
    ()=>format,
    "formatDate",
    ()=>formatDate,
    "formatYear",
    ()=>formatYear
]);
const DEFAULT_LOCALE = "en-GB";
const PLACEHOLDER = /\{(\w+)\}/g;
function format(template, params = {}) {
    return template.replace(PLACEHOLDER, (match, key)=>{
        const value = params[key];
        return value === undefined ? match : String(value);
    });
}
function formatDate(value, options = {
    dateStyle: "long"
}, locale = DEFAULT_LOCALE) {
    const date = typeof value === "string" ? new Date(`${value}T00:00:00Z`) : value;
    if (Number.isNaN(date.getTime())) return typeof value === "string" ? value : "";
    return new Intl.DateTimeFormat(locale, {
        timeZone: "UTC",
        ...options
    }).format(date);
}
function formatYear(value = new Date(), locale = DEFAULT_LOCALE) {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric"
    }).format(value);
}
}),
"[project]/src/lib/placements.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$placements$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/placements.json.[json].cjs [app-rsc] (ecmascript)");
;
const REGISTRY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$placements$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
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
];

//# sourceMappingURL=src_0vggdbi._.js.map