"use client";

import { useEffect, useState } from "react";

export default function TLNav({ subPage = false }: { subPage?: boolean }) {
  const [scrolled, setScrolled] = useState(subPage);

  useEffect(() => {
    const onScroll = () => setScrolled(subPage || window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [subPage]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <a href="/" className="brand">
        <span className="brand-mark" />
        Tanah&nbsp;Lot
      </a>
      <div className="nav-links">
        <a href="/#story">Story</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#tips">Visit</a>
        <a href="/#map">Find&nbsp;Us</a>
        <a href="/blog">Blog</a>
        <a href="/event">Event</a>
        <a href="/#book" style={{ color: "var(--ember-bright)" }}>
          Book&nbsp;→
        </a>
      </div>
    </nav>
  );
}
