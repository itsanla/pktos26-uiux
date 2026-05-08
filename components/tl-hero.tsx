"use client";

import { useEffect, useRef, useState } from "react";

const BALI_OFFSET_MS = 8 * 60 * 60 * 1000;
const SUNSET_H = 17;
const SUNSET_M = 54;

function pad(n: number) {
  return String(Math.max(0, Math.floor(n))).padStart(2, "0");
}

function nextSunsetMs() {
  const now = Date.now();
  const bali = new Date(now + BALI_OFFSET_MS);
  const y = bali.getUTCFullYear(), m = bali.getUTCMonth(), d = bali.getUTCDate();
  let target = Date.UTC(y, m, d, SUNSET_H, SUNSET_M, 0) - BALI_OFFSET_MS;
  if (target <= now) target += 24 * 60 * 60 * 1000;
  return target;
}

export default function TLHero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const silRef = useRef<HTMLDivElement>(null);
  const [cd, setCd] = useState({ h: "00", m: "00", s: "00" });
  const [localTime, setLocalTime] = useState("—");

  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY;
      if (bgRef.current)
        bgRef.current.style.transform = `translate3d(0, ${sc * 0.35}px, 0) scale(1.05)`;
      if (silRef.current)
        silRef.current.style.transform = `translateX(-50%) translate3d(0, ${sc * 0.18}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      let diff = (nextSunsetMs() - now) / 1000;
      if (diff < 0) diff = 0;
      setCd({ h: pad(diff / 3600), m: pad((diff / 60) % 60), s: pad(diff % 60) });
      const baliNow = new Date(now + BALI_OFFSET_MS);
      setLocalTime(`${pad(baliNow.getUTCHours())}:${pad(baliNow.getUTCMinutes())} WITA`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top" data-variant="default">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-silhouette" ref={silRef}>
        <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <defs>
            <linearGradient id="rockGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a0f0a" stopOpacity="1" />
              <stop offset="100%" stopColor="#0a0604" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,600 L0,520 L200,510 L420,500 L600,495 L820,500 L1100,512 L1400,520 L1400,600 Z"
            fill="#3a1809" opacity=".7" />
          <path d="M520,520 L540,470 L560,440 L580,420 L600,415
               L605,395 L612,395 L612,380 L630,380 L630,395
               L640,395 L640,375 L655,375 L655,395 L662,395 L662,360
               L678,360 L678,395 L685,395 L685,395
               L700,395 L705,420 L730,425 L760,430 L790,440 L820,460
               L850,490 L880,510 L900,520 Z"
            fill="url(#rockGrad)" />
          <path d="M950,530 L970,500 L995,485 L1020,490 L1045,500 L1070,520 L1090,535 Z"
            fill="#1a0f0a" opacity=".95" />
          <path d="M0,530 L80,510 L160,505 L240,510 L320,520 L380,525 L0,540 Z"
            fill="#1a0f0a" opacity=".75" />
        </svg>
      </div>
      <div className="hero-vignette" />
      <div className="hero-grain" />

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>Bali · Indonesia</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Est. 16th Century</span>
        </div>

        <h1 className="hero-title">
          <span className="l1">Where the&nbsp;Sea</span>
          <span className="l2">
            meets <em>Stone.</em>
          </span>
        </h1>

        <div className="hero-meta">
          <div className="cell">
            <span className="lbl">Today's Sunset</span>
            <div className="countdown">
              <span className="num">{cd.h}</span>
              <span className="unit">hr</span>
              <span className="sep">:</span>
              <span className="num">{cd.m}</span>
              <span className="unit">min</span>
              <span className="sep">:</span>
              <span className="num">{cd.s}</span>
              <span className="unit">sec</span>
            </div>
          </div>
          <div className="cell">
            <span className="lbl">Local Time · Bali</span>
            <span className="val">{localTime}</span>
          </div>
          <div className="cell">
            <span className="lbl">Tide</span>
            <span className="val">Low · 0.4m</span>
          </div>
          <div className="cell">
            <span className="lbl">Conditions</span>
            <span className="val">Clear · 28°C</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </header>
  );
}
