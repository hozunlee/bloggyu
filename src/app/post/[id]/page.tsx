import { fetchAPI } from "@/lib/api";
import NextImage from "@/lib/components/NextImage";
import dayjs from "dayjs";

import Markdown from "@/lib/markdown/Markdown";

async function getData(id) {
    const res = await fetchAPI(`/posts/${id}`, {
        populate: ["main_cover"],
    });

    return { props: { post: res.data } };
}

export default async function Detail({ params }) {
    const {
        props: { post },
    } = await getData(params.id);

    const imgURL = post.attributes.main_cover;
    const publishedAt = dayjs(post.attributes.publishedAt).format("YY/MM/DD");

    return (
        <div className="container">
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
