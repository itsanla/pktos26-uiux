const TIPS = [
  {
    num: "01",
    title: "Arrive ninety minutes before sunset.",
    body: "The cliffside terraces fill quickly. The earlier you arrive, the more freedom you'll have to find a spot where stone, sky, and silhouette align.",
    meta: "— Best position",
  },
  {
    num: "02",
    title: "Cross only at low tide.",
    body: "Access to the rock base is governed by the sea. Tide tables shift daily — check the day's schedule at the entrance, or refer to our live tide read.",
    meta: "— Tides & access",
  },
  {
    num: "03",
    title: "Dress with quiet respect.",
    body: "This is an active temple. Cover shoulders and knees; sarongs are available at the entrance. No drone flights inside the sacred perimeter.",
    meta: "— Etiquette",
  },
  {
    num: "04",
    title: "Skip the weekend if you can.",
    body: "Tuesday through Thursday are the calmest days. Saturday at sunset can mean shoulder-to-shoulder crowds — beautiful, but loud.",
    meta: "— Best days",
  },
  {
    num: "05",
    title: "Stay for the after-glow.",
    body: "Most leave the moment the sun touches the horizon. The next twenty minutes — when the sky bruises violet — is the photograph nobody else takes.",
    meta: "— Hidden moment",
  },
  {
    num: "06",
    title: "Holy water ritual is optional.",
    body: "Visitors may receive a blessing from the temple priest at the spring beneath the rock — a small donation is customary. Photography is permitted with permission.",
    meta: "— Ritual",
  },
];

export default function TLTips() {
  return (
    <section className="tips section-pad" id="tips">
      <div className="container">
        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32 }}
        >
          <div>
            <div className="sec-eyebrow">
              <span className="num">03</span> The Field Guide <span className="ln" />
            </div>
            <h2 className="tips-title">
              Six things you should <em>know.</em>
            </h2>
          </div>
          <p className="mono" style={{ maxWidth: "36ch", color: "rgba(244,235,224,.55)" }}>
            Practical wisdom from those who&apos;ve stood on these cliffs at the right hour.
          </p>
        </div>

        <div className="tips-grid">
          {TIPS.map((tip) => (
            <div key={tip.num} className="tip reveal">
              <span className="num">{tip.num}</span>
              <h4>{tip.title}</h4>
              <p>{tip.body}</p>
              <span className="meta">{tip.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
