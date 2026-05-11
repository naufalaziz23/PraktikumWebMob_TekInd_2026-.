import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card shadow-sm p-3 mb-3 border-start border-primary border-4 h-100">
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{nama}</h5>
        <h6 className="card-subtitle mb-3 text-muted">{jabatan}</h6>
        <div className="bg-light p-2 rounded">
          <small className="text-secondary d-block">Bagian</small>
          <strong>{bagian}</strong>
        </div>
      </div>
    </div>
  );
}

export default KartuKaryawan;
