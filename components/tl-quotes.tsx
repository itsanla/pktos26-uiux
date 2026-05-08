const QUOTES = [
  {
    text: "I came for the photograph. I left having forgotten my camera was in my hand. There is something about the way the rock holds the sea that you don't understand until you stand there.",
    name: "Mariana de Souza",
    location: "São Paulo · March 2026",
    initial: "M",
  },
  {
    text: "The priest who blessed me at the spring spoke six words of English and I spoke none of his language. We understood each other completely.",
    name: "Kenji Watanabe",
    location: "Kyoto · January 2026",
    initial: "K",
  },
  {
    text: "Everyone tells you to come for sunset. Nobody tells you to stay for the twenty minutes after, when everything turns the colour of an old bruise. That's the part you'll remember.",
    name: "Aoife Ó Briain",
    location: "Dublin · November 2025",
    initial: "A",
  },
];

export default function TLQuotes() {
  return (
    <section className="quotes section-pad" id="reviews">
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow">
            <span className="num">05</span> Voices <span className="ln" />
          </div>
          <h2 className="about-title" style={{ marginBottom: 80 }}>
            Travelers who <em>stayed</em><br />past the last light.
          </h2>
        </div>
        <div className="quote-row">
          {QUOTES.map((q) => (
            <div key={q.name} className="quote reveal">
              <span className="mark">&ldquo;</span>
              <blockquote>{q.text}</blockquote>
              <div className="who">
                <div className="av">{q.initial}</div>
                <div>
                  <div className="nm">{q.name}</div>
                  <div className="lc">{q.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
