import Image from "next/image";

export default function Blog7() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Spiritual</span>
            <span>02 Mei 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Misteri Gua Air Suci</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Gua Air Suci" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Di balik batu karang Tanah Lot tersimpan sebuah keajaiban alam — mata air tawar yang mengalir
          tepat di tengah lautan asin. Air ini dianggap suci oleh umat Hindu Bali dan digunakan dalam
          berbagai upacara keagamaan, terutama untuk ritual penyucian diri sebelum memasuki area pura.
        </p>
        <p>
          Secara geologi, fenomena ini terjadi karena tekanan air tanah dari pegunungan di daratan Bali
          yang cukup kuat untuk menembus celah batu karang dan mengalir ke permukaan laut. Namun bagi
          para peziarah, ini tetaplah anugerah suci yang tidak ternilai dan tak tergantikan oleh penjelasan ilmiah.
        </p>
      </div>
    </main>
  );
}
