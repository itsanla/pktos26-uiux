import Navbar from "@/components/navbar";

export default function Blog3() {
  return (
    <main className="min-h-screen bg-stone-50 pb-20">
      <Navbar />
      <article className="p-8 max-w-3xl mx-auto bg-white mt-10 rounded-2xl shadow-sm border border-stone-200">
        <a href="/blog" className="text-sm text-amber-700 hover:text-orange-600 font-semibold uppercase tracking-widest transition-colors">
          ← Kembali
        </a>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mt-6 mb-4 text-stone-900 leading-tight">
          Jejak Langkah Dang Hyang Nirartha
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 mb-8 border-b border-stone-100 pb-6">
          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">Sejarah</span>
          <p>02 Maret 2026</p>
          <span>•</span>
          <p>Ditulis oleh Rahmat</p>
        </div>
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-900 first-letter:mr-3 first-letter:float-left text-stone-800 leading-loose text-lg">
          Sejarah Tanah Lot tidak lepas dari sosok Dang Hyang Nirartha, seorang pendeta suci dari abad ke-15. Beliau melihat cahaya suci dari arah laut dan memutuskan untuk bertapa di bongkahan batu karang tersebut. Jejak spiritual ini menjadi pondasi penting berdirinya Pura Tanah Lot yang kita kenal sekarang.
        </p>
      </article>
    </main>
  );
}