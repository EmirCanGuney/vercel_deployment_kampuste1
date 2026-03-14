import React, { useState } from 'react'

const TIPLER = [
  { key:'takim',    label:'🚀 Takım' },
  { key:'ev',       label:'🏡 Ev/Oda' },
  { key:'ikinciel', label:'♻️ İkinci El' },
  { key:'kayip',    label:'🔍 Kayıp' },
  { key:'spor',     label:'⚽ Spor' },
  { key:'not',      label:'📚 Not' },
  { key:'etkinlik', label:'🎉 Etkinlik' },
]

const CONTACT = [
  { key:'profile', icon:'👤', label:'Profilimden al' },
  { key:'custom',  icon:'✏️', label:'Özel gir' },
  { key:'public',  icon:'🌐', label:'Herkese açık' },
]

export default function NewIlanModal({ open, onClose, onSubmit }) {
  const [tip, setTip]         = useState('takim')
  const [baslik, setBaslik]   = useState('')
  const [aciklama, setAciklama] = useState('')
  const [etiket, setEtiket]   = useState('')
  const [contact, setContact] = useState('profile')

  function submit() {
    if (!baslik.trim()) return
    onSubmit({ tip, baslik, aciklama })
    setBaslik(''); setAciklama(''); setEtiket('')
    onClose()
  }

  if (!open) return null

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(10px)', zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      }}
    >
      <div style={{
        background: '#111118', border: '1px solid rgba(255,255,255,0.13)',
        borderRadius: 20, padding: 28, width: '100%', maxWidth: 520,
        maxHeight: '88vh', overflowY: 'auto', position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 18, right: 18,
          background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8, width: 32, height: 32, cursor: 'pointer',
          color: '#6b6b80', fontSize: 16, display:'flex',alignItems:'center',justifyContent:'center',
        }}>✕</button>

        <div style={{ fontFamily:'Syne,sans-serif', fontSize:20, fontWeight:700, marginBottom:4 }}>
          Yeni İlan Oluştur
        </div>
        <div style={{ color:'#6b6b80', fontSize:13, marginBottom:20 }}>
          İlanını oluştur ve kampüsteki binlerce öğrenciye ulaş
        </div>

        <Label>İlan Türü</Label>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:18 }}>
          {TIPLER.map(t => (
            <button key={t.key} onClick={() => setTip(t.key)} style={{
              padding:'6px 12px', borderRadius:20, fontSize:12, fontWeight:500,
              cursor:'pointer', fontFamily:'DM Sans,sans-serif',
              background: tip===t.key ? 'rgba(124,106,255,0.15)' : '#1a1a24',
              border: `1px solid ${tip===t.key ? '#7c6aff' : 'rgba(255,255,255,0.07)'}`,
              color: tip===t.key ? '#7c6aff' : '#6b6b80',
            }}>{t.label}</button>
          ))}
        </div>

        <Label>Başlık</Label>
        <Input value={baslik} onChange={e=>setBaslik(e.target.value)} placeholder="İlan başlığını gir..." style={{ marginBottom:16 }} />

        <Label>Açıklama</Label>
        <textarea value={aciklama} onChange={e=>setAciklama(e.target.value)}
          placeholder="Detayları açıkla..."
          style={{
            width:'100%', background:'#1a1a24', border:'1px solid rgba(255,255,255,0.07)',
            borderRadius:10, padding:'10px 14px', color:'#f0f0f5', fontSize:14,
            fontFamily:'DM Sans,sans-serif', outline:'none', resize:'vertical',
            minHeight:90, marginBottom:16,
          }}
        />

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:18 }}>
          <div>
            <Label>Kampüs</Label>
            <Input value="OGÜ Ana Kampüs" readOnly style={{ opacity:0.5 }} />
          </div>
          <div>
            <Label>Etiketler</Label>
            <Input value={etiket} onChange={e=>setEtiket(e.target.value)} placeholder="react, python, ..." />
          </div>
        </div>

        <Label>İletişim Tercihi</Label>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginBottom:24 }}>
          {CONTACT.map(c => (
            <div key={c.key} onClick={() => setContact(c.key)} style={{
              border:`1px solid ${contact===c.key ? '#7c6aff' : 'rgba(255,255,255,0.07)'}`,
              borderRadius:10, padding:10, textAlign:'center', cursor:'pointer',
              background: contact===c.key ? 'rgba(124,106,255,0.1)' : 'transparent',
              transition:'all 0.15s',
            }}>
              <div style={{ fontSize:20, marginBottom:4 }}>{c.icon}</div>
              <div style={{ fontSize:11, color: contact===c.key ? '#7c6aff' : '#6b6b80', fontWeight:500 }}>{c.label}</div>
            </div>
          ))}
        </div>

        <button onClick={submit} style={{
          width:'100%', padding:'13px 20px', borderRadius:12, fontSize:14, fontWeight:600,
          cursor:'pointer', border:'none', fontFamily:'DM Sans,sans-serif',
          background: baslik.trim() ? '#7c6aff' : '#1a1a24',
          color: baslik.trim() ? 'white' : '#6b6b80',
          transition:'all 0.2s',
        }}>
          İlanı Yayınla
        </button>
      </div>
    </div>
  )
}

function Label({ children }) {
  return <div style={{ fontSize:11, fontWeight:600, color:'#6b6b80', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.5px' }}>{children}</div>
}

function Input({ style, ...props }) {
  return (
    <input {...props} style={{
      width:'100%', background:'#1a1a24', border:'1px solid rgba(255,255,255,0.07)',
      borderRadius:10, padding:'10px 14px', color:'#f0f0f5', fontSize:14,
      fontFamily:'DM Sans,sans-serif', outline:'none', marginBottom:0,
      ...style,
    }} />
  )
}
