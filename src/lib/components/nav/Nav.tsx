"use client";

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
                    <strong>Tex Bloggyu</strong>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" className="secondary">
                        로고
                    </a>
                </li>
            </ul>
        </nav>
    );
}
