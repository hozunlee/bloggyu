import { fetchAPI } from "@/lib/api";
import Cards from "@/lib/components/Cards";
import axios from "axios";

async function getData() {
    const res = await fetchAPI("/posts", {
        populate: ["main_cover"],
        sort: ["id:desc"],
    });

    // const res2 = await axios(
    //     `${
    //         process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    //     }/api/posts?populate=*?sort=id:desc`
    // );

    // return { props: { posts: res2.data.data } };
    return { props: { posts: res } };
}

export default async function MainPage() {
    const {
        props: { posts },
    } = await getData();

    const res2 = await axios(
        `${
            process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
        }/api/posts?populate%5B0%5D=main_cover&sort%5B0%5D=id%3Adesc`
    );

    const result = res2.data.data;
    return (
        <div>
            {result.map((card, i) => (
                <div key={card.publishedAt}>
                    <Cards card={card} />
                </div>
            ))}
        </div>
    );
}
