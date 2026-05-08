export default function Event1() {
  return (
    <main>
      <div className="event-detail-banner">
        <div className="container">
          <a href="/event" className="article-back">← Kembali ke Event</a>
          <p className="event-loc" style={{ marginBottom: 16 }}>Tanah Lot, Tabanan, Bali</p>
          <div className="event-detail-date">20 Mar</div>
          <h1 className="article-title" style={{ marginTop: 24 }}>Pujawali Tanah Lot</h1>
        </div>
      </div>
      <div className="event-detail-body">
        <div className="container">
          <div className="event-detail-grid">
            <div>
              <p className="event-detail-desc">
                Upacara adat Pujawali di Tanah Lot merayakan keindahan pura tepi laut dengan persembahan
                bunga, dupa, gamelan, dan prosesi doa di tepi samudra. Setiap 210 hari sekali, ribuan
                umat Hindu Bali berkumpul untuk menghaturkan rasa syukur kepada Dewa Baruna.
              </p>
              <p className="event-detail-desc" style={{ marginTop: 24 }}>
                Pengunjung dipersilakan menyaksikan prosesi dari area yang telah ditentukan, dengan tetap
                menghormati kesucian upacara. Pakaian sopan dan selendang wajib dikenakan selama berada
                di kawasan pura selama acara berlangsung.
              </p>
            </div>
            <div className="event-detail-sidebar">
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Tanggal</p>
                <p className="event-detail-fact-val">20 Maret 2026</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Durasi</p>
                <p className="event-detail-fact-val">3 jam</p>
              </div>
              <div className="event-detail-fact">
                <p className="event-detail-fact-lbl">Highlight</p>
                <p className="event-detail-fact-val">Prosesi ritual pura yang kaya budaya</p>
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
