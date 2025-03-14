import { getWordOfTheDay } from '@/actions/get-word-of-the-day';
import Script from 'next/script';

export default async function Home() {
  const wordData = await getWordOfTheDay();

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-6'>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        strategy='afterInteractive'
      />
      <div className='bg-white text-gray-900 p-8 rounded-3xl shadow-lg text-center max-w-lg'>
        <h1 className='text-5xl font-bold'>{wordData.word}</h1>
        <p className='text-lg mt-4'>{wordData.meaning}</p>
      </div>
      <div className='mt-6'>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-XXXXXXXXXXXXXXX'
          data-ad-slot='XXXXXXXXXX'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
        <Script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
      </div>
    </main>
  );
}
