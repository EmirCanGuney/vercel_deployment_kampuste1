import React from 'react'
import IlanCard from '../components/IlanCard'
import { ILANLAR } from '../data/ilanlar'

export function ProfilPage() {
  return (
    <div className="fade-up">
      <div style={{ background:'#111118', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:24, textAlign:'center', marginBottom:16 }}>
        <div style={{
          width:72, height:72, borderRadius:'50%',
          background:'linear-gradient(135deg,#7c6aff,#a855f7)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'Syne,sans-serif', fontSize:26, fontWeight:700, color:'white',
          margin:'0 auto 12px',
        }}>EC</div>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize:18, fontWeight:700 }}>Emir Can Güney</div>
        <div style={{ color:'#6b6b80', fontSize:13, marginTop:4 }}>Yazılım Mühendisliği · 3. Sınıf · OGÜ</div>
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginTop:14 }}>
          {['Geliştirici','React','Spring Boot'].map((t,i) => (
            <span key={t} style={{
              padding:'3px 10px', borderRadius:6, fontSize:11, fontWeight:600,
              background: ['rgba(124,106,255,0.12)','rgba(56,189,248,0.1)','rgba(34,211,160,0.1)'][i],
              color: ['#7c6aff','#38bdf8','#22d3a0'][i],
            }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {[['7','Açık İlanım'],['4','Eşleşmem'],['12','Yüklediğim Not'],['3','Katıldığım Etkinlik']].map(([n,l]) => (
          <div key={l} style={{ background:'#111118', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:16 }}>
            <div style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:700, background:'linear-gradient(135deg,#7c6aff,#a855f7)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{n}</div>
            <div style={{ fontSize:12, color:'#6b6b80', marginTop:2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function KayipPage({ showToast }) {
  const ilanlar = ILANLAR.filter(i => i.tip === 'kayip')
  return (
    <div className="fade-up">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
        <div>
          <div style={{ fontFamily:'Syne,sans-serif', fontSize:26, fontWeight:700, letterSpacing:'-0.5px' }}>Kayıp Eşyalar</div>
          <div style={{ color:'#6b6b80', fontSize:14, marginTop:4 }}>AI destekli otomatik eşleştirme sistemi</div>
        </div>
      </div>
      <div style={{
        display:'inline-flex', alignItems:'center', gap:6,
        background:'rgba(168,85,247,0.12)', border:'1px solid rgba(168,85,247,0.25)',
        borderRadius:20, padding:'4px 12px', fontSize:11, fontWeight:600, color:'#a855f7', marginBottom:20,
      }}>
        <span className="pulse">●</span> AI Eşleştirme Aktif — Yeni ilan girişinde otomatik analiz yapılır
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {ilanlar.map(i => <IlanCard key={i.id} ilan={i} />)}
      </div>
    </div>
  )
}

export function NotlarPage() {
  const ilanlar = ILANLAR.filter(i => i.tip === 'not')
  return (
    <div className="fade-up">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
        <div>
          <div style={{ fontFamily:'Syne,sans-serif', fontSize:26, fontWeight:700, letterSpacing:'-0.5px' }}>Ders Notları</div>
          <div style={{ color:'#6b6b80', fontSize:14, marginTop:4 }}>Öğrenciler tarafından paylaşılan notlar</div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {ilanlar.map(i => <IlanCard key={i.id} ilan={i} />)}
      </div>
    </div>
  )
}

export function EtkinlikPage() {
  const ilanlar = ILANLAR.filter(i => i.tip === 'etkinlik')
  return (
    <div className="fade-up">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
        <div>
          <div style={{ fontFamily:'Syne,sans-serif', fontSize:26, fontWeight:700, letterSpacing:'-0.5px' }}>Etkinlikler</div>
          <div style={{ color:'#6b6b80', fontSize:14, marginTop:4 }}>Kampüs etkinlikleri ve duyurular</div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {ilanlar.map(i => <IlanCard key={i.id} ilan={i} />)}
      </div>
    </div>
  )
}
