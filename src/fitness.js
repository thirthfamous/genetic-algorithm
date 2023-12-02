function hitungWaktuBentrok(jadwal) {
  let waktuBentrok = 0;

  for (let i = 0; i < jadwal.length - 1; i++) {
    for (let j = i + 1; j < jadwal.length; j++) {
      if (jadwal[i].Hari === jadwal[j].Hari &&
                jadwal[i].Jam_Mulai < jadwal[j].Jam_Selesai &&
                jadwal[i].Jam_Selesai > jadwal[j].Jam_Mulai) {
        waktuBentrok++;
      }
    }
  }

  return waktuBentrok;
}

// Fungsi utilitas untuk menghitung jumlah penggunaan ruangan yang berlebihan
function hitungPenggunaanRuangan(jadwal) {
  const ruanganDigunakan = new Set();
  let penggunaanRuanganBerlebih = 0;

  for (let i = 0; i < jadwal.length; i++) {
    const ruangan = jadwal[i].ID_Ruangan;

    if (ruanganDigunakan.has(ruangan)) {
      penggunaanRuanganBerlebih++;
    } else {
      ruanganDigunakan.add(ruangan);
    }
  }

  return penggunaanRuanganBerlebih;
}

// Fungsi utilitas untuk menghitung fitness berdasarkan kriteria
export function hitungFitness(jadwal) {
  const waktuBentrok = hitungWaktuBentrok(jadwal);
  const penggunaanRuanganBerlebih = hitungPenggunaanRuangan(jadwal);

  // Nilai fitness dapat dihitung dengan memberikan bobot pada setiap kriteria
  // Sesuaikan bobot dan fungsinya sesuai kebutuhan
  const bobotWaktuBentrok = 2;
  const bobotPenggunaanRuangan = 1;

  return (bobotWaktuBentrok * waktuBentrok) + (bobotPenggunaanRuangan * penggunaanRuanganBerlebih);
}
