import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '개발자 이현도의 포트폴리오',
  description: 'Next.js를 활용해 2023년 진행한 프로젝트를 정리한 개발자 포트폴리오 입니다.',
  keywords:  ["포트폴리오", "넥스트", "portfolio", "next.js", "hidenlee"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel= "icon" type="image/svg+xml" href="favicon.svg"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
