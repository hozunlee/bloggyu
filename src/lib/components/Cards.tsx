"use client";

import Link from "next/link";
import NextImage from "./NextImage";

export default function Cards({ card }) {
    console.log("card :>> ", card);
    return (
        <div>
            <article className="">
                <header>
                    <Link href={`/post/`}>
                        <div className="post-thumbnail">
                            <NextImage image={card.attributes.main_cover} />
                        </div>
                    </Link>
                </header>
                <h2 className="card-title">{card.attributes.title}</h2>
                <p className="card-desc">{card.attributes.desc}</p>
                {/* <footer>Footer</footer> */}
            </article>
        </div>
    );
}
