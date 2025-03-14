'use server';

import axios from 'axios';

export async function getWord() {
  const { data } = await axios.get('https://api.dicionario-aberto.net/random');
  if (!data?.word) throw new Error('Failed to fetch word');
  return data.word;
}
