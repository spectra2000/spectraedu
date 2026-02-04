Hafta 03 – Fonksiyonlar ve Modüler Yapı

Ders: Paket Programlar
Programlama Dili: R
Hafta: 3

1. Bu Haftanın Amacı

Bu haftanın amacı, R programlama dilinde fonksiyon kavramını öğretmek ve
paket program geliştirme sürecinde neden modüler ve fonksiyonel bir
yaklaşımın gerekli olduğunu açıklamaktır.

Bu hafta öğrenilen konular, ilerleyen haftalarda geliştirilecek Shiny
uygulamalarının arka planında çalışan temel mantığı oluşturacaktır.

2. Fonksiyon Nedir?

Fonksiyon, belirli bir görevi yerine getiren, girdi alabilen ve çıktı
üretebilen kod bloklarıdır.

Fonksiyonların temel amaçları:

Kod tekrarını azaltmak

Okunabilirliği artırmak

Bakımı ve genişletmeyi kolaylaştırmak

Bir paket programın iç yapısı, genellikle çok sayıda küçük fonksiyondan
oluşur.

3. R’de Fonksiyon Tanımlama

R’de fonksiyonlar function() yapısı kullanılarak tanımlanır.

topla <- function(a, b) {
  sonuc <- a + b
  return(sonuc)
}


Bu fonksiyon iki sayıyı toplar ve sonucu geri döndürür.

Fonksiyon çağrımı şu şekildedir:

topla(3, 5)


Fonksiyon çağrıldığında, tanım içinde yazılan işlemler sırayla çalışır.

4. Parametreler ve Varsayılan Değerler

Fonksiyonlar parametre alabilir. Ayrıca parametrelere varsayılan
değerler atanabilir.

carp <- function(a, b = 1) {
  a * b
}


Bu yapı sayesinde kullanıcı ikinci parametreyi girmese bile fonksiyon
çalışmaya devam eder.

carp(5)
carp(5, 3)

5. Fonksiyonların Paket Programlardaki Rolü

Paket programlarda fonksiyonlar genellikle:

Hesaplama işlemlerini yapar

Kullanıcıdan gelen verileri işler

Sonuçları düzenler

Örneğin:

Ortalama hesaplama

Veri filtreleme

Grafik üretme

Bu işlemler arayüzden bağımsız olarak fonksiyonlar içinde tanımlanır.

6. Fonksiyonlar ve Veri Yapıları

Fonksiyonlar farklı veri yapılarıyla birlikte çalışabilir.

Örnek olarak, bir vektörün ortalamasını hesaplayan fonksiyon:

ortalama_hesapla <- function(degerler) {
  mean(degerler)
}

ortalama_hesapla(c(70, 80, 90))


Bu yapı, kullanıcıdan gelen çoklu verilerin arka planda işlenmesini
sağlar.

7. Modüler Kod Yapısı Nedir?

Modüler kod yapısı, büyük bir problemi küçük ve bağımsız parçalara
ayırmayı ifade eder.

Her fonksiyonun:

Tek bir sorumluluğu olmalı

Başka fonksiyonlara minimum bağımlılığı bulunmalıdır

Bu yaklaşım:

Kodun okunmasını kolaylaştırır

Hata ayıklamayı hızlandırır

Projelerin büyümesini yönetilebilir kılar

8. Fonksiyonları Dosya Bazlı Ayırma

Büyük projelerde fonksiyonlar tek bir dosyada tutulmaz.
Bunun yerine mantıksal olarak ayrılmış dosyalar kullanılır.

Örnek bir yapı:

functions/
  calculations.R
  helpers.R


Bu dosyalar ana dosya içinde şu şekilde çağrılır:

source("functions/calculations.R")
source("functions/helpers.R")


Bu yapı, paket program mantığına uygundur.

9. Basit Hata Kontrolleri

Fonksiyonlar içinde basit hata kontrolleri yapılabilir.

bol <- function(a, b) {
  if (b == 0) {
    stop("Bölen sıfır olamaz")
  }
  a / b
}


Bu tür kontroller, kullanıcıdan kaynaklanan hataların
kontrollü şekilde yönetilmesini sağlar.

10. Shiny ile İlişkisi

Shiny uygulamalarında:

Arayüz (UI) ayrı

İş mantığı (fonksiyonlar) ayrı

Sunucu (server) ayrı

şekilde tasarlanır.

Bu hafta öğrenilen fonksiyon kavramı, Shiny server tarafının temelini
oluşturur.

11. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:

R’de fonksiyon tanımlayabilir

Parametreli fonksiyonlar yazabilir

Modüler kod yapısının önemini kavrar

Paket program altyapısını anlayabilir

12. Sonraki Haftaya Hazırlık

R’de dosya okuma ve yazma işlemleri araştırılmalıdır

Veri setleriyle çalışmaya hazırlık yapılmalıdır
