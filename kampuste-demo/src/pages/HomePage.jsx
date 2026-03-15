import React, { useState } from 'react'
import IlanCard from '../components/IlanCard'
import { ILANLAR, MODULLER } from '../data/mock'

export default function HomePage() {
  const [filter, setFilter] = useState('tumu')
  const [q, setQ] = useState('')

  const list = ILANLAR.filter(i => {
    const tipOk = filter === 'tumu' || i.tip === filter
    const qOk   = !q.trim() || i.baslik.toLowerCase().includes(q.toLowerCase()) || i.aciklama.toLowerCase().includes(q.toLowerCase())
    return tipOk && qOk
  })

  return (
    <div className="animate-fade-up px-4 pt-3">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[['247','Aktif İlan'],['1.2K','Öğrenci'],['89','Eşleşme'],['12','Etkinlik']].map(([n,l]) => (
          <div key={l} className="bg-[#111119] border border-white/[0.06] rounded-2xl p-4">
            <div className="font-syne text-[28px] font-extrabold grad-text">{n}</div>
            <div className="text-[#6b6b82] text-xs mt-1">{l}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-[#1b1b27] border border-white/[0.08] rounded-2xl px-4 mb-4 focus-within:border-[#7c6aff] transition-colors">
        <span className="text-[#6b6b82] text-lg">🔎</span>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="İlan, not veya etkinlik ara..."
          className="flex-1 bg-transparent py-3 text-[14px] text-white"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto no-scroll-bar pb-2 mb-4">
        {MODULLER.map(m => (
          <button
            key={m.key}
            onClick={() => setFilter(m.key)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-all ${
              filter === m.key
                ? 'bg-[rgba(124,106,255,0.15)] border-[#7c6aff] text-[#7c6aff]'
                : 'bg-[#111119] border-white/[0.08] text-[#6b6b82]'
            }`}
          >
            {m.icon} {m.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 pb-4">
        {list.length ? list.map(i => <IlanCard key={i.id} ilan={i} />) : (
          <div className="text-center py-16 text-[#6b6b82]">
            <div className="text-5xl mb-3">🔍</div>
            <div className="text-sm">Sonuç bulunamadı</div>
          </div>
        )}
      </div>
    </div>
  )
}
