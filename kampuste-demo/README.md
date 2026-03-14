# Kampüste — Frontend Demo

## Kurulum (2 adım)

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine git.

---

## Vercel'e Deploy (ücretsiz link almak için)

1. Kodu GitHub'a yükle (yeni bir repo aç, dosyaları sürükle bırak)
2. [vercel.com](https://vercel.com) adresine git, GitHub ile giriş yap
3. "New Project" → repoyu seç → "Deploy" butonuna bas
4. 1 dakika içinde link hazır: `kampuste-demo.vercel.app`

---

## Proje Yapısı

```
src/
  components/
    Navbar.jsx       → Üst navigasyon
    Sidebar.jsx      → Sol modül menüsü
    IlanCard.jsx     → İlan kartı bileşeni
    NewIlanModal.jsx → Yeni ilan formu
    Toast.jsx        → Bildirim popup
  pages/
    HomePage.jsx     → Ana akış + filtreler
    IlanDetay.jsx    → İlan detay sayfası
    OtherPages.jsx   → Profil, Kayıp, Notlar, Etkinlik
  data/
    ilanlar.js       → Mock veri
  App.jsx            → Router ve layout
  main.jsx           → Giriş noktası
  index.css          → Global stiller
```
