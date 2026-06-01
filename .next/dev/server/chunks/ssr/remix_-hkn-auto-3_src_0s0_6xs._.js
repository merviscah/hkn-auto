module.exports = [
"[project]/remix_-hkn-auto-3/src/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function Logo({ className = '', size = 48 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex items-center justify-center overflow-hidden bg-transparent ${className}`,
        style: {
            width: size,
            height: size,
            backgroundColor: 'transparent'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/hkn-logo.png?v=1",
            alt: "HKN Auto Sakarya oto servis logosu",
            width: size,
            height: size,
            sizes: `${size}px`,
            className: "w-full h-full object-contain bg-transparent",
            priority: size >= 44,
            style: {
                display: 'block',
                backgroundColor: 'transparent'
            }
        }, void 0, false, {
            fileName: "[project]/remix_-hkn-auto-3/src/components/Logo.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/Logo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/Logo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Header({ onOpenBooking, activePage, onPageChange }) {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const mobileMenuOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(mobileMenuOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mobileMenuOpenRef.current = mobileMenuOpen;
    }, [
        mobileMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let lastScrollY = window.scrollY;
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            // Solid backdrop border on scroll
            setIsScrolled(currentScrollY > 20);
            // Scroll direction check
            if (mobileMenuOpenRef.current) {
                setIsVisible(true);
                return;
            }
            if (currentScrollY <= 80) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY + 5) {
                // Scroll down: hide header
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY - 5) {
                // Scroll up: show header
                setIsVisible(true);
            }
            lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleNavClick = (page)=>{
        setMobileMenuOpen(false);
        onPageChange(page);
        window.scrollTo(0, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                id: "app-header",
                className: `fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-brand-bg-dark/95 backdrop-blur-md border-b border-brand-container-hover py-2.5 md:py-3 shadow-xl shadow-brand-bg-dark/50' : 'bg-[#081425]/95 backdrop-blur-md border-b border-brand-container-hover/20 py-3.5 md:py-4.5'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleNavClick('home'),
                            className: "group flex items-center gap-3 cursor-pointer text-left focus:outline-none",
                            id: "logo-button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    size: 44,
                                    className: "group-hover:scale-105 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col -space-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-2xl font-bold tracking-tighter text-white block leading-none uppercase",
                                            children: [
                                                "HKN ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand-orange font-black italic",
                                                    children: "AUTO"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[9px] tracking-[0.2em] text-brand-text-secondary group-hover:text-brand-orange transition-colors uppercase block leading-none mt-0.5",
                                            children: "ENGINEERED TRUST"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8",
                            id: "desktop-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick('home'),
                                    className: `font-medium text-sm transition-colors cursor-pointer ${activePage === 'home' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'}`,
                                    children: "Ana Sayfa"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick('services'),
                                    className: `font-medium text-sm transition-colors cursor-pointer ${activePage === 'services' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'}`,
                                    children: "Hizmetler"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 102,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick('about'),
                                    className: `font-medium text-sm transition-colors cursor-pointer ${activePage === 'about' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'}`,
                                    children: "Hakkımızda"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 110,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick('blog'),
                                    className: `font-medium text-sm transition-colors cursor-pointer ${activePage === 'blog' || activePage === 'blog-detail' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'}`,
                                    children: "Blog"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 118,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick('contact'),
                                    className: `font-medium text-sm transition-colors cursor-pointer ${activePage === 'contact' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'}`,
                                    children: "İletişim"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 126,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenBooking,
                                className: "bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold font-display tracking-wide px-5 py-2.5 rounded text-xs uppercase shadow-lg shadow-brand-orange/15 hover:shadow-brand-orange/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
                                id: "header-booking-btn",
                                children: "Randevu Al"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                lineNumber: 138,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                            lineNumber: 137,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden flex flex-col justify-center items-end w-8 h-8 focus:outline-none z-[110]",
                            "aria-label": "Toggle Menu",
                            id: "mobile-menu-trigger",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-0.5 bg-white transition-all duration-300 rounded ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-1' : 'w-6'}`
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 154,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-0.5 bg-white transition-all duration-300 rounded mt-1.5 ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-4.5'}`
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 155,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-0.5 bg-white transition-all duration-300 rounded mt-1.5 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5.5'}`
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 156,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                            lineNumber: 148,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setMobileMenuOpen(false),
                className: `fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden transition-opacity duration-300 pointer-events-none ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                lineNumber: 163,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 inset-x-0 h-[60vh] min-h-[460px] z-50 md:hidden bg-[#040e1f] bg-gradient-to-b from-[#051126] via-[#030b18] to-[#01060f] border-b border-brand-container-hover/50 p-6 pt-24 flex flex-col justify-between overflow-y-auto shadow-2xl rounded-b-3xl transition-transform duration-500 ease-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`,
                id: "mobile-drawer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 py-4 border-t border-brand-container-hover/20 animate-[pageEnter_350ms_ease-out_100ms_both]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavClick('home'),
                                className: `text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${activePage === 'home' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'}`,
                                children: "Ana Sayfa"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                lineNumber: 179,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavClick('services'),
                                className: `text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${activePage === 'services' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'}`,
                                children: "Hizmetler"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                lineNumber: 187,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavClick('about'),
                                className: `text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${activePage === 'about' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'}`,
                                children: "Hakkımızda"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                lineNumber: 195,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavClick('blog'),
                                className: `text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${activePage === 'blog' || activePage === 'blog-detail' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'}`,
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                lineNumber: 203,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavClick('contact'),
                                className: `text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${activePage === 'contact' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'}`,
                                children: "İletişim"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                lineNumber: 211,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                        lineNumber: 178,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4 border-t border-brand-container-hover/20 text-left font-sans text-[10px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 block uppercase tracking-wider font-semibold",
                                    children: "7/24 Destek"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 224,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/905330540436",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-brand-orange hover:text-brand-orange-hover font-bold text-sm block transition-colors mt-1",
                                    children: "+90 (533) 054 04 36"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                                    lineNumber: 225,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                            lineNumber: 223,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                        lineNumber: 222,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t border-brand-container-hover/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setMobileMenuOpen(false);
                                onOpenBooking();
                            },
                            className: "w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display tracking-wider py-3 px-6 rounded-full text-xs uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center block",
                            children: "Randevu Al"
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                            lineNumber: 238,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                        lineNumber: 237,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Header.tsx",
                lineNumber: 171,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/remix_-hkn-auto-3/src/assets/images/hero_car_bg_1780270553383.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/hero_car_bg_1780270553383.107hnjinf7t9o.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/remix_-hkn-auto-3/src/assets/images/hero_car_bg_1780270553383.png.mjs { IMAGE => \"[project]/remix_-hkn-auto-3/src/assets/images/hero_car_bg_1780270553383.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$hero_car_bg_1780270553383$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/assets/images/hero_car_bg_1780270553383.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$hero_car_bg_1780270553383$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1408,
    height: 768,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzloUSw3hefLzW70Mlrqf/2Q=="
};
}),
"[project]/remix_-hkn-auto-3/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$hero_car_bg_1780270553383$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$hero_car_bg_1780270553383$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/remix_-hkn-auto-3/src/assets/images/hero_car_bg_1780270553383.png.mjs { IMAGE => "[project]/remix_-hkn-auto-3/src/assets/images/hero_car_bg_1780270553383.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
function Hero({ onOpenBooking, onScrollTo, onPageChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero-section",
        className: "relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-bg-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$hero_car_bg_1780270553383$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$hero_car_bg_1780270553383$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "HKN Auto profesyonel binek araç servisi ve lüks motor mekanik bakım onarım atölyesi arka plan görseli",
                        fill: true,
                        priority: true,
                        sizes: "100vw",
                        className: "w-full h-full object-cover object-center opacity-40 scale-105 filter brightness-75 contrast-125"
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg-dark/95"
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-8 bg-brand-orange"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs md:text-sm font-bold tracking-widest text-brand-orange uppercase",
                                    children: "ENGINEERED TRUST"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-2 bg-brand-orange/40"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-3xl",
                            id: "hero-headline",
                            children: "HKN Auto: Profesyonel Bakım ve Onarım Merkezi"
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-brand-text-secondary text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-2xl",
                            id: "hero-subtext",
                            children: "Sakarya Modern Sanayi'de modern teşhis cihazları ve uzman kadromuzla aracınızın performansını ve güvenliğini en üst düzeye çıkarıyoruz. Lüks ve standart segmentlerde teknik mükemmellik."
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onOpenBooking,
                                    className: "bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold font-display tracking-wide px-8 py-4 rounded text-sm uppercase shadow-2xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-3 cursor-pointer",
                                    id: "hero-cta-booking",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Randevu Al"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange('services'),
                                    className: "bg-brand-container hover:bg-brand-container-hover text-white border border-brand-container-hover hover:border-brand-text-secondary/30 font-semibold font-display tracking-wide px-8 py-4 rounded text-sm uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer",
                                    id: "hero-cta-services",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Hizmetlerimizi İnceleyin"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 text-brand-text-secondary group-hover:text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/Hero.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/data/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SERVICES_DATA",
    ()=>SERVICES_DATA
]);
const SERVICES_DATA = [
    {
        id: 'motor-mekanik',
        title: 'Motor Mekanik Bakım Onarım ve Revizyon',
        subtitle: 'EARTH_ENGINE',
        description: 'Kapsamlı motor revizyonu ve mekanik parçaların hassas onarımı. Aracınızın kalbini fabrikadan çıktığı ilk günkü performansına döndürüyoruz.',
        iconName: 'Wrench',
        details: {
            avgTime: '2 - 5 İş Günü',
            priceRange: '₺₺ - ₺₺₺',
            warranty: '1 Yıl / 20.000 KM Garantili',
            diagnosticApps: [
                'Hassas Silindir Basınç Analizi',
                'Kompresyon Eğrisi Kalibrasyonu',
                'Yakıt Besleme Teşhis Sistemi'
            ],
            steps: [
                'Motor detaylı yıkanması ve akustik arıza dinleme',
                'Bilgisayarlı kompresyon ve kaçak testleri',
                'Silindir kapak, supap ve yatak tölerans kontrolleri',
                'Orijinal OEM parçalar ile hassas montaj ve torklama',
                'Re-MAP kalibrasyonu ve ilk marş yol testleri'
            ]
        }
    },
    {
        id: 'on-takim',
        title: 'Ön Takım Tamiri',
        description: 'Sürüş konforu ve güvenliğiniz için süspansiyon ve direksiyon sistemlerinin milimetrik ayarı.',
        iconName: 'Activity',
        details: {
            avgTime: '3 - 6 Saat',
            priceRange: '₺ - ₺₺',
            warranty: '6 Ay Garanti',
            diagnosticApps: [
                'Lazer Askı Hizalama (Rot)',
                'Kamber-Kaster Kalibrasyonu',
                'Dinamik Boşluk ve Sarsıntı Analizi'
            ],
            steps: [
                'Amortisör ve helezon yayların sönümleme testi',
                'Salıncak, rot başı ve rotillerin boşluk kontrolü',
                '3D Lazer teknolojisi ile hassas rot ayarı',
                'Direksiyon kutusu hidrolik ve boşluk testleri'
            ]
        }
    },
    {
        id: 'periyodik-bakim',
        title: 'Periyodik Bakım',
        description: 'Düzenli kontrol ve değişimlerle aracınızın ömrünü uzatan, sorunsuz sürüş sağlayan bakım paketleri.',
        iconName: 'Calendar',
        details: {
            avgTime: '1 - 2 Saat',
            priceRange: '₺',
            warranty: '10.000 KM Bakım Güvencesi',
            diagnosticApps: [
                '36 Nokta Sıvı Sızdırmazlık Taraması',
                'OBD-II Arıza Kodu Eşitlemesi',
                'Şarj Sistemi ve Alternatör Check-up'
            ],
            steps: [
                'Motor yağı ve filtrelerin (hava, polen, yakıt) değişimi',
                'Fren balataları ve disk kalınlık tolerans kontrolü',
                'Antifriz, hidrolik seviyeleri ve safiyet derecesi ölçümü',
                'Lastik diş derinliği ve basınç kontrolleri',
                'Servis lambası ve arıza hafızası sıfırlama'
            ]
        }
    },
    {
        id: 'elektronik-cozumler',
        title: 'Elektronik Çözümler',
        description: 'Kronik ve karmaşık elektriksel arızaların son teknoloji diyagnostik cihazlarla kesin çözümü.',
        iconName: 'Cpu',
        details: {
            avgTime: '4 - 12 Saat',
            priceRange: '₺₺',
            warranty: '6 Ay Elektronik Onarım Garantisi',
            diagnosticApps: [
                'Osiloskop CAN-BUS Dalga Boyu Analizi',
                'ECU Beyin Kodlama ve Güncelleme',
                'Termal Kamerayla Kaçak Akım Tespiti'
            ],
            steps: [
                'CAN-Bus iletişim hattı osiloskop ölçümleri',
                'Kontrol ünitesi (ECU) yazılım ve donanım kontrolü',
                'Tesisat, röle ve sigorta kutusu akım testleri',
                'Sensör ve aktüatör sinyal kalibrasyonları'
            ]
        }
    },
    {
        id: 'sanziman-onarim',
        title: 'Şanzıman Onarım',
        description: 'Otomatik şanzıman sistemlerinde uzmanlaşmış teknik ekip ile vites geçişlerinde kusursuzluk.',
        iconName: 'Sliders',
        details: {
            avgTime: '1 - 3 İş Günü',
            priceRange: '₺₺ - ₺₺₺',
            warranty: '1 Yıl Onarım Garantisi',
            diagnosticApps: [
                'Vites Oranı Kayma Monitörleme',
                'Şanzıman Yağı Viskozite Ölçümü',
                'Selenoid Aktüatör Basınç Testi'
            ],
            steps: [
                'Şanzıman beyni selenoid ve basınç testleri',
                'Debriyaj ve balata takımı aşınma kontrolleri',
                'Türbin (tork konvertörü) balans ve revizyon süreci',
                'Şanzıman yağı ve dahili filtrelerin değişimi',
                'Yazılımsal vites geçiş kalibrasyonu (Adaptasyon)'
            ]
        }
    }
];
}),
"[project]/remix_-hkn-auto-3/src/components/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-ssr] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/data/services.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Services({ onSelectService }) {
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        selectedService
    ]);
    const getIconComponent = (iconName)=>{
        switch(iconName){
            case 'Wrench':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                    className: "w-6 h-6 text-brand-orange"
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 42,
                    columnNumber: 16
                }, this);
            case 'Calendar':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-6 h-6 text-brand-orange"
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 44,
                    columnNumber: 16
                }, this);
            case 'Cpu':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                    className: "w-6 h-6 text-brand-orange"
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 46,
                    columnNumber: 16
                }, this);
            case 'Sliders':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                    className: "w-6 h-6 text-brand-orange"
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 48,
                    columnNumber: 16
                }, this);
            case 'Activity':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "w-6 h-6 text-brand-orange"
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 50,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                    className: "w-6 h-6 text-brand-orange"
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 52,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services-section",
        className: "relative py-24 md:py-32 bg-brand-bg relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 blur-[150px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight pb-3",
                                children: "Hizmetlerimiz"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-20 bg-brand-orange"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6",
                        id: "services-grid",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES_DATA"].filter((s)=>s.id === 'motor-mekanik').map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedService(service),
                                    className: "lg:col-span-4 bg-gradient-to-br from-brand-container-light to-brand-bg-dark border border-brand-container-hover hover:border-brand-orange/30 p-8 rounded-lg shadow-xl cursor-pointer flex flex-col justify-between group relative overflow-hidden transition-all duration-305 hover:-translate-y-1.5 hover:shadow-brand-orange/5",
                                    id: "service-card-earth-engine",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/5 blur-3xl group-hover:bg-brand-orange/10 transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-brand-orange font-semibold font-mono text-xs uppercase tracking-wider",
                                                            children: "Motor Mekanik"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-brand-bg-dark rounded border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-300",
                                                            children: getIconComponent(service.iconName)
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-lg md:text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-brand-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-xl",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-8 pt-4 border-t border-brand-bg-dark",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-orange font-mono text-xs font-semibold tracking-wider flex items-center gap-2 group-hover:translate-x-1.5 transition-transform",
                                                children: [
                                                    "Detayları İncele ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 flex flex-col gap-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES_DATA"].filter((s)=>s.id === 'on-takim').map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedService(service),
                                        className: "bg-brand-container border border-brand-container-hover hover:border-brand-orange/30 p-6 rounded-lg cursor-pointer flex flex-col justify-between group relative h-full transition-all duration-305 hover:-translate-y-1.5 hover:shadow-brand-orange/5",
                                        id: `service-card-${service.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all",
                                                        children: getIconComponent(service.iconName)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-md md:text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, service.id, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES_DATA"].filter((s)=>s.id !== 'motor-mekanik' && s.id !== 'on-takim').map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedService(service),
                                    className: "lg:col-span-2 bg-brand-container border border-brand-container-hover hover:border-brand-orange/30 p-6 rounded-lg cursor-pointer flex flex-col justify-between group relative min-h-[190px] transition-all duration-305 hover:-translate-y-1.5 hover:shadow-brand-orange/5",
                                    id: `service-card-${service.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all",
                                                    children: getIconComponent(service.iconName)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-md md:text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors font-sans",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                }, service.id, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg-dark/80 backdrop-blur-sm transition-opacity duration-300",
                onClick: ()=>setSelectedService(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "bg-brand-container-light w-[96vw] max-w-xl h-[58vh] sm:h-auto sm:max-h-[82vh] rounded-lg border border-brand-container-hover shadow-2xl overflow-hidden flex flex-col animate-page-enter",
                    id: "details-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-brand-container-hover p-5 flex justify-between items-center bg-brand-bg-dark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-base md:text-lg font-black text-white",
                                    children: [
                                        selectedService.title,
                                        " Spec."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 overflow-y-auto custom-scrollbar flex-1 min-h-0 text-sm leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 border-b border-brand-container-hover pb-6",
                                    id: "modal-specs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-brand-bg-dark/40 p-3 rounded border border-brand-container-hover",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand-text-secondary/60 font-mono text-[9px] block uppercase tracking-wider mb-1",
                                                    children: "Tahmini Süre"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-mono font-medium flex items-center gap-1.5 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3.5 h-3.5 text-brand-orange"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        selectedService.details?.avgTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-brand-bg-dark/40 p-3 rounded border border-brand-container-hover",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand-text-secondary/60 font-mono text-[9px] block uppercase tracking-wider mb-1",
                                                    children: "Maliyet Skalası"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-mono font-medium flex items-center gap-1.5 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                            className: "w-3.5 h-3.5 text-brand-orange"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        selectedService.details?.priceRange
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-brand-bg-dark/40 p-3 rounded border border-brand-container-hover",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand-text-secondary/60 font-mono text-[9px] block uppercase tracking-wider mb-1",
                                                    children: "Garanti Güvencesi"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-mono font-medium flex items-center gap-1.5 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-3.5 h-3.5 text-brand-orange"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        selectedService.details?.warranty
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-mono text-xs uppercase text-brand-orange tracking-widest mb-3",
                                            children: "Hizmet Açıklaması"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-brand-text-secondary leading-relaxed bg-brand-bg-dark/35 p-4 rounded border border-brand-container-hover font-sans text-xs sm:text-sm",
                                            children: selectedService.description
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                selectedService.details?.diagnosticApps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-mono text-xs uppercase text-brand-orange tracking-widest mb-3",
                                            children: "Sistem Teşhis Uygulamaları"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-semibold",
                                            children: selectedService.details.diagnosticApps.map((app, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 p-2 bg-brand-bg-dark/50 rounded border border-brand-container-hover text-brand-text-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 25
                                                        }, this),
                                                        app
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this),
                                selectedService.details?.steps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-mono text-xs uppercase text-brand-orange tracking-widest mb-3",
                                            children: "Süreç Adımları ve Standart Kontroller"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 font-sans",
                                            children: selectedService.details.steps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 p-3 bg-brand-bg-dark/25 rounded border border-brand-container-hover",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-mono font-bold text-brand-text-secondary/50 block",
                                                                    children: [
                                                                        "0",
                                                                        idx + 1,
                                                                        " / METOT"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-brand-text-primary font-medium text-xs sm:text-sm",
                                                                    children: step
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-brand-container-hover p-4 md:p-6 flex items-center justify-between bg-brand-bg-dark",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedService(null),
                                    className: "px-4 py-2 text-brand-text-secondary hover:text-white text-xs font-mono",
                                    children: "Kapat"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedService(null);
                                        onSelectService(selectedService.title);
                                    },
                                    className: "bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold font-display tracking-wider px-5 py-3 rounded text-xs uppercase shadow-md cursor-pointer",
                                    id: "modal-quick-book-btn",
                                    children: "Bu Hizmet İçin Randevu Al"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/Services.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/assets/images/diagnostic_tablet_1780270573646.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/diagnostic_tablet_1780270573646.0.gooa7e3g6fk.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/remix_-hkn-auto-3/src/assets/images/diagnostic_tablet_1780270573646.png.mjs { IMAGE => \"[project]/remix_-hkn-auto-3/src/assets/images/diagnostic_tablet_1780270573646.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$diagnostic_tablet_1780270573646$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/assets/images/diagnostic_tablet_1780270573646.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$diagnostic_tablet_1780270573646$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1408,
    height: 768,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgr9fI0e3RGO2SMuw984zTTJasf//Z"
};
}),
"[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$diagnostic_tablet_1780270573646$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$diagnostic_tablet_1780270573646$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/remix_-hkn-auto-3/src/assets/images/diagnostic_tablet_1780270573646.png.mjs { IMAGE => "[project]/remix_-hkn-auto-3/src/assets/images/diagnostic_tablet_1780270573646.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
const features = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
            className: "w-5 h-5 text-brand-orange"
        }, void 0, false, {
            fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
            lineNumber: 10,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'Uzman Teknik Kadro',
        desc: 'Her biri kendi alanında sertifikalı ve tecrübeli ustalarımızla aracınız emin ellerde.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            className: "w-5 h-5 text-brand-orange"
        }, void 0, false, {
            fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
            lineNumber: 15,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'İleri Teknoloji Teşhis',
        desc: 'Orijinal servis ekipmanları ve güncel yazılımlarla hata payını sıfıra indiriyoruz.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
            className: "w-5 h-5 text-brand-orange"
        }, void 0, false, {
            fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
            lineNumber: 20,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'Şeffaf Hizmet Anlayışı',
        desc: 'Yapılan her işlem ve değişen her parça hakkında detaylı raporlama ve onay süreci.'
    }
];
function WhyUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "why-us-section",
        className: "py-24 md:py-32 bg-brand-bg relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-container-hover to-transparent"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 bottom-1/4 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center transform-gpu will-change-[transform,opacity]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 flex flex-col items-start",
                        id: "why-us-benefits-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight pb-3",
                                        children: "Neden Biz?"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-20 bg-brand-orange"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-10",
                                id: "benefits-items-list",
                                children: features.map((feat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-5 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-brand-container rounded-lg border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/40 transition-colors shrink-0 mt-0.5 shadow-md",
                                                children: feat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-base md:text-lg font-bold text-white group-hover:text-brand-orange transition-colors",
                                                        children: feat.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-text-secondary text-sm md:text-base leading-relaxed mt-2 max-w-lg",
                                                        children: feat.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            id: "why-us-image-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-orange/30 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-xl overflow-hidden border border-brand-container-hover bg-brand-bg shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$diagnostic_tablet_1780270573646$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$assets$2f$images$2f$diagnostic_tablet_1780270573646$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "HKN Auto arıza tespit tableti ile araç ECU kod taraması ve telemetri veri analiz süreci",
                                        sizes: "(min-width: 1024px) 50vw, 100vw",
                                        className: "w-full object-cover aspect-[4/3] group-hover:scale-[1.03] transition duration-700 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
'use client';
;
;
;
function ContactForm({ preselectedService, onAppointmentBooked, bookingFormRef, isFullPage = false }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Periyodik Bakım Randevusu');
    const [plate, setPlate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('10:30');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookedReceipt, setBookedReceipt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (preselectedService) {
            setService(preselectedService);
        }
    }, [
        preselectedService
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!name || !email) {
            return;
        }
        setIsSubmitting(true);
        setTimeout(()=>{
            const newAppointment = {
                id: `HKN-${Math.floor(100000 + Math.random() * 900000)}`,
                name,
                email,
                service: service || 'Soru/Talep Gönderimi',
                plate: 'TR-PL-999',
                date: new Date().toISOString().split('T')[0],
                time: '12:00',
                message,
                status: 'confirmed',
                createdAt: new Date().toISOString()
            };
            try {
                const current = localStorage.getItem('hkn_appointments');
                const list = current ? JSON.parse(current) : [];
                const appointments = Array.isArray(list) ? list : [];
                appointments.push(newAppointment);
                localStorage.setItem('hkn_appointments', JSON.stringify(appointments));
            } catch  {
            // Form success must not depend on optional browser storage.
            }
            setIsSubmitting(false);
            setBookedReceipt(newAppointment);
            onAppointmentBooked();
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        }, 1200);
    };
    const serviceOptions = [
        'Periyodik Bakım Randevusu',
        'Motor Mekanik Bakım Onarım ve Revizyon',
        'Ön Takım Tamiri',
        'Elektronik Çözümler',
        'Şanzıman Onarım',
        'Sadece Soru/Talep Gönderimi'
    ];
    const timeOptions = [
        '09:00',
        '10:30',
        '12:00',
        '13:30',
        '15:00',
        '16:30',
        '18:00'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact-section",
        ref: bookingFormRef,
        className: "py-24 md:py-32 bg-[#0d1520] border-t border-brand-container-hover/60 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange/[0.03] blur-[120px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 flex flex-col justify-between h-full",
                            id: "contact-info-panel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    isFullPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-6",
                                        children: "İletişime Geçin"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-6",
                                        children: "İletişime Geçin"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-sm md:text-base leading-relaxed mb-12 max-w-sm",
                                        children: "Sorularınız veya randevu talepleriniz için bize ulaşın. Ekibimiz size en kısa sürede dönüş yapacaktır."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        id: "contact-details-list",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 text-brand-orange shrink-0 mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-white block",
                                                                children: "Bizi Arayın"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "tel:+905330540436",
                                                                className: "text-brand-text-secondary hover:text-white text-sm font-mono transition-colors block mt-1",
                                                                children: "+90 (533) 054 04 36"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 text-emerald-500 shrink-0 mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-white block",
                                                                children: "WhatsApp Destek"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://wa.me/905330540436",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-brand-text-secondary hover:text-emerald-400 text-sm font-mono transition-colors flex items-center gap-2 mt-1 group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "+90 (533) 054 04 36"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded font-sans uppercase font-bold border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all",
                                                                        children: "Çevrimiçi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 text-brand-orange shrink-0 mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-white block",
                                                                children: "Adresimiz"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-secondary text-sm transition-colors block mt-1 leading-relaxed",
                                                                children: "Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Modern Sanayi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 text-brand-orange shrink-0 mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-white block",
                                                                children: "Çalışma Saatleri"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-secondary text-sm transition-colors block mt-1",
                                                                children: "Pzt - Cmt: 08:30 - 18:00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            id: "message-form-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#131b26] border border-brand-container-hover/80 p-6 md:p-10 rounded-lg shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6",
                                    id: "appointment-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "fullName",
                                                            className: "block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2",
                                                            children: "Adınız Soyadınız"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "fullName",
                                                            type: "text",
                                                            required: true,
                                                            value: name,
                                                            onChange: (e)=>setName(e.target.value),
                                                            placeholder: "John Doe",
                                                            className: "w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2",
                                                            children: "E-posta Adresiniz"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "email",
                                                            type: "email",
                                                            required: true,
                                                            value: email,
                                                            onChange: (e)=>setEmail(e.target.value),
                                                            placeholder: "john@example.com",
                                                            className: "w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "serviceCategory",
                                                    className: "block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2",
                                                    children: "Konu"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "serviceCategory",
                                                    type: "text",
                                                    required: true,
                                                    value: service,
                                                    onChange: (e)=>setService(e.target.value),
                                                    placeholder: "Örn: Periyodik Bakım, Motor Sorunu, Sorular...",
                                                    className: "w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2",
                                                    children: "Mesajınız"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    value: message,
                                                    onChange: (e)=>setMessage(e.target.value),
                                                    placeholder: "Size nasıl yardımcı olabiliriz?",
                                                    rows: 5,
                                                    className: "w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30 resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3.5 rounded text-xs transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-50 shadow-lg shadow-brand-orange/15 cursor-pointer mt-2",
                                            id: "submit-form-btn",
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "İletiliyor..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Gönder"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 269,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            bookedReceipt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg-dark/80 backdrop-blur-md transition-opacity duration-300",
                onClick: ()=>setBookedReceipt(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "bg-[#131b26] w-full max-w-md rounded-lg border-2 border-brand-orange/40 shadow-2xl overflow-hidden relative animate-page-enter",
                    id: "booking-receipt-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 inset-x-0 h-1.5 bg-brand-orange"
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-brand-bg-dark p-6 border-b border-brand-container-hover text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-6 h-6 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-display text-white font-extrabold text-base md:text-lg",
                                    children: "Mesajınız Başarıyla İletildi!"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-text-secondary text-xs mt-1",
                                    children: "Bilgileriniz kaydedildi. En kısa sürede sizinle iletişime geçeceğiz."
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-brand-bg-dark/60 border border-brand-container-hover rounded-md p-4 space-y-3 font-mono text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-b border-brand-container-hover pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-secondary",
                                                children: "MESAJ ID:"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-orange font-bold uppercase",
                                                children: bookedReceipt.id
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-secondary",
                                                children: "GÖNDEREN:"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white uppercase truncate max-w-[180px] text-right",
                                                children: bookedReceipt.name
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-secondary",
                                                children: "E-POSTA:"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-semibold truncate max-w-[180px] text-right",
                                                children: bookedReceipt.email
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-secondary",
                                                children: "KONU:"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-bold",
                                                children: bookedReceipt.service
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                lineNumber: 307,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-brand-bg-dark border-t border-brand-container-hover flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setBookedReceipt(null),
                                className: "bg-brand-container hover:bg-brand-container-hover border border-brand-container-hover hover:border-brand-text-secondary text-white font-mono text-xs font-bold px-5 py-2.5 rounded transition-all cursor-pointer",
                                id: "receipt-close-btn",
                                children: "Kapat"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/Logo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Footer({ onPageChange }) {
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-brand-bg-dark border-t border-brand-container-hover relative pt-16 pb-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 mb-12 border-b border-brand-container-hover/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-5 flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row flex-wrap items-center gap-4 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleScrollToTop,
                                        className: "group flex items-center gap-3 cursor-pointer text-left focus:outline-none",
                                        id: "footer-logo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                size: 38,
                                                className: "group-hover:scale-105 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col -space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display text-xl font-bold tracking-tighter text-white block leading-none uppercase",
                                                        children: [
                                                            "HKN ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-orange font-black italic",
                                                                children: "AUTO"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[8px] tracking-[0.2em] text-brand-text-secondary uppercase block leading-none mt-0.5",
                                                        children: "ENGINEERED TRUST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-sans",
                                    children: "Sakarya Modern Sanayi'de lüks ve standart binek araç gruplarında ileri teknoloji bilgisayarlı arıza teşhisi, motor revizyonu ve şanzıman onarımı sunan sertifikalı servis noktası."
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-7 grid grid-cols-3 gap-6 sm:gap-8 text-left md:pl-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-mono text-[9px] font-bold tracking-widest text-brand-orange uppercase mb-4",
                                            children: "SAYFALAR"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-xs sm:text-sm w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('home'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Ana Sayfa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('services'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Hizmetler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('about'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Hakkımızda"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('blog'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Blog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('contact'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "İletişim"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-mono text-[9px] font-bold tracking-widest text-brand-orange uppercase mb-4",
                                            children: "HİZMETLERİMİZ"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-xs md:text-sm w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('services'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Motor Mekanik"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('services'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Elektronik Teşhis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('services'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Ön Takım Onarımı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onPageChange?.('services'),
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block",
                                                        children: "Şanzıman Revizyonu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-mono text-[9px] font-bold tracking-widest text-brand-orange uppercase mb-4",
                                            children: "İLETİŞİM"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-xs md:text-sm w-full text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+905330540436",
                                                        className: "text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left block",
                                                        children: "+90 (533) 054 04 36"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-text-secondary text-left block leading-relaxed",
                                                        children: [
                                                            "Yeşiltepe Mah. 8016 Sok. No: 6",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 51
                                                            }, this),
                                                            "Sakarya Modern Sanayi"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "pt-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://instagram.com",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "text-brand-text-secondary hover:text-brand-orange transition-all duration-300 inline-flex items-center focus:outline-none group/insta",
                                                            "aria-label": "Instagram",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-1.5 rounded-md bg-brand-container border border-brand-container-hover group-hover/insta:border-brand-orange/30 group-hover/insta:bg-brand-orange/10 transition-all flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                                    className: "w-4 h-4 text-brand-text-secondary group-hover/insta:text-brand-orange transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://wa.me/905330540436",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "text-brand-text-secondary hover:text-emerald-500 transition-all duration-300 inline-flex items-center focus:outline-none group/wa",
                                                            "aria-label": "WhatsApp",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-1.5 rounded-md bg-brand-container border border-brand-container-hover group-hover/wa:border-emerald-500/30 group-hover/wa:bg-emerald-500/10 transition-all flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                    className: "w-4 h-4 text-brand-text-secondary group-hover/wa:text-emerald-500 transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center sm:items-start gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-text-secondary/40 text-[10px] sm:text-xs",
                                    children: "© 2026 HKN Auto. Engineered Trust. Tüm hakları saklıdır."
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-orange text-[10px] sm:text-xs font-semibold tracking-wide",
                                    children: "Created by Merve Cahyir"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-brand-text-secondary/40 text-[10px] sm:text-xs font-mono",
                            children: "PRECISION AUTOMOTIVE ENGINEERING // SKR"
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/Footer.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-ssr] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
function ServicesView({ onOpenBooking, onScrollToContact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-30 overflow-auto bg-brand-bg/95 backdrop-blur-xl",
        id: "services-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center px-6 py-10 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-96 h-96 bg-brand-orange/[0.03] blur-[150px] pointer-events-none rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/2 right-0 w-80 h-80 bg-blue-500/[0.01] blur-[130px] pointer-events-none rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-16 max-w-3xl mx-auto text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-3",
                                        children: "PREMIUM DIAGNOSTICS"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4",
                                        children: "Gelişmiş Teknik Servis Hizmetleri"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-sm md:text-base leading-relaxed",
                                        children: "Modern otomobil teknolojileri için tasarlanmış laboratuvar titizliğinde servis deneyimi. Aracınızın performansı ve güvenliği için uzman kadromuzla yanınızdayız."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-20 bg-brand-orange mt-6 mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8",
                                id: "upper-service-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7 bg-[#131b26] border border-brand-container-hover/80 p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/35 transition-all duration-300 flex flex-col justify-between min-h-[380px]",
                                        id: "mech-001-detailed-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/[0.04] blur-[100px] pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] text-brand-orange font-bold tracking-widest bg-brand-orange/5 px-2.5 py-1 rounded border border-brand-orange/20",
                                                                children: "SERVICE ID: MECH-001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover text-brand-orange",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-xl md:text-2xl font-extrabold text-white mb-4 group-hover:text-brand-orange transition-colors",
                                                        children: "Motor Mekanik Bakım Onarım Revizyon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-text-secondary text-sm sm:text-base leading-relaxed max-w-xl",
                                                        children: "Motorunuzun ömrünü uzatacak kapsamlı revizyon işlemleri. Silindir kapak taşlamadan, piston değişimine kadar tüm süreçler OEM standartlarında titizlikle yürütülür."
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2.5 mt-8 pt-6 border-t border-brand-container-hover/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[9px] font-black tracking-widest text-[#d8e3fb] bg-[#1a2536] px-3 py-1.5 rounded border border-brand-container-hover",
                                                        children: "KOMPRESYON TESTİ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[9px] font-black tracking-widest text-[#d8e3fb] bg-[#1a2536] px-3 py-1.5 rounded border border-brand-container-hover",
                                                        children: "OEM PARÇA GARANTİSİ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[9px] font-black tracking-widest text-[#d8e3fb] bg-[#1a2536] px-3 py-1.5 rounded border border-brand-container-hover",
                                                        children: "DİNAMOMETRE ÖLÇÜMÜ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5 bg-[#131b26] border border-brand-container-hover/80 p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/35 transition-all duration-300 flex flex-col justify-between",
                                        id: "elec-002-detailed-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-12 -right-12 w-48 h-48 bg-blue-500/[0.02] blur-[100px] pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] text-brand-orange font-bold tracking-widest bg-brand-orange/5 px-2.5 py-1 rounded border border-brand-orange/20",
                                                                children: "SERVICE ID: ELEC-002"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover text-brand-orange",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-xl md:text-2xl font-extrabold text-white mb-4 group-hover:text-brand-orange transition-colors",
                                                        children: "Elektronik Çözümler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-text-secondary text-sm leading-relaxed mb-6",
                                                        children: "En karmaşık sensör hatalarından ECU programlamaya kadar lisanslı diagnostik cihazlarımızla nokta atışı teşhis."
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-3 font-sans text-xs sm:text-sm text-brand-text-primary",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-0.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                            lineNumber: 103,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Derinlemesine Hata Analizi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-0.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Yazılım Güncellemeleri ve Kalibrasyon"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-24",
                                id: "lower-service-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111c2d] border border-brand-container-hover hover:border-brand-orange/20 transition-all rounded p-6 flex flex-col justify-between min-h-[220px] group",
                                        id: "lower-service-on-takim",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-brand-bg-dark border border-brand-container-hover text-brand-orange rounded w-fit mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors",
                                                        children: "Ön Takım Tamiri"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-4",
                                                        children: "Sürüş güvenliğiniz için amortisörden rot başlarına kadar her detay kontrol altında. Konforlu ve sessiz bir sürüş deneyimi garantiliyoruz."
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onOpenBooking,
                                                className: "font-mono text-[10px] font-bold text-brand-orange flex items-center gap-1 hover:translate-x-1.5 transition-transform",
                                                children: [
                                                    "GÜVENLİK ANALİZİ ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111c2d] border border-brand-container-hover hover:border-brand-orange/20 transition-all rounded p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden group",
                                        id: "lower-service-sanziman",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-mono text-[8px] font-extrabold tracking-wider px-1.5 py-0.5 rounded uppercase",
                                                children: "GARANTİLİ ONARIM"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-brand-bg-dark border border-brand-container-hover text-brand-orange rounded w-fit mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors",
                                                        children: "Otomatik Şanzıman"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed",
                                                        children: "Şanzıman yağı değişiminden, beyin revizyonuna kadar uzmanlık gerektiren her aşamada sertifikalı teknisyenlerimizle hizmetinizdeyiz. Bu işlemlerde tam debriyaj torklama standarttır."
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111c2d] border border-brand-container-hover hover:border-brand-orange/20 transition-all rounded p-6 flex flex-col justify-between min-h-[220px] group",
                                        id: "lower-service-periyodik",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-brand-bg-dark border border-brand-container-hover text-brand-orange rounded w-fit mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors",
                                                        children: "Periyodik Bakım"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-4",
                                                        children: "Düzenli bakım paketlerimizle aracınızın değerini koruyun. Yağ, filtre ve 50 nokta kontrolü ile yola hazır olun."
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-brand-container-hover/60 pt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-[9px] font-mono mb-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-secondary/60",
                                                                children: "KONTROL TAMAMLANDI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-orange font-bold",
                                                                children: "75%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-1 bg-brand-bg-dark rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-brand-orange w-[75%] rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                                id: "service-process-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-3",
                                                children: "SERVİS SÜRECİMİZ"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-8",
                                                children: "HKN Auto Standartları"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                id: "services-timeline-steps",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded border border-brand-orange/45 bg-brand-orange/5 text-brand-orange font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-brand-orange/5",
                                                                children: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-display font-bold text-white text-base",
                                                                        children: "Dijital Kabul & Ekspertiz"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-brand-text-secondary text-xs sm:text-sm mt-1 leading-relaxed",
                                                                        children: "Aracınız servis alanına girdiği an yüksek çözünürlüklü kameralar ve dijital formlar ile kayıt altına alınır."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded border border-brand-container-hover bg-brand-container text-brand-text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1",
                                                                children: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-display font-bold text-white text-base",
                                                                        children: "Hassas Arıza Tespiti"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-brand-text-secondary text-xs sm:text-sm mt-1 leading-relaxed",
                                                                        children: "Tahmin yürütmeyiz. Bilgisayarlı analiz sistemlerimizle gerçek arızayı ilk seferde buluruz."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded border border-brand-container-hover bg-brand-container text-brand-text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1",
                                                                children: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-display font-bold text-white text-base",
                                                                        children: "Kalite Kontrol & Teslimat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-brand-text-secondary text-xs sm:text-sm mt-1 leading-relaxed",
                                                                        children: "Yapılan her işlem kıdemli usta başımız tarafından test sürüşü ve son kontrol protokolünden geçer."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7",
                                        id: "hydraulic-lift-visual",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#111c2d] border border-brand-container-hover p-4 rounded-xl shadow-2xl relative aspect-[16/10] flex items-center justify-center overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 opacity-[0.06] pointer-events-none",
                                                    style: {
                                                        backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                  `,
                                                        backgroundSize: '25px 25px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-b from-brand-orange/[0.02] via-transparent to-transparent pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-[85%] h-[85%] text-brand-orange opacity-40",
                                                    viewBox: "0 0 400 240",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "20",
                                                            y1: "210",
                                                            x2: "380",
                                                            y2: "210",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeDasharray: "4 4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "120",
                                                            y: "140",
                                                            width: "14",
                                                            height: "70",
                                                            fill: "currentColor",
                                                            fillOpacity: "0.1",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "266",
                                                            y: "140",
                                                            width: "14",
                                                            height: "70",
                                                            fill: "currentColor",
                                                            fillOpacity: "0.1",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "90",
                                                            y: "132",
                                                            width: "220",
                                                            height: "8",
                                                            rx: "2",
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M100 132 C115 132 125 124 135 118 C150 102 180 92 210 92 C240 92 265 102 275 118 C285 125 295 132 300 132 L100 132 Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            fill: "currentColor",
                                                            fillOpacity: "0.05"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "140",
                                                            cy: "132",
                                                            r: "14",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            fill: "#111c2d"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "260",
                                                            cy: "132",
                                                            r: "14",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            fill: "#111c2d"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "200",
                                                            cy: "120",
                                                            r: "40",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.8",
                                                            strokeDasharray: "2 4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 200 60 L 200 180",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5",
                                                            strokeOpacity: "0.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 120 120 L 280 120",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5",
                                                            strokeOpacity: "0.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-6 left-6 max-w-[210px] bg-brand-orange text-white p-4 shadow-xl rounded font-sans shrink-0 border border-brand-orange-hover",
                                                    id: "lift-tooltip",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg md:text-xl font-display font-black block leading-none",
                                                            children: "15+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[8px] font-bold tracking-widest block uppercase mt-1 leading-normal text-white/95",
                                                            children: "yıllık teknik deneyim ve uzmanlık"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111c2d] border border-brand-container-hover p-8 md:p-12 rounded-lg text-center relative overflow-hidden",
                                id: "services-cta-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-brand-orange/[0.015] blur-xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-2xl md:text-3xl font-black text-white tracking-tight mb-3",
                                        children: "Aracınız İçin Profesyonel Bir Dokunuş Gerekli mi?"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed",
                                        children: "Hizmetlerimiz hakkında daha detaylı bilgi almak veya hemen bir randevu oluşturmak için uzman ekibimizle iletişime geçin."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onOpenBooking,
                                                className: "w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3.5 px-8 rounded text-xs transition-all duration-300 min-w-[170px] shadow-lg shadow-brand-orange/15 cursor-pointer",
                                                children: "ŞİMDİ RANDEVU AL"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onScrollToContact,
                                                className: "w-full sm:w-auto bg-transparent hover:bg-brand-container border border-brand-container-hover hover:border-brand-text-secondary text-white font-bold font-display uppercase tracking-widest py-3.5 px-8 rounded text-xs transition-all duration-300 min-w-[170px] cursor-pointer",
                                                children: "BİZE ULAŞIN"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/AboutView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/milestone.js [app-ssr] (ecmascript) <export default as Milestone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
function AboutView({ onOpenBooking }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-28 pb-20 bg-brand-bg relative min-h-screen",
        id: "about-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-brand-orange/[0.02] blur-[150px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-96 h-96 bg-blue-500/[0.01] blur-[150px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-3",
                                        children: "1998'DEN BERİ"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight",
                                        children: "Güven İnşa Ediyoruz."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-24 bg-brand-orange mt-6"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-primary text-base md:text-lg leading-relaxed font-sans",
                                        children: "HKN Auto'da araçları sadece tamir etmiyoruz, performanslarını optimize ediyoruz. Mekanik hassasiyet ve teknik mükemmellik prensipleri üzerine kurulup, üst düzey otomotiv teşhis ve onarımında öncü bir merkeze dönüştük."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-sm md:text-base leading-relaxed",
                                        children: "Her aracın kendine has bir karakteri ve mühendislik yapısı olduğunu biliyor, bu bilinçle hareket ediyoruz. Sakarya Modern Sanayi'de yer alan teknolojik atölyemizle, lüks ve standart binek araçların tüm mekanik, elektronik ve şanzıman gereksinimlerini en üst standartta çözüme kavuşturuyoruz."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full relative rounded-xl border border-brand-container-hover/60 overflow-hidden mb-24 aspect-[21/9] bg-gradient-to-r from-brand-bg-dark to-brand-container shadow-2xl flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.05] pointer-events-none",
                                style: {
                                    backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
                                    backgroundSize: '40px 40px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-brand-orange/[0.04] mix-blend-color"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative text-center p-8 z-10 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex p-3 bg-brand-bg/85 border border-brand-orange/30 rounded-full text-brand-orange animate-pulse mb-2 scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-8 h-8"
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-mono text-white text-xs tracking-widest font-black uppercase",
                                        children: "HKN AUTO TEŞHİS LABORATUVARI"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-xs sm:text-xs tracking-wider max-w-sm mx-auto font-mono uppercase bg-brand-bg-dark/80 py-1.5 px-3 rounded border border-brand-container-hover",
                                        children: "SİSTEM DURUMU: AKTİF ÇALIŞMA // %100 HAZIR"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-brand-container/60 border border-brand-container-hover p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/20 transition-all duration-300",
                                id: "phase-01-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-12 -right-12 w-32 h-32 bg-brand-orange/[0.02] blur-2xl group-hover:bg-brand-orange/[0.04] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-bold text-brand-orange tracking-wider block mb-2 uppercase",
                                        children: "AŞAMA 01"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__["Milestone"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display font-black text-white text-xl md:text-2xl",
                                                children: "Kuruluş ve Temeller"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-sm leading-relaxed",
                                        children: "Avrupa menşeili motorlar konusunda uzmanlaşmış butik bir atölye olarak başladık ve bölgesel mekanikte hassasiyet standartlarını belirledik. Atölyemizin temelini atan bu safhada, kusursuz el işçiliği ve mühendislik nosyonunu en üst düzeyde benimsedik."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-brand-container/60 border border-brand-container-hover p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/20 transition-all duration-300",
                                id: "phase-02-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-12 -right-12 w-32 h-32 bg-blue-500/[0.01] blur-2xl group-hover:bg-blue-500/[0.02] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-bold text-brand-orange tracking-wider block mb-2 uppercase",
                                        children: "AŞAMA 02"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display font-black text-white text-xl md:text-2xl",
                                                children: "Dijital Entegrasyon"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-sm leading-relaxed",
                                        children: "Gerçek zamanlı araç sağlığı takibi ve şeffaf müşteri raporlaması sağlayan en son teknoloji bulut teşhis sistemlerini entegre ettik. Geleneksel mekanik tecrübemizi, modern bulut veri analiz araçları ve dijital teşhis süreçleri ile harmanladık."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto bg-brand-bg-dark/60 border border-brand-container-hover/80 rounded-lg p-8 md:p-12 mb-24 relative overflow-hidden text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-brand-container-hover",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-8 md:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-5xl md:text-6xl font-black text-white leading-none block",
                                                children: "25k+"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mt-4",
                                                children: "BAKIMI YAPILAN ARAÇ"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-secondary text-xs sm:text-sm mt-3 leading-relaxed max-w-xs mx-auto",
                                                children: "Bugüne kadar sistemli onarım ve tamir proseslerinden geçen toplam lüks ve standart binek araç adedi."
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-8 md:pt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-5xl md:text-6xl font-black text-brand-orange leading-none block",
                                                children: "100%"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs text-brand-text-primary font-bold uppercase tracking-widest block mt-4",
                                                children: "ORİJİNAL PARÇA HASSASİYETİ"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-secondary text-xs sm:text-sm mt-3 leading-relaxed max-w-xs mx-auto",
                                                children: "Tüm mekanik ve yedek parça montaj süreçlerimizde yalnızca marka onaylı orijinal ekipman kullanımı."
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#131b26] border border-brand-container-hover p-8 md:p-12 rounded-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6",
                        id: "about-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-0 w-80 h-80 bg-brand-orange/[0.03] blur-[120px] pointer-events-none rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-black text-white text-xl md:text-2xl lg:text-3xl leading-snug",
                                        children: "Kusursuz Mühendisliği Deneyimleyin."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-brand-text-secondary text-xs sm:text-sm mt-2 max-w-lg leading-relaxed",
                                        children: "Aracınızı profesyonel onarım kalitesine ve sertifikalı mekanik proses standartlarına emanet etmek için şimdi online formunuzu oluşturun."
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenBooking,
                                className: "bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3.5 px-8 rounded text-xs transition-all duration-300 flex items-center gap-3 shrink-0 active:scale-[0.99] shadow-lg shadow-brand-orange/15 cursor-pointer",
                                id: "about-cta-book-btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Randevu Al"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/AboutView.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/BlogView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLOG_POSTS",
    ()=>BLOG_POSTS,
    "default",
    ()=>BlogView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
const BLOG_POSTS = [
    {
        id: 'ai-motor-analizi',
        title: 'Sakarya Motor Mekanik Bakım Onarım ve Motor Revizyonu',
        excerpt: 'Sakarya Modern Sanayi bölgesinde motor revizyon ve komple rektefiye süreçleri. Motor mekanik arızalarında HKN Auto uzmanlığı ve ileri teknoloji tanı yöntemleri.',
        content: `Motor mekanik aksamı, aracınızın performans ve yakıt verimliğini doğrudan tayin eden en karmaşık sistemdir. HKN Auto olarak, Sakarya Modern Sanayi Sitesi'ndeki dijital donanımlı laboratuvarımızda motor mekanik bakım onarım ve motor revizyonu işlemlerini uluslararası standartlarda gerçekleştiriyoruz.

    Motor Mekanik Revizyonu Nedir?
    Yüksek kilometreye bağlı yıpranmalar, yetersiz yağlama veya hararet nedeniyle motor gücünde kayıplar oluşur. Motor revizyonu (motor rektefiyesi), motorun tamamen sökülerek silindir bloğu, pistonlar, biyel kolları, supaplar ve eksantrik milinin mikron bazında ölçülüp fabrikasyon toleranslarına geri getirilmesi sürecidir.

    TEKNİK MOTOR MEKANİK SÜREÇLERİ
    - Bilgisayarlı Kompresyon ve Sızdırma Testleri: Her bir silindirin yanma kalitesini ölçerek aşınmış segman ve supap kaçaklarını tespit etme.
    - Orijinal OEM Parça Entegrasyonu: Piston, yatak, subap ve conta takımlarında sadece aracınıza özel lisanslı yedek parça kullanımı.
    - Krank Mili ve Silindir Bloğu Taşlama: Sakarya'nın en gelişmiş rektefiye ekipmanlarıyla sıfır hata payıyla yüzey işleme.
    - Dinamik Basınç ve Torklama Değerleri: Üretici verilerine uygun tork anahtarlarıyla hassas motor montajı.

    Neden HKN Auto Sakarya?
    Sakarya'da motor mekanik revizyon dendiğinde akla gelen en güvenilir merkezlerden biri olmanın gururunu yaşıyoruz. Doğru teşhis sayesinde gereksiz parça değişimlerinin önüne geçiyor, bütçenizi korurken aracınızın ömrünü %100'e kadar artırıyoruz. Her revize ettiğimiz motora km güvenceli garanti sunuyoruz.`,
        date: '15 MAYIS 2026',
        category: 'Performans',
        categoryTag: 'TECH',
        serviceId: 'HKN-MEK1',
        author: 'Merve Cahyir',
        authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
        readTime: '6 dk okuma'
    },
    {
        id: 'yazilim-guncellemeleri',
        title: 'Elektronik Çözülemeyen Arızaların Çözümleri ve ECU Programlama',
        excerpt: 'Sıradan servislerin çözemediği kronik beyin arızaları, CAN-BUS hat arızaları ve yazılımsal otomotiv elektronik çözümleri HKN Auto güvencesiyle Sakarya’da.',
        content: `Modern araçlar, tekerlekli bilgisayarlar gibidir. Motor kontrol üniteleri (ECU), araç genelindeki binlerce sensörden gelen veriyi milisaniyeler içinde işler. HKN Auto olarak, Sakarya'da başka hiçbir yerde çözülemeyen kronik elektronik arızaların teşhis ve kesin onarım çözümlerini sunuyoruz.

    Kronik ve Çözülemeyen Elektronik Arızalar Nelerdir?
    Çoğu zaman kirlenmiş soketler, kopmuş CAN-BUS iletişim telleri veya çökmüş entegre devreler nedeniyle araçlar arıza moduna geçer ve gösterge panelinde çok sayıda uyarı lambası yanar. Standart tarayıcılar bu arızaların kök nedenini göremez, sadece yüzeysel hata kodları verir.

    ELEKTRONİK LABORATUVARIMIZDA NELER YAPIYORUZ?
    - CAN-Bus Dalga Boyu Ölçümleri: Dijital osiloskop cihazlarımızla iletişim hatlarındaki elektriksel parazit ve kısa devre tespiti.
    - ECU Beyin Programlama ve Onarım: Bozulmuş motor kontrol ünitesi yazılımlarının orijinal sunucular üzerinden güncellenmesi ve donanımsal çip onarımı.
    - Kaçak Akım ve Termal Kamera Analizi: Aracın kapalıyken aküyü bitirmesine sebep olan parazitik gizli akım kaçaklarının mikro-termal görüntülemeyle bulunması.
    - Sensör ve Aktüatör Kodlaması: Yeni takılan elektronik bileşenlerin araç beynine tanıtılması ve adaptasyon ayarları.

    Sakarya'da Teknolojik Üstünlük
    Sakarya ve çevre illerden gelen birçok otomobil tutkunu ve esnafının çözülemeyen beyin problemlerini gideriyoruz. Merve Cahyir liderliğindeki uzman kadromuz ve en son teknoloji tanı cihazlarımızla, elektronik kusurları deneme yanılma yoluyla değil, milimetrik ölçümlerle tespit ederek tamir etmekteyiz.`,
        date: '12 MAYIS 2026',
        category: 'Elektronik',
        categoryTag: 'ELECTRONICS',
        serviceId: 'HKN-ELK2',
        author: 'Merve Cahyir',
        authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
        readTime: '5 dk okuma'
    },
    {
        id: 'fren-bakimi',
        title: 'Sakarya Ön Takım Tamiri, Amortisör ve Dişli Düzen Kontrolleri',
        excerpt: 'Konforlu ve güvenli bir yol tutuşu için ön takım tamiri neden ertelenmemeli? Rot, rotil, aks, salıncak burçları ve amortisör bakımı Sakarya HKN Auto’da.',
        content: `Aracınızın yolla olan tek bağı lastikler ve bu bağı ayakta tutan sistem ise ön takım ile süspansiyon elemanlarıdır. Bozuk yollar, çukurlar ve kaldırımlar ön takım elemanlarında hızlı aşınmalara ve dolayısıyla sürüş emniyeti kayıplarına yol açar.

    Ön Takım (Yürüyen Aksam) Nedir?
    Süspansiyon sistemi; salıncak kolları, amortisörler, helezon yaylar, rot kolları, rotiller ve akslardan oluşur. Ön takımda oluşan en ufak boşluk veya gevşeklik, yüksek hızlarda direksiyonda titremeye, aracın sağa sola çekmesine ve lastiklerin içten/dıştan düzensiz aşınmasına neden olur.

    ÖN TAKIM VE SÜSPANSİYON BAKIM ADIMLARI
    - Hidrolik ve Amortisör Hassasiyet Analizi: Amortisör sızdırmazlıkları ve yay sönümleme katsayılarının dinamik test edilmesi.
    - Rotil ve Salıncak Burç Kontrolleri: Boşluk yapan ve tıkırtı sesine sebep olan kauçuk burçların tespiti ve pres makineleriyle değişimi.
    - 3D Lazer Teknolojili Rot Ayarı: Tekerleklerin açılarının kamber-kaster değerlerine göre bilgisayarla sıfırlanması.
    - Direksiyon Kutusu Detaylı Kontrolü: Direksiyon milindeki aşınmaların ve hidrolik pompa seslerinin önlenmesi.

    Sakarya'da Sürüş Güvenliği: HKN Auto
    Boşluk yapmış bir rot başı veya patlak bir amortisör, ani bir frende durma mesafenizi metrelerce uzatabilir. Sakarya Modern Sanayi bölgesinde yer alan HKN Auto, Merve Cahyir yönetiminde ön takım parçalarınızı büyük bir hassasiyetle denetler ve sadece ihtiyaç duyan parçaları orijinalleriyle değiştirerek can güvenliğinizi korur.`,
        date: '08 MAYIS 2026',
        category: 'Bakım',
        categoryTag: 'MAINTENANCE',
        serviceId: 'HKN-ONT3',
        author: 'Merve Cahyir',
        authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
        readTime: '4 dk okuma'
    },
    {
        id: 'hata-kodlari-obd2',
        title: 'Motor Mekanik Periyodik Bakım: Yılda Bir Kez Yapılması Gerekenler',
        excerpt: 'Aracınızın motor ömrünü garanti altına alacak periyodik bakım rutinleri. Sakarya HKN Auto periyodik bakım kapsamında motor yağı ve tüm filtre değişim detayları.',
        content: `Her otomobilin düzenli aralıklarla (genellikle 10.000 km veya 1 yılda bir) motor mekanik periyodik bakıma girmesi elzemdir. Kalitesiz yağlar ve tıkalı filtreler, motorun nefes almasını zorlaştırarak yakıt tüketimini artırır ve aşınmaları hızlandırır.

    Periyodik Bakım Neleri Kaplar?
    Periyodik bakım sadece yağ değişimi değil, aracın tüm sıvı ve emniyet noktalarının gözden geçirildiği genel bir muayenedir. Düzenli bakım yapılmayan motorlarda iç aksamda kurum bağlama ve aşırı sürtünme sonucu yağ yakma sorunları ortaya çıkar.

    HKN AUTO PERİYODİK BAKIM CHECKLIST
    - Motor Yağı ve Orijinal Filtre Değişimleri: Filtre grubunun (hava, yağ, polen ve yakıt filtreleri) yüksek süzme kapasiteli orijinal yedek parçalarla yenilenmesi.
    - Fren Balataları ve Disk Kalınlık Analizleri: Balataların ömrünün ölçülmesi ve disk yüzeylerinin pürüzsüzlüğünün kontrolü.
    - Sıvı Seviyesi ve Donma Derecesi Ölçümleri: Radyatör antifriz derecesi, fren hidroliği nem kontrolü ve direksiyon hidroliği seviyesi.
    - Elektrik ve Aydınlatma Check-up: Far, sinyal ve stop lambalarının kontrol edilip OBD beyninin taranması.

    Sakarya Motor Mekanik Periyodik Bakım
    Sakarya'da aracınızı güvenle teslim edeceğiniz periyodik bakım noktası olarak, her marka ve model araç için üreticinin tavsiye ettiği viskozitede (Örn: 0W-30, 5W-30) tam sentetik yağlar kullanmaktayız. Zamanında yapılan bir bakım, ileride binlerce liralık motor onarım masraflarının önüne geçer.`,
        date: '02 MAYIS 2026',
        category: 'Bakım',
        categoryTag: 'MAINTENANCE',
        serviceId: 'HKN-PER4',
        author: 'Merve Cahyir',
        authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
        readTime: '5 dk okuma'
    },
    {
        id: 'sanziman-omru',
        title: 'Sakarya Otomatik Şanzıman Bakım Onarım ve Revizyon Çözümleri',
        excerpt: 'Otomatik viteslerde vuruntu, kaçırma ve geçiş sorunlarına son. Çift kavramalı (DSG, EDC, Powershift) ve tork konvertörlü şanzıman revizyon süreçleri.',
        content: `Otomatik şanzımanlar, motorun ürettiği gücü tekerleklere en konforlu şekilde aktarmak için tasarlanmış mühendislik harikalarıdır. Titiz bir bakım yapılmadığında otomatik şanzıman beyni (Mekatronik) ve dişli grupları aşınarak pahalı arızalara yol açabilir.

    Otomatik Şanzıman Arıza Belirtileri:
    Vites geçişlerinde sarsıntı (vuruntu), devir yükseldiği halde aracın hızlanmaması (debriyaj kaçırma), geri vitese geçerken gecikme veya göstergede şanzıman arıza lambasının yanması en belirgin belirtilerdir.

    HKN AUTO’DA ŞANZIMAN ONARIMI VE REVİZYONU
    - Profesyonel Şanzıman Yağı Değişimi: Özel makinelerimizle şanzıman içindeki eski yağı tamamen vakumlayarak %100 oranında taze şanzıman yağı doldurma.
    - Solenoid ve Valf Gövdesi Testleri: Şanzıman beyninin basınç değerlerinin dijital test cihazlarında ölçülerek arızalı selenoidlerin yenilenmesi.
    - Tork Konvertörü (Türbin) Revizyonu: Sallantı ve titremelere sebep olan tork konvertörünün parçalara ayrılıp gerekli kaynak ve balans işlemlerinin yapılması.
    - Balata ve Çift Kavrama Değişimi: Debriyaj takımlarının milimetrik boşluk toleranslarında profesyonelce montajlanıp kalibre edilmesi.

    Sakarya Otomatik Şanzıman Uzmanı
    Otomatik şanzıman onarımı hata kabul etmeyen, tamamen steril bir ortamda ve özel ekipmanlarla yapılması gereken bir işlemdir. Sakarya Modern Sanayi bölgesinde HKN Auto olarak, otomatik şanzıman revizyonunda orijinal yedek parça ve yazılımsal adaptasyon garantisi sunuyoruz.`,
        date: '28 NİSAN 2026',
        category: 'Bakım',
        categoryTag: 'MAINTENANCE',
        serviceId: 'HKN-SAN5',
        author: 'Merve Cahyir',
        authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
        readTime: '6 dk okuma'
    },
    {
        id: 'rutin-kontrol-hizmeti',
        title: 'Güvenli Sürüş İçin 15 Nokta Detaylı Rutin Kontrol ve Check-up',
        excerpt: 'Yola çıkmadan önce mutlaka yapılması gereken hayati incelemeler. Sakarya’da en çok talep gören HKN Auto 15 Nokta Rutin Kontrol checklisti.',
        content: `Uzun yola çıkmadan önce, periyodik bakımların arasında veya mevsim geçişlerinde aracınızın genel durumunu analiz ettirmek sürüş güvenliğinizin en temel faktörüdür. HKN Auto olarak gerçekleştirdiğimiz 15 Nokta Detaylı Rutin Kontrol, en çok ihtiyaç duyulan emniyet kriterlerini güvence altına alır.

    15 Nokta Rutin Kontrol Nedir?
    Rutin kontrol; tahmin yürütmeden, tamamen ölçüm aletleri, test pompaları ve diagnostik bilgisayarlar kullanılarak aracın yürüyen aksamından elektronik ünitelerine kadar 15 hayati noktasının profesyonel gözle taranmasıdır.

    15 TEMEL KONTROL NOKTASI
    - Fren Sistem Muayenesi: Balata kalınlığı, ön ve arka disk aşınma yüzeyleri ile fren hidroliği nem kaynama noktası testi.
    - Motor ve Şanzıman Sıvıları: Motor yağı kalitesi, şanzıman sızdırmazlığı, hidrolik direksiyon yağ seviyesi.
    - Soğutma Sistemi ve Antifriz: Radyatör sızdırmazlığı, hortumların gevşekliği ve antifriz donma derecesi ölçümü.
    - Ön ve Arka Takım Güvenliği: Rot başı, salıncak burçları, aks körükleri ve amortisörlerin aşınma kontrolleri.
    - Lastikler ve Aşınma Payları: Lastik diş derinlikleri ve doğru basınç oranlarının ayarlanması.
    - Akü ve Şarj Entegrasyonu: Akü voltajı, marş gücü deşarj verisi ve alternatörün şarj dolum kapasitesi.
    - Aydınlatma ve Silecekler: Tüm iç/dış ampuller ile cam sileceklerinin süpürme kalitesi.
    - OBD-II Bilgisayarlı Beyin Taraması: Aracın hafızasında birikmiş pasif arıza kodlarının silinmesi ve aktif hataların raporlanması.

    Neden Sakarya’da En Çok Tercih Edilen Hizmet?
    Rutin kontroller sayesinde fark etmesi imkansız olan küçük bir hortum sızıntısı veya rot boşluğu erkenden keşfedilir. Bu işlem sizi yolda kalmaktan koruduğu gibi hararet yapma gibi yıkıcı motor hasarlarının önüne geçer. HKN Auto olarak işlem sonunda detaylı analiz raporunu dijital olarak teslim ediyoruz.`,
        date: '20 NİSAN 2026',
        category: 'Bakım',
        categoryTag: 'MAINTENANCE',
        serviceId: 'HKN-RUT1',
        author: 'Merve Cahyir',
        authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
        readTime: '5 dk okuma'
    }
];
function BlogView({ onSelectPost }) {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Tümü');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const categories = [
        'Tümü',
        'Bakım',
        'Elektronik',
        'Tanılama',
        'Performans'
    ];
    const postsPerPage = 3;
    const filteredPosts = selectedCategory === 'Tümü' ? BLOG_POSTS : BLOG_POSTS.filter((p)=>p.category === selectedCategory);
    const handleCategoryChange = (cat)=>{
        setSelectedCategory(cat);
        setCurrentPage(1);
    };
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-28 pb-20 bg-brand-bg relative min-h-screen",
        id: "blog-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/[0.02] blur-[150px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/[0.01]/10 blur-[120px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-20 bg-gradient-to-br from-[#131b26] to-brand-bg-dark border border-brand-container-hover/80 rounded-xl p-6 md:p-10 relative overflow-hidden group shadow-2xl",
                        id: "featured-blog-banner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[450px] h-[300px] bg-brand-orange/[0.025] blur-[120px] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-2xl flex flex-col items-start justify-between h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[9px] font-extrabold tracking-widest text-brand-orange bg-[#ff4d00]/10 border border-[#ff4d00]/30 px-2.5 py-1 rounded inline-block uppercase mb-5",
                                                children: "ÖNE ÇIKAN"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-display text-2xl md:text-3.5xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4 group-hover:text-brand-orange transition-colors duration-300",
                                                children: "Geleceğin Tanı Teknolojileri: Yapay Zeka ile Motor Analizi"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-secondary text-xs sm:text-sm md:text-base leading-relaxed mb-8",
                                                children: "Modern otomotiv dünyasında artık anahtar sesinden çok veri paketleri konuşuyor. HKN Auto olarak yeni nesil diagnostik süreçlerimizi nasıl evrilttiğimizi keşfedin. Yapay zeka veri modelleri ile otonom kontrol süreçlerini atölyemize entegre ettik."
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onSelectPost('ai-motor-analizi'),
                                        className: "font-mono text-xs font-black text-brand-orange flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-300 uppercase cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "DEVAMINI OKU"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-12 overflow-x-auto pb-3 scrollbar-none",
                        id: "blog-category-filters",
                        children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryChange(cat),
                                className: `px-5 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase shrink-0 transition-all border cursor-pointer ${selectedCategory === cat ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/15' : 'bg-[#111c2d] border-brand-container-hover text-brand-text-secondary hover:text-white hover:border-brand-text-secondary/40'}`,
                                children: cat
                            }, idx, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20",
                        id: "blog-grid-container",
                        children: currentPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelectPost(post.id),
                                className: "bg-[#131b26] border border-brand-container-hover/80 hover:border-brand-orange/30 rounded-lg p-6 flex flex-col justify-between cursor-pointer group shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-orange/5",
                                id: `blog-card-${post.id}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[10px] font-mono mb-4 text-brand-text-secondary/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-3.5 h-3.5 text-brand-orange"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 21
                                                            }, this),
                                                            post.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-orange font-bold uppercase tracking-wider",
                                                        children: post.categoryTag
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display font-bold text-white text-lg leading-snug mb-3 group-hover:text-brand-orange transition-colors",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-6",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pt-4 border-t border-brand-container-hover/60 text-xs font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-text-secondary/40 font-bold uppercase tracking-wider",
                                                children: [
                                                    "SERVIS ID: #",
                                                    post.serviceId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-orange group-hover:translate-x-1.5 transition-transform duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, post.id, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 text-xs font-mono font-bold",
                        id: "blog-pagination",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: currentPage === 1,
                                onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                                className: "p-2 px-3 rounded border border-brand-container-hover bg-[#111c2d] hover:bg-brand-container text-brand-text-secondary hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            Array.from({
                                length: totalPages
                            }, (_, i)=>i + 1).map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentPage(pageNum),
                                    className: `w-8 h-8 rounded border flex items-center justify-center transition-all cursor-pointer ${currentPage === pageNum ? 'border-brand-orange bg-[#ff4d00]/10 text-brand-orange font-bold font-mono' : 'border-brand-container-hover bg-[#111c2d] text-brand-text-secondary hover:text-white'}`,
                                    children: pageNum
                                }, pageNum, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: currentPage === totalPages,
                                onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                                className: "p-2 px-3 rounded border border-brand-container-hover bg-[#111c2d] hover:bg-brand-container text-brand-text-secondary hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogView.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/BlogView.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function BlogPostDetail({ postId, onBackToBlog, onSelectPost, onOpenBooking }) {
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLOG_POSTS"].find((p)=>p.id === postId) || __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLOG_POSTS"][0];
    // Pick related posts (excluding current post)
    const relatedPosts = __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLOG_POSTS"].filter((p)=>p.id !== post.id).slice(0, 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-28 pb-20 bg-brand-bg relative min-h-screen",
        id: "blog-detail-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-96 h-[500px] bg-brand-orange/[0.025] blur-[150px] pointer-events-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBackToBlog,
                        className: "group inline-flex items-center gap-2 text-brand-text-secondary hover:text-white mb-10 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer",
                        id: "back-to-blog-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 group-hover:-translate-x-1.5 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "TÜM YAZILARA DÖN"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 rounded-xl overflow-hidden bg-[#111c2d] border border-brand-container-hover relative aspect-[21/9] flex flex-col justify-end p-6 md:p-12 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.05] pointer-events-none",
                                style: {
                                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                                    backgroundSize: '30px 30px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-brand-bg-dark via-brand-bg-dark/60 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-4xl space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-bold tracking-widest text-white bg-brand-orange px-3 py-1.5 rounded uppercase block w-fit",
                                        children: post.categoryTag === 'ELECTRONICS' ? 'ELECTRONICS' : post.categoryTag === 'MAINTENANCE' ? 'MAINTENANCE' : 'TECHNOLOGY'
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-2xl sm:text-3xl md:text-4.5xl font-black text-white tracking-tight leading-tight",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 pt-4 border-t border-brand-container-hover/60 max-w-2xl text-xs font-mono select-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-text-secondary/50 block text-[9px] font-bold uppercase tracking-wider",
                                                        children: "AUTHOR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold block mt-0.5",
                                                        children: post.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-text-secondary/50 block text-[9px] font-bold uppercase tracking-wider",
                                                        children: "PUBLISHED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-orange font-bold block mt-0.5",
                                                        children: post.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    "        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 space-y-8",
                                id: "blog-content-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-brand-text-primary text-sm sm:text-base leading-relaxed space-y-6 font-sans",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-primary text-base sm:text-lg leading-relaxed font-sans font-medium first-letter:text-5xl first-letter:font-black first-letter:text-brand-orange first-letter:mr-3 first-letter:float-left first-letter:h-12 first-letter:font-display",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            post.content.split('\n').map((paragraph, index)=>{
                                                const trimmed = paragraph.trim();
                                                if (!trimmed) return null;
                                                // Check if it's a list item
                                                if (trimmed.startsWith('-')) {
                                                    const itemText = trimmed.replace(/^-\s*/, '');
                                                    const parts = itemText.split(': ');
                                                    if (parts.length > 1) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2.5 text-xs sm:text-sm font-sans text-brand-text-primary ml-4 my-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "w-4 h-4 text-brand-orange shrink-0 mt-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-white inline",
                                                                            children: [
                                                                                parts[0],
                                                                                ": "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-brand-text-secondary inline",
                                                                            children: parts.slice(1).join(': ')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 23
                                                        }, this);
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2.5 text-xs sm:text-sm font-sans text-brand-text-primary ml-4 my-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-4 h-4 text-brand-orange shrink-0 mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-text-secondary",
                                                                children: itemText
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this);
                                                }
                                                // Check if it's a heading
                                                const isHeading = trimmed.endsWith('?') || trimmed.includes('SÜREÇLERİ') || trimmed.includes('ÖZELLİKLER') || trimmed.includes('DETAYLI KONTROL') || trimmed.includes('KONTROL NOKTASI') || trimmed.includes('NELER YAPIYORUZ?') || trimmed.includes('ADIMLARI') || trimmed.includes('LABORATUVARIMIZDA') || trimmed.includes('DETAYLAR VE SÜREÇLER') || trimmed.includes('Nelerdir?') || trimmed.includes('Nedir?') || trimmed.includes('Belirtileri:') || trimmed.includes('YAKLAŞIMI') || trimmed.startsWith('TEKNİK') || trimmed.length < 65 && !trimmed.endsWith('.') && !trimmed.endsWith(',');
                                                if (isHeading) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-lg sm:text-xl md:text-2xl font-black text-white pt-6 pb-2 tracking-tight border-b border-brand-container-hover/35 mb-2",
                                                        children: trimmed
                                                    }, index, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this);
                                                }
                                                // Render as a paragraph
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-brand-text-primary text-sm sm:text-base leading-relaxed font-sans",
                                                    children: trimmed
                                                }, index, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                className: "border-l-4 border-brand-orange pl-6 my-10 italic text-white font-display text-lg md:text-xl font-medium tracking-wide",
                                                id: "article-quote",
                                                children: '"HKN Auto Sakarya mutfağında her mekanik parça ve elektronik entegrasyon sıfır hata prensibiyle işlenir."'
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-text-primary text-sm sm:text-base leading-relaxed font-sans",
                                                children: "HKN Auto çatısı altında sunduğumuz tüm servis standartları, her adımda raporlanabilir ve dijital olarak doğrulanabilir yapıdadır. Siz de aracınızın sağlığını güvence altına almak için Sakarya'daki uzman ekibimize başvurabilirsiniz."
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#131b26] border border-brand-container-hover/80 p-6 md:p-8 rounded-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl",
                                        id: "detail-rutin-kontrol-cta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 top-0 w-80 h-80 bg-brand-orange/[0.03] blur-[100px] pointer-events-none rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-lg shrink-0 scale-105",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-6 h-6 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-display font-black text-white text-lg",
                                                                children: "15 Nokta Rutin Kontrol & Check-up"
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-brand-text-secondary text-xs mt-1 leading-relaxed max-w-sm",
                                                                children: "Aracınızın tüm ön takım, fren, yürüyen aksam ve sıvı seviyelerini denetleyelim. Olası arızaların önüne geçecek en profesyonel gözle yanınızdayız."
                                                            }, void 0, false, {
                                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onOpenBooking,
                                                className: "bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3 px-6 rounded text-xs transition-all duration-300 shrink-0 whitespace-nowrap cursor-pointer shadow-lg shadow-brand-orange/15",
                                                children: "Hemen Randevu Alın"
                                            }, void 0, false, {
                                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-10",
                                id: "blog-sidebar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#131b26] border border-brand-container-hover/80 p-6 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-mono text-xs font-bold tracking-widest text-[#ff4d00] uppercase mb-6 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                " İLGİLİ DİĞER YAZILAR"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            id: "related-posts-sidebar-list",
                                            children: relatedPosts.map((rPost)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>onSelectPost(rPost.id),
                                                    className: "group flex flex-col items-start cursor-pointer border-b border-brand-container-hover/40 last:border-b-0 pb-5 last:pb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-mono text-brand-text-secondary/50 mb-1 block",
                                                            children: rPost.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-display font-bold text-white text-sm leading-snug group-hover:text-brand-orange transition-colors",
                                                            children: rPost.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-orange font-mono text-[10px] tracking-wider uppercase inline-flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: [
                                                                "HIZLI OKU ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, rPost.id, true, {
                                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/Services.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$WhyUs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/WhyUs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$ContactForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/ContactForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/Footer.tsx [app-ssr] (ecmascript)");
// New high-fidelity views added according to precision design requirements
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$ServicesView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/ServicesView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$AboutView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/AboutView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/BlogView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogPostDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/BlogPostDetail.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function App({ initialPage = 'home', initialBlogPostId = 'ai-motor-analizi' }) {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPage);
    const [selectedBlogPostId, setSelectedBlogPostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialBlogPostId);
    const [preselectedService, setPreselectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Periyodik Bakım Randevusu');
    const bookingFormRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((elementId)=>{
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, []);
    const handleSelectService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((serviceName)=>{
        setPreselectedService(serviceName);
        setCurrentPage('contact');
        window.scrollTo(0, 0);
    }, []);
    const handleOpenBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentPage('contact');
        window.scrollTo(0, 0);
    }, []);
    const handleAppointmentBooked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        window.scrollTo(0, 0);
    }, []);
    const handlePageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((page)=>{
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }, []);
    const handleSelectBlogPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((postId)=>{
        setSelectedBlogPostId(postId);
        setCurrentPage('blog-detail');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-brand-bg flex flex-col justify-between selection:bg-brand-orange selection:text-white overflow-x-hidden custom-scrollbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1000px] bg-gradient-to-b from-brand-orange/[0.03] via-transparent to-transparent pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onOpenBooking: handleOpenBooking,
                activePage: currentPage,
                onPageChange: handlePageChange
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow z-10",
                id: "main-content",
                children: [
                    currentPage === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full animate-page-enter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onOpenBooking: handleOpenBooking,
                                onScrollTo: handleScrollTo,
                                onPageChange: handlePageChange
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onSelectService: handleSelectService
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$WhyUs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$ContactForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                preselectedService: preselectedService,
                                onAppointmentBooked: handleAppointmentBooked,
                                bookingFormRef: bookingFormRef
                            }, void 0, false, {
                                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "home", true, {
                        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    currentPage === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full animate-page-enter",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$ServicesView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onOpenBooking: handleOpenBooking,
                            onScrollToContact: ()=>handlePageChange('contact')
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, "services", false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    currentPage === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full animate-page-enter",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$AboutView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onOpenBooking: handleOpenBooking
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, "about", false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    currentPage === 'blog' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full animate-page-enter",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onSelectPost: handleSelectBlogPost
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, "blog", false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    currentPage === 'blog-detail' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full animate-page-enter",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$BlogPostDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            postId: selectedBlogPostId,
                            onBackToBlog: ()=>handlePageChange('blog'),
                            onSelectPost: handleSelectBlogPost,
                            onOpenBooking: handleOpenBooking
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, "blog-detail", false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    currentPage === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full animate-page-enter pt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$ContactForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            preselectedService: preselectedService,
                            onAppointmentBooked: handleAppointmentBooked,
                            bookingFormRef: bookingFormRef,
                            isFullPage: true
                        }, void 0, false, {
                            fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, "contact", false, {
                        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onPageChange: handlePageChange
            }, void 0, false, {
                fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/remix_-hkn-auto-3/src/App.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=remix_-hkn-auto-3_src_0s0_6xs._.js.map