import React, { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Home, Search, BookOpen, Calendar, User, Plus } from 'lucide-react'
import HomePage from './pages/HomePage'
import IlanDetay from './pages/IlanDetay'
import { KayipPage, NotlarPage, EtkinlikPage, ProfilPage } from './pages/OtherPages'
import Sheet from './components/Sheet'
import YeniIlan from './components/YeniIlan'
import Toast from './components/Toast'

const NAV = [
  { key:'home',     path:'/',         Icon: Home,     label:'Ana Akış' },
  { key:'kayip',    path:'/kayip',    Icon: Search,   label:'Kayıp' },
  { key:'notlar',   path:'/notlar',   Icon: BookOpen, label:'Notlar' },
  { key:'etkinlik', path:'/etkinlik', Icon: Calendar, label:'Etkinlik' },
  { key:'profil',   path:'/profil',   Icon: User,     label:'Profil' },
]

export default function App() {
  const location  = useLocation()
  const navigate  = useNavigate()
  const [sheet, setSheet] = useState(false)
  const [toast, setToast] = useState('')

  const isDetail  = location.pathname.startsWith('/ilan/')
  const activeNav = NAV.find(n => n.path === location.pathname)?.key || 'home'

  return (
    <div className="flex flex-col min-h-screen bg-[#09090f]">

      {/* TOP BAR */}
      {!isDetail && (
        <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-[#09090f]/90 backdrop-blur-xl border-b border-white/[0.06]">
          <div
            onClick={() => navigate('/')}
            className="font-syne text-xl font-extrabold grad-text cursor-pointer tracking-tight"
          >
            kampüste
          </div>
          <button
            onClick={() => setSheet(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-bold bg-gradient-to-r from-[#7c6aff] to-[#a855f7] text-white"
          >
            <Plus size={15} strokeWidth={2.5} />
            İlan
          </button>
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
          <Route path="/ilan/:id"  element={<IlanDetay showToast={setToast} />} />
        </Routes>
      </main>

      {/* BOTTOM NAV */}
      {!isDetail && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex bg-[#09090f]/95 backdrop-blur-xl border-t border-white/[0.06]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          {NAV.map(({ key, path, Icon, label }) => {
            const active = activeNav === key
            return (
              <button
                key={key}
                onClick={() => navigate(path)}
                className="flex-1 flex flex-col items-center gap-1 py-2.5 transition-colors"
              >
                <Icon
                  size={22}
                  strokeWidth={active ? 2.2 : 1.7}
                  style={{ color: active ? '#7c6aff' : '#6b6b82' }}
                />
                <span className={`text-[10px] font-semibold ${active ? 'text-[#7c6aff]' : 'text-[#6b6b82]'}`}>
                  {label}
                </span>
              </button>
            )
          })}
        </nav>
      )}

      {/* YENİ İLAN SHEET */}
      <Sheet open={sheet} onClose={() => setSheet(false)}>
        <YeniIlan onClose={() => setSheet(false)} onSuccess={msg => setToast(msg)} />
      </Sheet>

      {/* TOAST */}
      <Toast msg={toast} onDone={() => setToast('')} />
    </div>
  )
}
