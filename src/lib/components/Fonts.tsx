import { JetBrains_Mono as FontMono } from "@next/font/google";
import localFont from "@next/font/local";

const fontSans = localFont({
    variable: "--font-sans",
    src: [
        {
            path: "../fonts/NotoSansKR-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/NotoSansKR-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/NotoSansKR-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/NotoSansKR-Light.otf",
            weight: "300",
            style: "normal",
        },
    ],
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export default function Fonts() {
    return (
        <style jsx global>{`
            :root {
                --font-sans: ${fontSans.style.fontFamily};
                --font-mono: ${fontMono.style.fontFamily};
            }
        `}</style>
    );
}
