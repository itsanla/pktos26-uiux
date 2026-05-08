export default function Event3() {
  return (
    <main>
      <div className="event-detail-banner">
        <div className="container">
          <a href="/event" className="article-back">← Kembali ke Event</a>
          <p className="event-loc" style={{ marginBottom: 16 }}>Tanah Lot, Tabanan, Bali</p>
          <div className="event-detail-date">12 Apr</div>
          <h1 className="article-title" style={{ marginTop: 24 }}>Pasar Kriya Senja</h1>
        </div>
      </div>
      <div className="event-detail-body">
        <div className="container">
          <div className="event-detail-grid">
            <div>
              <p className="event-detail-desc">
                Pasar seni dan kuliner Pasar Kriya Senja menghadirkan kerajinan tangan Bali, kuliner
                lokal autentik, dan suvenir eksklusif buatan tangan pengrajin dari seluruh Tabanan.
                Setiap lapak diseleksi untuk memastikan kualitas dan keaslian produk.
              </p>
              <p className="event-detail-desc" style={{ marginTop: 24 }}>
                Nikmati sajian lawar, sate lilit, dan berbagai jajanan tradisional Bali sambil
                menyaksikan pemandangan laut yang memukau. Penghasilan dari pasar ini langsung
                mendukung komunitas pengrajin lokal dan program pelestarian budaya di kawasan Tanah Lot.
              </p>
            </div>
            <div className="event-detail-sidebar">
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Tanggal</p>
                <p className="event-detail-fact-val">12 April 2026</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Durasi</p>
                <p className="event-detail-fact-val">5 jam</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Highlight</p>
                <p className="event-detail-fact-val">Kuliner khas Bali dan karya kriya lokal</p>
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
