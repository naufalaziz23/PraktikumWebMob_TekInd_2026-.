import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card shadow-sm p-3 mb-3 border-0 rounded-4 bg-light">
      <div className="card-body">
        <h5 className="card-title fw-bold">{nama}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{jabatan}</h6>
        <p className="card-text">
          Bagian: <span className="fw-semibold text-info">{bagian}</span>
        </p>
      </div>
    </div>
  );
}

export default KartuKaryawan;
