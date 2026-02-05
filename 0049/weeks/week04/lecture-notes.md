# Hafta 04 – Veri Okuma ve Dosya İşlemleri

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 4  

---

## 1. Dersin Amacı

Bu haftanın amacı, paket programlarda en sık kullanılan
işlemlerden biri olan **dosya tabanlı veri alışverişini**
öğretmektir.

Öğrenciler bu hafta sonunda:
- Harici dosyalardan veri okuyabilecek
- Okunan veriyi kontrol edip anlayabilecek
- Analiz sonuçlarını dosya olarak dışarı aktarabilecektir

Bu beceriler, gerçek hayattaki paket programların
neredeyse tamamında kullanılan temel yeteneklerdir.

---

## 2. Dosya Kavramı ve Paket Programlar

Dosya, verilerin kalıcı olarak saklandığı
ve programlar arasında paylaşılmasını sağlayan yapılardır.

Paket programlarda dosyalar genellikle:
- Kullanıcıdan veri almak
- Program çıktısını saklamak
- Analiz sonuçlarını paylaşmak

amacıyla kullanılır.

Bir paket program, çoğu zaman
dosya olmadan işlevini yerine getiremez.

---

## 3. Çalışma Dizini (Working Directory)

R’de dosya işlemleri yapılırken
**çalışma dizini (working directory)** kavramı kritik öneme sahiptir.

R, dosya işlemlerini varsayılan olarak
çalışma dizini üzerinden gerçekleştirir.

Mevcut çalışma dizinini görmek için:

    getwd()

Çalışma dizinini değiştirmek için:

    setwd("klasor/yolu/buraya")

Yanlış dizinde çalışmak,
dosya bulunamaması hatalarının
en yaygın nedenidir.

---

## 4. CSV Dosya Formatı

CSV (Comma Separated Values),
verilerin satır ve sütunlar hâlinde
saklandığı metin tabanlı bir dosya formatıdır.

CSV dosyaları:
- Basittir
- Birçok yazılım tarafından desteklenir
- Paket programlarda standart veri formatı olarak kullanılır

Bu nedenle R ile çalışırken
en sık karşılaşılan dosya türüdür.

---

## 5. CSV Dosyasından Veri Okuma

R’de CSV dosyası okumak için
`read.csv()` fonksiyonu kullanılır.

    data <- read.csv("veri.csv")

Bu komut sonucunda:
- Dosya belleğe alınır
- Veri bir **data frame** yapısına dönüştürülür

Dosya adı veya yolu yanlışsa
R hata verecektir.

---

## 6. Okunan Verinin Kontrol Edilmesi

Veri okunduktan sonra,
okuma işleminin doğru yapıldığından
emin olunmalıdır.

En sık kullanılan kontrol fonksiyonları:

    head(data)
    str(data)
    summary(data)

Bu fonksiyonlar sayesinde:
- Veri tipi hataları fark edilir
- Eksik veya beklenmeyen değerler görülür
- Analize uygunluk değerlendirilir

---

## 7. Dosyaya Veri Yazma

Paket programlar genellikle
sadece veri okumaz,
aynı zamanda çıktı üretir.

Bir data frame’i CSV dosyasına yazmak için:

    write.csv(data, "sonuc.csv", row.names = FALSE)

Bu işlem:
- Analiz sonuçlarının saklanmasını sağlar
- Program çıktısının tekrar kullanılmasına imkân tanır

---

## 8. Dosya İşlemlerinde Sık Yapılan Hatalar

Dosya işlemleri sırasında en sık karşılaşılan hatalar:
- Yanlış çalışma dizini
- Dosya adının yanlış yazılması
- Dosya uzantısının eksik olması

Bu nedenle her zaman:
- Dosya yolu
- Dosya adı
- Çalışma dizini

kontrol edilmelidir.

---

## 9. Dosya İşlemlerinin Paket Programlardaki Önemi

Bu haftada öğrenilen dosya işlemleri sayesinde:
- Paket program dış dünyayla veri alışverişi yapabilir
- Kullanıcıdan alınan veriler işlenebilir
- Sonuçlar kalıcı ve paylaşılabilir hâle gelir

Bu yapı, paket programların
temel çalışma mantığını oluşturur.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Çalışma dizini kavramını açıklar
- CSV dosyasından veri okuyabilir
- Okunan veriyi kontrol edebilir
- Analiz sonuçlarını dosya olarak kaydedebilir
- Dosya işlemlerinin paket programlardaki rolünü kavrar

---

## 11. Sonraki Haftaya Hazırlık

- Eksik veri (NA) kavramını araştırınız
- Verinin neden temizlenmesi gerektiğini inceleyiniz
