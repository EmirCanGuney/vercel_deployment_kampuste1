import React from 'react'
import { MODÜLLER } from '../data/ilanlar'

export default function Sidebar({ activeFilter, onFilter }) {
  return (
    <aside style={{
      width: 220, minHeight: 'calc(100vh - 60px)',
      borderRight: '1px solid rgba(255,255,255,0.07)',
      padding: '24px 12px', position: 'sticky', top: 60,
      height: 'calc(100vh - 60px)', overflowY: 'auto', flexShrink: 0,
    }}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b80', padding: '0 10px', marginBottom: 8 }}>
        Modüller
      </div>
      {MODÜLLER.map(m => (
        <div key={m.key} onClick={() => onFilter(m.key)} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '9px 10px', borderRadius: 8, cursor: 'pointer',
          fontSize: 14, marginBottom: 2,
          color: activeFilter === m.key ? '#7c6aff' : '#6b6b80',
          background: activeFilter === m.key ? 'rgba(124,106,255,0.1)' : 'transparent',
          border: `1px solid ${activeFilter === m.key ? 'rgba(124,106,255,0.2)' : 'transparent'}`,
          transition: 'all 0.15s',
        }}>
          <span style={{ fontSize: 16, width: 20, textAlign: 'center' }}>{m.icon}</span>
          {m.label}
          {m.count && (
            <span style={{
              marginLeft: 'auto', background: '#7c6aff', color: 'white',
              fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 10,
            }}>{m.count}</span>
          )}
        </div>
      ))}

      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b6b80', padding: '0 10px', margin: '20px 0 8px' }}>
        Hesap
      </div>
      {[['👤','Profilim'],['🔔','Bildirimler']].map(([icon, label]) => (
        <div key={label} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '9px 10px', borderRadius: 8, cursor: 'pointer',
          fontSize: 14, color: '#6b6b80', marginBottom: 2,
          transition: 'all 0.15s',
        }}>
          <span style={{ fontSize: 16, width: 20, textAlign: 'center' }}>{icon}</span>
          {label}
          {label === 'Bildirimler' && (
            <span style={{ marginLeft: 'auto', background: '#7c6aff', color: 'white', fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 10 }}>3</span>
          )}
        </div>
      ))}
    </aside>
  )
}
