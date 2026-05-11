import React from 'react';

// Latihan 1: Destructuring Props
// Latihan 2: Default value untuk produksi = 0
function KartuMesin({ nama, status, produksi = 0 }) {
  // Logika penentuan warna badge berdasarkan status
  let badgeColor = 'bg-secondary';
  if (status === 'Running') badgeColor = 'bg-success';
  if (status === 'Stop') badgeColor = 'bg-danger';
  if (status === 'Maintenance') badgeColor = 'bg-warning';

  return (
    <div className="card shadow-sm p-3 mb-3 h-100">
      <div className="card-body">
        <h5 className="card-title text-uppercase fw-bold">{nama}</h5>
        <span className={`badge ${badgeColor} mb-3 px-3 py-2`}>{status}</span>
        <hr />
        <p className="card-text">
          Produksi Saat Ini: <span className="badge bg-light text-dark border fw-bold">{produksi}</span> Unit
        </p>
      </div>
    </div>
  );
}

export default KartuMesin;
