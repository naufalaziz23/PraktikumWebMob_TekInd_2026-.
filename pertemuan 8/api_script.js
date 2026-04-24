/**
 * ===================================================================
 * Pertemuan 8: Asynchronous JavaScript
 * Fetch API, JSON, Promises, Async/Await
 * ===================================================================
 */

// === VARIABEL DOM ===
const btnLoad = document.getElementById('btnLoad');
const btnSearch = document.getElementById('btnSearch');
const btnFilter = document.getElementById('btnFilter');
const btnSubmitTambah = document.getElementById('btnSubmitTambah');
const btnLoadInsiden = document.getElementById('btnLoadInsiden');

const container = document.getElementById('containerKaryawan');
const containerInsiden = document.getElementById('containerInsiden');
const loading = document.getElementById('loading');
const searchIdInput = document.getElementById('searchId');

// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


// ===================================================================
// LANGKAH 3: Fetch Data dengan .then() (Promise)
// ===================================================================
btnLoad.addEventListener('click', function() {
    // Tampilkan loading
    loading.classList.remove('d-none');
    container.innerHTML = ''; // Bersihkan konten lama

    // Fetch Data
    fetch(API_URL)
        .then(function(response) {
            // Cek jika response sukses (kode 200-299)
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            // Parsing data JSON
            return response.json();
        })
        .then(function(dataKaryawan) {
            // Data berhasil didapat
            console.log(dataKaryawan); // Cek di console browser
            renderData(dataKaryawan);
        })
        .catch(function(error) {
            // Jika ada error (misal putus internet)
            container.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
        })
        .finally(function() {
            // Sembunyikan loading (baik sukses maupun gagal)
            loading.classList.add('d-none');
        });
});


// ===================================================================
// LANGKAH 4: Fetch dengan Async/Await (Modern Style)
// Mencari karyawan berdasarkan ID
// ===================================================================
async function cariKaryawan(id) {
    try {
        console.log('Mencari data ID: ' + id + '...');
        const response = await fetch(API_URL + '/' + id);

        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }

        const data = await response.json();
        console.log("Ditemukan:", data);
        alert('Ditemukan: ' + data.name + ' - bekerja di ' + data.company.name);

        // Tampilkan card hasil pencarian
        container.innerHTML = '';
        renderData([data]);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// Event listener tombol Cari
btnSearch.addEventListener('click', function() {
    const id = searchIdInput.value;
    if (!id || id < 1 || id > 10) {
        alert('Masukkan ID antara 1-10');
        return;
    }
    cariKaryawan(id);
});


// ===================================================================
// LATIHAN 1: Posting Data (POST)
// Mengirim data dummy ke API menggunakan method POST
// ===================================================================
btnSubmitTambah.addEventListener('click', async function() {
    const nama = document.getElementById('inputNama').value;
    const email = document.getElementById('inputEmail').value;
    const perusahaan = document.getElementById('inputPerusahaan').value;

    if (!nama || !email) {
        alert('Nama dan Email wajib diisi!');
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                name: nama,
                email: email,
                company: { name: perusahaan || 'Tidak diisi' }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const result = await response.json();
        console.log('=== HASIL POST (Tambah Karyawan) ===');
        console.log(result);

        alert('Berhasil! Data karyawan "' + result.name + '" terkirim ke server.\nCek Console (F12) untuk melihat response.');

        // Tutup modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('modalTambah'));
        modal.hide();

        // Reset form
        document.getElementById('inputNama').value = '';
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputPerusahaan').value = '';
    } catch (error) {
        console.error('Gagal POST:', error);
        alert('Gagal mengirim data: ' + error.message);
    }
});


// ===================================================================
// LATIHAN 2: Filter Array
// Tampilkan HANYA karyawan yang tinggal di kota mengandung huruf "s"
// ===================================================================
btnFilter.addEventListener('click', function() {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Filter: hanya kota yang mengandung huruf 's' (case-insensitive)
            var filtered = data.filter(function(karyawan) {
                return karyawan.address.city.toLowerCase().includes('s');
            });

            console.log('=== HASIL FILTER (Kota huruf "s") ===');
            console.log('Total sebelum filter:', data.length);
            console.log('Total setelah filter:', filtered.length);
            console.log(filtered);

            // Tambahkan info filter di atas
            container.innerHTML = '<div class="col-12 mb-3"><div class="alert alert-info">' +
                'Filter aktif: Menampilkan <strong>' + filtered.length + '</strong> dari ' + data.length +
                ' karyawan (kota mengandung huruf "s")</div></div>';

            renderData(filtered);
        })
        .finally(function() {
            loading.classList.add('d-none');
        });
});


// ===================================================================
// TUGAS PROYEK MINI: Laporan Insiden
// Mengambil 10 data posts sebagai simulasi "Laporan Insiden"
// ===================================================================
btnLoadInsiden.addEventListener('click', async function() {
    try {
        containerInsiden.innerHTML = '<div class="col-12 text-center py-3"><div class="spinner-border text-danger" role="status"></div></div>';

        const response = await fetch(POSTS_URL + '?_limit=10');
        const data = await response.json();

        console.log('=== LAPORAN INSIDEN (10 Terbaru) ===');
        console.log(data);

        renderInsiden(data);
    } catch (error) {
        containerInsiden.innerHTML = '<div class="alert alert-danger">Gagal memuat insiden: ' + error.message + '</div>';
    }
});


// ===================================================================
// FUNGSI RENDER: Menampilkan Card Karyawan
// ===================================================================
function renderData(data) {
    if (data.length === 0) {
        container.innerHTML = '<div class="col-12 text-center text-muted py-4">Tidak ada data ditemukan.</div>';
        return;
    }

    data.forEach(function(karyawan) {
        var col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML =
            '<div class="card h-100 shadow-sm">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + karyawan.name + '</h5>' +
                    '<p class="card-text text-muted">Email: ' + karyawan.email + '</p>' +
                    '<p class="card-text">Perusahaan: ' + karyawan.company.name + '</p>' +
                    '<p class="card-text"><small>Kota: ' + karyawan.address.city + '</small></p>' +
                    '<a href="#" class="btn btn-sm btn-outline-primary" onclick="alert(\'Detail profil: ' + karyawan.name + '\')">Detail Profil</a>' +
                '</div>' +
            '</div>';
        container.appendChild(col);
    });
}


// ===================================================================
// FUNGSI RENDER: Menampilkan Card Laporan Insiden
// ===================================================================
function renderInsiden(posts) {
    containerInsiden.innerHTML = '';

    posts.forEach(function(post) {
        var col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        col.innerHTML =
            '<div class="card h-100 border-start border-4 border-danger">' +
                '<div class="card-body">' +
                    '<div class="d-flex justify-content-between align-items-center mb-2">' +
                        '<span class="badge bg-danger badge-id">Tiket #' + post.id + '</span>' +
                        '<small class="text-muted">Status: Open</small>' +
                    '</div>' +
                    '<h6 class="card-title text-capitalize fw-bold">' + post.title + '</h6>' +
                    '<p class="card-text text-muted" style="font-size:0.9rem;">' + post.body + '</p>' +
                '</div>' +
                '<div class="card-footer bg-white border-0 pb-3">' +
                    '<button class="btn btn-sm btn-warning fw-bold" onclick="alert(\'Tiket ID ' + post.id + ' sedang diproses oleh Tim Maintenance\')">Tindak Lanjut</button>' +
                '</div>' +
            '</div>';
        containerInsiden.appendChild(col);
    });
}
