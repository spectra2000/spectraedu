# Hafta 03 – Fonksiyonlar ve Modüler Yapı
Hafta 03 – Fonksiyonlar ve Modüler Yapı

Ders: Paket Programlar
Programlama Dili: R
Hafta: 3

1. Dersin Amacı

Bu haftanın amacı, R programlama dilinde fonksiyon kavramını öğretmek ve
paket program geliştirme sürecinde neden modüler ve fonksiyonel bir
yaklaşımın gerekli olduğunu açıklamaktır.

Bu hafta öğrenilen konular, ilerleyen haftalarda geliştirilecek Shiny
uygulamalarının arka planında çalışan temel mantığı oluşturacaktır.

2. Fonksiyon Kavramı

Fonksiyon, belirli bir görevi yerine getiren, girdi alabilen ve çıktı
üretebilen kod bloklarıdır.

Fonksiyonlar:

Kod tekrarını azaltır

Okunabilirliği artırır

Bakımı ve genişletmeyi kolaylaştırır

Bir paket programın iç yapısı, çok sayıda küçük fonksiyonun
bir araya gelmesiyle oluşur.

3. R’de Fonksiyon Tanımlama

R’de fonksiyonlar function() yapısı kullanılarak tanımlanır.

topla <- function(a, b) {
  sonuc <- a + b
  return(sonuc)
}


Fonksiyon çağrımı:

topla(3, 5)


Fonksiyon çağrıldığında, tanım içinde yazılan işlemler sırayla çalışır.

4. Parametreler ve Varsayılan Değerler

Fonksiyonlar parametre alabilir.
Ayrıca parametrelere varsayılan değerler atanabilir.

carp <- function(a, b = 1) {
  a * b
}

carp(5)
carp(5, 3)


Bu yapı, fonksiyonların daha esnek kullanılmasını sağlar.

5. Fonksiyonların Paket Programlardaki Rolü

Paket programlarda fonksiyonlar genellikle:

Hesaplama işlemlerini yapar

Kullanıcıdan gelen verileri işler

Sonuçları düzenler

Arayüz (Shiny) bu fonksiyonları yalnızca çağırır.

6. Fonksiyonlar ve Veri Yapıları

Fonksiyonlar vektör, liste ve data frame gibi veri yapılarıyla birlikte
çalışabilir.

ortalama_hesapla <- function(degerler) {
  mean(degerler)
}

ortalama_hesapla(c(70, 80, 90))

7. Modüler Kod Yapısı

Modüler yapı, büyük bir problemi küçük ve bağımsız parçalara ayırmayı
ifade eder.

Her fonksiyon:

Tek bir sorumluluğa sahip olmalıdır

Başka fonksiyonlara minimum bağımlılık içermelidir

Bu yaklaşım büyük projelerde zorunludur.

8. Fonksiyonların Dosya Bazlı Kullanımı

Fonksiyonlar ayrı dosyalarda tutulabilir.

Örnek yapı:

functions/
  calculations.R
  helpers.R


Dosyalar ana script içinde source() ile çağrılır.

9. Hata Kontrolü

Fonksiyonlar içinde basit hata kontrolleri yapılabilir.

bol <- function(a, b) {
  if (b == 0) {
    stop("Bölen sıfır olamaz")
  }
  a / b
}


Bu yaklaşım kullanıcı hatalarını kontrollü şekilde yönetir.

10. Shiny ile Bağlantı

Shiny uygulamalarında:

Arayüz (UI)

İş mantığı (fonksiyonlar)

Sunucu (server)

birbirinden ayrıdır.

Bu hafta öğrenilen fonksiyon kavramı, Shiny server tarafının temelidir.

11. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:

R’de fonksiyon yazabilir

Parametreli fonksiyonları kullanabilir

Modüler kod yapısının önemini kavrar

Paket program mantığını anlayabilir

12. Sonraki Haftaya Hazırlık

Dosya okuma ve yazma işlemleri araştırılmalıdır

Veri setleriyle çalışmaya hazırlık yapılmalıdır
