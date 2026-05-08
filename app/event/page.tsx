const EVENTS = [
  {
    slug: "event1",
    title: "Pujawali Tanah Lot",
    day: "20", month: "Mar", year: "2026",
    location: "Tanah Lot, Tabanan, Bali",
    description: "Upacara adat Pujawali di Tanah Lot merayakan keindahan pura tepi laut dengan persembahan bunga, dupa, gamelan, dan prosesi doa di tepi samudra.",
    tags: ["Ritual", "Upacara", "3 jam"],
  },
  {
    slug: "event2",
    title: "Festival Senja Laut",
    day: "05", month: "Apr", year: "2026",
    location: "Tanah Lot, Tabanan, Bali",
    description: "Festival ini menampilkan tarian Legong, tarian Kecak, dan pertunjukan musik tradisional sambil menyaksikan matahari terbenam di balik pura.",
    tags: ["Seni", "Musik", "4 jam"],
  },
  {
    slug: "event3",
    title: "Pasar Kriya Senja",
    day: "12", month: "Apr", year: "2026",
    location: "Tanah Lot, Tabanan, Bali",
    description: "Pasar seni dan kuliner menghadirkan kerajinan tangan Bali, kuliner lokal, dan suvenir eksklusif dengan pemandangan laut yang memukau.",
    tags: ["Kuliner", "Kriya", "5 jam"],
  },
  {
    slug: "event4",
    title: "Workshop Fotografi Sunset",
    day: "18", month: "Apr", year: "2026",
    location: "Tanah Lot, Tabanan, Bali",
    description: "Workshop ini mengajak peserta memotret lanskap sunset Tanah Lot, memperkuat narasi visual dan teknik komposisi saat cahaya senja.",
    tags: ["Fotografi", "Workshop", "2.5 jam"],
  },
];

export default function EventPage() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="sec-eyebrow">
            <span className="num">Event</span> Kalender <span className="ln" />
          </div>
          <h1 className="page-banner-title">
            Witness<br /><em>the ritual.</em>
          </h1>
          <p className="page-banner-sub">
            Rangkaian event ikonik yang menggabungkan spiritualitas, seni, dan panorama senja Tanah Lot.
          </p>
        </div>
      </section>

      {/* Event list */}
      <section style={{ background: "var(--bg)", padding: "0 0 120px" }}>
        <div className="container">
          <div className="event-grid">
            {EVENTS.map((ev) => (
              <a key={ev.slug} href={`/event/${ev.slug}`} className="event-card reveal">
                <div className="event-date-col">
                  <span className="event-date-day">{ev.day}</span>
                  <span className="event-date-mon">{ev.month}</span>
                  <span className="event-date-yr">{ev.year}</span>
                </div>
                <div className="event-body-col">
                  <p className="event-loc">{ev.location}</p>
                  <h2 className="event-title">{ev.title}</h2>
                  <p className="event-desc">{ev.description}</p>
                  <div className="event-tags">
                    {ev.tags.map((t) => (
                      <span key={t} className="event-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
