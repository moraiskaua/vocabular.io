import { getWordOfTheDay } from '@/actions/get-word-of-the-day';
import CountdownTimer from '@/components/count-down-timer';
import Script from 'next/script';

export default async function Home() {
  const { word, meaning, timeLeft } = await getWordOfTheDay();

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-200 p-6 text-gray-900'>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        strategy='afterInteractive'
      />

      <h1 className='text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12'>
        Vocabular.io
      </h1>

      <div className='to-indigo-100 via-white from-purple-200 border border-purple-300 p-10 rounded-3xl shadow text-center max-w-lg'>
        <h3 className='text-6xl font-bold text-indigo-700'>
          {word || 'Carregando...'}
        </h3>
        <p className='text-lg mt-4 text-gray-600 italic'>
          {meaning || 'Buscando significado...'}
        </p>
      </div>

      <CountdownTimer initialTimeLeft={timeLeft} />

      <div className='mt-8'>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-XXXXXXXXXXXXXXX'
          data-ad-slot='XXXXXXXXXX'
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
        <Script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
      </div>
    </main>
  );
}
