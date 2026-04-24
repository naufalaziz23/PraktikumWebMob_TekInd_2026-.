import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
  return (
    <div className="container mt-5 py-4">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">Sistem Monitoring Industri</h1>
        <p className="lead text-muted">Real-time status of production lines and personnel</p>
      </header>

      {/* Monitoring Mesin */}
      <section className="mb-5">
        <h2 className="h4 mb-4 border-bottom pb-2">Monitoring Lini Produksi A</h2>
        <div className="row">
          <div className="col-md-4">
            <KartuMesin nama="CNC-Turning-01" status="Running" produksi={150} />
          </div>
          <div className="col-md-4">
            <KartuMesin nama="CNC-Milling-02" status="Maintenance" produksi={0} />
          </div>
          <div className="col-md-4">
            <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
          </div>
        </div>
      </section>

      {/* Monitoring Karyawan */}
      <section>
        <h2 className="h4 mb-4 border-bottom pb-2">Daftar Karyawan Shift A</h2>
        <div className="row">
          <div className="col-md-4">
            <KartuKaryawan nama="Budi Santoso" jabatan="Manager" bagian="Produksi" />
          </div>
          <div className="col-md-4">
            <KartuKaryawan nama="Siti Aminah" jabatan="Operator" bagian="Assembly" />
          </div>
          <div className="col-md-4">
            <KartuKaryawan nama="Agus Prasetyo" jabatan="QC" bagian="Quality Control" />
          </div>
        </div>
      </section>

      <footer className="mt-5 pt-5 text-center text-muted border-top">
        <p>&copy; 2024 Praktikum React Industri</p>
      </footer>
    </div>
  );
}

export default App;
