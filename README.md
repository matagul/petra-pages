# Petra.bet Affiliate Static Site

## Kurulum ve Yayınlama (FTP ile)

1. **site/** klasörünü ZIP arşivine ekleyin:
   ```bash
   zip -r petra-bet-affiliate.zip site/
   ```
2. **petra-bet-affiliate.zip** dosyasını FTP ile sunucunuzun kök dizinine yükleyin.
3. Sunucuda ZIP dosyasını çıkarın:
   ```bash
   unzip petra-bet-affiliate.zip
   ```
4. Tüm sayfalar ve dosyalar `/site/` klasöründe hazırdır. Herhangi bir ek kurulum veya yazılım gerekmez.

## Dosya Yapısı

- `site/*.html` — Tüm sayfalar (ana sayfa, rakipler, bonus, slotlar, SSS, hakkımızda)
- `site/assets/css/` — CSS dosyaları
- `site/assets/js/` — JS ve konfigürasyon dosyaları
- `site/assets/img/` — Görseller ve placeholder ikonlar

## Özellikler
- Mobil uyumlu, hızlı, koyu tema
- RTL (Arapça) ve LTR (İngilizce) desteği
- Dil tercihi localStorage ile saklanır
- Tüm sayfalarda tutarlı nav ve footer
- JSON konfigürasyon ile kolay veri yönetimi
- Herhangi bir framework veya kurulum gerektirmez

## Görseller
- Tüm logo ve ekran görüntüsü dosyalarını `/assets/img/` klasörüne ekleyin. (Şu anda placeholder olarak eklenmiştir.)

## Notlar
- Affiliate linkleri ve görsellerde `CODE` ve placeholder dosya adlarını kendi bilgilerinizle değiştirin.
- Tüm sayfalar doğrudan FTP ile yüklenip çalışır.

---

**İletişim:** affiliate@petra.bet
