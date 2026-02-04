# Hafta 02 – R Temelleri ve Veri Yapıları

Ders: Paket Programlar
Programlama Dili: R
Hafta: 2

# 1. Dersin Amacı

Bu haftanın amacı, R programlama diline temel seviyede giriş yapmak ve
paket program geliştirme sürecinde kullanılacak temel yapı taşlarını
tanıtmaktır.

Bu hafta, ilerleyen haftalarda yazılacak fonksiyonlar ve Shiny
uygulamaları için altyapı niteliğindedir.

2. R ve RStudio Ortamı

R, istatistiksel hesaplama ve veri analizi için geliştirilmiş bir
programlama dilidir. Komut satırı mantığıyla çalışır ve kullanıcıdan
gelen komutları anında değerlendirir.

RStudio, R dili için geliştirilmiş entegre bir geliştirme ortamıdır.
Kod yazma, çıktı alma, grafik üretme ve dosya yönetimini tek bir arayüz
üzerinden yapmayı sağlar.

RStudio arayüzü genel olarak şu bölümlerden oluşur:

Script Editor

Console

Environment

Files / Plots / Packages

3. Değişken Kavramı

R’de değişkenler <- operatörü ile tanımlanır. Değişkenler, bellekte
veri saklamak ve bu veriler üzerinde işlem yapmak için kullanılır.

Örnek değişken tanımlamaları:

x <- 10
y <- 5


Tanımlanan değişkenler daha sonra matematiksel işlemlerde veya
fonksiyonlar içinde kullanılabilir.

4. Temel Veri Tipleri

R’de en sık kullanılan temel veri tipleri şunlardır.

4.1 Sayısal (Numeric)

Sayısal veri tipleri matematiksel işlemler için kullanılır.

a <- 3.14
b <- 10

4.2 Metinsel (Character)

Metinsel veri tipleri yazı ve sembol içeren değerleri tutar.

text <- "R programlama dili"

4.3 Mantıksal (Logical)

Mantıksal veri tipleri doğru–yanlış (TRUE / FALSE) değerlerini temsil
eder.

is_valid <- TRUE
is_empty <- FALSE


R, veri tiplerini çoğu durumda otomatik olarak algılar.

5. Vektörler

R’de en temel veri yapısı vektördür. Vektörler aynı türden birden fazla
veriyi tek bir yapı içinde saklar.

numbers <- c(1, 2, 3, 4, 5)


Vektörlerin temel özellikleri:

Aynı veri tipinden elemanlar içerir

Sıralıdır

Matematiksel işlemleri destekler

numbers * 2

6. Listeler

Listeler, farklı veri tiplerini bir arada tutabilen veri yapılarıdır.

my_list <- list(
  name = "Ayşe",
  age = 22,
  grades = c(70, 80, 90)
)


Listeler, paket programlarda karmaşık verilerin saklanması için sıkça
kullanılır.

7. Data Frame Yapısı

Data frame, tablo yapısında veri tutar. Satırlar gözlemleri, sütunlar
değişkenleri temsil eder.

students <- data.frame(
  name = c("Ali", "Ayşe", "Mehmet"),
  age = c(20, 22, 21),
  grade = c(75, 88, 90)
)


Data frame’ler analiz ve görselleştirme için en yaygın kullanılan veri
yapısıdır.

8. Veri Seçme ve İnceleme

Data frame içinden veri seçme örnekleri:

students$name
students[1, ]
students[, 2]


Veriyi hızlıca incelemek için kullanılan temel fonksiyonlar:

head(students)
str(students)
summary(students)

9. Paket Program Mantığıyla İlişkisi

Bu hafta öğrenilen veri tipleri ve veri yapıları, paket programların
arka planında çalışan temel yapı taşlarıdır.

Kullanıcıdan alınan veriler bu yapılar içinde saklanır, işlenir ve
sonuç üretilir.

10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:

RStudio ortamını kullanabilir

Temel R komutlarını yazabilir

Veri tiplerini ve veri yapılarını ayırt edebilir

Paket programların veriyle nasıl çalıştığını kavrar

11. Sonraki Haftaya Hazırlık

R’de fonksiyon kavramını araştırınız

Tekrar eden işlemler için fonksiyon kullanımının neden gerekli
olduğunu düşününüz
