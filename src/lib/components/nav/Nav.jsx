"use client";

import Link from "next/link";

export default function Nav(params) {
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
                        <strong className="">
                            신차 장기렌트 전문가 규팀장
                        </strong>
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
