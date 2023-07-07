import axios from "axios";

import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async () => {
    // const productNos = [1, 2, 3, 4, 5, 6, 7, 8]; // fetch를 통해 데이터 가져오는 구간

    const getApiData = await axios(
        `${
            process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
        }/api/posts`
    );

    const sitemapFields = getApiData?.data.data.map((item) => {
        return {
            loc: `${process.env.NEXT_PUBLIC_BLOG_URL}/post/${item.id}`, // 페이지 경로
            lastmod: new Date().toISOString(), // 최근변경일자
            changefreq: "daily", // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
            priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
        };
    });

    return getServerSideSitemap(sitemapFields);
};

export default () => {
    //
};
