import Script from "next/script";
import MainPage from "@/lib/components/MainPage";
export const dynamic = "error";
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
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8220165683532908"
                crossorigin="anonymous"
            ></Script>
        </div>
    );
}
