import Navbar from "@/components/navbar";

export default function Blog4() {
  return (
    <main className="min-h-screen bg-stone-50 pb-20">
      <Navbar />
      <article className="p-8 max-w-3xl mx-auto bg-white mt-10 rounded-2xl shadow-sm border border-stone-200">
        <a href="/blog" className="text-sm text-amber-700 hover:text-orange-600 font-semibold uppercase tracking-widest transition-colors">
          ← Kembali
        </a>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mt-6 mb-4 text-stone-900 leading-tight">
          Ular Suci Penjaga Pura
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500 mb-8 border-b border-stone-100 pb-6">
          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">Mitos</span>
          <p>20 Maret 2026</p>
          <span>•</span>
          <p>Ditulis oleh Rahmat</p>
        </div>
        <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-900 first-letter:mr-3 first-letter:float-left text-stone-800 leading-loose text-lg">
          Di gua-gua karang sekitar area suci terdapat ular laut belang (Ular Poleng) yang dipercaya sebagai penjaga pura dari roh jahat. Pembuatan ensiklopedia digital interaktif mengenai fauna ini dapat membantu meluruskan mitos sekaligus mendorong pelestarian satwa laut di kawasan wisata.
        </p>
      </article>
    </main>
  );
}