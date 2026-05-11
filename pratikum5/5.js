// 1. FUNCTION Declaration
function hitungDaya(tegangan, arus) {
    let daya = tegangan * arus;
    return daya; 
}

let teganganMesin = 220; 
let arusMesin = 10; 

let totalDaya = hitungDaya(teganganMesin, arusMesin);
console.log("Daya Mesin: " + totalDaya + " Watt"); // Koreksi: Watt

// 2. Array
let daftarCacat = ["C-001", "C-012", "C-001", "C-020"]; 

console.log("Jumlah Cacat: " + daftarCacat.length);

console.log("---Laporan Detail Cacat---");
for (let i = 0; i < daftarCacat.length; i++) {
    console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]);
}

daftarCacat.push("C-099");
console.log("Setelah penambahan: " + daftarCacat);

// 3. OBJECT
let mesinA = {
    id: "M-01",
    nama: "Injection Molding 50 Ton",
    merk: "Toshiba",
    tahunBeli: 2018,
    status: "Running",
    spesifikasi: {
        kecepatanMax: 200, 
        tekananMax: 150 
    }
};

console.log("Nama Mesin: " + mesinA.nama); 
console.log("Status: " + mesinA.status); 
console.log("Tekanan Max: " + mesinA.spesifikasi.tekananMax + " bar"); 

mesinA.status = "Breakdown"; 
console.log("Status Baru: " + mesinA.status); 

// Array berisi beberapa object
let gudangMaterial = [
    { kode: "MAT-01", nama: "Baja Ringan", stok: 50, satuan: "Batang"},
    { kode: "MAT-02", nama: "Plastik ABS", stok: 120, satuan: "Kg"},
    { kode: "MAT-03", nama: "Oli Mesin", stok: 10, satuan: "Liter"}
];

console.log("---Cek Stok Gudang---");

// Menggunakan forEach untuk iterasi array object
gudangMaterial.forEach(function(item) {
    console.log(item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan);

    if (item.stok < 20) {
        console.log("  >>> PERINGATAN: Stok " + item.nama + " menipis! Segera PO.");
    }
});

// LATIHAN 1 (FUNCTION)
function hitungLingkaran(jariJari) {
    let luasLingkaran = 3.14*jariJari**2
    let kelilingLingkaran = 2*3.14*jariJari
    
    //return rumus 
    return {
        luasLingkaran,
        kelilingLingkaran
    };
}

//hasil
let hasil = hitungLingkaran (10);
console.log("Luas: ", hasil.luasLingkaran.toFixed(2))
console.log("Keliling: ", hasil.kelilingLingkaran.toFixed(2));

//latihan 2 array manipulation
let targetCacat = "C-001";
let counter = 0; // Variabel penampung jumlah kemunculan

// Looping untuk mengecek setiap elemen
for (let i = 0; i < daftarCacat.length; i++) {
    if (daftarCacat[i] === targetCacat) {
        counter++; // Tambah 1 jika ditemukan kecocokan
    }
}

console.log("---Analisis Defect---");
console.log("Kode Cacat: " + targetCacat);
console.log("Frekuensi Muncul: " + counter + " kali");
