# Hafta 08 – Mini Uygulama (R ile Paket Program Mantığı)

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 8  

---

## 1. Dersin Amacı

Bu haftanın amacı, önceki haftalarda öğrenilen
tüm R becerilerini bir araya getirerek
mini bir paket program geliştirmektir.

Bu çalışma, öğrencinin
konuları bütüncül şekilde
kavramasını hedefler.

---

## 2. Mini Uygulama Nedir?

Mini uygulama, belirli bir problemi
çözmeye odaklanan,
küçük ölçekli bir yazılım parçasıdır.

Bir mini uygulama genellikle:
- Veri alır
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
bir mini uygulama geliştirmek

---

## 4. Uygulama Akışı

Mini uygulamanın genel akışı şu şekildedir:
1. Veri dosyasını okuma
2. Veriyi temizleme
3. Veriyi özetleme
4. Grafik oluşturma
5. Çıktıları kaydetme

Bu akış, gerçek hayattaki
paket programların çalışma mantığını yansıtır.

---

## 5. Veri Okuma

Uygulama, harici bir dosyadan
veri okuyarak başlar.

    data <- read.csv("ogrenci_notlari.csv")

Okunan verinin yapısı
kontrol edilmelidir.

    str(data)

---

## 6. Veri Temizleme

Eksik veya hatalı veriler,
uygulama sonuçlarını etkileyebilir.

Eksik satırları temizlemek için:

    clean_data <- na.omit(data)

Bu adım, uygulamanın
daha güvenilir çalışmasını sağlar.

---

## 7. Veri Özetleme

Temel özet istatistikler
hesaplanabilir.

    summary(clean_data)

Gerekirse belirli sütunlar
üzerinde özel hesaplamalar yapılır.

---

## 8. Görselleştirme

Uygulama sonuçları
grafiklerle desteklenir.

    hist(clean_data$not)

Grafikler, sonuçların
daha anlaşılır olmasını sağlar.

---

## 9. Çıktı Üretme

Uygulama çıktıları
dosya olarak kaydedilebilir.

    write.csv(clean_data, "temiz_veri.csv", row.names = FALSE)

Bu işlem, paket programın
kullanıcıya kalıcı çıktı sunmasını sağlar.

---

## 10. Mini Uygulamanın Paket Program Mantığı

Bu mini uygulama:
- Girdi alır
- İşlem yapar
- Çıktı üretir

Bu yapı, gerçek hayattaki
paket programların
temel çalışma mantığını temsil eder.

---

## 11. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Mini bir R uygulaması geliştirebilir
- Öğrenilen konuları birlikte kullanabilir
- Paket program mantığını
  uygulamalı olarak kavrar

---

## 12. Sonraki Haftaya Hazırlık

- Etkileşimli uygulama kavramını araştırınız
- Shiny framework’ünün temel amacını inceleyiniz
