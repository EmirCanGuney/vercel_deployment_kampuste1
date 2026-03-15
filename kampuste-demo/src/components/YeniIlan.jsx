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
  { key:'profile', icon:'👤', label:'Profilimden' },
  { key:'custom',  icon:'✏️', label:'Özel gir' },
  { key:'public',  icon:'🌐', label:'Herkese açık' },
]

export default function YeniIlan({ onClose, onSuccess }) {
  const [tip, setTip]       = useState('takim')
  const [title, setTitle]   = useState('')
  const [body, setBody]     = useState('')
  const [tags, setTags]     = useState('')
  const [contact, setContact] = useState('profile')

  function submit() {
    if (!title.trim()) return
    onClose()
    setTitle(''); setBody(''); setTags('')
    onSuccess('🎉 İlan yayınlandı!')
  }

  const inputCls = "w-full bg-[#1b1b27] border border-white/[0.08] rounded-xl px-4 py-3 text-[15px] text-white focus:border-[#7c6aff] transition-colors"

  return (
    <div className="px-4 pb-8">
      <p className="font-syne font-bold text-xl mb-1">Yeni İlan Oluştur</p>
      <p className="text-[#6b6b82] text-sm mb-5">Kampüsteki öğrencilere ulaş</p>

      {/* Tip */}
      <Label>İlan Türü</Label>
      <div className="flex gap-2 overflow-x-auto no-scroll-bar pb-1 mb-4">
        {TIPLER.map(t => (
          <button
            key={t.key}
            onClick={() => setTip(t.key)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-all ${
              tip === t.key
                ? 'bg-[rgba(124,106,255,0.15)] border-[#7c6aff] text-[#7c6aff]'
                : 'bg-[#111119] border-white/[0.08] text-[#6b6b82]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Başlık */}
      <Label>Başlık</Label>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="İlan başlığını gir..."
        className={inputCls + " mb-4"}
      />

      {/* Açıklama */}
      <Label>Açıklama</Label>
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Detayları açıkla..."
        rows={3}
        className={inputCls + " mb-4 resize-none"}
      />

      {/* Etiketler */}
      <Label>Etiketler</Label>
      <input
        value={tags}
        onChange={e => setTags(e.target.value)}
        placeholder="react, python, takım..."
        className={inputCls + " mb-4"}
      />

      {/* İletişim Tercihi */}
      <Label>İletişim Tercihi</Label>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {CONTACT.map(c => (
          <div
            key={c.key}
            onClick={() => setContact(c.key)}
            className={`bg-[#1b1b27] rounded-2xl p-3 text-center cursor-pointer border-2 transition-all ${
              contact === c.key ? 'border-[#7c6aff]' : 'border-transparent'
            }`}
          >
            <div className="text-2xl mb-1">{c.icon}</div>
            <div className={`text-[11px] font-semibold ${contact === c.key ? 'text-[#7c6aff]' : 'text-[#6b6b82]'}`}>
              {c.label}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={submit}
        className={`w-full py-4 rounded-2xl text-[15px] font-bold transition-all ${
          title.trim()
            ? 'bg-gradient-to-r from-[#7c6aff] to-[#a855f7] text-white'
            : 'bg-[#1b1b27] text-[#6b6b82]'
        }`}
      >
        İlanı Yayınla
      </button>
    </div>
  )
}

function Label({ children }) {
  return (
    <p className="text-[11px] font-semibold text-[#6b6b82] uppercase tracking-wider mb-2">
      {children}
    </p>
  )
}
