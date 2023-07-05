"use client";

import Link from "next/link";

export default function Nav(params: type) {
    return (
        <nav>
            <ul>
                <li>
                    <span className="material-icons">menu</span>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={"/"}>
                        <strong className="">Bloggyu</strong>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" className="secondary">
                        <img src="/icon.png" alt="" className="main-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
