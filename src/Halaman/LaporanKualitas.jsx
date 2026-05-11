import React from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {
  const dataCacat = [
    { id: 1, item: "Besi Plat", cacat: "Retak Halus", tanggal: "2023-10-01" },
    { id: 2, item: "Pipa Baja", cacat: "Karat", tanggal: "2023-10-03" },
    { id: 3, item: "Kabel Tembaga", cacat: "Terpotong", tanggal: "2023-10-05" },
  ];

  return (
    <div className="container mt-4">
      <h1>Laporan Kualitas Produksi</h1>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>
      
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nama Item</th>
            <th>Jenis Cacat</th>
            <th>Tanggal Laporan</th>
          </tr>
        </thead>
        <tbody>
          {dataCacat.map((laporan) => (
            <tr key={laporan.id}>
              <td>{laporan.id}</td>
              <td>{laporan.item}</td>
              <td><span className="badge bg-danger">{laporan.cacat}</span></td>
              <td>{laporan.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKualitas;
