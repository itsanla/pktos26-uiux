'use client'

import { useState } from 'react'

const glass = {
  background: 'rgba(255,255,255,0.65)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.85)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
} as const

const glassStrong = {
  background: 'rgba(255,255,255,0.80)',
  backdropFilter: 'blur(32px)',
  WebkitBackdropFilter: 'blur(32px)',
  border: '1px solid rgba(255,255,255,0.9)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
} as const

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ ...glass, borderRadius: 16, cursor: 'pointer', userSelect: 'none', overflow: 'hidden' }}
    >
      <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontWeight: 600, fontSize: 16, color: '#1D1D1F', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          fontSize: 24, lineHeight: 1, color: '#007AFF', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? 200 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <p style={{ padding: '0 24px 20px', margin: 0, fontSize: 15, color: '#6E6E73', lineHeight: 1.7 }}>{a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F5F7', color: '#1D1D1F', overflowX: 'hidden' }}>

      {/* ── Background blobs ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: '70vh', height: '70vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,122,255,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '38%', left: '-12%', width: '60vh', height: '60vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(175,82,222,0.14) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '18%', width: '50vh', height: '50vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,149,0,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-8%', left: '28%', width: '55vh', height: '55vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,199,89,0.10) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* ── Navbar ── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(245,245,247,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,122,255,0.35)' }}>
              <span style={{ color: 'white', fontSize: 15, fontWeight: 800, fontStyle: 'italic' }}>P</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: '#1D1D1F', letterSpacing: '-0.3px' }}>PKATOS 2026</span>
          </div>
          {/* Nav links — hidden on mobile */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
            {[['Tentang', '#tentang'], ['Timeline', '#timeline'], ['Kategori', '#kategori'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: 14, color: '#6E6E73', textDecoration: 'none', fontWeight: 500, letterSpacing: '-0.1px' }}>{label}</a>
            ))}
          </nav>
          <a href="#daftar" style={{ padding: '8px 18px', borderRadius: 980, background: '#007AFF', color: 'white', fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 12px rgba(0,122,255,0.3)', whiteSpace: 'nowrap' }}>
            Daftar Sekarang
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: 'clamp(80px,12vw,140px) 24px clamp(60px,8vw,100px)', textAlign: 'center', maxWidth: 1200, margin: '0 auto' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 980, background: 'rgba(0,122,255,0.08)', border: '1px solid rgba(0,122,255,0.18)', marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#007AFF', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#007AFF', letterSpacing: '0.8px', textTransform: 'uppercase' }}>Kompetisi UI/UX Nasional 2026</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(48px,9vw,100px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: 'clamp(-2px,-0.04em,-3px)', margin: '0 0 28px', color: '#1D1D1F' }}>
          Wujudkan<br />
          <span style={{ background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 50%, #AF52DE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Desain Terbaik</span>mu
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 'clamp(17px,2.2vw,22px)', color: '#6E6E73', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.6, fontWeight: 400 }}>
          Kompetisi desain UI/UX terbesar untuk pelajar Indonesia. Tunjukkan kreativitasmu dan raih posisi terbaik.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#daftar" style={{ padding: '16px 36px', borderRadius: 980, background: '#007AFF', color: 'white', fontSize: 17, fontWeight: 600, textDecoration: 'none', boxShadow: '0 6px 28px rgba(0,122,255,0.38)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Daftar Sekarang <span>→</span>
          </a>
          <a href="#tentang" style={{ padding: '16px 36px', borderRadius: 980, background: 'rgba(255,255,255,0.72)', color: '#1D1D1F', fontSize: 17, fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            Pelajari Lebih
          </a>
        </div>

        {/* Floating glass cards */}
        <div style={{ marginTop: 72, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ ...glass, borderRadius: 20, padding: '22px', width: 180, textAlign: 'left', transform: 'rotate(-4deg) translateY(-10px)', flexShrink: 0 }}>
            <div style={{ width: 44, height: 44, borderRadius: 13, background: 'linear-gradient(135deg, #007AFF, #5856D6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>🎨</div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#1D1D1F', margin: 0, letterSpacing: '-0.2px' }}>UI Design</p>
            <p style={{ fontSize: 12, color: '#6E6E73', margin: '4px 0 0' }}>Mobile & Web</p>
          </div>

          <div style={{ ...glassStrong, borderRadius: 22, padding: '24px 26px', textAlign: 'left', flexShrink: 0, transform: 'translateY(10px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #34C759, #30D158)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏆</div>
              <div>
                <p style={{ fontSize: 12, color: '#6E6E73', margin: 0, fontWeight: 500 }}>Total Hadiah</p>
                <p style={{ fontSize: 22, fontWeight: 800, color: '#1D1D1F', margin: '2px 0 0', letterSpacing: '-0.5px' }}>Rp 50 Juta</p>
              </div>
            </div>
            <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', marginBottom: 14 }} />
            <div style={{ display: 'flex', gap: 8 }}>
              {[['🥇', 'Rp 20jt'], ['🥈', 'Rp 15jt'], ['🥉', 'Rp 15jt']].map(([icon, amt]) => (
                <div key={amt} style={{ flex: 1, padding: '8px 4px', borderRadius: 10, background: 'rgba(0,0,0,0.04)', textAlign: 'center' }}>
                  <div style={{ fontSize: 18 }}>{icon}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#6E6E73', marginTop: 4 }}>{amt}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...glass, borderRadius: 20, padding: '22px', width: 180, textAlign: 'left', transform: 'rotate(3.5deg) translateY(-6px)', flexShrink: 0 }}>
            <div style={{ width: 44, height: 44, borderRadius: 13, background: 'linear-gradient(135deg, #AF52DE, #FF2D55)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>✨</div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#1D1D1F', margin: 0, letterSpacing: '-0.2px' }}>500+ Peserta</p>
            <p style={{ fontSize: 12, color: '#6E6E73', margin: '4px 0 0' }}>Seluruh Indonesia</p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', ...glassStrong, borderRadius: 24, padding: 'clamp(28px,5vw,44px) clamp(24px,5vw,44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {[
            { value: '500+', label: 'Peserta Terdaftar', color: '#007AFF' },
            { value: 'Rp 50Jt', label: 'Total Hadiah', color: '#34C759' },
            { value: '3', label: 'Kategori Lomba', color: '#AF52DE' },
            { value: '30', label: 'Hari Tersisa', color: '#FF9500' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '8px 0' }}>
              <p style={{ fontSize: 'clamp(30px,4vw,44px)', fontWeight: 800, color: s.color, margin: 0, letterSpacing: '-1.5px' }}>{s.value}</p>
              <p style={{ fontSize: 14, color: '#6E6E73', margin: '6px 0 0', fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About / Features ── */}
      <section id="tentang" style={{ position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#007AFF', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>Tentang Kompetisi</p>
          <h2 style={{ fontSize: 'clamp(30px,5vw,54px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#1D1D1F', margin: 0 }}>Kenapa PKATOS 2026?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { icon: '🎯', title: 'Tantangan Nyata', desc: 'Selesaikan tantangan desain yang terinspirasi dari masalah nyata di masyarakat Indonesia.', grad: 'linear-gradient(135deg,#007AFF,#5856D6)' },
            { icon: '🧑‍⚖️', title: 'Juri Profesional', desc: 'Karya dinilai langsung oleh desainer dan UX researcher dari perusahaan teknologi terkemuka.', grad: 'linear-gradient(135deg,#AF52DE,#FF2D55)' },
            { icon: '📚', title: 'Mentoring Eksklusif', desc: 'Peserta mendapatkan sesi mentoring langsung dari praktisi industri selama kompetisi berlangsung.', grad: 'linear-gradient(135deg,#FF9500,#FF3B30)' },
            { icon: '🌐', title: 'Komunitas Nasional', desc: 'Bergabung dengan ribuan desainer muda berbakat dari seluruh penjuru Indonesia.', grad: 'linear-gradient(135deg,#34C759,#30D158)' },
            { icon: '💼', title: 'Portofolio Berkualitas', desc: 'Kembangkan portofolio yang menarik perhatian rekruter dan perusahaan impianmu.', grad: 'linear-gradient(135deg,#00C7BE,#007AFF)' },
            { icon: '🏅', title: 'Penghargaan Bergengsi', desc: 'Raih sertifikat, hadiah uang tunai, dan peluang magang di perusahaan mitra kami.', grad: 'linear-gradient(135deg,#FFD60A,#FF9500)' },
          ].map((f) => (
            <div key={f.title} style={{ ...glass, borderRadius: 20, padding: '28px 28px 32px' }}>
              <div style={{ width: 52, height: 52, borderRadius: 16, background: f.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#1D1D1F', margin: '0 0 10px', letterSpacing: '-0.4px' }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: '#6E6E73', margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section id="timeline" style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#007AFF', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>Jadwal</p>
            <h2 style={{ fontSize: 'clamp(30px,5vw,54px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#1D1D1F', margin: 0 }}>Timeline Kompetisi</h2>
          </div>
          <div>
            {[
              { num: '01', title: 'Pendaftaran', date: '1 – 15 Juni 2026', desc: 'Daftarkan tim kamu dan lengkapi berkas pendaftaran secara online melalui portal resmi PKATOS.', color: '#007AFF' },
              { num: '02', title: 'Pengumpulan Karya', date: '16 – 30 Juni 2026', desc: 'Submit desainmu melalui platform kami dalam format Figma atau PDF sesuai panduan teknis.', color: '#AF52DE' },
              { num: '03', title: 'Penjurian', date: '1 – 10 Juli 2026', desc: 'Juri profesional menilai dan menyeleksi karya terbaik dari setiap kategori secara komprehensif.', color: '#FF9500' },
              { num: '04', title: 'Pengumuman & Awarding', date: '15 Juli 2026', desc: 'Pengumuman pemenang dan malam penghargaan PKATOS 2026 yang meriah.', color: '#34C759' },
            ].map((t, i, arr) => (
              <div key={t.num} style={{ display: 'flex', gap: 24 }}>
                {/* Left: indicator */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: t.color + '14', border: `2px solid ${t.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: t.color }}>{t.num}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 32, background: `linear-gradient(to bottom, ${t.color}30, transparent)`, margin: '8px 0' }} />
                  )}
                </div>
                {/* Right: content */}
                <div style={{ flex: 1, paddingBottom: i < arr.length - 1 ? 36 : 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: t.color, margin: '10px 0 6px', letterSpacing: '0.2px' }}>{t.date}</p>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1D1D1F', margin: '0 0 8px', letterSpacing: '-0.5px' }}>{t.title}</h3>
                  <p style={{ fontSize: 15, color: '#6E6E73', margin: 0, lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="kategori" style={{ position: 'relative', zIndex: 1, padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#007AFF', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>Kategori</p>
          <h2 style={{ fontSize: 'clamp(30px,5vw,54px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#1D1D1F', margin: 0 }}>Pilih Kategorimu</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            {
              icon: '📱', title: 'Mobile App Design', prize: 'Rp 20 Juta',
              desc: 'Desain antarmuka aplikasi mobile yang intuitif dan menarik untuk platform iOS dan Android.',
              tags: ['Figma', 'Prototype', 'iOS/Android'],
              grad: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
            },
            {
              icon: '🖥️', title: 'Web App Design', prize: 'Rp 20 Juta',
              desc: 'Rancang pengalaman pengguna web yang modern, responsif, dan fungsional secara menyeluruh.',
              tags: ['Figma', 'Responsive', 'UX Research'],
              grad: 'linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)',
            },
            {
              icon: '🎨', title: 'Brand & Visual Identity', prize: 'Rp 10 Juta',
              desc: 'Ciptakan identitas merek yang kuat dan konsisten untuk brand fiksi yang telah ditentukan.',
              tags: ['Branding', 'Logo', 'Guidelines'],
              grad: 'linear-gradient(135deg, #FF9500 0%, #FF3B30 100%)',
            },
          ].map((cat) => (
            <div key={cat.title} style={{ ...glass, borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 6, background: cat.grad, flexShrink: 0 }} />
              <div style={{ padding: '28px 28px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 42, marginBottom: 16 }}>{cat.icon}</div>
                <h3 style={{ fontSize: 21, fontWeight: 700, color: '#1D1D1F', margin: '0 0 10px', letterSpacing: '-0.4px' }}>{cat.title}</h3>
                <p style={{ fontSize: 15, color: '#6E6E73', margin: '0 0 18px', lineHeight: 1.65, flex: 1 }}>{cat.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
                  {cat.tags.map((tag) => (
                    <span key={tag} style={{ padding: '4px 12px', borderRadius: 980, background: 'rgba(0,0,0,0.05)', fontSize: 12, fontWeight: 600, color: '#6E6E73' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <div>
                    <p style={{ fontSize: 11, color: '#86868B', margin: 0, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Hadiah Utama</p>
                    <p style={{ fontSize: 20, fontWeight: 800, color: '#1D1D1F', margin: '3px 0 0', letterSpacing: '-0.5px' }}>{cat.prize}</p>
                  </div>
                  <a href="#daftar" style={{ padding: '10px 20px', borderRadius: 980, background: '#007AFF', color: 'white', fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,122,255,0.3)' }}>Ikut →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#007AFF', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(30px,5vw,54px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#1D1D1F', margin: 0 }}>Pertanyaan Umum</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { q: 'Siapa yang boleh mendaftar?', a: 'PKATOS 2026 terbuka untuk seluruh pelajar tingkat SMA/SMK/sederajat dan mahasiswa aktif di seluruh Indonesia.' },
              { q: 'Apakah bisa ikut secara individu?', a: 'Ya! Kamu bisa mendaftar secara individu atau membentuk tim maksimal 3 orang.' },
              { q: 'Software apa yang boleh digunakan?', a: 'Peserta bebas menggunakan software desain apapun seperti Figma, Adobe XD, Sketch, atau tools lainnya.' },
              { q: 'Apakah ada biaya pendaftaran?', a: 'PKATOS 2026 sepenuhnya gratis! Tidak ada biaya pendaftaran sama sekali.' },
              { q: 'Bagaimana format pengumpulan karya?', a: 'Karya dikumpulkan dalam format file Figma atau PDF resolusi tinggi, sesuai panduan teknis yang akan diberikan saat pendaftaran.' },
            ].map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="daftar" style={{ position: 'relative', zIndex: 1, padding: '80px 24px 100px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ ...glassStrong, borderRadius: 32, padding: 'clamp(48px,8vw,88px) clamp(24px,6vw,64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -120, right: -80, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,122,255,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -100, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(175,82,222,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <p style={{ fontSize: 12, fontWeight: 700, color: '#007AFF', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 16 }}>Daftar Sekarang</p>
          <h2 style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 800, letterSpacing: 'clamp(-1.5px,-0.03em,-2.5px)', color: '#1D1D1F', margin: '0 0 20px' }}>
            Siap Bersaing?
          </h2>
          <p style={{ fontSize: 'clamp(16px,2vw,20px)', color: '#6E6E73', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.6 }}>
            Pendaftaran dibuka hingga <strong style={{ color: '#1D1D1F' }}>15 Juni 2026</strong>. Jangan lewatkan kesempatan emas ini!
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '18px 42px', borderRadius: 980, background: '#007AFF', color: 'white', fontSize: 17, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 36px rgba(0,122,255,0.42)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Daftar Sekarang <span>→</span>
            </a>
            <a href="#" style={{ padding: '18px 42px', borderRadius: 980, background: 'rgba(0,0,0,0.05)', color: '#1D1D1F', fontSize: 17, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(0,0,0,0.08)' }}>
              Panduan Lomba
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg, #007AFF, #5856D6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,122,255,0.3)' }}>
              <span style={{ color: 'white', fontSize: 14, fontWeight: 800, fontStyle: 'italic' }}>P</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: '#1D1D1F', letterSpacing: '-0.3px' }}>PKATOS 2026</span>
          </div>
          <div className="flex flex-wrap justify-center" style={{ gap: '8px 28px' }}>
            {['Tentang', 'Timeline', 'Kategori', 'FAQ', 'Kontak', 'Panduan'].map((link) => (
              <a key={link} href="#" style={{ fontSize: 14, color: '#6E6E73', textDecoration: 'none', fontWeight: 500 }}>{link}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#86868B', margin: 0, textAlign: 'center' }}>
            © 2026 PKATOS. Semua hak cipta dilindungi.
          </p>
        </div>
      </footer>

    </div>
  )
}
