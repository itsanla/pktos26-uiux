import Image from "next/image";

export default function Blog3() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Sejarah</span>
            <span>02 Maret 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Jejak Langkah Dang Hyang Nirartha</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Dang Hyang Nirartha" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Pada abad ke-16, seorang pendeta Hindu bernama Dang Hyang Nirartha melakukan perjalanan
          spiritual sepanjang pesisir selatan Bali. Di ujung sebuah tanjung berbatu yang dihempas
          ombak Samudra Hindia, beliau menemukan tempat yang dianggap sakral dan mendirikan Pura Tanah Lot.
        </p>
        <p>
          Legenda menyebutkan bahwa Dang Hyang Nirartha melepaskan selendangnya yang kemudian berubah
          menjadi ular laut berbercak hitam putih — sang penjaga suci pura hingga hari ini. Kisah ini
          menjadi bagian tak terpisahkan dari identitas spiritual Tanah Lot di mata masyarakat Bali.
        </p>
      </div>
    </main>
  );
}
