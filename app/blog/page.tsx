export default function BlogPage() {
  const posts = [
    { slug: "blog1", category: "Budaya", title: "Menjaga Harmoni di Pura Tanah Lot", date: "10 Jan 2026", excerpt: "Eksplorasi nilai spiritual dan pelestarian lingkungan di pura laut ikonik." },
    { slug: "blog2", category: "Tradisi", title: "Makna Tradisi Pujawali", date: "15 Feb 2026", excerpt: "Rangkaian upacara suci jantung kehidupan beragama masyarakat Bali." },
    { slug: "blog3", category: "Sejarah", title: "Jejak Langkah Dang Hyang Nirartha", date: "02 Mar 2026", excerpt: "Sejarah berdirinya pura dari perjalanan seorang pendeta suci." },
    { slug: "blog4", category: "Mitos", title: "Ular Suci Penjaga Pura", date: "20 Mar 2026", excerpt: "Mitos dan fakta keberadaan ular belang yang disakralkan." },
    { slug: "blog5", category: "Seni", title: "Eksotisme Senja dan Fotografi", date: "05 Apr 2026", excerpt: "Siluet matahari terbenam sebagai inspirasi karya seni digital." },
    { slug: "blog6", category: "Arsitektur", title: "Keunikan Arsitektur Karang Suci", date: "18 Apr 2026", excerpt: "Struktur pura yang mampu bertahan dari hantaman ombak samudra." },
    { slug: "blog7", category: "Spiritual", title: "Misteri Gua Air Suci", date: "02 Mei 2026", excerpt: "Keajaiban sumber air tawar di tengah lautan asin untuk penyucian." },
    { slug: "blog8", category: "Budaya", title: "Tari Kecak di Tepi Samudra", date: "15 Mei 2026", excerpt: "Pertunjukan seni budaya yang melengkapi pengalaman magis di Bali." },
    { slug: "blog9", category: "Teknologi", title: "Pariwisata di Era Digital", date: "28 Mei 2026", excerpt: "Pemanfaatan teknologi interaktif untuk mendukung pariwisata berkelanjutan." },
    { slug: "blog10", category: "Lingkungan", title: "Konservasi Karang dan Lingkungan", date: "10 Jun 2026", excerpt: "Langkah strategis melindungi batu karang dari ancaman abrasi." },
  ];

  return (
    <main className="min-h-screen bg-stone-50 pb-16">
      {/* Header Banner */}
      <section className="bg-amber-900 text-amber-50 py-16 px-8 text-center border-b-8 border-orange-600">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wide">Warta Budaya Tanah Lot</h1>
        <p className="max-w-2xl mx-auto text-amber-200 text-lg">Pelestarian Digital Warisan Sejarah dan Lingkungan Bali.</p>
      </section>

      {/* Grid Artikel */}
      <ul className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="h-40 bg-gradient-to-br from-amber-800 via-orange-600 to-amber-500 w-full relative overflow-hidden flex items-center justify-center">
               <span className="text-white/80 font-serif text-xl font-bold uppercase tracking-widest">{post.category}</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs text-amber-800 font-semibold mb-2 uppercase tracking-wider">{post.date}</p>
              <a href={`/blog/${post.slug}`} className="block mb-3">
                <h2 className="text-xl font-serif font-bold text-stone-900 group-hover:text-orange-600 transition-colors">{post.title}</h2>
              </a>
              <p className="text-stone-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="mt-auto text-sm text-orange-600 font-bold hover:text-amber-800 transition-colors">
                Baca Selengkapnya →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}