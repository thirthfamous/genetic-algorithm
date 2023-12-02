// Fungsi utilitas untuk inisialisasi jadwal acak
export function inisialisasiJadwal(jumlahJadwal) {
  const jadwal = [];

  for (let j = 0; j < jumlahJadwal; j++) {
    jadwal.push({
      'ID_Jadwal': j,
      'ID_Dosen': Math.floor(Math.random() * 3) + 101,
      'Kode_MK': 'MK' + (j + 1),
      'Hari': pilihHari(),
      'Jam_Mulai': pilihJam(),
      'Jam_Selesai': pilihJam(),
      'ID_Ruangan': 'R' + (j + 1)
    });
  }

  return jadwal;
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