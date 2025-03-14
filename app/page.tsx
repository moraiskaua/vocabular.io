import { getWordOfTheDay } from '@/actions/get-word-of-the-day';
import CountdownTimer from '@/components/count-down-timer';

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
      <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center'>
        Vocabular.io
      </h1>

      <div className='border border-purple-300 p-6 sm:p-10 rounded-3xl shadow text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white break-words overflow-hidden'>
        <h3 className='text-4xl sm:text-5xl font-bold text-indigo-700 break-words'>
          {word || 'Carregando...'}
        </h3>
        <p className='text-lg mt-4 text-gray-600 italic break-words'>
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
      <footer className='w-full flex justify-center items-center mt-6'>
        <small className='font-medium backdrop-blur-lg bg-opacity-30 p-2 rounded-md text-gray-500 text-center'>
          Desenvolvido por:{' '}
          <a
            href='https://github.com/moraiskaua'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent transition-colors'
          >
            moraiskaua
          </a>
        </small>
      </footer>
    </main>
  );
}
