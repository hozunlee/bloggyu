import { fetchAPI } from "@/lib/api";
import Cards from "@/lib/components/Cards";

async function getData() {
    const res = await fetchAPI("/posts", {
        populate: ["main_cover"],
    });

    return { props: { posts: res.data } };
}

const data = [
    {
        id: 9,
        attributes: {
            title: "테스트",
            views: 0,
            createdAt: "2023-07-04T06:39:17.768Z",
            updatedAt: "2023-07-04T07:19:52.623Z",
            publishedAt: "2023-07-04T07:19:52.205Z",
            keyword: "안녕, 하, 세, 요",
            content: "# 테스트입니다.\n\n이걸활용하여 만들예정\n",
            desc: "이것은 부제목 입니다.",
            main_cover: {
                data: [
                    {
                        id: 13,
                        attributes: {
                            name: "download.jpeg",
                            alternativeText: null,
                            caption: null,
                            width: 620,
                            height: 827,
                            formats: {
                                small: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/small_download_1688477378559.jpeg",
                                    hash: 1688477378559,
                                    mime: "image/jpeg",
                                    name: "small_download.jpeg",
                                    path: null,
                                    size: 23.82,
                                    width: 375,
                                    height: 500,
                                },
                                medium: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/medium_download_1688477378558.jpeg",
                                    hash: 1688477378558,
                                    mime: "image/jpeg",
                                    name: "medium_download.jpeg",
                                    path: null,
                                    size: 54,
                                    width: 562,
                                    height: 750,
                                },
                                xsmall: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/xsmall_download_1688477378560.jpeg",
                                    hash: 1688477378560,
                                    mime: "image/jpeg",
                                    name: "xsmall_download.jpeg",
                                    path: null,
                                    size: 1.06,
                                    width: 48,
                                    height: 64,
                                },
                                thumbnail: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/thumbnail_download_1688477378541.jpeg",
                                    hash: 1688477378541,
                                    mime: "image/jpeg",
                                    name: "thumbnail_download.jpeg",
                                    path: null,
                                    size: 3.47,
                                    width: 117,
                                    height: 156,
                                },
                            },
                            hash: "1688477378525",
                            ext: ".jpeg",
                            mime: "image/jpeg",
                            size: 66.97,
                            url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/download_1688477378525.jpeg",
                            previewUrl: null,
                            provider: "strapi-provider-upload-supabase-v4",
                            provider_metadata: null,
                            createdAt: "2023-07-04T22:29:39.267Z",
                            updatedAt: "2023-07-04T22:29:39.267Z",
                        },
                    },
                ],
            },
        },
    },
    {
        id: 10,
        attributes: {
            title: "제목입니다.",
            views: 0,
            createdAt: "2023-07-04T09:25:27.441Z",
            updatedAt: "2023-07-04T09:26:38.924Z",
            publishedAt: "2023-07-04T09:26:38.507Z",
            keyword: "세법, ",
            content:
                "# 안녕하세요\n\n##  부제\n\n###  부제목\n\n> 안녕하세요.\n\n",
            desc: "이것은 부제목 입니다.",
            main_cover: {
                data: [
                    {
                        id: 13,
                        attributes: {
                            name: "download.jpeg",
                            alternativeText: null,
                            caption: null,
                            width: 620,
                            height: 827,
                            formats: {
                                small: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/small_download_1688477378559.jpeg",
                                    hash: 1688477378559,
                                    mime: "image/jpeg",
                                    name: "small_download.jpeg",
                                    path: null,
                                    size: 23.82,
                                    width: 375,
                                    height: 500,
                                },
                                medium: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/medium_download_1688477378558.jpeg",
                                    hash: 1688477378558,
                                    mime: "image/jpeg",
                                    name: "medium_download.jpeg",
                                    path: null,
                                    size: 54,
                                    width: 562,
                                    height: 750,
                                },
                                xsmall: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/xsmall_download_1688477378560.jpeg",
                                    hash: 1688477378560,
                                    mime: "image/jpeg",
                                    name: "xsmall_download.jpeg",
                                    path: null,
                                    size: 1.06,
                                    width: 48,
                                    height: 64,
                                },
                                thumbnail: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/large_KakaoTalk_Image_2023-04-05-16-31-39_002_1688483438661.jpeg",
                                    hash: 1688477378541,
                                    mime: "image/jpeg",
                                    name: "thumbnail_download.jpeg",
                                    path: null,
                                    size: 3.47,
                                    width: 117,
                                    height: 156,
                                },
                            },
                            hash: "1688477378525",
                            ext: ".jpeg",
                            mime: "image/jpeg",
                            size: 66.97,
                            url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/download_1688477378525.jpeg",
                            previewUrl: null,
                            provider: "strapi-provider-upload-supabase-v4",
                            provider_metadata: null,
                            createdAt: "2023-07-04T22:29:39.267Z",
                            updatedAt: "2023-07-04T22:29:39.267Z",
                        },
                    },
                ],
            },
        },
    },
    {
        id: 11,
        attributes: {
            title: "배포 테스트 입니다.",
            views: 0,
            createdAt: "2023-07-04T22:30:08.924Z",
            updatedAt: "2023-07-04T22:30:16.994Z",
            publishedAt: "2023-07-04T22:30:16.979Z",
            keyword: "김, 치, 왕입니다.",
            content:
                "# 안녕하세요 + 누구세요? + ![download.jpeg](https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/download_1688477378525.jpeg)",
            desc: "이것은 부제목 입니다.",
            main_cover: {
                data: [
                    {
                        id: 13,
                        attributes: {
                            name: "download.jpeg",
                            alternativeText: null,
                            caption: null,
                            width: 620,
                            height: 827,
                            formats: {
                                small: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/small_download_1688477378559.jpeg",
                                    hash: 1688477378559,
                                    mime: "image/jpeg",
                                    name: "small_download.jpeg",
                                    path: null,
                                    size: 23.82,
                                    width: 375,
                                    height: 500,
                                },
                                medium: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/medium_download_1688477378558.jpeg",
                                    hash: 1688477378558,
                                    mime: "image/jpeg",
                                    name: "medium_download.jpeg",
                                    path: null,
                                    size: 54,
                                    width: 562,
                                    height: 750,
                                },
                                xsmall: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/xsmall_download_1688477378560.jpeg",
                                    hash: 1688477378560,
                                    mime: "image/jpeg",
                                    name: "xsmall_download.jpeg",
                                    path: null,
                                    size: 1.06,
                                    width: 48,
                                    height: 64,
                                },
                                thumbnail: {
                                    ext: ".jpeg",
                                    url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/KakaoTalk_Image_2023-01-31-14-09-18_1688484034575.jpeg",
                                    hash: 1688477378541,
                                    mime: "image/jpeg",
                                    name: "thumbnail_download.jpeg",
                                    path: null,
                                    size: 3.47,
                                    width: 117,
                                    height: 156,
                                },
                            },
                            hash: "1688477378525",
                            ext: ".jpeg",
                            mime: "image/jpeg",
                            size: 66.97,
                            url: "https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/download_1688477378525.jpeg",
                            previewUrl: null,
                            provider: "strapi-provider-upload-supabase-v4",
                            provider_metadata: null,
                            createdAt: "2023-07-04T22:29:39.267Z",
                            updatedAt: "2023-07-04T22:29:39.267Z",
                        },
                    },
                ],
            },
        },
    },
];

export default async function Page() {
    // const {
    //     props: { posts },
    // } = await getData();

    return (
        <div>
            {data.map((card, i) => (
                <Cards card={card} />
            ))}
        </div>
    );
}
