
let antrianAwal = [
  { idJob: "J01", namaProses: "Cutting", durasi: 20 },
  { idJob: "J02", namaProses: "Drilling", durasi: 30 }
];
let antrianMesin = [];

function tampilkanAntrian() {
  // Ganti dengan fungsi tampilkanAntrian() milikmu yang asli
  console.log("Memperbarui tampilan antrian..."); 
}


function tambahLog(teks) {
  let log = document.getElementById("logProses");
  let div = document.createElement("div");
  div.className = "logItem";
  div.textContent = "> " + teks;
  log.appendChild(div);
  
  log.scrollTop = log.scrollHeight;
}

function prosesAntrian(antrian) {
  let index = 0;

  function prosesBerikutnya() {
    if (index >= antrian.length) {
      document.getElementById("statusMesin").textContent = "✅ Semua job selesai";
      document.getElementById("progressBar").style.width = "100%";
      return;
    }

    let job = antrian[index];
    document.getElementById("statusMesin").textContent = `⚙️ Memproses ${job.idJob} - ${job.namaProses}`;
    tambahLog(`Mulai: Job ${job.idJob} - ${job.namaProses} (${job.durasi} menit)`);

    let progress = 0;
    let interval = setInterval(() => {
      progress += 10;
      document.getElementById("progressBar").style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        tambahLog(`Selesai: Job ${job.idJob}`);
        index++;
        setTimeout(prosesBerikutnya, 500); 
      }
    }, 200);
  }

  prosesBerikutnya();
}

function jalankanSimulasi() {
  antrianMesin = [...antrianAwal]; 
  
  document.getElementById("logProses").innerHTML = "";
  document.getElementById("progressBar").style.width = "0%";
  tambahLog("Simulasi dimulai...");
  
  tampilkanAntrian();
  prosesAntrian(antrianMesin);

  setTimeout(()=> {
    let jobBaru = { idJob: "J04", namaProses: "Grinding", durasi: 40 };
    antrianMesin.push(jobBaru);
    tambahLog("WARNING: Job baru ditambahkan ke antrian (J04)");
    tampilkanAntrian();
  }, 3000);
}

// Inisialisasi jalan pertama kali
antrianMesin = [...antrianAwal];
tampilkanAntrian();
