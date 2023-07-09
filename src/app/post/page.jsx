import { fetchAPI } from "@/lib/api";
import Cards from "@/lib/components/Cards";

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

export default async function MainPage() {
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
        </div>
    );
}
