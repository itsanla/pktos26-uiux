const ITEMS = [
  "Sea Temple", "Sacred Ground", "Sunset Pilgrimage",
  "Pura Tanah Lot", "16th Century", "Indian Ocean", "Bali, Indonesia",
];

function TickerRow({ hidden }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden || undefined}>
      {ITEMS.map((item, i) => (
        <span key={i}>
          {item} <span className="star">✦</span>{" "}
        </span>
      ))}
    </span>
  );
}

export default function TLTicker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </div>
  );
}
