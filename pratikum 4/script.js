//komentar single line
// 1. variabel & tipe data
let namaMesin = "CNC-Mazak-01";
let targetHarian = 500;
let isOperational = true;

//menampilkan ke console browser 
console.log("Mesin: " + namaMesin);
console.log("Target: " + targetHarian);

// 2. operator aritmatika
let produksiPagi = 200
let produksiSiang = 150;
let totalProduksi = produksiPagi + produksiSiang;
console.log("Total saat ini: " + totalProduksi);

//hitung sisa kekurangan target
let kekurangan = targetHarian - totalProduksi;
console.log("Kekurangan target: " + kekurangan);

// simulasi data pembacaan sensor (jam operasional)
let jamOperasional = 1250; 
let batasMaksimal = 1200;

console.log("---cek status maintenance---")

// logika if/else
    if (jamOperasional >= batasMaksimal) {
        console.log("PERINGATAN : Mesin mencapai batas maksimal!");
        console.log("Status: MAINTENANCE WAJIB (Stop Produksi!)");
    } else if (jamOperasional > 1000) {
        console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");
    } else {
        console.log("Status: Berjalan Normal");
    }

    // data input
    let jamKerjaPlanned = 8;
    let jamKerjaAktual = 6.5;

    // perhitungan
    let availability = (jamKerjaAktual / jamKerjaPlanned)*100;

    //pembulatan 2 angka dibelakang koma
    availability = availability.toFixed(2);

    console.log("Planned time: " + jamKerjaPlanned + " jam");
    console.log("Actual Time: " + jamKerjaAktual + " jam");
    console.log("Availability: " + availability + " %");
    // logika penilaian kualitas availability
    if (availability >= 90) {
        console.log("Kategori : WORLD CLASS")
    } else if (availability >= 80) {
        console.log("Kategori: BAIK (Tetap monitor)");
    } else {
        console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown");
    }

    let namaOperator = prompt("Masukkan Nama Operator: ");
    let shiftKerja = prompt("Masukkan shift (Pagi/Siang/Malam): ");

    if (shiftKerja === "Malam") {
        alert("Halo "+ namaOperator+", Shift malam memiliki tambahan uang makan sebesar Rp20.000.");
    } else {
        alert("Halo "+ namaOperator+", Selamat bekerja. Tetap Semangat!");
    }


// LATIHAN 1
    let gajiPokok = 5000000
    let jamLembur = 6
    let totalGaji = (1.5*jamLembur*gajiPokok)/173 + gajiPokok

    totalGaji = totalGaji.toFixed(2)
    console.log("Gaji Anda Bulan ini: " + "Rp" + totalGaji)

    //LATIHAN 2 (LOGIKA SWITCH)
    let kodeShift = 2;
    switch (kodeShift) {
        case 1 :
            console.log("Shift anda adalah : Pagi")
            break;
        case 2:
            console.log("Shift anda adalah : Siang")
        case 3:
            console.log("Shift anda adalah : Malam")
        default:
            console.log("Shift tidak valid")
    }


