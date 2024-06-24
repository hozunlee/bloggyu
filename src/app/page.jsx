import { fetchAPI } from '@/lib/api'
import Cards from '@/lib/components/Cards'

//캐싱만될때
// export const fetchCache = "force-no-store";
export const revalidate = 0 // seconds
// export const dynamic = "force-dynamic";

const ITEMS_PER_PAGE = 5

async function getData() {
	const page = 1
	const start = (page - 1) * ITEMS_PER_PAGE
	//     // const res2 = await axios(
	//     //     `${
	//     //         process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
	//     //     }/api/posts?populate=*`
	//     // );

	//     // return { props: { posts: res2.data.data } };

	const res = await fetchAPI('/posts', {
		fields: ['id', 'title', 'desc', 'publishedAt', 'keyword', 'main_cover'],
		populate: ['main_cover'],
		sort: ['id:desc'],
		'pagination[start]': 0,
		'pagination[limit]': ITEMS_PER_PAGE
	})

	return { props: { posts: res } }
}

export default async function Home() {
	const {
		props: { posts }
	} = await getData()

	return (
		<>
			<h1 class="font-bold text-2xl text-center py-5">
				차량 렌트 전 필수 체크! 자동차 제원 정보 공략집{' '}
			</h1>
			{posts.map((card, i) => (
				<div key={card.publishedAt}>
					<Cards card={card} />
				</div>
			))}
		</>
	)
}
