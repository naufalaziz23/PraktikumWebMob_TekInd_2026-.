const qrcode = require('qrcode-terminal');

const url = "http://10.243.58.115:3000";

// Opsi { small: true } akan menggunakan karakter blok khusus (half-blocks)
// yang akan membuat QR code terlihat rapat dan tidak terputus-putus di Windows.
qrcode.generate(url, { small: true }, function (qr) {
    console.log("\nQR Code untuk Aplikasi Web Anda:\n");
    console.log(qr);
    console.log("Silakan scan menggunakan kamera HP (Pastikan satu jaringan WiFi)\n");
});
