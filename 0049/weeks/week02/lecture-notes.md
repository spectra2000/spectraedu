Hafta 02 – R Temelleri ve Veri Yapıları

Ders: Paket Programlar
Programlama Dili: R
Hafta: 2

1. Bu Haftanın Amacı

Bu haftanın amacı, R programlama diline temel seviyede giriş yapmak ve paket program geliştirme sürecinde kullanılacak temel yapı taşlarını tanıtmaktır.

Bu hafta, ilerleyen haftalarda yazılacak fonksiyonlar ve Shiny uygulamaları için altyapı niteliğindedir.

2. R ve RStudio Ortamı

R:

Programlama dilidir

Komut satırı mantığıyla çalışır

RStudio:

R için geliştirilmiş entegre geliştirme ortamıdır (IDE)

Kod, çıktı, grafik ve dosya yönetimini tek ekranda sunar

RStudio arayüzü genel olarak:

Script Editor

Console

Environment

Files / Plots / Packages

bölümlerinden oluşur.

3. Değişken Kavramı

R’de değişkenler <- operatörü ile tanımlanır.

x <- 10
y <- 5


Değişkenler bellekte veri tutar ve daha sonra bu veriler üzerinde işlem yapılmasını sağlar.

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

Mantıksal veri tipleri doğru–yanlış değerlerini temsil eder.

is_valid <- TRUE
is_empty <- FALSE


R, veri tiplerini otomatik olarak algılar ve yönetir.

5. Vektörler

R’de en temel veri yapısı vektördür.

numbers <- c(1, 2, 3, 4, 5)


Vektörlerin özellikleri:

Aynı veri tipinden elemanlar içerir

Sıralıdır

Matematiksel işlemleri destekler

numbers * 2

6. Listeler

Listeler, farklı veri tiplerini bir arada tutabilir.

my_list <- list(
  name = "Ayşe",
  age = 22,
  grades = c(70, 80, 90)
)


Listeler, paket programlarda karmaşık veri yapılarının saklanması için kullanılır.

7. Data Frame Yapısı

Data frame, tablo yapısında veri tutar.

students <- data.frame(
  name = c("Ali", "Ayşe", "Mehmet"),
  age = c(20, 22, 21),
  grade = c(75, 88, 90)
)


Data frame özellikleri:

Sütunlar farklı veri tipinde olabilir

Satır–sütun yapısındadır

Analiz ve görselleştirme için idealdir

8. Veri Seçme ve İnceleme
students$name
students[1, ]
students[, 2]


Temel inceleme fonksiyonları:

head(students)
str(students)
summary(students)

9. Paket Program Mantığıyla İlişkisi

Bu hafta öğrenilen veri yapıları:

Kullanıcıdan gelen verilerin saklanması

Analiz için veri düzenlenmesi

Fonksiyonlara veri aktarımı

işlemlerinin temelini oluşturur.

Bir paket programın arka planında bu yapılar çalışır.

10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:

RStudio ortamını kullanabilir

Temel R komutlarını yazabilir

Veri tiplerini ve veri yapılarını ayırt eder

Paket programların veriyle nasıl çalıştığını kavrar

11. Sonraki Haftaya Hazırlık

R’de fonksiyon yazımı araştırılmalıdır

Tekrar eden işlemler için fonksiyon kullanımının önemi düşünülmelidir
