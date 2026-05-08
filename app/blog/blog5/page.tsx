import Image from "next/image";

export default function Blog5() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Seni</span>
            <span>05 April 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Eksotisme Senja dan Fotografi</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Senja Tanah Lot" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Setiap sore menjelang pukul 18.00 WITA, Tanah Lot berubah menjadi kanvas alam yang luar biasa.
          Siluet pura yang berdiri di atas batu karang dengan latar langit jingga keemasan telah menjadi
          salah satu ikon fotografi paling ikonik di Asia Tenggara.
        </p>
        <p>
          Para fotografer dari seluruh dunia rela menunggu berjam-jam di tepi pantai demi mendapatkan
          momen golden hour yang sempurna. Perpaduan antara arsitektur pura, tekstur batu karang, dan
          pantulan cahaya matahari di permukaan laut menciptakan komposisi yang selalu memukau.
        </p>
      </div>
    </main>
  );
}
