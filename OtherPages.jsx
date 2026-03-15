export const ILANLAR = [
  { id:1,  tip:'takim',    baslik:'Teknofest 2026 Yapay Zeka Takımı', aciklama:'Teknofest yapay zeka yarışması için takım kuruyoruz. Python ve ML deneyimi olan arkadaşlar arıyoruz. Proje: tarımda nesne tespiti.', tags:['Python','ML','Teknofest'], renk:'purple', kisi:'Ahmet Y.', avatar:'AY', ac:'#7c6aff', zaman:'2 saat önce' },
  { id:2,  tip:'ev',       baslik:'Kampüse 5 dk — Oda Arkadaşı', aciklama:'3+1 dairede 1 oda boş. Sakin, düzenli öğrenci tercih edilir. Faturalar dahil 6.000 TL.', tags:['Oda Arkadaşı','6.000 TL'], renk:'green', kisi:'Selin K.', avatar:'SK', ac:'#22d3a0', zaman:'5 saat önce' },
  { id:3,  tip:'ikinciel', baslik:'MacBook Pro M2 14" Kutusuyla', aciklama:'2023 model, 1 yıl kullandım, tertemiz. Apple Care garantisi devam ediyor.', tags:['MacBook','Apple'], renk:'amber', kisi:'Can B.', avatar:'CB', ac:'#f59e0b', zaman:'1 gün önce', fiyat:'45.000 TL' },
  { id:4,  tip:'kayip',    baslik:'Siyah AirPods Pro Kaybettim', aciklama:'Kütüphane 2. katında unutmuş olabilirim. Kutusuz, sağ tarafında çizik var.', tags:['AirPods','Elektronik'], renk:'red', kisi:'Zeynep A.', avatar:'ZA', ac:'#f43f5e', zaman:'3 saat önce', kayipTip:'kaybettim' },
  { id:5,  tip:'spor',     baslik:'Halı Saha — Cumartesi 15:00', aciklama:'OGÜ spor tesislerinde halı saha. 2 kişi eksik. Seviye orta.', tags:['Halı Saha','Cumartesi'], renk:'blue', kisi:'Mert D.', avatar:'MD', ac:'#38bdf8', zaman:'4 saat önce' },
  { id:6,  tip:'not',      baslik:'Diferansiyel Denklemler Final Notları', aciklama:"Prof. Yılmaz'ın dersi. 45 sayfa özet. Bu notlarla geçen yıl 90 aldım.", tags:['Matematik','Final','2024'], renk:'purple', kisi:'Elif S.', avatar:'ES', ac:'#a855f7', zaman:'2 gün önce', indir:'128 indirme' },
  { id:7,  tip:'etkinlik', baslik:'Yazılım Kulübü Hackathon 2026', aciklama:'48 saatlik hackathon. Kontenjan 60 kişi. Ödül havuzu 50.000 TL.', tags:['Hackathon','Ödüllü'], renk:'green', kisi:'Yazılım Kulübü', avatar:'YK', ac:'#22d3a0', zaman:'1 gün önce', tarih:'15 Mart 2026' },
  { id:8,  tip:'takim',    baslik:'TÜBİTAK 2209-A Sağlık Takip Uygulaması', aciklama:'React Native + Node.js. 1 frontend 1 backend geliştirici arıyorum.', tags:['TÜBİTAK','React Native','Node.js'], renk:'purple', kisi:'Burak T.', avatar:'BT', ac:'#7c6aff', zaman:'6 saat önce' },
  { id:9,  tip:'ev',       baslik:'Yurt Odası Değişimi B Blok 214', aciklama:'C veya D blok ile değişmek istiyorum. Sorunsuz oda, sadece kat değişikliği.', tags:['Yurt','Oda Değişimi'], renk:'green', kisi:'Ali R.', avatar:'AR', ac:'#22d3a0', zaman:'8 saat önce' },
  { id:10, tip:'kayip',    baslik:'Mavi Casio Saat Buldum', aciklama:'Kantinye yakın bankta buldum. Güvenlik görevlisine teslim ettim.', tags:['Saat','Kantine'], renk:'blue', kisi:'Deniz M.', avatar:'DM', ac:'#38bdf8', zaman:'1 saat önce', kayipTip:'buldum' },
  { id:11, tip:'ikinciel', baslik:'Mühendislik Ders Kitapları 8 Adet', aciklama:'Calculus, Fizik, Devre Analizi dahil 8 kitap. Hepsi 800 TL.', tags:['Kitap','Mühendislik'], renk:'amber', kisi:'Hasan K.', avatar:'HK', ac:'#f59e0b', zaman:'3 gün önce', fiyat:'800 TL' },
  { id:12, tip:'etkinlik', baslik:'Kariyer Günleri 2026', aciklama:'20+ şirketin katılacağı kariyer fuarı. CV workshopları ve mülakat simülasyonları.', tags:['Kariyer','Staj','İş'], renk:'green', kisi:'Kariyer Merkezi', avatar:'KM', ac:'#22d3a0', zaman:'5 saat önce', tarih:'22 Mart 2026' },
]

export const RENKLER = {
  purple: { bg: 'rgba(124,106,255,0.12)', c: '#7c6aff' },
  green:  { bg: 'rgba(34,211,160,0.10)',  c: '#22d3a0' },
  amber:  { bg: 'rgba(245,158,11,0.10)',  c: '#f59e0b' },
  red:    { bg: 'rgba(244,63,94,0.10)',   c: '#f43f5e' },
  blue:   { bg: 'rgba(56,189,248,0.10)',  c: '#38bdf8' },
}

export const MODULLER = [
  { key:'tumu',     label:'Tümü' },
  { key:'takim',    label:'Takım' },
  { key:'ev',       label:'Ev / Oda' },
  { key:'ikinciel', label:'İkinci El' },
  { key:'kayip',    label:'Kayıp' },
  { key:'spor',     label:'Spor' },
  { key:'not',      label:'Notlar' },
  { key:'etkinlik', label:'Etkinlik' },
]

export const TIP_LABEL = {
  takim:    'Takım',
  ev:       'Ev / Oda',
  ikinciel: 'İkinci El',
  kayip:    'Kayıp Eşya',
  spor:     'Spor',
  not:      'Ders Notu',
  etkinlik: 'Etkinlik',
}
