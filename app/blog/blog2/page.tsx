import Image from "next/image";

export default function Blog2() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Tradisi</span>
            <span>15 Februari 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Makna Tradisi Pujawali</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/blog2.webp" alt="Tradisi Pujawali" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Setiap 210 hari sekali, Pura Tanah Lot menyelenggarakan upacara Pujawali — perayaan sakral
          yang menjadi jantung kehidupan beragama masyarakat Hindu Bali. Ribuan umat datang membawa
          sesaji, dupa, dan bunga untuk menghaturkan persembahan kepada Dewa Baruna, penguasa lautan.
        </p>
        <p>
          Melalui media digital interaktif, kita dapat mengedukasi wisatawan tentang tata krama saat
          odalan berlangsung sehingga menjaga kesakralan prosesi ibadah. Pemahaman ini menjadi jembatan
          antara pariwisata modern dan nilai-nilai spiritual yang telah terjaga selama berabad-abad.
        </p>
      </div>
    </main>
  );
}
