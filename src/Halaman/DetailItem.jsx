// src/Halaman/DetailItem.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailItem() {
  const { id } = useParams();
  return (
    <div className="container mt-4">
      <h1>Detail Item ID: {id}</h1>
      <Link to="/inventori" className="btn btn-secondary">Kembali ke Inventori</Link>
    </div>
  );
}

export default DetailItem;
