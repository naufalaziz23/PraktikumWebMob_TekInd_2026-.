// 1. Seleksi Elemen
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
// Kunci untuk LocalStorage
const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';
// Fungsi Load Data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
loadDataFromStorage();
if (document.getElementById('form5S')) loadData5S();
});

// ELEMEN BARU (EXERCISE 1 & 2)
const searchOperator = document.getElementById('searchOperator');
const btnSort = document.getElementById('btnSort');
window.isSortedDesc = false;

if (searchOperator) {
  searchOperator.addEventListener('input', function() {
    loadDataFromStorage();
  });
}

if (btnSort) {
  btnSort.addEventListener('click', function() {
    window.isSortedDesc = true;
    loadDataFromStorage();
  });
}

// ELEMEN BARU (EXERCISE 3 - 5S)
const form5S = document.getElementById('form5S');
const tabelBody5S = document.getElementById('tabelBody5S');
const btnHapusSemua5S = document.getElementById('btnHapusSemua5S');
const STORAGE_KEY_5S = 'DATA_AUDIT_5S';
// 2. Event Listener: Submit Form
formProduksi.addEventListener('submit', function(event) {
event.preventDefault(); // Mencegah refresh halaman
// Ambil Value dari Form
const tanggal = document.getElementById('tanggal').value;
const operator = document.getElementById('operator').value;
const shift = document.getElementById('shift').value;
const jumlah = document.getElementById('jumlah').value;
// Validasi Sederhana (JavaScript)
if (jumlah <= 0) {
alert("Jumlah produksi harus lebih dari 0!");
return;
}
// Buat Object Data
const dataBaru = {
id: Date.now(), // ID unik berdasarkan waktu
tanggal: tanggal,
operator: operator,
shift: shift,
jumlah: parseInt(jumlah)
};
// Simpan ke LocalStorage
saveData(dataBaru);
// Reset Form
formProduksi.reset();
// Refresh Tampilan Tabel
loadDataFromStorage();
});
// 3. Fungsi Simpan ke LocalStorage
function saveData(data) {
// Ambil data lama (jika ada), jika tidak ada array kosong
let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Tambah data baru ke array
dataLama.push(data);
// Simpan kembali ke LocalStorage (Convert ke JSON String)
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}
// 4. Fungsi Baca & Render Tabel
function loadDataFromStorage() {
// Ambil data
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

if (typeof searchOperator !== "undefined" && searchOperator && searchOperator.value) {
  const keyword = searchOperator.value.toLowerCase();
  data = data.filter(item => item.operator.toLowerCase().includes(keyword));
}

if (typeof isSortedDesc !== "undefined" && window.isSortedDesc) {
  data.sort((a, b) => b.jumlah - a.jumlah);
}

// Kosongkan tabel dulu
tabelBody.innerHTML = '';
// Loop data dan buat baris tabel
data.forEach(function(item) {
const row = document.createElement('tr');
row.innerHTML = `
<td>${item.tanggal}</td>
<td>${item.operator}</td>
<td>${item.shift}</td>
<td>${item.jumlah}</td>
<td>
<button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">Hapus</button>
</td>
`;
tabelBody.appendChild(row);
});
}
// 5. Fungsi Hapus Data Spesifik
// Kita pasang di window agar bisa dipanggil dari inline HTML onclick
window.hapusData = function(id) {
if(confirm('Yakin ingin menghapus log ini?')) {
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// Filter data: hapus item yang id-nya cocok
let dataBaru = data.filter(item => item.id !== id);
// Simpan ulang
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
// Refresh tampilan
loadDataFromStorage();
}
}
// 6. Event Hapus Semua
btnHapusSemua.addEventListener('click', function() {
if(confirm('PERINGATAN: Semua data akan dihapus permanen!')) {
localStorage.removeItem(STORAGE_KEY);
loadDataFromStorage();
}
});

// === MINI-PROJECT 5S AUDIT ===

if (form5S) {
  form5S.addEventListener('submit', function(event) {
    event.preventDefault();
    const auditorName = document.getElementById('auditorName').value;
    const checks = [
      document.getElementById('checkSeiri').checked,
      document.getElementById('checkSeiton').checked,
      document.getElementById('checkSeiso').checked,
      document.getElementById('checkSeiketsu').checked,
      document.getElementById('checkShitsuke').checked
    ];
    
    let checkedCount = checks.filter(c => c).length;
    let score = (checkedCount / 5) * 100;
    
    const dataBaru = {
      id: Date.now(),
      tanggal: new Date().toLocaleDateString('id-ID'),
      auditor: auditorName,
      score: score
    };
    
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY_5S)) || [];
    dataLama.push(dataBaru);
    localStorage.setItem(STORAGE_KEY_5S, JSON.stringify(dataLama));
    
    form5S.reset();
    loadData5S();
  });
}

function loadData5S() {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY_5S)) || [];
  if (!tabelBody5S) return;
  tabelBody5S.innerHTML = '';
  
  data.forEach(function(item) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.tanggal}</td>
      <td>${item.auditor}</td>
      <td>${item.score}%</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="hapusData5S(${item.id})">Hapus</button>
      </td>
    `;
    tabelBody5S.appendChild(row);
  });
}

window.hapusData5S = function(id) {
  if (confirm('Yakin ingin menghapus audit ini?')) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY_5S)) || [];
    let dataBaru = data.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY_5S, JSON.stringify(dataBaru));
    loadData5S();
  }
}

if (btnHapusSemua5S) {
  btnHapusSemua5S.addEventListener('click', function() {
    if (confirm('PERINGATAN: Semua data audit 5S akan dihapus permanen!')) {
      localStorage.removeItem(STORAGE_KEY_5S);
      loadData5S();
    }
  });
}