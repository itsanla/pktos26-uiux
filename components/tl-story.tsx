export default function TLStory() {
  return (
    <section className="about section-pad" id="story">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="sec-eyebrow">
              <span className="num">01</span> The Story <span className="ln" />
            </div>
            <div style={{ position: "relative", paddingTop: 80, paddingBottom: 80 }}>

              {/* kanan atas — geser ke bawah, overlap judul */}
              <video
                autoPlay muted loop playsInline
                className="story-vid-tr"
                style={{
                  position: "absolute", top: 0, right: 0,
                  width: 200, borderRadius: 2, display: "block",
                  zIndex: 2,
                }}
              >
                <source src="/assets.mp4" type="video/mp4" />
              </video>

              {/* judul */}
              <h2 className="about-title" style={{ position: "relative", zIndex: 1 }}>
                A temple<br />balanced on the <em>tide.</em>
              </h2>
            </div>
          </div>

          <div className="reveal drop">
            <p className="about-lede">
              Carved by centuries of salt wind, the basalt outcrop of Tanah Lot rises from the surf
              at the western edge of Bali — a black silhouette crowned by a temple that has watched
              five hundred sunsets a year since the 1500s.
            </p>
            <div className="about-body">
              <p>
                Founded by the priest Dang Hyang Nirartha in his pilgrimage along Bali's southern
                coast, the temple is one of seven sea temples that form a spiritual chain around the
                island. At low tide, pilgrims walk to its base to receive holy water from a freshwater
                spring that bubbles up through the rock — a gift the sea has yet to claim.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="num">1545</div>
                <div className="lbl">Year Founded</div>
              </div>
              <div className="stat">
                <div className="num">7</div>
                <div className="lbl">Sea Temples Linked</div>
              </div>
              <div className="stat">
                <div className="num">3M</div>
                <div className="lbl">Annual Visitors</div>
              </div>
              <div className="stat">
                <div className="num">17:54</div>
                <div className="lbl">Tonight's Sunset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
