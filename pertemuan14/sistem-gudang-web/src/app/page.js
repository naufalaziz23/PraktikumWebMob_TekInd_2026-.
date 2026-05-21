"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Bagian Header */}
      <header className={styles.header}>
        {/* Latihan 1: Gambar/Ikon Logo Perusahaan */}
        <div className={styles.logoWrapper}>
          <img 
            src="/logo.png" 
            alt="Logo Perusahaan"
            className={styles.logo}
          />
        </div>
        <h1 className={styles.headerTitle}>PT. Manufaktur Maju</h1>
        <p className={styles.headerSubtitle}>Aplikasi Monitoring Gudang</p>
      </header>

      {/* Bagian Konten Utama */}
      <main className={styles.content}>
        <h2 className={styles.welcomeText}>Selamat Datang, Operator!</h2>
        
        {/* Langkah 3: Interaksi Alert pada Gudang A */}
        <div 
          className={`${styles.card} ${styles.interactiveCard}`}
          onClick={() => alert("Membuka Detail Stok Gudang A...")}
        >
          <h3 className={styles.cardTitle}>Status Gudang A</h3>
          <p className={styles.cardValue}>Kapasitas: 85%</p>
          <p className={styles.cardStatusSuccess}>TEKAN UNTUK DETAIL</p>
        </div>

        <div className={`${styles.card} ${styles.cardWarning}`}>
          <h3 className={styles.cardTitle}>Status Gudang B</h3>
          <p className={styles.cardValue}>Kapasitas: 95%</p>
          <p className={styles.cardStatusWarning}>PENUH</p>
        </div>

        {/* Tugas Proyek Mini: Profil Mesin Mobile */}
        <h2 className={styles.sectionTitle}>Profil Mesin Utama</h2>
        
        <div className={styles.machineCard}>
          <img 
            src="/mesin.png" 
            alt="Foto Mesin" 
            className={styles.machineImage} 
          />
          <div className={styles.machineInfo}>
            <h3 className={styles.machineName}>Mesin CNC Lathe XYZ</h3>
            <p className={styles.machineYear}>Tahun Pembuatan: 2020</p>
            <p className={styles.machineStatus}>Status: BEROPERASI</p>
          </div>
        </div>
      </main>
    </div>
  );
}
