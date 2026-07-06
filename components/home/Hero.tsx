import React from 'react'

export default function Hero() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #0f172a 0%, #071032 100%)', color: '#fff', textAlign: 'center', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: 900 }}>
        <div aria-hidden style={{ width: 130, height: 130, margin: '0 auto 1.25rem', borderRadius: '50%', background: 'linear-gradient(135deg,#f6d365,#d4af37)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(212,175,55,0.15)' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 44, fontWeight: 700, color: '#111' }}>PE</div>
        </div>

        <h1 style={{ margin: 0, fontSize: 34, letterSpacing: 2 }}>PRINCE EZENWANTA</h1>
        <p style={{ marginTop: 12, fontSize: 18, opacity: 0.95, marginBottom: 12 }}>The Voice of Igbo Heritage</p>
        <p style={{ marginTop: 4, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>Preserving Tradition • Inspiring Generations</p>

        <div style={{ marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="#music" style={{ background: '#fff', color: '#071032', padding: '10px 18px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Listen</a>
          <a href="#booking" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '10px 18px', borderRadius: 8, textDecoration: 'none' }}>Book</a>
        </div>

        <div style={{ marginTop: 28, color: 'rgba(255,255,255,0.6)' }}>Scroll ↓</div>
      </div>
    </section>
  )
}
