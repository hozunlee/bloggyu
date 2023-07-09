import { Inter } from "next/font/google";
import "@picocss/pico";
import "material-icons/iconfont/material-icons.css";
import "./globals.css";

import Nav from "@/lib/components/nav/Nav";
import GoogleAnalytics from "../lib/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Bloggyu",
    verification: {
        // google: "your code",
        other: {
            "naver-site-verification":
                "1500bbc20b27929a66dc448502bf5742451cc40c",
        },
        naver: "1500bbc20b27929a66dc448502bf5742451cc40c",
    },
    description:
        "bloggyu 는 금융 정보에 관한 것을 다룹니다. 금융, 세금, 세법, 돈에 대한 모든 것",
    metadataBase: new URL("https://www.bloggyu.com"),
    article: true,
    generator: "Next.js",
    applicationName: "Bloggyu",
    referrer: "origin-when-cross-origin",
    keywords: ["주식", "세법", "세금", "금융"],
    authors: [
        { name: "moon" },
        { name: "moon", url: "https://www.bloggyu.com" },
    ],
    colorScheme: "dark",
    creator: "moon",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Bloggyu",
        description:
            "Bloggyu covers all the financial information in everyday life. Finance, taxes, tax laws, anything about money",
        url: "https://www.bloggyu.com",
        siteName: "Bloggyu",
        images: [
            {
                url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/thumbnail_1_1688543451657.png",
                width: 800,
                height: 600,
            },
            {
                url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/1_1688543451622.png",
                width: 1800,
                height: 1600,
                alt: "Bloggyu maon",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
            <body className={inter.className}>
                <div className="container">
                    <Nav />
                    {children}
                    <p className="footer">
                        © 2023 Hojun Lee. All Rights Reserved
                    </p>
                </div>
            </body>
        </html>
    );
}
