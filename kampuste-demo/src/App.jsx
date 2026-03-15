import React, { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import IlanDetay from './pages/IlanDetay'
import { KayipPage, NotlarPage, EtkinlikPage, ProfilPage } from './pages/OtherPages'
import Sheet from './components/Sheet'
import YeniIlan from './components/YeniIlan'
import Toast from './components/Toast'

const NAV = [
  { key:'home',     path:'/',         icon:'🏠', label:'Ana Akış' },
  { key:'kayip',    path:'/kayip',    icon:'🔍', label:'Kayıp' },
  { key:'notlar',   path:'/notlar',   icon:'📚', label:'Notlar' },
  { key:'etkinlik', path:'/etkinlik', icon:'🎉', label:'Etkinlik' },
  { key:'profil',   path:'/profil',   icon:'👤', label:'Profil' },
]

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sheet, setSheet] = useState(false)
  const [toast, setToast] = useState('')

  const isDetail = location.pathname.startsWith('/ilan/')
  const activeNav = NAV.find(n => n.path === location.pathname)?.key || 'home'

  function showToast(msg) { setToast(msg) }

  return (
    <div className="flex flex-col min-h-screen bg-[#09090f]">

      {/* TOP BAR — detay sayfasında gizle */}
      {!isDetail && (
        <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-[#09090f]/90 backdrop-blur-xl border-b border-white/[0.06]">
          <div
            onClick={() => navigate('/')}
            className="font-syne text-xl font-extrabold grad-text cursor-pointer"
          >
            kampüste
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSheet(true)}
              className="px-4 py-2 rounded-xl text-[13px] font-bold bg-gradient-to-r from-[#7c6aff] to-[#a855f7] text-white"
            >
              + İlan
            </button>
            <button
              onClick={() => navigate('/profil')}
              className="w-9 h-9 rounded-xl bg-[#1b1b27] border border-white/[0.08] flex items-center justify-center text-base"
            >
              👤
            </button>
          </div>
        </header>
      )}

      {/* CONTENT */}
      <main className={`flex-1 ${!isDetail ? 'pt-14 pb-16' : ''}`}>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/kayip"     element={<KayipPage />} />
          <Route path="/notlar"    element={<NotlarPage />} />
          <Route path="/etkinlik"  element={<EtkinlikPage />} />
          <Route path="/profil"    element={<ProfilPage />} />
          <Route path="/ilan/:id"  element={<IlanDetay showToast={showToast} />} />
        </Routes>
      </main>

      {/* BOTTOM NAV */}
      {!isDetail && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex bg-[#09090f]/95 backdrop-blur-xl border-t border-white/[0.06] safe-bottom">
          {NAV.map(n => (
            <button
              key={n.key}
              onClick={() => navigate(n.path)}
              className={`flex-1 flex flex-col items-center gap-1 py-2 text-[10px] font-semibold transition-colors ${
                activeNav === n.key ? 'text-[#7c6aff]' : 'text-[#6b6b82]'
              }`}
            >
              <span className="text-[22px] leading-none">{n.icon}</span>
              {n.label}
            </button>
          ))}
        </nav>
      )}

      {/* YENİ İLAN SHEET */}
      <Sheet open={sheet} onClose={() => setSheet(false)}>
        <YeniIlan onClose={() => setSheet(false)} onSuccess={msg => { showToast(msg) }} />
      </Sheet>

      {/* TOAST */}
      <Toast msg={toast} onDone={() => setToast('')} />
    </div>
  )
}
