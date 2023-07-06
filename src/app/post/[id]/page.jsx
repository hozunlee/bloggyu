import { fetchAPI } from "@/lib/api";
import NextImage from "@/lib/components/NextImage";
import dayjs from "dayjs";

import Markdown from "@/lib/markdown/Markdown";
import { cache } from "react";

// async function getData(id) {
//     const res = await fetchAPI(`/posts/${id}`, {
//         populate: ["main_cover"],
//     });

//     return { props: { post: res } };
// }

const getData = cache(async (id) => {
    // custom api without fetch

    const res = await fetchAPI(`/posts/${id}`, {
        populate: ["main_cover"],
    });

    return { props: { post: res } };
});

export const generateMetadata = async ({ params }) => {
    const {
        props: { post },
    } = await getData(params.id);

    return {
        title: `${post?.attributes.title} | Bloggyu`,
        description: post.attributes.desc,
        shareImage: post.attributes.main_cover.data[0].attributes.url,
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
            title: post?.attributes.title,
            description: post.attributes.desc,
            url: `https://www.bloggyu.com/post/${post.id}`,
            siteName: "Bloggyu",
            images: [
                {
                    url: post.attributes.main_cover.data[0].attributes.formats
                        .thumbnail.url,
                    width: 800,
                    height: 600,
                },
                {
                    url: post.attributes.main_cover.data[0].attributes.url,
                    width: 1800,
                    height: 1600,
                    alt: post?.attributes.title,
                },
            ],
            locale: "ko_KR",
            type: "website",
        },
    };
};

export default async function Detail({ params }) {
    const {
        props: { post },
    } = await getData(params.id);

    const imgURL = post.attributes.main_cover;
    const publishedAt = dayjs(post.attributes.publishedAt).format("YY/MM/DD");

    return (
        <div className="">
            <main className="detail-box">
                <hgroup>
                    <h1>{post.attributes.title}</h1>
                    <h2>{publishedAt}</h2>
                </hgroup>
                <figure>
                    <div className="post-cover">
                        <NextImage image={imgURL} />
                    </div>
                    <div className="post-desc">{post.attributes.desc}</div>
                    <Markdown linkTarget="_blank">
                        {post.attributes.content}
                    </Markdown>
                </figure>
            </main>
        </div>
    );
}
