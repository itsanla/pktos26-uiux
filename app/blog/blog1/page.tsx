import Image from "next/image";

export default function Blog1() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Budaya</span>
            <span>10 Januari 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Menjaga Harmoni di Pura Tanah Lot</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/blog1.webp" alt="Menjaga Harmoni" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Pura Tanah Lot bukan sekadar destinasi wisata, melainkan simbol keseimbangan antara manusia,
          alam, dan Tuhan — Tri Hita Karana. Dalam era digital ini, upaya pelestarian tidak hanya berfokus
          pada fisik bangunan pura yang terkikis ombak, tetapi juga menjaga kesucian dan nilai budayanya
          agar dapat diwariskan ke generasi mendatang.
        </p>
        <p>
          Setiap tahun ribuan wisatawan dari seluruh penjuru dunia datang untuk menyaksikan keindahan
          pura yang berdiri kokoh di atas batu karang. Tantangan terbesar adalah menyeimbangkan kepentingan
          pariwisata dengan kesakralan tempat ibadah yang masih aktif digunakan hingga hari ini.
        </p>
      </div>
    </main>
  );
}
