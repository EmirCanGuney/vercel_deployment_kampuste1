import React, { useState } from 'react'
import IlanCard from '../components/IlanCard'
import { ILANLAR } from '../data/ilanlar'

const FILTERS = [
  { key:'tumu',     label:'Tümü' },
  { key:'takim',    label:'🚀 Takım' },
  { key:'ev',       label:'🏡 Ev/Oda' },
  { key:'ikinciel', label:'♻️ İkinci El' },
  { key:'kayip',    label:'🔍 Kayıp' },
  { key:'spor',     label:'⚽ Spor' },
  { key:'not',      label:'📚 Not' },
  { key:'etkinlik', label:'🎉 Etkinlik' },
]

export default function HomePage({ sidebarFilter }) {
  const [filter, setFilter] = useState('tumu')
  const [q, setQ] = useState('')

  const activeFilter = sidebarFilter !== 'all' ? sidebarFilter : filter

  const ilanlar = ILANLAR.filter(i => {
    const tipMatch = activeFilter === 'tumu' || i.tip === activeFilter
    const qMatch   = !q || i.baslik.toLowerCase().includes(q.toLowerCase()) || i.aciklama.toLowerCase().includes(q.toLowerCase())
    return tipMatch && qMatch
  })

  return (
    <div className="fade-up">
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:24 }}>
        {[['247','Aktif İlan'],['1.2K','Öğrenci'],['89','Eşleşme'],['12','Etkinlik']].map(([n,l]) => (
          <div key={l} style={{ background:'#111118', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:16 }}>
            <div style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:700, background:'linear-gradient(135deg,#7c6aff,#a855f7)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{n}</div>
            <div style={{ fontSize:12, color:'#6b6b80', marginTop:2 }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{
        display:'flex', alignItems:'center', gap:10,
        background:'#111118', border:'1px solid rgba(255,255,255,0.07)',
        borderRadius:12, padding:'0 16px', marginBottom:16,
      }}>
        <span style={{ color:'#6b6b80' }}>🔎</span>
        <input
          value={q} onChange={e => setQ(e.target.value)}
          placeholder="İlan, ders notu veya etkinlik ara..."
          style={{
            flex:1, background:'none', border:'none', outline:'none',
            color:'#f0f0f5', fontSize:14, padding:'12px 0',
            fontFamily:'DM Sans,sans-serif',
          }}
        />
      </div>

      <div style={{ display:'flex', gap:8, marginBottom:20, flexWrap:'wrap' }}>
        {FILTERS.map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)} style={{
            padding:'6px 14px', borderRadius:20, fontSize:12, fontWeight:500,
            cursor:'pointer', fontFamily:'DM Sans,sans-serif',
            background: activeFilter===f.key ? 'rgba(124,106,255,0.15)' : '#111118',
            border: `1px solid ${activeFilter===f.key ? '#7c6aff' : 'rgba(255,255,255,0.07)'}`,
            color: activeFilter===f.key ? '#7c6aff' : '#6b6b80',
            transition:'all 0.15s',
          }}>{f.label}</button>
        ))}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {ilanlar.length ? ilanlar.map(i => <IlanCard key={i.id} ilan={i} />) : (
          <div style={{ textAlign:'center', padding:'60px 20px', color:'#6b6b80' }}>
            <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
            <div>Sonuç bulunamadı</div>
          </div>
        )}
      </div>
    </div>
  )
}
