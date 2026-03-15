import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tag } from './Tag'
import { RENKLER } from '../data/mock'
import {
  UsersThree, House, ArrowsLeftRight, MagnifyingGlass,
  Football, BookOpen, CalendarBlank
} from '@phosphor-icons/react'

const TIP_ICON = {
  takim:    UsersThree,
  ev:       House,
  ikinciel: ArrowsLeftRight,
  kayip:    MagnifyingGlass,
  spor:     Football,
  not:      BookOpen,
  etkinlik: CalendarBlank,
}

export default function IlanCard({ ilan }) {
  const nav = useNavigate()
  const r = RENKLER[ilan.renk] || RENKLER.purple
  const Icon = TIP_ICON[ilan.tip] || UsersThree

  return (
    <div
      onClick={() => nav(`/ilan/${ilan.id}`)}
      className="press bg-[#111119] border border-white/[0.06] rounded-[18px] p-4 cursor-pointer transition-colors hover:border-white/[0.11]"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: r.bg }}>
            <Icon size={16} weight="regular" style={{ color: r.c }} />
          </div>
          <h3 className="font-syne font-bold text-[15px] leading-snug">{ilan.baslik}</h3>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {ilan.fiyat      && <Tag text={ilan.fiyat}  custom={{ bg:'rgba(245,158,11,0.12)', c:'#f59e0b' }} />}
          {ilan.kayipTip === 'buldum'    && <Tag text="Bulundu" custom={{ bg:'rgba(34,211,160,0.12)', c:'#22d3a0' }} />}
          {ilan.kayipTip === 'kaybettim' && <Tag text="Kayıp"   custom={{ bg:'rgba(244,63,94,0.12)',  c:'#f43f5e' }} />}
          {ilan.tarih      && <Tag text={ilan.tarih}  custom={{ bg:'rgba(56,189,248,0.1)',   c:'#38bdf8' }} />}
          {ilan.indir      && <Tag text={ilan.indir}  renk={ilan.renk} />}
        </div>
      </div>

      <p className="text-[#6b6b82] text-[13px] leading-relaxed mb-3 line-clamp-2 pl-[44px]">
        {ilan.aciklama}
      </p>

      <div className="flex flex-wrap items-center gap-1.5 pl-[44px]">
        {ilan.tags.map(t => <Tag key={t} text={t} renk={ilan.renk} />)}
        <div className="ml-auto flex items-center gap-1.5 text-[#6b6b82] text-[11px]">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0" style={{ background: ilan.ac + '22', color: ilan.ac }}>
            {ilan.avatar}
          </div>
          {ilan.kisi} · {ilan.zaman}
        </div>
      </div>
    </div>
  )
}
