import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='text-slate-900 bg-gradient-to-r from-rose-100 to-teal-100 h-32 scrollbar-thin scrollbar-thumb-teal-900 scrollbar-track-transperant overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
