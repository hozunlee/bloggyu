"use client";

import Link from "next/link";
import NextImage from "./NextImage";
import dayjs from "dayjs";

export default function Cards({ card }) {
    const publishedAt = dayjs(card.attributes.publishedAt).format("YY/MM/DD");

    const keywords = card.attributes.keyword.replace(/(\s*)/g, "").split(",");

    const shortDesc = card.attributes.desc.slice(0, 100);

    return (
        <div>
            <article className="">
                <header>
                    <Link href={`/post/${card.id}`}>
                        <div className="post-thumbnail">
                            <NextImage image={card.attributes.main_cover} />
                        </div>
                    </Link>
                </header>
                <h2 className="card-title">{card.attributes.title}</h2>
                <p>
                    {shortDesc}... <Link href={`/post/${card.id}`}>더보기</Link>
                </p>
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
