import React from 'react'
import { useNavigate } from 'react-router-dom'

const RENK = {
  purple: { bg: 'rgba(124,106,255,0.12)', color: '#7c6aff' },
  green:  { bg: 'rgba(34,211,160,0.1)',   color: '#22d3a0' },
  amber:  { bg: 'rgba(245,158,11,0.1)',   color: '#f59e0b' },
  red:    { bg: 'rgba(244,63,94,0.1)',    color: '#f43f5e' },
  blue:   { bg: 'rgba(56,189,248,0.1)',   color: '#38bdf8' },
}

export default function IlanCard({ ilan }) {
  const navigate = useNavigate()
  const r = RENK[ilan.renk] || RENK.purple
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onClick={() => navigate(`/ilan/${ilan.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111118',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 14, padding: '18px 20px', cursor: 'pointer',
        transition: 'all 0.2s', position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg,#7c6aff,#a855f7)',
        }} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 600, letterSpacing: '-0.3px' }}>
          {ilan.icon} {ilan.baslik}
        </div>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0, marginLeft: 12 }}>
          {ilan.fiyat && <Badge text={ilan.fiyat} bg="rgba(245,158,11,0.12)" color="#f59e0b" />}
          {ilan.kayipTip === 'buldum'    && <Badge text="Bulundu" bg="rgba(34,211,160,0.12)"  color="#22d3a0" />}
          {ilan.kayipTip === 'kaybettim' && <Badge text="Kayıp"   bg="rgba(244,63,94,0.12)"   color="#f43f5e" />}
          {ilan.tarih  && <Badge text={ilan.tarih}  bg="rgba(56,189,248,0.12)"  color="#38bdf8" />}
          {ilan.indir  && <Badge text={ilan.indir}  bg={r.bg} color={r.color} />}
        </div>
      </div>

      <div style={{ color: '#6b6b80', fontSize: 13, lineHeight: 1.55, marginBottom: 12 }}>
        {ilan.aciklama.length > 110 ? ilan.aciklama.slice(0, 110) + '…' : ilan.aciklama}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        {ilan.etiketler.map(e => (
          <Badge key={e} text={e} bg={r.bg} color={r.color} />
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: '#6b6b80', fontSize: 12 }}>
          <div style={{
            width: 22, height: 22, borderRadius: '50%',
            background: ilan.avatarColor + '22', color: ilan.avatarColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, fontWeight: 700,
          }}>{ilan.avatar}</div>
          {ilan.kisi} · {ilan.zaman}
        </div>
      </div>
    </div>
  )
}

function Badge({ text, bg, color }) {
  return (
    <span style={{
      padding: '3px 10px', borderRadius: 6,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.2px',
      background: bg, color,
    }}>{text}</span>
  )
}
