// Fungsi mutasi untuk mengubah acak waktu pada jadwal
export function mutasi(individu) {
  const panjangJadwal = individu.length;

  // Pilih acak satu entitas jadwal untuk dimutasi
  const indexMutasi = Math.floor(Math.random() * panjangJadwal);

  // Salin jadwal yang akan dimutasi
  const jadwalMutasi = { ...individu[indexMutasi] };

  // Ganti acak waktu pada jadwal mutasi
  jadwalMutasi.Hari = pilihHari();
  jadwalMutasi.Jam_Mulai = pilihJam();
  jadwalMutasi.Jam_Selesai = pilihJam();

  // Terapkan mutasi pada individu
  individu[indexMutasi] = jadwalMutasi;

  return individu;
}


// Fungsi utilitas untuk memilih hari secara acak
function pilihHari() {
  const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  return hari[Math.floor(Math.random() * hari.length)];
}
    
// Fungsi utilitas untuk memilih jam secara acak
function pilihJam() {
  const jam = ['08:00', '10:00', '13:00'];
  return jam[Math.floor(Math.random() * jam.length)];
}