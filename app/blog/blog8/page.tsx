import Image from "next/image";

export default function Blog8() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Budaya</span>
            <span>15 Mei 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Tari Kecak di Tepi Samudra</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Tari Kecak" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Pertunjukan Tari Kecak di Tanah Lot adalah pengalaman yang melampaui sekadar tontonan seni.
          Puluhan penari pria duduk melingkar, mengucapkan "cak" secara berirama sambil menceritakan
          kisah Ramayana — semuanya berlangsung di atas panggung terbuka dengan latar samudra dan langit senja.
        </p>
        <p>
          Kecak diciptakan pada tahun 1930-an oleh seniman Jerman Walter Spies bersama penari Bali
          Wayan Limbak. Sejak saat itu, pertunjukan ini berkembang menjadi simbol seni Bali yang paling
          dikenal di dunia, dan Tanah Lot menawarkan salah satu panggung paling dramatis untuk menyaksikannya.
        </p>
      </div>
    </main>
  );
}
