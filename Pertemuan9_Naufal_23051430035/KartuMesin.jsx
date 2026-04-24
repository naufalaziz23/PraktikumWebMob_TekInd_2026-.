import React from 'react';

// Latihan 1 & 2: Destructuring Props and Default Props
function KartuMesin({ nama, status, produksi = 0 }) {
  // Logika penentuan warna badge berdasarkan status
  let badgeColor = 'bg-secondary';
  if (status === 'Running') badgeColor = 'bg-success';
  if (status === 'Stop') badgeColor = 'bg-danger';
  if (status === 'Maintenance') badgeColor = 'bg-warning';

  return (
    <div className="card shadow-sm p-3 mb-3 border-0 rounded-4">
      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{nama}</h5>
        <span className={`badge rounded-pill ${badgeColor}`}>{status}</span>
        <hr />
        <p className="mb-0">
          Produksi Saat Ini: <span className="badge bg-light text-dark fs-6">{produksi}</span> Unit
        </p>
      </div>
    </div>
  );
}

export default KartuMesin;
