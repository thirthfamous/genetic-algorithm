import { hitungFitness } from './fitness.js';

export function seleksi(populasi) {
  // Mengurutkan populasi berdasarkan fitness dari tinggi ke rendah
  populasi.sort((a, b) => hitungFitness(b) - hitungFitness(a));

  // Mengembalikan individu dengan fitness tertinggi
  return populasi[0];
}