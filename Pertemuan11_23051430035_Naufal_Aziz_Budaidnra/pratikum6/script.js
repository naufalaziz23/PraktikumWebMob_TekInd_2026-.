// ambil elemen dari html

let start = document.getElementById("btnStart");
let stop = document.getElementById("btnStop");
let reset = document.getElementById("btnReset");
let maint = document.getElementById("btnMaint");

let statusBox = document.getElementById("statusIndicator");
let statusText = statusBox.querySelector("strong");

let suhuText = document.getElementById("suhuMesin");

let rpmInput = document.getElementById("inputRPM");
let errorRPM = document.getElementById("errorRPM");

let card = document.getElementById("cardMesin");

// variabel simulasi
let suhu = 25;
let timer = null;


// ==========================
// START
// ==========================

start.addEventListener("click", function(){

statusBox.className = "alert alert-success";
statusText.innerText = "RUNNING";

timer = setInterval(function(){

suhu = suhu + 1;
suhuText.innerText = suhu + " °C";

if(suhu > 80){
statusBox.className = "alert alert-danger";
statusText.innerText = "OVERHEAT WARNING";
suhuText.style.color = "red";
}

},1000);

start.disabled = true;
stop.disabled = false;

});


// ==========================
// STOP
// ==========================

stop.addEventListener("click", function(){

clearInterval(timer);

statusBox.className = "alert alert-secondary";
statusText.innerText = "STOPPED";

start.disabled = false;
stop.disabled = true;

});


// ==========================
// RESET
// ==========================

reset.addEventListener("click", function(){

clearInterval(timer);

suhu = 25;
suhuText.innerText = "25 °C";
suhuText.style.color = "black";

statusBox.className = "alert alert-secondary";
statusText.innerText = "UNKNOWN";

start.disabled = false;
stop.disabled = true;

});


// ==========================
// Maintenance Mode
// ==========================

maint.addEventListener("click", function(){

card.classList.add("bg-light");
statusText.innerText = "MAINTENANCE";

});


// ==========================
// Hover suhu mesin
// ==========================

suhuText.addEventListener("mouseover", function(){

suhuText.style.fontWeight = "bold";
suhuText.style.color = "blue";

});

suhuText.addEventListener("mouseout", function(){

suhuText.style.fontWeight = "normal";
suhuText.style.color = "black";

});


// ==========================
// Validasi RPM
// ==========================

rpmInput.addEventListener("input", function(){

let nilai = parseInt(this.value);

if(nilai > 2000){

errorRPM.classList.remove("d-none");
rpmInput.classList.add("is-invalid");

}else{

errorRPM.classList.add("d-none");
rpmInput.classList.remove("is-invalid");

}

});


// ==========================
// Kalkulator Tagihan Listrik
// ==========================

let daya = document.getElementById("daya");
let jam = document.getElementById("jam");

let hasilKwh = document.getElementById("hasilKwh");
let hasilBiaya = document.getElementById("hasilBiaya");

function hitungListrik(){

let d = parseFloat(daya.value) || 0;
let j = parseFloat(jam.value) || 0;

// hitung kWh
let total = (d * j) / 1000;

// hitung biaya
let biaya = total * 1500;

hasilKwh.innerText = "Total kWh : " + total.toFixed(2);
hasilBiaya.innerText = "Estimasi Biaya : Rp " + biaya.toLocaleString();

}

// realtime saat mengetik
daya.addEventListener("input", hitungListrik);
jam.addEventListener("input", hitungListrik);