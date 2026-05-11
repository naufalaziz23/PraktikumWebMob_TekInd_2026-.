import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
  return (
    <div className="container mt-5 pb-5">
      {/* Bagian 1: Monitoring Mesin */}
      <section className="mb-5">
        <h1 className="text-center mb-4 fw-bold text-dark">
          <span className="text-primary">Monitoring</span> Lini Produksi A
        </h1>
        <div className="row g-4">
          <div className="col-md-4">
            <KartuMesin
              nama="CNC-Turning-01"
              status="Running"
              produksi={150}
            />
          </div>
          <div className="col-md-4">
            <KartuMesin
              nama="CNC-Milling-02"
              status="Maintenance"
              // Latihan 2: Menguji default prop (produksi tidak dikirim)
            />
          </div>
          <div className="col-md-4">
            <KartuMesin
              nama="Press-Hydraulic-05"
              status="Stop"
              produksi={85}
            />
          </div>
        </div>
      </section>

      <hr className="my-5" />

      {/* Bagian 2: Tugas Proyek Mini - Kartu Karyawan */}
      <section>
        <h2 className="text-center mb-4 fw-bold text-dark">Data Karyawan</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <KartuKaryawan 
              nama="Andi Wijaya" 
              jabatan="Manager" 
              bagian="Produksi" 
            />
          </div>
          <div className="col-md-4">
            <KartuKaryawan 
              nama="Siti Aminah" 
              jabatan="Operator" 
              bagian="Assembly" 
            />
          </div>
          <div className="col-md-4">
            <KartuKaryawan 
              nama="Budi Santoso" 
              jabatan="Quality Control" 
              bagian="Inspection" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
