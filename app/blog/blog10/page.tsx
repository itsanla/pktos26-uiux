import Image from "next/image";

export default function Blog10() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Lingkungan</span>
            <span>10 Juni 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Konservasi Karang dan Lingkungan</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Konservasi Karang" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Abrasi laut menjadi ancaman nyata bagi kelestarian Tanah Lot. Setiap tahun, diperkirakan
          beberapa sentimeter batu karang terkikis oleh kekuatan ombak dan aktivitas manusia. Program
          konservasi terpadu melibatkan ilmuwan, pemuka adat, dan komunitas lokal untuk mencari solusi jangka panjang.
        </p>
        <p>
          Salah satu inovasi yang menjanjikan adalah penanaman terumbu karang buatan di sekitar kaki
          batu karang utama. Selain memperkuat struktur alami, terumbu karang ini juga menjadi habitat
          bagi biota laut dan menambah kekayaan ekosistem pesisir di kawasan warisan budaya Tanah Lot.
        </p>
      </div>
    </main>
  );
}
