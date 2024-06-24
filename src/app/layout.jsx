import { Inter } from 'next/font/google'
import '@picocss/pico'
import 'material-icons/iconfont/material-icons.css'
import './globals.css'

import Nav from '@/lib/components/nav/Nav'

import GoogleAnalytics from '../lib/components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: '신차 장기렌트 규팀장 | 자동차 최신 제원 그리고 가격 정보까지 ',
	verification: {
		// google: "your code",
		other: {
			'naver-site-verification': '1500bbc20b27929a66dc448502bf5742451cc40c'
		},
		naver: '1500bbc20b27929a66dc448502bf5742451cc40c'
	},
	description:
		'규팀장은 신차 장기렌트에 대한 모든 것을 다룹니다. 장기렌트, 비용처리, 장기리스에 대한 모든 것. 새로운 자동차의 제원 정보와 가격정보까지! 자동차 제원 정보 한눈에! 엔진, 치수, 성능 등 차량 상세 스펙을 확인하세요. 구매 전 필수 체크사항, 차종 간 비교까지 제원표로 한 번에 확인할 수 있습니다.',
	metadataBase: new URL('https://www.bloggyu.com'),
	article: true,
	generator: 'Next.js',
	applicationName: '신차 장기렌트 규팀장',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'장기렌트',
		'비용처리',
		'세금',
		'금융',
		'장기렌트카',
		'모의견적',
		'상세정보',
		'장기렌트비교',
		'하이브리드',
		'전기차',
		'차량스펙',
		'자동차 제원 정보',
		'차량 견적서',
		'장기렌트 비교',
		'신차 장기렌트'
	],
	authors: [{ name: 'gyu' }, { name: 'gyu', url: 'https://www.bloggyu.com' }],
	colorScheme: 'dark',
	creator: 'moon',

	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	openGraph: {
		title: '신차 장기렌트 규팀장',
		description:
			'규팀장은 신차 장기렌트에 대한 모든 것을 다룹니다. 장기렌트, 비용처리, 장기리스에 대한 모든 것',
		url: 'https://www.bloggyu.com',
		siteName: '신차 장기렌트 규팀장',
		images: [
			{
				url: 'https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/thumbnail_1_1688543451657.png',
				width: 800,
				height: 600
			},
			{
				url: 'https://pcpoarzixkpbnromuhrh.supabase.co/storage/v1/object/public/strapi-uploads/1_1688543451622.png',
				width: 1800,
				height: 1600,
				alt: 'Bloggyu main'
			}
		],
		locale: 'ko_KR',
		type: 'website'
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8220165683532908"
					crossorigin="anonymous"
				></Script>
				<GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
				<Analytics />
			</head>
			<body className={inter.className}>
				<div className="container">
					<Nav />
					{children}
					<p className="footer">© 2023 Hojun Lee. All Rights Reserved</p>
				</div>
			</body>
		</html>
	)
}
