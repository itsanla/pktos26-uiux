const events = [
  {
    slug: "event1",
    title: "Pujawali Tanah Lot",
    day: "20",
    month: "Mar",
    year: "2026",
    location: "Tanah Lot, Bali",
    description: "Upacara adat Pujawali di Tanah Lot merayakan keindahan pura tepi laut dengan persembahan bunga, dupa, gamelan, dan prosesi doa di tepi samudra.",
    highlight: "Prosesi ritual pura yang kaya budaya.",
    duration: "3 jam",
  },
  {
    slug: "event2",
    title: "Festival Senja Laut",
    day: "05",
    month: "Apr",
    year: "2026",
    location: "Tanah Lot, Bali",
    description: "Festival ini menampilkan tarian Legong, tarian kecak, dan pertunjukan musik tradisional sambil menyaksikan matahari terbenam di balik pura.",
    highlight: "Pagelaran seni dan musik di bawah langit jingga.",
    duration: "4 jam",
  },
  {
    slug: "event3",
    title: "Pasar Kriya Senja",
    day: "12",
    month: "Apr",
    year: "2026",
    location: "Tanah Lot, Bali",
    description: "Pasar seni dan kuliner menghadirkan kerajinan tangan Bali, kuliner lokal, dan suvenir eksklusif dengan pemandangan laut yang memukau.",
    highlight: "Hidangan khas Bali dan karya kriya seniman lokal.",
    duration: "5 jam",
  },
  {
    slug: "event4",
    title: "Workshop Fotografi Sunset",
    day: "18",
    month: "Apr",
    year: "2026",
    location: "Tanah Lot, Bali",
    description: "Workshop ini mengajak peserta memotret lanskap sunset Tanah Lot, memperkuat narasi visual dan teknik komposisi saat cahaya senja.",
    highlight: "Belajar menangkap momen golden hour terbaik.",
    duration: "2.5 jam",
  },
];

export default function EventPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(139,69,19,0.28),transparent_25%),linear-gradient(180deg,#7c4a1f_0%,#c57b3b_35%,#2d1406_100%)] text-amber-100">
      <section className="relative px-4 py-10 md:px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-100/10 bg-[#2a1207]/70 p-8 backdrop-blur-xl shadow-[0_35px_90px_-40px_rgba(0,0,0,0.65)] sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,209,178,0.18),transparent_30%)]" />
          <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-[#a55a28]/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-24 w-24 rounded-full bg-[#a95b1d]/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.32em] text-amber-100/90">Sunset Bali Vibes</p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">Rangkaian Event Ikonik di Tanah Lot</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-amber-100/90 sm:text-lg">
              Temukan pengalaman eksklusif yang menggabungkan spiritualitas pura, musik tradisional, kuliner otentik, dan lanskap matahari terbenam yang memukau. Setiap acara dirancang untuk memberi sentuhan brown-sunset yang elegan dan kaya cerita.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#event-list" className="inline-flex items-center justify-center rounded-full bg-[#ffffff14] px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-[#ffffff25]">Lihat roadmap event</a>
              <span className="text-sm text-amber-100/80">Langsung dari Tanah Lot, Bali: kombinasi ritual, budaya, dan panorama senja.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="event-list" className="relative px-4 pb-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-amber-100/15 md:block" />
            <div className="space-y-14">
              {events.map((event, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div key={event.slug} className="grid gap-6 md:grid-cols-[1fr_44px_1fr] items-center">
                    <div className={`${isEven ? "md:col-start-3 md:text-right" : "md:col-start-1"}`}>
                      <a href={`/event/${event.slug}`} className="group block rounded-[1.75rem] border border-amber-100/10 bg-[#2b1208]/75 p-8 shadow-[0_25px_50px_-35px_rgba(0,0,0,0.65)] transition hover:-translate-y-1 hover:border-amber-100/20 hover:bg-[#3b190b]/80">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex rounded-full bg-[#b56a2b]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Tanah Lot</span>
                          <span className="inline-flex rounded-full bg-[#f59e0b]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Senja</span>
                          <span className="inline-flex rounded-full bg-[#ec4899]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Budaya</span>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold text-amber-100">{event.title}</h2>
                        <p className="mt-3 text-sm text-amber-100/80">{event.location}</p>
                        <p className="mt-5 text-sm leading-7 text-amber-100/85">{event.description}</p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl bg-[#c47a39]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">Highlight: {event.highlight}</div>
                          <div className="rounded-2xl bg-[#8b4513]/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">Durasi: {event.duration}</div>
                          <div className="rounded-2xl bg-[#fbbf24]/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">Lokasi: {event.location}</div>
                        </div>
                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-100/90">
                          <span className="rounded-full bg-[#ffffff10] px-3 py-1">Selengkapnya</span>
                          <svg className="h-4 w-4 transition duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                        </div>
                      </a>
                    </div>

                    <div className="relative md:col-start-2">
                      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15 md:block hidden" />
                      <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-100/20 bg-[#ffffff14] text-center text-sm font-semibold text-white shadow-lg">
                        <div>
                          <span className="block text-xs uppercase tracking-[0.3em] text-amber-100/80">{event.month}</span>
                          <span className="block text-2xl font-bold leading-none">{event.day}</span>
                          <span className="block text-xs uppercase tracking-[0.3em] text-amber-100/80">{event.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`${isEven ? "md:col-start-1 md:order-1" : "md:col-start-3"}`}>
                      <div className="hidden md:block" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
