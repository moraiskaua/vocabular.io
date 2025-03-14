import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getMeaning(word: string) {
  try {
    const { data } = await axios.get(`https://www.dicio.com.br/${word}/`);
    const $ = cheerio.load(data);

    const meaningElement = $('.significado').first();
    let meaning = meaningElement
      .children('span:not(.etim)')
      .map((_, el) => $(el).text().trim())
      .get()
      .join(' ');

    const grammaticalClass = $('.adicional b').first().text().trim();
    const syllabicDivision = $('.adicional b').eq(1).text().trim();
    const etymology = $('.significado .etim').text().trim();
    const letters = $('.adicional span').eq(0).text().match(/\d+/)?.[0] ?? null;
    const vowels = $('.adicional span').eq(1).text().trim();
    const consonants = $('.adicional span').eq(2).text().trim();
    const reverseWord = $('.adicional')
      .text()
      .match(/palavra escrita ao contrário: (.+)/)?.[1]
      ?.trim();

    const rhymes = $('.list.col-4-row.small li a')
      .map((_, el) => $(el).text().trim())
      .get()
      .join(', ');

    let finalMeaning = meaning;

    if (!meaning || meaning === grammaticalClass) {
      finalMeaning = 'Significado não encontrado.';
    }

    return {
      meaning: finalMeaning,
      grammaticalClass: grammaticalClass ?? '',
      syllabicDivision: syllabicDivision ?? '',
      etymology: etymology ?? '',
      letters: letters ? parseInt(letters) : null,
      vowels: vowels ?? '',
      consonants: consonants ?? '',
      reverseWord: reverseWord ?? '',
      rhymes: rhymes ?? '',
    };
  } catch {
    return {
      meaning: 'Significado não encontrado.',
      grammaticalClass: '',
      syllabicDivision: '',
      etymology: '',
      letters: null,
      vowels: '',
      consonants: '',
      reverseWord: '',
      rhymes: '',
    };
  }
}
