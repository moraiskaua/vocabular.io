import { getWordOfTheDay } from '@/actions/get-word-of-the-day';
import CountdownTimer from '@/components/count-down-timer';
import Script from 'next/script';

export default async function Home() {
  const {
    word,
    meaning,
    grammaticalClass,
    syllabicDivision,
    etymology,
    letters,
    vowels,
    consonants,
    reverseWord,
    rhymes,
    timeLeft,
  } = await getWordOfTheDay();

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

      <div className='border border-purple-300 p-10 rounded-3xl shadow text-center max-w-lg bg-white'>
        <h3 className='text-6xl font-bold text-indigo-700'>
          {word || 'Carregando...'}
        </h3>
        <p className='text-lg mt-4 text-gray-600 italic'>
          {meaning || 'Buscando significado...'}
        </p>

        {grammaticalClass && (
          <p className='mt-2 text-sm text-gray-500'>{grammaticalClass}</p>
        )}
        {syllabicDivision && (
          <p className='mt-1 text-sm text-gray-500'>
            Separação silábica: {syllabicDivision}
          </p>
        )}
        {letters && (
          <p className='mt-1 text-sm text-gray-500'>Letras: {letters}</p>
        )}
        {vowels && (
          <p className='mt-1 text-sm text-gray-500'>Vogais: {vowels}</p>
        )}
        {consonants && (
          <p className='mt-1 text-sm text-gray-500'>Consoantes: {consonants}</p>
        )}
        {reverseWord && (
          <p className='mt-1 text-sm text-gray-500'>
            Ao contrário: {reverseWord}
          </p>
        )}
        {etymology && <p className='mt-1 text-sm text-gray-500'>{etymology}</p>}
        {rhymes && (
          <p className='mt-2 text-sm text-gray-500'>Rimas: {rhymes}</p>
        )}
      </div>

      <CountdownTimer initialTimeLeft={timeLeft} />
    </main>
  );
}
