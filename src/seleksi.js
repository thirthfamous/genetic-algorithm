import { hitungFitness } from './fitness.js';

export function seleksi(populasi, ukuranTournament) {
  const turnamen = [];

  for (let i = 0; i < ukuranTournament; i++) {
    const randomIndex = Math.floor(Math.random() * populasi.length);
    turnamen.push(populasi[randomIndex]);
  }

  turnamen.sort((a, b) => hitungFitness(a) - hitungFitness(b));

  return turnamen[0];
}