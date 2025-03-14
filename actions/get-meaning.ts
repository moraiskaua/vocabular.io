import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getMeaning(word: string) {
  try {
    const { data } = await axios.get(`https://www.dicio.com.br/${word}/`);
    const $ = cheerio.load(data);
    const meaning = $('.significado > span').first().text().trim();

    return meaning || 'Significado não encontrado.';
  } catch (error) {
    return 'Erro ao buscar significado.';
  }
}
