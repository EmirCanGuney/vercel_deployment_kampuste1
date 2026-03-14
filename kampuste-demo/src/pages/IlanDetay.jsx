import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ILANLAR } from '../data/ilanlar'

const RENK = {
  purple: { bg:'rgba(124,106,255,0.12)', color:'#7c6aff' },
  green:  { bg:'rgba(34,211,160,0.1)',   color:'#22d3a0' },
  amber:  { bg:'rgba(245,158,11,0.1)',   color:'#f59e0b' },
  red:    { bg:'rgba(244,63,94,0.1)',    color:'#f43f5e' },
  blue:   { bg:'rgba(56,189,248,0.1)',   color:'#38bdf8' },
}

function Badge({ text, bg, color }) {
  return <span style={{ padding:'3px 10px', borderRadius:6, fontSize:11, fontWeight:600, background:bg, color }}>{text}</span>
}

export default function IlanDetay({ showToast }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const ilan = ILANLAR.find(i => i.id === Number(id))

  if (!ilan) return (
    <div style={{ textAlign:'center', padding:60, color:'#6b6b80' }}>
      <div style={{ fontSize:40 }}>😕</div>
      <div style={{ marginTop:12 }}>İlan bulunamadı</div>
      <button onClick={() => navigate('/')} style={{ marginTop:16, padding:'8px 20px', borderRadius:8, background:'#7c6aff', color:'white', border:'none', cursor:'pointer' }}>Ana sayfaya dön</button>
    </div>
  )

  const r = RENK[ilan.renk] || RENK.purple
  const isKayip   = ilan.tip === 'kayip'
  const isNot     = ilan.tip === 'not'
  const isEtkinlik = ilan.tip === 'etkinlik'

  return (
    <div className="fade-up">
      <button onClick={() => navigate(-1)} style={{
        marginBottom:16, padding:'7px 16px', borderRadius:8, fontSize:13,
        cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)',
        background:'#1a1a24', color:'#f0f0f5', fontFamily:'DM Sans,sans-serif',
      }}>← Geri</button>

      <div style={{ background:'#111118', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:24 }}>
        {isKayip && (
          <div style={{
            display:'inline-flex', alignItems:'center', gap:6,
            background:'rgba(168,85,247,0.12)', border:'1px solid rgba(168,85,247,0.25)',
            borderRadius:20, padding:'4px 12px', fontSize:11, fontWeight:600, color:'#a855f7', marginBottom:16,
          }}>
            <span className="pulse">●</span> AI Eşleştirme Aktif
          </div>
        )}

        <div style={{ display:'flex', gap:8, marginBottom:10, flexWrap:'wrap' }}>
          {ilan.etiketler.map(e => <Badge key={e} text={e} bg={r.bg} color={r.color} />)}
          {ilan.kayipTip === 'buldum'    && <Badge text="Bulundu" bg="rgba(34,211,160,0.12)"  color="#22d3a0" />}
          {ilan.kayipTip === 'kaybettim' && <Badge text="Kayıp"   bg="rgba(244,63,94,0.12)"   color="#f43f5e" />}
        </div>

        <div style={{ fontFamily:'Syne,sans-serif', fontSize:22, fontWeight:700, marginBottom:8, letterSpacing:'-0.5px' }}>
          {ilan.icon} {ilan.baslik}
        </div>
        <div style={{ color:'#6b6b80', fontSize:14, lineHeight:1.7, margin:'14px 0' }}>{ilan.aciklama}</div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:16 }}>
          {[
            ['Yayınlayan', ilan.kisi],
            ['Zaman', ilan.zaman],
            ['Kampüs', 'OGÜ Ana Kampüs'],
            ['Durum', '● Aktif'],
            ...(ilan.fiyat  ? [['Fiyat', ilan.fiyat]]  : []),
            ...(ilan.tarih  ? [['Etkinlik Tarihi', ilan.tarih]] : []),
            ...(ilan.indir  ? [['İndirme', ilan.indir]] : []),
          ].map(([label, value]) => (
            <div key={label} style={{ background:'#1a1a24', borderRadius:10, padding:'12px 14px' }}>
              <div style={{ fontSize:11, color:'#6b6b80', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:4 }}>{label}</div>
              <div style={{ fontSize:14, fontWeight:500, color: value === '● Aktif' ? '#22d3a0' : '#f0f0f5' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'flex', gap:10, marginTop:16 }}>
          <button
            onClick={() => showToast(
              isNot ? '⬇️ İndiriliyor' : isEtkinlik ? '🎉 Katılım Kaydedildi' : '✋ Başvuru Alındı',
              isNot ? 'Not dosyası indiriliyor...' : isEtkinlik ? 'Etkinliğe katılım talebiniz alındı.' : 'İlan sahibine bildirim gönderildi. Kabul ederse iletişim bilgileri paylaşılır.'
            )}
            style={{
              flex:1, padding:'13px 20px', borderRadius:12, fontSize:14, fontWeight:600,
              cursor:'pointer', border:'none', fontFamily:'DM Sans,sans-serif',
              background:'#7c6aff', color:'white',
            }}
          >
            {isNot ? '⬇️ Notu İndir' : isEtkinlik ? '🎉 Katılacağım' : isKayip ? '🤝 İlgileniyorum' : '✋ Başvur / İlgileniyorum'}
          </button>
          <button
            onClick={() => showToast('🔖 Kaydedildi', 'İlan kaydedilenler listenize eklendi.')}
            style={{
              padding:'13px 20px', borderRadius:12, fontSize:14, fontWeight:600,
              cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)',
              background:'#1a1a24', color:'#f0f0f5', fontFamily:'DM Sans,sans-serif',
            }}
          >
            🔖 Kaydet
          </button>
        </div>
      </div>
    </div>
  )
}
