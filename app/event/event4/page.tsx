export default function Event4() {
  return (
    <main>
      <div className="event-detail-banner">
        <div className="container">
          <a href="/event" className="article-back">← Kembali ke Event</a>
          <p className="event-loc" style={{ marginBottom: 16 }}>Tanah Lot, Tabanan, Bali</p>
          <div className="event-detail-date">18 Apr</div>
          <h1 className="article-title" style={{ marginTop: 24 }}>Workshop Fotografi Sunset</h1>
        </div>
      </div>
      <div className="event-detail-body">
        <div className="container">
          <div className="event-detail-grid">
            <div>
              <p className="event-detail-desc">
                Workshop Fotografi Sunset mengajak peserta memotret lanskap sunset Tanah Lot yang
                legendaris. Dipandu oleh fotografer profesional berpengalaman, peserta akan mempelajari
                teknik komposisi, pengaturan exposure, dan storytelling visual saat cahaya senja.
              </p>
              <p className="event-detail-desc" style={{ marginTop: 24 }}>
                Workshop mencakup sesi teori singkat, praktik lapangan selama golden hour, dan review
                hasil karya bersama. Peserta akan mendapatkan akses ke spot fotografi terbaik yang
                tidak tersedia untuk umum, termasuk sudut pandang eksklusif dari atas tebing barat.
              </p>
            </div>
            <div className="event-detail-sidebar">
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Tanggal</p>
                <p className="event-detail-fact-val">18 April 2026</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Durasi</p>
                <p className="event-detail-fact-val">2.5 jam</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Highlight</p>
                <p className="event-detail-fact-val">Menangkap momen golden hour terbaik</p>
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
