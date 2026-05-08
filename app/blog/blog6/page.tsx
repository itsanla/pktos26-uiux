import Image from "next/image";

export default function Blog6() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Arsitektur</span>
            <span>18 April 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Keunikan Arsitektur Karang Suci</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/placeholder.webp" alt="Arsitektur Tanah Lot" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Pura Tanah Lot dibangun di atas batu karang yang terisolasi dari daratan saat air pasang.
          Konstruksi tanpa fondasi modern ini telah bertahan selama lebih dari lima abad menghadapi
          gempuran ombak Samudra Hindia — sebuah bukti keahlian arsitektur tradisional Bali yang luar biasa.
        </p>
        <p>
          Pada tahun 1980-an, sebagian batu karang yang rapuh diperkuat dengan material buatan. Namun
          perdebatan pun muncul: apakah intervensi modern ini mengorbankan keaslian situs? Pertanyaan
          ini masih menjadi diskusi aktif di kalangan ahli konservasi dan pemuka agama Bali hingga kini.
        </p>
      </div>
    </main>
  );
}
