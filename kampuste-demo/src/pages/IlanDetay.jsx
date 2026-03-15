import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ILANLAR, RENKLER } from '../data/mock'
import { Tag } from '../components/Tag'

export default function IlanDetay({ showToast }) {
  const { id } = useParams()
  const nav = useNavigate()
  const ilan = ILANLAR.find(i => i.id === Number(id))

  if (!ilan) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-[#6b6b82]">
      <div className="text-5xl">😕</div>
      <p>İlan bulunamadı</p>
      <button onClick={() => nav('/')} className="px-6 py-2.5 bg-[#7c6aff] text-white rounded-2xl text-sm font-semibold">
        Ana sayfaya dön
      </button>
    </div>
  )

  const isN = ilan.tip === 'not'
  const isE = ilan.tip === 'etkinlik'
  const isK = ilan.tip === 'kayip'
  const actionLabel = isN ? '⬇️ Notu İndir' : isE ? '🎉 Katılacağım' : isK ? '🤝 İlgileniyorum' : '✋ Başvur / İlgileniyorum'
  const actionMsg   = isN ? 'Not indiriliyor...' : isE ? 'Katılım talebiniz alındı!' : 'İlan sahibine bildirim gönderildi. Kabul ederse iletişim bilgileri paylaşılır.'

  const infoRows = [
    ['Yayınlayan', ilan.kisi],
    ['Zaman', ilan.zaman],
    ['Kampüs', 'OGÜ Ana Kampüs'],
    ['Durum', '● Aktif'],
    ...(ilan.fiyat ? [['Fiyat', ilan.fiyat]] : []),
    ...(ilan.tarih ? [['Tarih', ilan.tarih]] : []),
    ...(ilan.indir ? [['İndirme', ilan.indir]] : []),
  ]

  return (
    <div className="min-h-screen bg-[#09090f]">
      {/* Header */}
      <div className="sticky top-0 bg-[#09090f]/90 backdrop-blur-xl border-b border-white/[0.06] h-14 flex items-center px-4 gap-3 z-10">
        <button
          onClick={() => nav(-1)}
          className="w-9 h-9 rounded-xl bg-[#1b1b27] border border-white/[0.08] flex items-center justify-center text-lg"
        >
          ←
        </button>
        <span className="font-syne font-bold text-base">İlan Detayı</span>
      </div>

      <div className="px-4 pt-5 pb-10 animate-fade-up">
        {/* AI badge */}
        {isK && (
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/25 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#a855f7] mb-4">
            <span className="animate-pulse-dot">●</span> AI Eşleştirme Aktif
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {ilan.tags.map(t => <Tag key={t} text={t} renk={ilan.renk} />)}
          {ilan.kayipTip === 'buldum'    && <Tag text="Bulundu" custom={{ bg:'rgba(34,211,160,0.12)', c:'#22d3a0' }} />}
          {ilan.kayipTip === 'kaybettim' && <Tag text="Kayıp"   custom={{ bg:'rgba(244,63,94,0.12)',  c:'#f43f5e' }} />}
        </div>

        {/* Başlık */}
        <h1 className="font-syne text-2xl font-extrabold leading-snug mb-3">
          {ilan.icon} {ilan.baslik}
        </h1>

        {/* Açıklama */}
        <p className="text-[#6b6b82] text-[14px] leading-relaxed mb-6">{ilan.aciklama}</p>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          {infoRows.map(([l, v]) => (
            <div key={l} className="bg-[#1b1b27] rounded-2xl p-3 border border-white/[0.05]">
              <div className="text-[10px] font-semibold text-[#6b6b82] uppercase tracking-wider mb-1">{l}</div>
              <div className={`text-[13px] font-semibold ${v === '● Aktif' ? 'text-[#22d3a0]' : 'text-white'}`}>{v}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => showToast(actionMsg)}
            className="flex-1 py-4 rounded-2xl text-[15px] font-bold bg-gradient-to-r from-[#7c6aff] to-[#a855f7] text-white press"
          >
            {actionLabel}
          </button>
          <button
            onClick={() => showToast('🔖 İlan kaydedildi')}
            className="px-4 py-4 rounded-2xl bg-[#1b1b27] border border-white/[0.08] text-lg press"
          >
            🔖
          </button>
        </div>
      </div>
    </div>
  )
}
