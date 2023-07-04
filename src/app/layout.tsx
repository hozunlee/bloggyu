import "./globals.css";
import { Inter } from "next/font/google";
import "@picocss/pico";
import "material-icons/iconfont/material-icons.css";

import Nav from "@/lib/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <Nav />
                    {children}
                    <p>© 2023 Hojun Lee. All Rights Reserved</p>
                </div>
            </body>
        </html>
    );
}
