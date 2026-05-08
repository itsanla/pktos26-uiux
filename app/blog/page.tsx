import Image from "next/image";

const POSTS = [
  { slug: "blog1",  category: "Budaya",      title: "Menjaga Harmoni di Pura Tanah Lot",      date: "10 Jan 2026", excerpt: "Eksplorasi nilai spiritual dan pelestarian lingkungan di pura laut ikonik Bali." },
  { slug: "blog2",  category: "Tradisi",     title: "Makna Tradisi Pujawali",                  date: "15 Feb 2026", excerpt: "Rangkaian upacara suci yang menjadi jantung kehidupan beragama masyarakat Bali." },
  { slug: "blog3",  category: "Sejarah",     title: "Jejak Langkah Dang Hyang Nirartha",       date: "02 Mar 2026", excerpt: "Sejarah berdirinya pura dari perjalanan panjang seorang pendeta suci." },
  { slug: "blog4",  category: "Mitos",       title: "Ular Suci Penjaga Pura",                  date: "20 Mar 2026", excerpt: "Mitos dan fakta keberadaan ular belang yang disakralkan oleh warga setempat." },
  { slug: "blog5",  category: "Seni",        title: "Eksotisme Senja dan Fotografi",           date: "05 Apr 2026", excerpt: "Siluet matahari terbenam sebagai inspirasi karya seni digital kontemporer." },
  { slug: "blog6",  category: "Arsitektur",  title: "Keunikan Arsitektur Karang Suci",         date: "18 Apr 2026", excerpt: "Struktur pura yang mampu bertahan dari hantaman ombak samudra selama berabad." },
  { slug: "blog7",  category: "Spiritual",   title: "Misteri Gua Air Suci",                    date: "02 Mei 2026", excerpt: "Keajaiban sumber air tawar di tengah lautan asin untuk ritual penyucian." },
  { slug: "blog8",  category: "Budaya",      title: "Tari Kecak di Tepi Samudra",              date: "15 Mei 2026", excerpt: "Pertunjukan seni budaya yang melengkapi pengalaman magis senja di Bali." },
  { slug: "blog9",  category: "Teknologi",   title: "Pariwisata di Era Digital",               date: "28 Mei 2026", excerpt: "Pemanfaatan teknologi interaktif untuk mendukung pariwisata yang berkelanjutan." },
  { slug: "blog10", category: "Lingkungan",  title: "Konservasi Karang dan Lingkungan",        date: "10 Jun 2026", excerpt: "Langkah strategis melindungi batu karang dari ancaman abrasi dan erosi laut." },
];

export default function BlogPage() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="sec-eyebrow">
            <span className="num">Journal</span> Warta Budaya <span className="ln" />
          </div>
          <h1 className="page-banner-title">
            Stories from<br /><em>the shore.</em>
          </h1>
          <p className="page-banner-sub">
            Pelestarian digital warisan sejarah, budaya, dan lingkungan Pura Tanah Lot, Bali.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: "var(--bg)" }}>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <article key={post.slug} className="blog-card reveal">
              <a href={`/blog/${post.slug}`} className="blog-card-img">
                <Image
                  src="/blog/placeholder.webp"
                  alt={post.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </a>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-card-cat">{post.category}</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
                <a href={`/blog/${post.slug}`} className="blog-card-title">{post.title}</a>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="blog-card-link">Baca selengkapnya</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
