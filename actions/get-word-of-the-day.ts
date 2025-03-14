import { prisma } from '@/lib/prisma';
import { getMeaning } from './get-meaning';
import { getWord } from './get-word';
import { revalidateHome } from './revalidate-home';

export async function getWordOfTheDay() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let wordEntry = await prisma.word.findFirst({ where: { createdAt: today } });

  if (!wordEntry) {
    const newWord = await getWord();
    const meaning = await getMeaning(newWord);

    wordEntry = await prisma.word.create({
      data: { word: newWord, meaning, createdAt: today },
    });

    revalidateHome();
  }

  const nextWordTime = new Date(today);
  nextWordTime.setDate(today.getDate() + 1);
  const timeLeft = nextWordTime.getTime() - now.getTime();

  return {
    word: wordEntry.word,
    meaning: wordEntry.meaning,
    timeLeft,
  };
}
