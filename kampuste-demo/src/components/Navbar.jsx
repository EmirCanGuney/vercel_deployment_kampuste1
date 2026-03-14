import React from 'react'
import { useNavigate } from 'react-router-dom'

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(10,10,15,0.88)', backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    padding: '0 24px', height: 60,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20,
    background: 'linear-gradient(135deg,#7c6aff,#a855f7)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    cursor: 'pointer', letterSpacing: '-0.5px',
  },
  tabs: {
    display: 'flex', gap: 4,
    background: '#111118', border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 12, padding: 4,
  },
  right: { display: 'flex', gap: 10, alignItems: 'center' },
}

export default function Navbar({ activePage, onNewIlan }) {
  const navigate = useNavigate()
  const tabs = [
    { key: '/',         label: 'Ana Akış' },
    { key: '/kayip',    label: 'Kayıp Eşya' },
    { key: '/notlar',   label: 'Ders Notları' },
    { key: '/etkinlik', label: 'Etkinlikler' },
  ]

  return (
    <nav style={s.nav}>
      <div style={s.logo} onClick={() => navigate('/')}>kampüste</div>

      <div style={s.tabs}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => navigate(t.key)} style={{
            padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500,
            cursor: 'pointer', border: 'none', fontFamily: 'DM Sans, sans-serif',
            background: activePage === t.key ? '#7c6aff' : 'transparent',
            color: activePage === t.key ? 'white' : '#6b6b80',
            transition: 'all 0.2s',
          }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={s.right}>
        <button onClick={onNewIlan} style={{
          padding: '7px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
          cursor: 'pointer', border: 'none', fontFamily: 'DM Sans, sans-serif',
          background: '#7c6aff', color: 'white',
        }}>
          + Yeni İlan
        </button>
        <button onClick={() => navigate('/profil')} style={{
          padding: '7px 14px', borderRadius: 8, fontSize: 13,
          cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
          background: '#1a1a24', color: '#f0f0f5',
          fontFamily: 'DM Sans, sans-serif',
        }}>
          👤 Profil
        </button>
      </div>
    </nav>
  )
}
