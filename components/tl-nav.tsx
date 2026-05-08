"use client";

import { useEffect, useState } from "react";

export default function TLNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <a href="#top" className="brand">
        <span className="brand-mark" />
        Tanah&nbsp;Lot
      </a>
      <div className="nav-links">
        <a href="#story">Story</a>
        <a href="#gallery">Gallery</a>
        <a href="#tips">Visit</a>
        <a href="#map">Find&nbsp;Us</a>
        <a href="#book" style={{ color: "var(--ember-bright)" }}>
          Book&nbsp;→
        </a>
      </div>
    </nav>
  );
}
