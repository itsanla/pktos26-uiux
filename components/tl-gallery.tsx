import Image from "next/image";

const PHOTOS = [
  { cls: "g1", label: "Pura Tanah Lot · Golden Hour", src: "/galery/g1.webp", position: "center center" },
  { cls: "g2", label: "High Tide · Surf",             src: "/galery/g2.webp", position: "center center" },
  { cls: "g3", label: "Stone · Detail",               src: "/galery/g3.webp", position: "center center" },
  { cls: "g4", label: "Offering",                     src: "/galery/g4.webp", position: "center top" },
  { cls: "g5", label: "Frangipani",                   src: "/galery/g5.webp", position: "center center" },
  { cls: "g6", label: "Cliffs · Aerial",              src: "/galery/g6.webp", position: "center center" },
  { cls: "g7", label: "Witness",                      src: "/galery/g7.webp", position: "center center" },
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
          {PHOTOS.map(({ cls, label, src, position }) => (
            <figure key={cls} className={`g ${cls} reveal`}>
              <Image
                src={src}
                alt={label}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: position }}
              />
              <div className="cap">{label}</div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
