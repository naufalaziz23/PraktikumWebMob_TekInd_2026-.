import React, { useState } from 'react';

function KartuMesin({ nama, status, produksi = 0 }) {
  // Langkah 3: State Lokal
  const [statusLokal, setStatusLokal] = useState(status);

  // Logika penentuan warna badge berdasarkan status lokal
  let badgeColor = 'bg-secondary';
  if (statusLokal === 'Running') badgeColor = 'bg-success';
  if (statusLokal === 'Stop') badgeColor = 'bg-danger';
  if (statusLokal === 'Maintenance') badgeColor = 'bg-warning';

  return (
    <div className="card shadow-sm p-3 mb-3 h-100">
      <div className="card-body">
        <h5 className="card-title text-uppercase fw-bold">{nama}</h5>
        <span className={`badge ${badgeColor} mb-3 px-3 py-2`}>{statusLokal}</span>
        <hr />
        <p className="card-text">
          Produksi Saat Ini: <span className="badge bg-light text-dark border fw-bold">{produksi}</span> Unit
        </p>
        
        {/* Langkah 3: Form Input State */}
        <div className="mt-3">
          <label className="small text-muted fw-bold mb-1">Ubah Status:</label>
          <select
            className="form-select form-select-sm"
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default KartuMesin;
