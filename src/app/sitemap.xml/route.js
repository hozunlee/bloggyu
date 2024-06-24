import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const fetchAllData = async () => {
    let allData = [];
    let page = 1;
    let pageSize = 100; // 한번에 가져올 데이터수

    while (true) {
        try {
            const response = await fetch(
                `${baseURL}/api/posts?sort=asc?fields[0]=id&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id:asc`
            );
            const result = await response.json();

            //result.data

            result.data.forEach((item) => {
                allData.push(item.id);
            });

            if (result.data.length === 0) {
                break;
            }

            page++;
        } catch (error) {
            console.error(`sitemap : Error fetching data for page ${page}:`, error);
            break;
        }
    }

    return allData;
};

export async function GET(request) {
    const ids = await fetchAllData();
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')

    // const getApiData = await axios(
    //     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`
    // );

    const sitemapFields = ids.map((id) => {
        return {
            loc: `${process.env.NEXT_PUBLIC_BLOG_URL}/post/${id}`, // 페이지 경로
            lastmod: new Date().toISOString(), // 최근변경일자
            changefreq: "daily", // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
            priority: 0.9, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
        };
    });
    return getServerSideSitemap(sitemapFields);
}

// import axios from "axios";

// import { getServerSideSitemap } from "next-sitemap";

// export const getServerSideProps = async (context) => {
//     // const productNos = [1, 2, 3, 4, 5, 6, 7, 8]; // fetch를 통해 데이터 가져오는 구간
//     const post = await axios(
//         `${
//             process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
//         }/api/posts`
//     );

//     const sitemapFields = post?.data.map((item) => {
//         return {
//             loc: `${process.env.NEXT_PUBLIC_BLOG_URL}/post/${item.id}`, // 페이지 경로
//             lastmod: new Date().toISOString(), // 최근변경일자
//             changefreq: "daily", // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
//             priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
//         };
//     });

//     return getServerSideSitemap(context, sitemapFields);
// };

// export default () => {
//     //
// };
