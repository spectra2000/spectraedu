# Hafta 08 – Mini Uygulama (R ile Paket Program Mantığı)

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 8  

---

## 1. Dersin Amacı

Bu haftanın amacı, önceki haftalarda
öğrenilen tüm konuları bir araya getirerek
mini bir paket program mantığıyla
uygulama geliştirmektir.

Bu çalışma, öğrencinin
konuları bütüncül şekilde
kavramasını hedefler.

---

## 2. Mini Uygulama Nedir?

Mini uygulama, belirli bir problemi
çözmeye odaklanan,
küçük ölçekli bir yazılım parçasıdır.

Bu uygulamalar:
- Belirli bir girdi alır
- Veriyi işler
- Anlamlı çıktı üretir

---

## 3. Uygulama Senaryosu

Bu hafta için örnek senaryo:

Bir CSV dosyasından
öğrenci notlarını okuyarak:
- Temel istatistikleri hesaplayan
- Grafik üreten
- Sonuçları kullanıcıya sunan
bir uygulama geliştirmek

---

## 4. Veri Okuma

Uygulama, dosyadan veri okuyarak başlar.

    data <- read.csv("ogrenci_notlari.csv")

Okunan verinin yapısı
kontrol edilmelidir.

    str(data)

---

## 5. Veri Temizleme ve Hazırlık

Eksik veya hatalı veriler
uygulama sonuçlarını etkileyebilir.

    clean_data <- na.omit(data)

Bu adım, uygulamanın
daha güvenilir çalışmasını sağlar.

---

## 6. Veri Özetleme

Temel özet istatistikler hesaplanır.

    summary(clean_data)

Gerekirse belirli sütunlar
üzerinde özel hesaplamalar yapılır.

---

## 7. Görselleştirme

Uygulama sonuçları
grafiklerle desteklenir.

    hist(clean_data$not)

Grafikler, sonuçların
daha anlaşılır olmasını sağlar.

---

## 8. Çıktı Üretme

Uygulama çıktıları
dosya olarak kaydedilebilir.

    write.csv(clean_data, "temiz_veri.csv", row.names = FALSE)

Bu işlem, paket programın
üretilebilir sonuçlar sunmasını sağlar.

---

## 9. Mini Uygulamanın Paket Program Mantığı

Bu mini uygulama:
- Girdi alır
- İşlem yapar
- Çıktı üretir

Bu yapı, gerçek hayattaki
paket programların
temel çalışma mantığını yansıtır.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Mini bir R uygulaması geliştirebilir
- Öğrenilen konuları birlikte kullanabilir
- Paket program mantığını
  uygulamalı olarak kavrar

---

## 11. Sonraki Haftaya Hazırlık

- Harici R paketlerini araştırınız
- Paketlerin nasıl yüklendiğini ve
  kullanıldığını inceleyiniz
