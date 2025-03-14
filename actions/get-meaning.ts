import axios from 'axios';

export async function getMeaning(word: string) {
  const { data } = await axios.get(`https://www.dicio.com.br/${word}/`);
  const match = data.match(/<p class="significado">(.*?)<\/p>/);
  return match ? match[1].replace(/<.*?>/g, '').trim() : 'Meaning not found.';
}
