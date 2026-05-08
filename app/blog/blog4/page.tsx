import Image from "next/image";

export default function Blog4() {
  return (
    <main>
      <div className="article-banner">
        <div className="container">
          <a href="/blog" className="article-back">← Kembali ke Journal</a>
          <div className="article-eyebrow">
            <span className="article-cat">Mitos</span>
            <span>20 Maret 2026</span>
            <span>·</span>
            <span>Rahmat</span>
          </div>
          <h1 className="article-title">Ular Suci Penjaga Pura</h1>
        </div>
        <div className="article-hero">
          <Image src="/blog/blog4.webp" alt="Ular Suci" fill style={{ objectFit: "cover" }} sizes="100vw" />
        </div>
      </div>
      <div className="article-body">
        <p>
          Di dalam gua yang terletak di kaki batu karang Tanah Lot, hidup ular laut berbercak hitam
          putih yang dianggap keramat. Menurut kepercayaan masyarakat setempat, ular ini adalah
          jelmaan selendang Dang Hyang Nirartha yang bertugas menjaga kesucian pura dari pengaruh jahat.
        </p>
        <p>
          Secara ilmiah, ular tersebut diidentifikasi sebagai Laticauda colubrina, spesies ular laut
          yang memang tidak agresif dan cenderung jinak. Kehadiran mereka di celah-celah batu karang
          menjadi daya tarik tersendiri bagi para wisatawan yang penasaran dengan mitos penjaga pura ini.
        </p>
      </div>
    </main>
  );
}
