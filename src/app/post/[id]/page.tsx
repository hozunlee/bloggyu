import { fetchAPI } from "@/lib/api";
import NextImage from "@/lib/components/NextImage";
import dayjs from "dayjs";

import Markdown from "@/lib/markdown/Markdown";
import MoonSeo from "@/lib/components/MoonSEO";

async function getData(id) {
    const res = await fetchAPI(`/posts/${id}`, {
        populate: ["main_cover"],
    });

    return { props: { post: res } };
}

export default async function Detail({ params }) {
    const {
        props: { post },
    } = await getData(params.id);

    const imgURL = post.attributes.main_cover;
    const publishedAt = dayjs(post.attributes.publishedAt).format("YY/MM/DD");

    const seo = {
        metaTitle: post.attributes.title,
        metaDescription: post.attributes.desc,
        shareImage: imgURL.data[0].attributes.url,
        article: true,
    };

    return (
        <div className="container">
            <MoonSeo title={`${post.attributes.title} | Bloggyu`} />
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
                {/* <div>{res.title}</div>
                <div>{res.name}</div> */}
            </main>
        </div>
    );
}
