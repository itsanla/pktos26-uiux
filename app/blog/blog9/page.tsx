import Image from "next/image";

export default function Blog9() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Teknologi</span>
            <span>28 Mei 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Pariwisata di Era Digital</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Pariwisata Digital" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Teknologi augmented reality kini memungkinkan wisatawan untuk "melihat" Pura Tanah Lot pada
          masa kejayaannya di abad ke-16, bahkan sebelum mereka tiba di lokasi. Platform digital juga
          membantu pengelola situs dalam memantau jumlah kunjungan secara real-time untuk mencegah overcrowding.
        </p>
        <p>
          Inisiatif smart tourism ini tidak hanya meningkatkan pengalaman wisatawan, tetapi juga membantu
          menjaga kelestarian situs. Data analitik memungkinkan pengelola membuat keputusan berbasis bukti
          tentang jam kunjungan optimal dan kapasitas pengunjung yang berkelanjutan untuk generasi mendatang.
        </p>
      </div>
    </main>
  );
}
