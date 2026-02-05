# Hafta 03 – Fonksiyonlar ve Modüler Yapı

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 3  

---

## 1. Dersin Amacı

Bu haftanın amacı, R programlama dilinde fonksiyon kavramını öğretmek ve
paket program geliştirme sürecinde neden modüler bir yapıya ihtiyaç
duyulduğunu açıklamaktır.

---

## 2. Fonksiyon Nedir?

Fonksiyon, belirli bir görevi yerine getiren ve gerektiğinde girdi alıp
çıktı üretebilen kod bloklarıdır.

Fonksiyonlar sayesinde:
- Kod tekrarları azaltılır
- Okunabilirlik artar
- Bakım ve geliştirme kolaylaşır

---

## 3. R’de Fonksiyon Tanımlama

R’de fonksiyonlar `function()` yapısı ile tanımlanır.

    topla <- function(a, b) {
      sonuc <- a + b
      return(sonuc)
    }

Fonksiyon çağrımı:

    topla(3, 5)

---

## 4. Parametreler ve Varsayılan Değerler

Fonksiyonlar parametre alabilir ve bu parametrelere varsayılan değerler
atanabilir.

    carp <- function(a, b = 1) {
      a * b
    }

    carp(5)
    carp(5, 3)

---

## 5. Fonksiyonların Paket Programlardaki Rolü

Paket programlarda fonksiyonlar:
- Hesaplama yapar
- Kullanıcıdan gelen verileri işler
- Sonuç üretir

Arayüzler bu fonksiyonları yalnızca çağırır.

---

## 6. Modüler Kod Yapısı

Modüler yapı, büyük problemleri küçük ve bağımsız parçalara ayırmayı
amaçlar.

Her fonksiyonun tek bir sorumluluğu olmalıdır.

---

## 7. Fonksiyonların Dosya Bazlı Kullanımı

Büyük projelerde fonksiyonlar ayrı dosyalarda tutulur.

Örnek bir yapı:

    functions/
      calculations.R
      helpers.R

Bu dosyalar ana dosya içinde `source()` ile çağrılır.

---

## 8. Basit Hata Kontrolleri

Fonksiyonlar içinde kullanıcı hatalarını önlemek için kontroller
yapılabilir.

    bol <- function(a, b) {
      if (b == 0) {
        stop("Bölen sıfır olamaz")
      }
      a / b
    }

---

## 9. Shiny ile İlişkisi

Shiny uygulamalarında arayüzden bağımsız olarak iş mantığı fonksiyonlar
içinde tanımlanır.

Bu hafta öğrenilen fonksiyon kavramı, Shiny server yapısının temelini
oluşturur.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Fonksiyon yazabilir
- Parametreli fonksiyonları kullanabilir
- Modüler kod yapısını kavrar
- Paket program mantığını anlayabilir

---

## 11. Sonraki Haftaya Hazırlık

- Dosya okuma ve yazma işlemlerini araştırınız
- Veri setleriyle çalışmaya hazırlık yapınız
