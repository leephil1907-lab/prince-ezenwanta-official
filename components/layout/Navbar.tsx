import React from 'react'

export default function Navbar() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="32" cy="32" r="30" fill="#D4AF37" />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="Georgia, serif" fontSize="20" fill="#111">PE</text>
        </svg>
        <div style={{ marginLeft: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PRINCE EZENWANTA</div>
          <div style={{ fontSize: 11, color: '#666' }}>The Voice of Igbo Heritage</div>
        </div>
      </a>

      <nav>
        <a href="#music" style={{ marginRight: 16, textDecoration: 'none', color: 'inherit' }}>Music</a>
        <a href="#gallery" style={{ marginRight: 16, textDecoration: 'none', color: 'inherit' }}>Gallery</a>
        <a href="#events" style={{ marginRight: 16, textDecoration: 'none', color: 'inherit' }}>Events</a>
        <a href="#booking" style={{ padding: '8px 12px', background: '#D4AF37', color: '#fff', borderRadius: 6, textDecoration: 'none' }}>Book</a>
      </nav>
    </header>
  )
}
