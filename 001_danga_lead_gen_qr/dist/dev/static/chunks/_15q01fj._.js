(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const enableNewScrollHandler = ("TURBOPACK compile-time value", true);
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
class InnerScrollAndFocusHandlerOld extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        this.handlePotentialScroll();
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once.
            const { focusAndScrollRef, cacheNode } = this.props;
            const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            let domNode = null;
            const hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
                if (domNode === null) {
                    // A missing hash target is still a handled scroll intent. Do not
                    // fall back to the route segment or leave the intent pending.
                    scrollRef.current = false;
                    focusAndScrollRef.onlyHashChange = false;
                    focusAndScrollRef.hashFragment = null;
                    return;
                }
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!(domNode instanceof Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    if (domNode.parentElement?.localName === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                let scrollPaddingTop = null;
                const getScrollPaddingTop = ()=>{
                    if (scrollPaddingTop === null) {
                        // Reuse the style and layout update from the geometry read above.
                        scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                    }
                    return scrollPaddingTop;
                };
                // If the element's top edge is already in the viewport, exit early.
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) === 1) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) !== 1) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
    }
}
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { focusAndScrollRef, cacheNode } = props;
        const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                focusAndScrollRef.onlyHashChange = false;
                focusAndScrollRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
const InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time truthy", 1) ? InnerScrollHandlerNew : "TURBOPACK unreachable";
function ScrollAndMaybeFocusHandler({ children, cacheNode }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeCacheNode = maybeParentSlots[parallelRouterKey] ?? null;
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const cacheNode = bfcacheEntry.cacheNode;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/src/analytics/context.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/attribution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/subscription.ts [app-client] (ecmascript)");
;
;
;
;
;
;
let attribution = null;
let session = null;
function getAppAttribution() {
    attribution ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAttribution"])({
        storage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserStorage"],
        windowDays: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributionWindowDays"],
        isKnownPlacement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKnownPlacement"]
    });
    return attribution;
}
function getAppSession() {
    session ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSession"])({
        storage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserStorage"]
    });
    return session;
}
function currentRoute() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return getAppAttribution().getRoute();
}
function ensureAttribution(loc) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const result = getAppAttribution().ensureFromUrl(loc);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyAttribution"])();
    return result;
}
function persistDiscountCode(code) {
    getAppAttribution().setCode(code);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyAttribution"])();
}
function clearAttribution() {
    getAppAttribution().clear();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyAttribution"])();
}
function commonContext() {
    const hasDom = ("TURBOPACK compile-time value", "object") !== "undefined";
    const attr = ("TURBOPACK compile-time truthy", 1) ? getAppAttribution().read() : "TURBOPACK unreachable";
    return {
        session_id: ("TURBOPACK compile-time truthy", 1) ? getAppSession().getSessionId() : "TURBOPACK unreachable",
        placement_code: attr?.placement ?? "unknown",
        route: attr?.ref === "qr" ? "qr" : ("TURBOPACK compile-time truthy", 1) ? "direct" : "TURBOPACK unreachable",
        offer: attr?.offer ?? null,
        referrer: ("TURBOPACK compile-time truthy", 1) ? document.referrer || null : "TURBOPACK unreachable",
        device_type: ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceType"])(navigator.userAgent) : "TURBOPACK unreachable",
        timestamp: new Date().toISOString()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/analytics/filter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // Internal/QA flag — suppress everything when `?internal` is present.
        if (new URLSearchParams(window.location.search).has("internal")) return true;
    } catch  {
        return false;
    }
    return BOT_PATTERN.test(navigator.userAgent || "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/analytics/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/filter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/port.ts [app-client] (ecmascript)");
;
;
;
;
const SINKS = {
    console: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSink"]
};
let analytics = null;
function getAnalytics() {
    analytics ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnalytics"])({
        sink: SINKS[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_ANALYTICS_PROVIDER] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$port$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSink"],
        context: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonContext"],
        blocked: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$filter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockedTraffic"]
    });
    return analytics;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/analytics/port.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/analytics/subscription.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/analytics/vitals.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/index.ts [app-client] (ecmascript)");
;
const IDLE_TIMEOUT_MS = 3000;
let started = false;
function start() {
    try {
        // Dynamic import keeps `web-vitals` out of the initial page weight.
        void __turbopack_context__.A("[project]/node_modules/.pnpm/web-vitals@6.2.2/node_modules/web-vitals/dist/web-vitals.js [app-client] (ecmascript, async loader)").then(({ onLCP })=>{
            onLCP((metric)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])().track("web_vital", {
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
    if (started || ("TURBOPACK compile-time value", "object") === "undefined") return;
    started = true;
    const schedule = typeof window.requestIdleCallback === "function" ? (cb)=>window.requestIdleCallback(cb, {
            timeout: IDLE_TIMEOUT_MS
        }) : (cb)=>window.setTimeout(cb, IDLE_TIMEOUT_MS);
    schedule(start);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientBootstrap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientBootstrap",
    ()=>ClientBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$vitals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analytics/vitals.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/attribution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/discount.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ClientBootstrap() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientBootstrap.useEffect": ()=>{
            const attr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureAttribution"])(window.location);
            const minted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureDiscountCode"])({
                read: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppAttribution"])().read,
                setCode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistDiscountCode"],
                prefix: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_DISCOUNT_PREFIX,
                length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].NEXT_PUBLIC_DISCOUNT_RAND_LEN
            });
            if (minted.created && minted.code) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])().track("discount_code_generated", {
                    discount_code: minted.code
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])().track("page_view", {
                path: window.location.pathname
            });
            const { hasQrContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseQrContext"])(window.location);
            if (hasQrContext && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppSession"])().claimQrScan()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])().track("qr_scan", {
                    landing_path: window.location.pathname,
                    placement_valid: attr?.placementValid ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppAttribution"])().read()?.placementValid ?? false
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analytics$2f$vitals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportWebVitals"])();
        }
    }["ClientBootstrap.useEffect"], []);
    return null;
}
_s(ClientBootstrap, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ClientBootstrap;
var _c;
__turbopack_context__.k.register(_c, "ClientBootstrap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$8_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$63$2e$0_$40$types$2b$node$40$22$2e$20$2e$5_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.8_@babel+core@7.29.7_@playwright+test@1.63.0_@types+node@22.20.5_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/placements.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/attribution.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/base64.ts [app-client] (ecmascript)");
;
const ATTRIBUTION_COOKIE = "danga_attr";
const ATTRIBUTION_SESSION_KEY = "danga_attr_session";
const SECONDS_PER_DAY = 86_400;
function encodeAttribution(attr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64UrlEncode"])(JSON.stringify(attr));
}
function decodeAttribution(raw) {
    if (!raw) return null;
    try {
        const parsed = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$base64$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64UrlDecode"])(raw));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/base64.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/discount.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/placements.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$placements$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/placements.json.[json].cjs [app-client] (ecmascript)");
;
const REGISTRY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$placements$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/session.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_15q01fj._.js.map