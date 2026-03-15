import React, { useState } from 'react'
import { Users, Home, RefreshCw, Search, Dumbbell, BookOpen, Calendar } from 'lucide-react'

const TIPLER = [
  { key:'takim',    label:'Takım Kurma',  Icon: Users },
  { key:'ev',       label:'Ev / Oda',     Icon: Home },
  { key:'ikinciel', label:'İkinci El',    Icon: RefreshCw },
  { key:'kayip',    label:'Kayıp Eşya',  Icon: Search },
  { key:'spor',     label:'Spor',         Icon: Dumbbell },
  { key:'not',      label:'Ders Notu',    Icon: BookOpen },
  { key:'etkinlik', label:'Etkinlik',     Icon: Calendar },
]

const CONTACT = [
  { key:'profile', label:'Profilimden al',   sub:'Kayıtlı bilgin kullanılır' },
  { key:'custom',  label:'Özel gir',          sub:'Bu ilana özel numara' },
  { key:'public',  label:'Herkese açık',      sub:'İlanda görünür' },
]

export default function YeniIlan({ onClose, onSuccess }) {
  const [tip, setTip]     = useState('takim')
  const [title, setTitle] = useState('')
  const [body, setBody]   = useState('')
  const [tags, setTags]   = useState('')
  const [contact, setContact] = useState('profile')

  function submit() {
    if (!title.trim()) return
    onClose()
    setTitle(''); setBody(''); setTags('')
    onSuccess('İlan yayınlandı')
  }

  const inputCls = "w-full bg-[#1b1b27] border border-white/[0.08] rounded-xl px-4 py-3 text-[15px] text-white focus:border-[#7c6aff] transition-colors"

  return (
    <div className="px-4 pb-10">
      <p className="font-syne font-bold text-xl mb-1">Yeni İlan</p>
      <p className="text-[#6b6b82] text-sm mb-6">Kampüsteki öğrencilere ulaş</p>

      {/* Tip seçimi */}
      <Label>İlan Türü</Label>
      <div className="grid grid-cols-2 gap-2 mb-5">
        {TIPLER.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTip(key)}
            className={`flex items-center gap-2.5 px-3 py-3 rounded-xl border text-left transition-all ${
              tip === key
                ? 'bg-[rgba(124,106,255,0.1)] border-[#7c6aff]'
                : 'bg-[#1b1b27] border-white/[0.07]'
            }`}
          >
            <Icon size={16} strokeWidth={2} className={tip === key ? 'text-[#7c6aff]' : 'text-[#6b6b82]'} />
            <span className={`text-[13px] font-medium ${tip === key ? 'text-[#7c6aff]' : 'text-[#6b6b82]'}`}>{label}</span>
          </button>
        ))}
      </div>

      <Label>Başlık</Label>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="İlan başlığını gir..." className={inputCls + " mb-4"} />

      <Label>Açıklama</Label>
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Detayları açıkla..." rows={3} className={inputCls + " mb-4 resize-none"} />

      <Label>Etiketler</Label>
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="react, python, takım..." className={inputCls + " mb-5"} />

      {/* İletişim tercihi */}
      <Label>İletişim Tercihi</Label>
      <div className="flex flex-col gap-2 mb-6">
        {CONTACT.map(c => (
          <div
            key={c.key}
            onClick={() => setContact(c.key)}
            className={`flex items-center justify-between px-4 py-3.5 rounded-xl border cursor-pointer transition-all ${
              contact === c.key
                ? 'bg-[rgba(124,106,255,0.08)] border-[#7c6aff]'
                : 'bg-[#1b1b27] border-white/[0.07]'
            }`}
          >
            <div>
              <div className={`text-[14px] font-medium ${contact === c.key ? 'text-white' : 'text-[#6b6b82]'}`}>{c.label}</div>
              <div className="text-[11px] text-[#6b6b82] mt-0.5">{c.sub}</div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
              contact === c.key ? 'border-[#7c6aff] bg-[#7c6aff]' : 'border-white/20'
            }`}>
              {contact === c.key && <div className="w-2 h-2 rounded-full bg-white" />}
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
        Yayınla
      </button>
    </div>
  )
}

function Label({ children }) {
  return <p className="text-[11px] font-semibold text-[#6b6b82] uppercase tracking-wider mb-2">{children}</p>
}
