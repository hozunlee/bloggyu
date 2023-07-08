import { fetchAPI } from "@/lib/api";
import Cards from "@/lib/components/Cards";
import axios from "axios";

async function getData() {
    const res = await fetchAPI("/posts", {
        populate: ["main_cover"],
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

    // const post = await axios(
    //     `${
    //         process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    //     }/api/posts`
    // );

    // console.log("post.data.data.id :>> ", post.data.data);

    // const res = post.data.data.map((item) => item.id);
    // console.log("res :>> ", res);
    return (
        <div>
            {posts.map((card, i) => (
                <div key={card.publishedAt}>
                    <Cards card={card} />
                </div>
            ))}
        </div>
    );
}
