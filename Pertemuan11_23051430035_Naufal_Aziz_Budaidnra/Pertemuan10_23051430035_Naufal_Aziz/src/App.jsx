import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import OEEKalkulator from './Komponen/OEEKalkulator';

function App() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-2">
            Industrial <span className="gradient-text">Monitoring Dashboard</span>
          </h1>
          <p className="text-muted lead">Pertemuan 10: State Management & Lifecycle Hooks</p>
        </header>

        <div className="row g-4">
          {/* Left Column: Real-time & Counter */}
          <div className="col-lg-4">
            <JamDigital />
            <CounterProduksi />
          </div>

          {/* Center Column: OEE Analysis */}
          <div className="col-lg-8">
            <OEEKalkulator />
            
            {/* Machine Monitoring Section */}
            <section className="mb-5">
              <h3 className="fw-bold mb-4 d-flex align-items-center">
                <i className="bi bi-cpu me-2 text-primary"></i>
                Lini Produksi A
              </h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <KartuMesin nama="CNC-Turning-01" status="Running" produksi={150} />
                </div>
                <div className="col-md-4">
                  <KartuMesin nama="CNC-Milling-02" status="Maintenance" />
                </div>
                <div className="col-md-4">
                  <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
                </div>
              </div>
            </section>

            {/* Employee Data Section */}
            <section>
              <h3 className="fw-bold mb-4 d-flex align-items-center">
                <i className="bi bi-people me-2 text-primary"></i>
                Data Karyawan
              </h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <KartuKaryawan nama="Andi Wijaya" jabatan="Manager" bagian="Produksi" />
                </div>
                <div className="col-md-4">
                  <KartuKaryawan nama="Siti Aminah" jabatan="Operator" bagian="Assembly" />
                </div>
                <div className="col-md-4">
                  <KartuKaryawan nama="Budi Santoso" jabatan="Quality Control" bagian="Inspection" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-5 pt-5 text-center text-muted border-top">
          <p>&copy; 2026 Naufal Aziz - 23051430035. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
