import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState('Yogyakarta'); // Latihan 1

  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Latihan 1: Dependency Array useEffect
  useEffect(() => {
    document.title = `Jam [${kota}]`;
  }, [kota]);

  return (
    <div className="card glass-card shadow-sm p-4 mb-4 text-center">
      <div className="card-body">
        <h5 className="text-muted mb-2 text-uppercase letter-spacing-1">Waktu Sistem Server</h5>
        <h1 className="display-4 fw-bold gradient-text mb-3">
          {waktu.toLocaleTimeString()}
        </h1>
        
        <div className="mt-4">
          <label className="form-label text-muted small fw-bold">Pilih Kota Monitor:</label>
          <div className="input-group justify-content-center">
            <input 
              type="text" 
              className="form-control text-center" 
              style={{maxWidth: '250px'}}
              value={kota}
              onChange={(e) => setKota(e.target.value)}
              placeholder="Masukkan nama kota..."
            />
          </div>
          <p className="mt-2 small text-muted">Title Browser: Jam [{kota}]</p>
        </div>
      </div>
    </div>
  );
}

export default JamDigital;
