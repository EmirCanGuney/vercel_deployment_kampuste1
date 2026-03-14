import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NewIlanModal from './components/NewIlanModal'
import Toast from './components/Toast'
import HomePage from './pages/HomePage'
import IlanDetay from './pages/IlanDetay'
import { ProfilPage, KayipPage, NotlarPage, EtkinlikPage } from './pages/OtherPages'

export default function App() {
  const location = useLocation()
  const [sidebarFilter, setSidebarFilter] = useState('all')
  const [modalOpen, setModalOpen]         = useState(false)
  const [toast, setToast]                 = useState(null)

  function showToast(title, body) { setToast({ title, body }) }

  function handleNewIlan(data) {
    showToast('İlan Yayınlandı 🎉', 'İlanın oluşturuldu ve moderasyon kontrolüne alındı.')
  }

  const hideSidebar = location.pathname.startsWith('/ilan/')

  return (
    <>
      <Navbar activePage={location.pathname} onNewIlan={() => setModalOpen(true)} />

      <div style={{ paddingTop: 60, display: 'flex', minHeight: '100vh' }}>
        {!hideSidebar && (
          <Sidebar activeFilter={sidebarFilter} onFilter={setSidebarFilter} />
        )}
        <div style={{ flex: 1, padding: hideSidebar ? '28px 32px' : '28px 32px', maxWidth: hideSidebar ? 760 : 860 }}>
          <Routes>
            <Route path="/"          element={<HomePage sidebarFilter={sidebarFilter} />} />
            <Route path="/kayip"     element={<KayipPage showToast={showToast} />} />
            <Route path="/notlar"    element={<NotlarPage />} />
            <Route path="/etkinlik"  element={<EtkinlikPage />} />
            <Route path="/profil"    element={<ProfilPage />} />
            <Route path="/ilan/:id"  element={<IlanDetay showToast={showToast} />} />
          </Routes>
        </div>
      </div>

      <NewIlanModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleNewIlan} />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  )
}
