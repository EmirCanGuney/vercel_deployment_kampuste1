import React, { useEffect } from 'react'

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 500,
      background: '#1a1a24', border: '1px solid rgba(255,255,255,0.13)',
      borderRadius: 12, padding: '14px 18px', maxWidth: 300,
      transform: toast ? 'translateY(0)' : 'translateY(120px)',
      opacity: toast ? 1 : 0,
      transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      pointerEvents: toast ? 'all' : 'none',
    }}>
      {toast && <>
        <div style={{ fontWeight:600, fontSize:13, marginBottom:3 }}>{toast.title}</div>
        <div style={{ color:'#6b6b80', fontSize:12 }}>{toast.body}</div>
      </>}
    </div>
  )
}
