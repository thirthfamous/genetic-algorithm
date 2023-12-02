import { crossover } from './crossover.js';
import { inisialisasiJadwal } from './data.js';
import { hitungFitness } from './fitness.js';
import { mutasi } from './mutasi.js';

import fs from 'fs';
import { seleksi } from './seleksi.js';

// Fungsi untuk menyimpan hasil ke dalam file JSON
function simpanHasilKeJSON(namaFile, hasil) {
  const dataJSON = JSON.stringify(hasil, null, 2);

  fs.appendFileSync(namaFile, dataJSON, 'utf-8');

  console.log(`Hasil disimpan ke dalam file: ${namaFile}`);
}

// Fungsi utama untuk menjalankan algoritma genetika
function jalankanGenetika(ukuranPopulasi, ukuranTournament, probabilitasCrossover, probabilitasMutasi, maksGenerasi, jumlahJadwal) {
  let populasi = [];

  // Inisialisasi populasi
  for (let i = 0; i < ukuranPopulasi; i++) {
    populasi.push(inisialisasiJadwal(jumlahJadwal));
  }

  // Iterasi melalui generasi
  for (let generasi = 0; generasi < maksGenerasi; generasi++) {
    let populasiBaru = [];

    for (let i = 0; i < ukuranPopulasi; i++) {
      // Seleksi
      let individu1 = seleksi(populasi, ukuranTournament);
      let individu2 = seleksi(populasi, ukuranTournament);

      // Crossover
      if (Math.random() < probabilitasCrossover) {
        [individu1, individu2] = crossover(individu1, individu2);
      }

      // Mutasi
      if (Math.random() < probabilitasMutasi) {
        mutasi(individu1);
      }

      if (Math.random() < probabilitasMutasi) {
        mutasi(individu2);
      }

      // Menambahkan individu hasil ke populasi baru
      populasiBaru.push(individu1);
      populasiBaru.push(individu2);
    }

    // Mengganti populasi lama dengan populasi baru
    populasi = populasiBaru;

    // Pilih solusi terbaik
    const solusiTerbaik = populasi.reduce((a, b) => hitungFitness(a) > hitungFitness(b) ? a : b);

    // Output solusi terbaik pada setiap generasi
    console.log(`Generasi: ${generasi} - Fitness: ${hitungFitness(solusiTerbaik)}`);
    console.log(solusiTerbaik);
    console.log('');

    const namaFileJSON = 'hasil_penjadwalan.json';
    simpanHasilKeJSON(namaFileJSON, solusiTerbaik);
  }

  // Output solusi terbaik setelah selesai
  console.log('Solusi Terbaik Setelah Selesai Algoritma Genetika:');
  console.log(populasi.reduce((a, b) => hitungFitness(a) > hitungFitness(b) ? a : b));
  // Menyimpan solusi terbaik ke dalam file JSON
}

// Pengaturan parameter algoritma genetika
const ukuranPopulasi = 10;
const ukuranTournament = 3;
const probabilitasCrossover = 0.7;
const probabilitasMutasi = 0.1;
const maksGenerasi = 100;
const jumlahJadwal = 5;  // Sesuaikan dengan jumlah jadwal yang Anda miliki

// Menjalankan algoritma genetika
jalankanGenetika(ukuranPopulasi, ukuranTournament, probabilitasCrossover, probabilitasMutasi, maksGenerasi, jumlahJadwal);
