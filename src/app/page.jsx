import Script from "next/script";
import MainPage from "@/lib/components/MainPage";

// async function getData() {
//     const res = await fetchAPI("/posts", {
//         populate: ["main_cover"],
//         sort: ["id:desc"],
//     });

//     // const res2 = await axios(
//     //     `${
//     //         process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
//     //     }/api/posts?populate=*`
//     // );

//     // return { props: { posts: res2.data.data } };
//     return { props: { posts: res } };
// }

export default async function Page() {
    // const {
    //     props: { posts },
    // } = await getData();

    return (
        <div>
            <MainPage />
        </div>
    );
}
