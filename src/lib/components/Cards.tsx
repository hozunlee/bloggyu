"use client";

import Link from "next/link";
import NextImage from "./NextImage";
import dayjs from "dayjs";

export default function Cards({ card }) {
    const publishedAt = dayjs(card.publishedAt).format("MM/DD/YY");

    const keywords = card.attributes.keyword.replace(/(\s*)/g, "").split(",");

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
                <div className="card-time">{publishedAt}</div>
                <footer>
                    {keywords.map((word, i) => (
                        <span className="card-keyword" key={i}>
                            {word}
                        </span>
                    ))}
                </footer>
            </article>
        </div>
    );
}
