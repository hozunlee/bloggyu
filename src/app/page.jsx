import { fetchAPI } from "@/lib/api";
import Cards from "@/lib/components/Cards";
import axios from "axios";
import Script from "next/script";

async function getData() {
    const res = await fetchAPI("/posts", {
        populate: ["main_cover"],
        sort: ["id:desc"],
    });

    // const res2 = await axios(
    //     `${
    //         process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    //     }/api/posts?populate=*`
    // );

    // return { props: { posts: res2.data.data } };
    return { props: { posts: res } };
}

export default async function Page() {
    const {
        props: { posts },
    } = await getData();

    return (
        <div>
            {posts.map((card, i) => (
                <div key={card.publishedAt}>
                    <Cards card={card} />
                </div>
            ))}
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8220165683532908"
                crossorigin="anonymous"
            ></Script>
        </div>
    );
}
