import React, { useEffect } from 'react'

export default function Toast({ msg, onDone }) {
  useEffect(() => {
    if (!msg) return
    const t = setTimeout(onDone, 2800)
    return () => clearTimeout(t)
  }, [msg])

  if (!msg) return null
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
      <div className="bg-[#232333] border border-white/10 rounded-2xl px-5 py-3 text-sm font-semibold whitespace-nowrap shadow-2xl animate-fade-up">
        {msg}
      </div>
    </div>
  )
}
