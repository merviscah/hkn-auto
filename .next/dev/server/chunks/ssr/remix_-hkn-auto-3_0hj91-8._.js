module.exports = [
"[project]/remix_-hkn-auto-3/src/components/JsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data).replace(/</g, '\\u003c')
        }
    }, void 0, false, {
        fileName: "[project]/remix_-hkn-auto-3/src/components/JsonLd.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absoluteUrl",
    ()=>absoluteUrl,
    "blogSeo",
    ()=>blogSeo,
    "buildMetadata",
    ()=>buildMetadata,
    "localBusinessSchema",
    ()=>localBusinessSchema,
    "pages",
    ()=>pages,
    "seoKeywords",
    ()=>seoKeywords,
    "siteConfig",
    ()=>siteConfig,
    "websiteSchema",
    ()=>websiteSchema
]);
const siteConfig = {
    name: 'HKN Auto',
    url: 'https://hknauto.com',
    locale: 'tr_TR',
    phone: '+90 533 054 04 36',
    phoneHref: '+905330540436',
    address: 'Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Modern Sanayi, Sakarya',
    city: 'Sakarya',
    district: 'Serdivan',
    image: '/images/hkn-auto-sakarya-oto-servis.jpg',
    logo: '/images/hkn-logo.png'
};
const seoKeywords = [
    'Sakarya oto servis',
    'Sakarya araç bakım',
    'oto ekspertiz Sakarya',
    'Serdivan oto servis',
    'araç bakım hizmetleri',
    'detaylı araç temizliği',
    'oto bakım merkezi',
    'Sakarya motor mekanik',
    'Sakarya periyodik bakım',
    'Sakarya otomatik şanzıman',
    'Sakarya oto elektrik',
    'bilgisayarlı arıza tespiti Sakarya',
    'Sakarya modern sanayi oto servis'
];
const pages = {
    home: {
        title: 'HKN Auto | Sakarya Oto Servis ve Araç Bakım Merkezi',
        description: 'HKN Auto, Sakarya ve Serdivan bölgesinde motor mekanik, periyodik bakım, oto ekspertiz, elektronik arıza tespiti ve otomatik şanzıman hizmetleri sunar.',
        path: '/',
        keywords: [
            'Sakarya oto servis',
            'Sakarya araç bakım',
            'oto bakım merkezi',
            'Serdivan oto servis'
        ]
    },
    services: {
        title: 'Sakarya Araç Bakım Hizmetleri | HKN Auto',
        description: 'Sakarya araç bakım hizmetleri: motor revizyonu, ön takım tamiri, periyodik bakım, oto elektrik, oto ekspertiz ve otomatik şanzıman çözümleri.',
        path: '/hizmetler',
        keywords: [
            'Sakarya araç bakım',
            'araç bakım hizmetleri',
            'oto ekspertiz Sakarya'
        ]
    },
    about: {
        title: 'Hakkımızda | HKN Auto Sakarya Oto Bakım Merkezi',
        description: 'HKN Auto Sakarya Modern Sanayi konumunda profesyonel oto bakım, bilgisayarlı arıza tespiti ve mekanik onarım standartlarıyla hizmet verir.',
        path: '/hakkimizda',
        keywords: [
            'oto bakım merkezi',
            'Sakarya oto servis',
            'Serdivan oto servis'
        ]
    },
    blog: {
        title: 'Oto Bakım Rehberi | HKN Auto Sakarya Blog',
        description: 'Sakarya oto servis, araç bakım, periyodik bakım, motor mekanik ve oto ekspertiz konularında HKN Auto uzman rehberleri.',
        path: '/blog',
        keywords: [
            'Sakarya oto servis',
            'Sakarya araç bakım',
            'oto ekspertiz Sakarya'
        ]
    },
    contact: {
        title: 'İletişim ve Randevu | HKN Auto Sakarya',
        description: 'Sakarya oto servis randevusu için HKN Auto ile iletişime geçin. Serdivan ve Sakarya çevresinde profesyonel araç bakım hizmetleri.',
        path: '/iletisim',
        keywords: [
            'Serdivan oto servis',
            'Sakarya oto servis',
            'Sakarya araç bakım'
        ]
    }
};
const blogSeo = [
    {
        id: 'ai-motor-analizi',
        title: 'Sakarya Motor Mekanik Bakım ve Motor Revizyonu | HKN Auto',
        description: 'Sakarya motor mekanik bakım, motor revizyonu ve bilgisayarlı tanı süreçleri için HKN Auto uzman rehberi.',
        path: '/blog/ai-motor-analizi'
    },
    {
        id: 'yazilim-guncellemeleri',
        title: 'Sakarya Oto Elektrik ve ECU Programlama | HKN Auto',
        description: 'Sakarya oto elektrik, ECU programlama, CAN-BUS arıza tespiti ve elektronik araç bakım çözümleri.',
        path: '/blog/yazilim-guncellemeleri'
    },
    {
        id: 'fren-bakimi',
        title: 'Sakarya Ön Takım Tamiri ve Süspansiyon Bakımı | HKN Auto',
        description: 'Sakarya ön takım tamiri, amortisör kontrolü, rot ayarı ve güvenli sürüş için yürüyen aksam bakım rehberi.',
        path: '/blog/fren-bakimi'
    },
    {
        id: 'hata-kodlari-obd2',
        title: 'Sakarya Periyodik Bakım ve Motor Kontrol Listesi | HKN Auto',
        description: 'Sakarya periyodik bakım kapsamında motor yağı, filtreler, fren sistemi ve bilgisayarlı arıza kontrol detayları.',
        path: '/blog/hata-kodlari-obd2'
    },
    {
        id: 'sanziman-omru',
        title: 'Sakarya Otomatik Şanzıman Bakım ve Revizyon | HKN Auto',
        description: 'Sakarya otomatik şanzıman bakım, yağ değişimi, mekatronik kontrol ve revizyon süreçleri.',
        path: '/blog/sanziman-omru'
    },
    {
        id: 'rutin-kontrol-hizmeti',
        title: 'Sakarya Oto Ekspertiz ve 15 Nokta Rutin Kontrol | HKN Auto',
        description: 'Oto ekspertiz Sakarya aramalarında HKN Auto 15 nokta rutin kontrol, fren, ön takım, akü ve OBD tarama hizmetleri.',
        path: '/blog/rutin-kontrol-hizmeti'
    }
];
function absoluteUrl(path = '/') {
    return new URL(path, siteConfig.url).toString();
}
function buildMetadata(page) {
    const url = absoluteUrl(page.path);
    const title = page.title;
    const description = page.description;
    const keywords = [
        ...seoKeywords,
        ...page.keywords ?? []
    ];
    return {
        metadataBase: new URL(siteConfig.url),
        title,
        description,
        keywords,
        applicationName: siteConfig.name,
        authors: [
            {
                name: siteConfig.name
            }
        ],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        alternates: {
            canonical: url
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1
            }
        },
        openGraph: {
            type: page.type ?? 'website',
            locale: siteConfig.locale,
            url,
            siteName: siteConfig.name,
            title,
            description,
            images: [
                {
                    url: siteConfig.image,
                    width: 1408,
                    height: 768,
                    alt: 'HKN Auto Sakarya oto servis ve araç bakım merkezi'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [
                siteConfig.image
            ]
        },
        category: 'automotive'
    };
}
function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        '@id': `${siteConfig.url}/#local-business`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.image),
        logo: absoluteUrl(siteConfig.logo),
        telephone: siteConfig.phone,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Modern Sanayi',
            addressLocality: 'Sakarya',
            addressRegion: 'Sakarya',
            addressCountry: 'TR'
        },
        areaServed: [
            'Sakarya',
            'Serdivan',
            'Adapazarı',
            'Erenler',
            'Arifiye'
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                opens: '08:30',
                closes: '18:00'
            }
        ],
        makesOffer: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Sakarya oto servis'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Sakarya araç bakım'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Oto ekspertiz Sakarya'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Detaylı araç temizliği'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Otomatik şanzıman bakım ve revizyon'
                }
            }
        ],
        sameAs: [
            'https://wa.me/905330540436'
        ]
    };
}
function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: 'tr-TR',
        publisher: {
            '@id': `${siteConfig.url}/#local-business`
        }
    };
}
}),
"[project]/remix_-hkn-auto-3/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/components/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/remix_-hkn-auto-3/src/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pages"].home),
    icons: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].logo,
        apple: __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].logo
    },
    formatDetection: {
        telephone: true,
        address: true,
        email: true
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "tr-TR",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    data: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localBusinessSchema"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["websiteSchema"])()
                    ]
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/app/layout.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$remix_$2d$hkn$2d$auto$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "root",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/remix_-hkn-auto-3/src/app/layout.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/remix_-hkn-auto-3/src/app/layout.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/remix_-hkn-auto-3/src/app/layout.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/remix_-hkn-auto-3/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/remix_-hkn-auto-3/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/remix_-hkn-auto-3/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=remix_-hkn-auto-3_0hj91-8._.js.map