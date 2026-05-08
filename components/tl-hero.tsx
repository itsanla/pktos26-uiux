"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const [cd, setCd] = useState({ h: "00", m: "00", s: "00" });
  const [localTime, setLocalTime] = useState("—");

  // Parallax — both layers scroll at different depths
  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY;
      if (bgRef.current)
        bgRef.current.style.transform = `translate3d(0, ${sc * 0.35}px, 0) scale(1.05)`;
      if (contentWrapperRef.current)
        contentWrapperRef.current.style.transform = `translate3d(0, ${sc * 0.20}px, 0) scale(1.05)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Live countdown to Bali sunset
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

      {/* Layer 1: background placeholder — parallax */}
      <div className="hero-bg" ref={bgRef}>
        <Image
          src="/hero-placeholder.webp"
          alt=""
          fill
          priority
          sizes="120vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      </div>

      {/* Layer 2: video */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Layer 3: content image — slides up from bottom, parallax */}
      <div className="hero-content-wrapper" ref={contentWrapperRef}>
        <div className="hero-content-layer">
          <Image
            src="/hero-content.webp"
            alt="Pura Tanah Lot"
            fill
            priority
            sizes="120vw"
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
          />
        </div>
      </div>

      {/* Dark vignette overlay */}
      <div className="hero-vignette" style={{ zIndex: 3 }} />
      {/* Film-grain texture */}
      <div className="hero-grain" style={{ zIndex: 4 }} />

      {/* Content */}
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
