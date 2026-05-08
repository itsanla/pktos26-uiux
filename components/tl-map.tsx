export default function TLMap() {
  return (
    <section className="mapsec section-pad" id="map">
      <div className="container">
        <div className="map-grid">
          <div className="map-info reveal">
            <div className="sec-eyebrow">
              <span className="num">04</span> Find Us <span className="ln" />
            </div>
            <h3>
              Beraban village,<br />Tabanan <em>Regency.</em>
            </h3>
            <p>
              Forty-five minutes from Seminyak, an hour from Ubud. The coastal road winds through
              rice terraces before opening, suddenly, onto the sea.
            </p>
            <div className="map-coords">
              <div>
                <div className="lbl">Latitude</div>
                <div className="val">−8.6212° S</div>
              </div>
              <div>
                <div className="lbl">Longitude</div>
                <div className="val">115.0868° E</div>
              </div>
              <div>
                <div className="lbl">Open</div>
                <div className="val">06:00 — 19:00</div>
              </div>
              <div>
                <div className="lbl">Entry</div>
                <div className="val">IDR 75,000</div>
              </div>
            </div>
          </div>

          <div className="map-canvas reveal">
            <svg
              viewBox="0 0 600 480"
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              style={{ display: "block" }}
            >
              <defs>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.7" fill="rgba(26,15,10,0.18)" />
                </pattern>
                <radialGradient id="ocean" cx="20%" cy="80%" r="80%">
                  <stop offset="0%" stopColor="#a8c4d4" />
                  <stop offset="100%" stopColor="#6b8a9b" />
                </radialGradient>
                <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e6d8c6" />
                  <stop offset="100%" stopColor="#d6c4ad" />
                </linearGradient>
              </defs>
              <rect width="600" height="480" fill="url(#ocean)" />
              <path
                d="M600,0 L600,480 L420,480 L380,440 L340,400 L300,370 L240,340 L200,300 L210,260 L260,220 L300,180 L360,140 L420,100 L500,60 L600,20 Z"
                fill="url(#land)"
              />
              <path
                d="M600,0 L600,480 L420,480 L380,440 L340,400 L300,370 L240,340 L200,300 L210,260 L260,220 L300,180 L360,140 L420,100 L500,60 L600,20 Z"
                fill="url(#dots)"
              />
              {/* terrain lines */}
              <path d="M260,220 Q310,210 360,220 T460,210" fill="none" stroke="rgba(26,15,10,0.18)" strokeWidth="0.6" />
              <path d="M280,260 Q340,250 400,260 T500,255" fill="none" stroke="rgba(26,15,10,0.14)" strokeWidth="0.6" />
              <path d="M300,310 Q360,300 420,308 T540,300" fill="none" stroke="rgba(26,15,10,0.12)" strokeWidth="0.6" />
              {/* ocean waves */}
              <path d="M30,360 q15,-6 30,0 t30,0 t30,0 t30,0" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <path d="M60,400 q15,-6 30,0 t30,0 t30,0 t30,0" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <path d="M120,300 q15,-6 30,0 t30,0 t30,0 t30,0" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              {/* marker */}
              <ellipse cx="225" cy="320" rx="14" ry="9" fill="#1a0f0a" />
              <circle cx="225" cy="320" r="6" fill="#e87545">
                <animate attributeName="r" values="6;14;6" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="225" cy="320" r="5" fill="#e87545" />
              <circle cx="225" cy="320" r="2" fill="#fff" />
              {/* label line */}
              <line x1="225" y1="320" x2="120" y2="200" stroke="#1a0f0a" strokeWidth="0.8" />
              <circle cx="120" cy="200" r="2" fill="#1a0f0a" />
              <text x="20" y="186" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#1a0f0a" letterSpacing="1.5">
                PURA TANAH LOT
              </text>
              <text x="20" y="200" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(26,15,10,0.6)" letterSpacing="1">
                −8.6212°  115.0868°
              </text>
              {/* compass */}
              <g transform="translate(540,60)">
                <circle r="22" fill="rgba(255,255,255,0.5)" stroke="rgba(26,15,10,0.3)" strokeWidth="0.6" />
                <path d="M0,-16 L4,0 L0,16 L-4,0 Z" fill="#1a0f0a" />
                <path d="M0,-16 L4,0 L0,0 Z" fill="#c4521a" />
                <text x="0" y="-26" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#1a0f0a">
                  N
                </text>
              </g>
              {/* scale bar */}
              <g transform="translate(30,440)">
                <rect width="80" height="3" fill="#1a0f0a" />
                <rect x="40" width="40" height="3" fill="#fff" stroke="#1a0f0a" strokeWidth="0.5" />
                <text x="0" y="22" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#1a0f0a" letterSpacing="1">
                  0      1 KM
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
