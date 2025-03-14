import { prisma } from '@/lib/prisma';
import { getMeaning } from './get-meaning';
import { getWord } from './get-word';

type WordOfTheDay = {
  meaning: string;
  word: string;
  id: string;
  grammaticalClass: string;
  syllabicDivision: string;
  etymology: string;
  letters: number | null;
  vowels: string;
  consonants: string;
  reverseWord: string;
  rhymes: string;
  createdAt: Date;
  timeLeft: number;
};

export const getWordOfTheDay = async (): Promise<WordOfTheDay> => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let word = await prisma.word.findFirst({ where: { createdAt: today } });

  if (!word) {
    let newWord = await getWord();
    const existingWord = await prisma.word.findUnique({
      where: { word: newWord },
    });

    if (existingWord) {
      return getWordOfTheDay();
    }

    const {
      consonants,
      etymology,
      grammaticalClass,
      letters,
      meaning,
      reverseWord,
      rhymes,
      syllabicDivision,
      vowels,
    } = await getMeaning(newWord);

    if (meaning === 'Significado não encontrado.') {
      return getWordOfTheDay();
    }

    word = await prisma.word.create({
      data: {
        word: newWord,
        meaning,
        consonants,
        etymology,
        grammaticalClass,
        letters,
        reverseWord,
        rhymes,
        syllabicDivision,
        vowels,
        createdAt: today,
      },
    });
  }

  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const timeLeft = nextDay.getTime() - now.getTime();

  return { ...word, timeLeft };
};
