import React, { useEffect } from 'react'

export default function Sheet({ open, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-md z-[90]"
        onClick={onClose}
      />
      {/* Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#111119] border border-white/10 rounded-t-3xl max-h-[92vh] overflow-y-auto animate-slide-up safe-bottom">
        <div className="sheet-handle mt-3" />
        {children}
      </div>
    </>
  )
}
