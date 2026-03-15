import React from 'react'
import { RENKLER } from '../data/mock'

export function Tag({ text, renk = 'purple', custom }) {
  const r = RENKLER[renk] || RENKLER.purple
  return (
    <span
      style={{ background: custom?.bg || r.bg, color: custom?.c || r.c }}
      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
    >
      {text}
    </span>
  )
}
