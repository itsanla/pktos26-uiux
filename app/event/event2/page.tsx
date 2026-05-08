export default function Event2() {
  return (
    <main>
      <div className="event-detail-banner">
        <div className="container">
          <a href="/event" className="article-back">← Kembali ke Event</a>
          <p className="event-loc" style={{ marginBottom: 16 }}>Tanah Lot, Tabanan, Bali</p>
          <div className="event-detail-date">05 Apr</div>
          <h1 className="article-title" style={{ marginTop: 24 }}>Festival Senja Laut</h1>
        </div>
      </div>
      <div className="event-detail-body">
        <div className="container">
          <div className="event-detail-grid">
            <div>
              <p className="event-detail-desc">
                Festival Senja Laut menampilkan tarian Legong, tarian Kecak, dan pertunjukan musik
                tradisional sambil menyaksikan matahari terbenam di balik pura. Panggung terbuka di
                tepi tebing memberikan pengalaman visual yang tak terlupakan.
              </p>
              <p className="event-detail-desc" style={{ marginTop: 24 }}>
                Acara berlangsung mulai pukul 17.00 WITA dan mencapai puncaknya saat golden hour ketika
                siluet pura terbingkai oleh langit jingga keemasan. Tiket tersedia secara online maupun
                di lokasi dengan kapasitas terbatas untuk menjaga kualitas pengalaman setiap pengunjung.
              </p>
            </div>
            <div className="event-detail-sidebar">
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Tanggal</p>
                <p className="event-detail-fact-val">05 April 2026</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Durasi</p>
                <p className="event-detail-fact-val">4 jam</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Highlight</p>
                <p className="event-detail-fact-val">Pagelaran seni di bawah langit jingga</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Lokasi</p>
                <p className="event-detail-fact-val">Tanah Lot, Tabanan, Bali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
