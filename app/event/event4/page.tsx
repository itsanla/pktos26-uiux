export default function Event2() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,69,19,0.28),transparent_25%),linear-gradient(180deg,#7c4a1f_0%,#b36d2e_35%,#3b190a_100%)] px-4 py-10 text-amber-100">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-amber-100/15 bg-[#2b1208]/75 p-8 shadow-[0_35px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <a href="/event" className="text-sm font-semibold text-amber-100/90 transition hover:text-white">← Kembali</a>
        <h1 className="mt-6 text-4xl font-extrabold">Event 2</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-orange-100/80">5 April 2026 · Bandung</p>
        <p className="mt-8 text-base leading-8 text-orange-100/85">
          Deskripsi lengkap event kedua. Isi dengan informasi sebenarnya nanti, dan rasakan sensasi sunset ala Bali di setiap detail tampilan.
        </p>
      </div>
    </main>
  );
}
