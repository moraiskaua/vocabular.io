import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { getMeaning } from './get-meaning';
import { getWord } from './get-word';

export async function getWordOfTheDay() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let word = await prisma.word.findFirst({ where: { createdAt: today } });

  if (!word) {
    const newWord = await getWord();
    const meaning = await getMeaning(newWord);

    word = await prisma.word.create({
      data: { word: newWord, meaning, createdAt: today },
    });

    revalidatePath('/');
  }

  return word;
}
