import React, { useState } from 'react'
import IlanCard from '../components/IlanCard'
import { ILANLAR } from '../data/mock'

function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="mb-4">
      <h1 className="font-syne text-[22px] font-extrabold">{title}</h1>
      <p className="text-[#6b6b82] text-[13px] mt-1">{subtitle}</p>
      {badge && (
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/25 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#a855f7] mt-3">
          <span className="animate-pulse-dot">●</span> {badge}
        </div>
      )}
    </div>
  )
}

function FilterRow({ filters, active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scroll-bar pb-2 mb-4">
      {filters.map(f => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-all ${
            active === f.key
              ? 'bg-[rgba(124,106,255,0.15)] border-[#7c6aff] text-[#7c6aff]'
              : 'bg-[#111119] border-white/[0.08] text-[#6b6b82]'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export function KayipPage() {
  const [f, setF] = useState('tumu')
  const kayiplar = ILANLAR.filter(i => i.tip === 'kayip')
  const list = f === 'tumu' ? kayiplar : kayiplar.filter(i => i.kayipTip === f)
  return (
    <div className="animate-fade-up px-4 pt-3">
      <PageHeader title="Kayıp Eşyalar" subtitle="AI destekli otomatik eşleştirme" badge="AI Eşleştirme Aktif" />
      <FilterRow
        filters={[{key:'tumu',label:'Tümü'},{key:'kaybettim',label:'Kaybettim'},{key:'buldum',label:'Buldum'}]}
        active={f} onChange={setF}
      />
      <div className="flex flex-col gap-3 pb-4">{list.map(i => <IlanCard key={i.id} ilan={i} />)}</div>
    </div>
  )
}

export function NotlarPage() {
  const filters = [{key:'tumu',label:'Tümü'},{key:'mat',label:'Matematik'},{key:'fiz',label:'Fizik'},{key:'yaz',label:'Yazılım'}]
  const [f, setF] = useState('tumu')
  const list = ILANLAR.filter(i => i.tip === 'not')
  return (
    <div className="animate-fade-up px-4 pt-3">
      <PageHeader title="Ders Notları" subtitle="Öğrenciler tarafından paylaşılan notlar" />
      <FilterRow filters={filters} active={f} onChange={setF} />
      <div className="flex flex-col gap-3 pb-4">{list.map(i => <IlanCard key={i.id} ilan={i} />)}</div>
    </div>
  )
}

export function EtkinlikPage() {
  const list = ILANLAR.filter(i => i.tip === 'etkinlik')
  return (
    <div className="animate-fade-up px-4 pt-3">
      <PageHeader title="Etkinlikler" subtitle="Kampüs etkinlikleri ve duyurular" />
      <div className="flex flex-col gap-3 pb-4">{list.map(i => <IlanCard key={i.id} ilan={i} />)}</div>
    </div>
  )
}

export function ProfilPage() {
  return (
    <div className="animate-fade-up px-4 pt-4 pb-8">
      {/* Profil kartı */}
      <div className="bg-[#111119] border border-white/[0.06] rounded-3xl p-6 text-center mb-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-3"
          style={{ background: 'linear-gradient(135deg,#7c6aff,#a855f7)', fontFamily:'Syne,sans-serif' }}
        >
          EC
        </div>
        <div className="font-syne text-xl font-extrabold">Emir Can Güney</div>
        <div className="text-[#6b6b82] text-sm mt-1">Yazılım Mühendisliği · 3. Sınıf · OGÜ</div>
        <div className="flex gap-2 justify-center mt-3 flex-wrap">
          {[['Geliştirici','rgba(124,106,255,.12)','#7c6aff'],['React','rgba(56,189,248,.1)','#38bdf8'],['Spring Boot','rgba(34,211,160,.1)','#22d3a0']].map(([t,bg,c]) => (
            <span key={t} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md" style={{background:bg,color:c}}>{t}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[['7','Açık İlanım'],['4','Eşleşmem'],['12','Yüklediğim Not'],['3','Etkinliklerim']].map(([n,l]) => (
          <div key={l} className="bg-[#111119] border border-white/[0.06] rounded-2xl p-4">
            <div className="font-syne text-[28px] font-extrabold grad-text">{n}</div>
            <div className="text-[#6b6b82] text-xs mt-1">{l}</div>
          </div>
        ))}
      </div>

      {/* İletişim */}
      <div className="bg-[#111119] border border-white/[0.06] rounded-2xl p-4">
        <div className="text-[11px] font-semibold text-[#6b6b82] uppercase tracking-wider mb-3">İletişim Bilgileri</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm"><span className="text-xl">📧</span> emircan@ogu.edu.tr</div>
          <div className="flex items-center gap-3 text-sm"><span className="text-xl">📱</span> +90 5** *** ** **</div>
        </div>
      </div>
    </div>
  )
}
