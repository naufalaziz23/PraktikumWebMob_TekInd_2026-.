import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <h1>Detail Item</h1>
      <Link to="/inventori" className="btn btn-secondary mb-3">Kembali ke Inventori</Link>
      
      {loading ? (
        <p>Memuat detail item...</p>
      ) : item ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ID Item: {item.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Nama Bahan: {item.title}</h6>
            <p className="card-text">Deskripsi: {item.body}</p>
          </div>
        </div>
      ) : (
        <p>Item tidak ditemukan.</p>
      )}
    </div>
  );
}

export default ItemDetail;
