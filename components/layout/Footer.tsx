import React from 'react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
      <div style={{ marginBottom: 8 }}>© {new Date().getFullYear()} Prince Ezenwanta</div>
      <div style={{ color: '#666', fontSize: 13 }}>Preserving Tradition • Inspiring Generations</div>
    </footer>
  )
}
