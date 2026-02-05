# Hafta 02 – R Temelleri ve Veri Yapıları

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 2  

---

## 1. Dersin Amacı

Bu haftanın amacı, R programlama diline temel seviyede giriş yapmak ve
paket program geliştirme sürecinde kullanılacak temel yapı taşlarını
tanıtmaktır.

Bu hafta öğrenilen konular, ilerleyen haftalarda yazılacak
fonksiyonlar ve Shiny uygulamaları için altyapı niteliğindedir.

---

## 2. R ve RStudio Ortamı

R, istatistiksel hesaplama ve veri analizi için kullanılan bir
programlama dilidir.

RStudio ise R dili için geliştirilmiş bir entegre geliştirme ortamıdır
(IDE). Kod yazma, çıktı alma, grafik üretme ve dosya yönetimini tek bir
arayüzde sunar.

RStudio temel olarak şu bölümlerden oluşur:
- Script Editor
- Console
- Environment
- Files / Plots / Packages

---

## 3. Değişken Kavramı

R’de değişkenler `<-` operatörü ile tanımlanır.

Değişkenler bellekte veri tutar ve bu veriler üzerinde işlem yapılmasını
sağlar.

Örnek değişken tanımlamaları:

    x <- 10
    y <- 5

---

## 4. Temel Veri Tipleri

R’de en sık kullanılan temel veri tipleri şunlardır:

- Sayısal (numeric)
- Metinsel (character)
- Mantıksal (logical)

Sayısal veri tipleri matematiksel işlemler için kullanılır.

    a <- 3.14
    b <- 10

Metinsel veri tipleri yazı ve sembol içeren değerleri tutar.

    text <- "R programlama dili"

Mantıksal veri tipleri doğru–yanlış değerlerini temsil eder.

    is_valid <- TRUE
    is_empty <- FALSE

---

## 5. Vektörler

Vektörler, aynı veri tipinden birden fazla değeri tek bir yapı içinde
tutar.

    numbers <- c(1, 2, 3, 4, 5)

Vektörler sıralıdır ve matematiksel işlemleri destekler.

---

## 6. Listeler

Listeler, farklı veri tiplerini bir arada tutabilen veri yapılarıdır.

    my_list <- list(
      name = "Ayşe",
      age = 22,
      grades = c(70, 80, 90)
    )

---

## 7. Data Frame Yapısı

Data frame’ler tablo yapısında veri tutar.

    students <- data.frame(
      name = c("Ali", "Ayşe", "Mehmet"),
      age = c(20, 22, 21),
      grade = c(75, 88, 90)
    )

Data frame’ler analiz ve görselleştirme için en sık kullanılan veri
yapılarıdır.

---

## 8. Veri İnceleme

Veri setlerini incelemek için kullanılan temel fonksiyonlar:

    head(students)
    str(students)
    summary(students)

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- RStudio ortamını kullanabilir
- Temel R komutlarını yazabilir
- Veri tipleri ve veri yapılarını ayırt eder
- Paket programların veriyle nasıl çalıştığını kavrar

---

## 10. Sonraki Haftaya Hazırlık

- R’de fonksiyon kavramını araştırınız
- Tekrar eden işlemler için fonksiyon kullanımının önemini düşününüz
