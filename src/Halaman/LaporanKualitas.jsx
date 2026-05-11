// src/Halaman/LaporanKualitas.jsx
import React from "react";
import { Link } from "react-router-dom";

const dataCacat = [
  { id: 1, namaItem: "Besi Plat A", jumlahCacat: 5, status: "Kritis" },
  { id: 2, namaItem: "Aluminium Batang", jumlahCacat: 2, status: "Sedang" },
  { id: 3, namaItem: "Baut M10", jumlahCacat: 10, status: "Kritis" },
];

function LaporanKualitas() {
  return (
    <div className="container mt-4">
      <h1>Laporan Kualitas Produksi</h1>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Item</th>
            <th>Jumlah Cacat</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataCacat.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.namaItem}</td>
              <td>{d.jumlahCacat}</td>
              <td><span className="badge bg-danger">{d.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKualitas;
