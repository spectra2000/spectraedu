# Hafta 12 – R Paket Mantığı

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 12  

---

## 1. Dersin Amacı

Bu haftanın amacı, R programlama dilinde
paket kavramını tanıtmak ve
kodların neden paket hâline getirildiğini
açıklamaktır.

Bu yapı, geliştirilen uygulamaların
daha profesyonel ve sürdürülebilir olmasını sağlar.

---

## 2. R Paketi Nedir?

R paketi:
- Fonksiyonları
- Verileri
- Dokümantasyonu

tek bir yapı altında toplayan
düzenli bir yazılım birimidir.

CRAN üzerindeki her paket,
bu mantıkla oluşturulmuştur.

---

## 3. Neden Paket Kullanırız?

Paket kullanmanın avantajları:
- Kod tekrarını azaltır
- Düzenli bir yapı sağlar
- Kolay paylaşım ve dağıtım imkânı sunar
- Bakımı kolaylaştırır

Bu özellikler,
paket program mantığıyla birebir örtüşür.

---

## 4. Temel Paket Yapısı

Basit bir R paketinde
şu klasörler bulunur:

- R/
- man/
- DESCRIPTION
- NAMESPACE

Bu yapı,
paketin nasıl çalışacağını belirler.

---

## 5. R Klasörü

`R/` klasörü:
- Fonksiyonların yazıldığı yerdir
- Her fonksiyon ayrı dosyada bulunabilir

Örnek:

    R/
      toplama.R
      carpma.R

---

## 6. DESCRIPTION Dosyası

DESCRIPTION dosyası:
- Paket hakkında genel bilgileri içerir
- Paket adı
- Sürüm
- Yazar bilgileri

gibi bilgileri barındırır.

---

## 7. NAMESPACE Dosyası

NAMESPACE dosyası:
- Hangi fonksiyonların dışarı açılacağını belirler
- Paket içi erişimi kontrol eder

Bu dosya,
paketin güvenliğini ve düzenini sağlar.

---

## 8. Paket Mantığının Paket Programlarla İlişkisi

Paket yapısı sayesinde:
- Kodlar modüler hâle gelir
- Büyük projeler yönetilebilir olur
- Paket programlar daha profesyonel görünür

Bu yapı,
final projede geliştirilecek
Shiny uygulamalarının da temelini oluşturur.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- R paket kavramını açıklar
- Temel paket yapısını tanır
- Fonksiyonları paket içine alabilir
- Paket program mantığını kavrar

---

## 10. Sonraki Haftaya Hazırlık

- Shiny uygulamalarının nasıl yayınlandığını araştırınız
- Shiny Server ve shinyapps.io kavramlarını inceleyiniz
