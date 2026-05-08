const PHOTOS = [
  { cls: "g1", label: "Pura Tanah Lot · Golden Hour", ph: "Hero · Temple at golden hour · 16:11", style: {} },
  { cls: "g2", label: "High Tide · Surf", ph: "Vertical · Surf against rock · 4:5", style: { backgroundImage: "repeating-linear-gradient(45deg,#8a3a14 0,#8a3a14 12px,#a04518 12px,#a04518 24px)" } },
  { cls: "g3", label: "Stone · Detail", ph: "Square · Temple gate detail", style: { backgroundImage: "repeating-linear-gradient(45deg,#c4521a 0,#c4521a 12px,#d96024 12px,#d96024 24px)", color: "rgba(255,255,255,.85)" } },
  { cls: "g4", label: "Offering", ph: "Square · Pilgrim with offerings", style: {} },
  { cls: "g5", label: "Frangipani", ph: "Square · Frangipani · Detail", style: { backgroundImage: "repeating-linear-gradient(45deg,#3a1809 0,#3a1809 12px,#5a2a14 12px,#5a2a14 24px)" } },
  { cls: "g6", label: "Cliffs · Aerial", ph: "Wide · Cliffs from above · 4:3", style: { backgroundImage: "repeating-linear-gradient(45deg,#caa05a 0,#caa05a 12px,#b89048 12px,#b89048 24px)", color: "rgba(26,15,10,.6)" } },
  { cls: "g7", label: "Witness", ph: "Wide · Crowd at sunset · 7:4", style: {} },
];

export default function TLGallery() {
  return (
    <section className="gallery section-pad" id="gallery">
      <div className="container">
        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <div className="sec-eyebrow">
              <span className="num">02</span> The Gallery <span className="ln" />
            </div>
            <h2 className="about-title">
              Five hundred<br /><em>sunsets</em> a year.
            </h2>
          </div>
          <p className="mono" style={{ maxWidth: "32ch", textAlign: "right" }}>
            A visual essay — light, stone, salt, and the people who come to witness.
          </p>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map(({ cls, label, ph, style }) => (
            <figure key={cls} className={`g ${cls} reveal`}>
              <div className="ph" style={style}>{ph}</div>
              <div className="cap">{label}</div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
