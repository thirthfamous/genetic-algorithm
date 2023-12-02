// Fungsi crossover satu titik
export function crossover(individu1, individu2) {
  const panjangJadwal = individu1.length;

  // Pilih titik pemotongan secara acak
  const titikPemotongan = Math.floor(Math.random() * (panjangJadwal - 1)) + 1;

  // Bagian jadwal sebelum titik pemotongan
  const bagian1 = individu1.slice(0, titikPemotongan);
  const bagian2 = individu2.slice(0, titikPemotongan);

  // Bagian jadwal setelah titik pemotongan
  const sisa1 = individu1.slice(titikPemotongan);
  const sisa2 = individu2.slice(titikPemotongan);

  // Hasil crossover
  const hasilIndividu1 = [...bagian1, ...sisa2];
  const hasilIndividu2 = [...bagian2, ...sisa1];

  return [hasilIndividu1, hasilIndividu2];
}