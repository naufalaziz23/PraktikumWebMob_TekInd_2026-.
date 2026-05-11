import React, { useState } from 'react';

function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0);
  const [target, setTarget] = useState(100);
  const [status, setStatus] = useState('OPERATIONAL'); // Latihan 2

  const tambahProduksi = () => {
    if (status !== 'EMERGENCY') {
      setJumlah(prev => prev + 1);
    }
  };

  const reset = () => {
    setJumlah(0);
    setStatus('OPERATIONAL');
  };

  const emergencyStop = () => {
    setStatus('EMERGENCY');
  };

  return (
    <div className={`card shadow-sm p-4 mb-4 ${status === 'EMERGENCY' ? 'border-danger border-2' : ''}`}>
      <div className="card-body text-center">
        <h3 className="fw-bold mb-3">Simulasi Hitung Produk</h3>
        
        <div className="mb-4">
          <h1 className={`display-1 fw-bold ${status === 'EMERGENCY' ? 'text-danger' : 'text-primary'}`}>
            {jumlah}
          </h1>
          <p className="text-muted">Target Produksi: <span className="fw-bold">{target}</span> Unit</p>
        </div>

        {/* Conditional Rendering */}
        <div className="mb-4">
          {status === 'EMERGENCY' ? (
            <div className="alert alert-danger animate-pulse d-inline-block px-4 py-2">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              EMERGENCY STOP ACTIVATED
            </div>
          ) : jumlah >= target ? (
            <div className="alert alert-success d-inline-block px-4 py-2">
              <i className="bi bi-check-circle-fill me-2"></i>
              Target Tercapai!
            </div>
          ) : (
            <div className="alert alert-info d-inline-block px-4 py-2">
              <i className="bi bi-gear-fill me-2"></i>
              Produksi Berjalan...
            </div>
          )}
        </div>

        <div className="d-flex justify-content-center gap-2">
          <button 
            className="btn btn-primary" 
            onClick={tambahProduksi}
            disabled={status === 'EMERGENCY'}
          >
            +1 Unit (Sensor OK)
          </button>
          
          <button 
            className="btn btn-warning text-white" 
            onClick={reset}
          >
            Reset Shift
          </button>

          <button 
            className="btn btn-danger" 
            onClick={emergencyStop}
            disabled={status === 'EMERGENCY'}
          >
            Emergency Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterProduksi;
