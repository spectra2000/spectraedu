# Hafta 06 – Veri Özetleme ve Gruplama

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 6  

---

## 1. Dersin Amacı

Bu haftanın amacı, veri setleri üzerinde
özetleme ve gruplama işlemlerini öğretmek ve
paket programların kullanıcıya anlamlı bilgiler
sunabilmesini sağlamaktır.

Ham veriler çoğu zaman doğrudan yorumlanamaz.
Bu nedenle özetleme ve gruplama işlemleri
kritik öneme sahiptir.

---

## 2. Veri Özetleme Nedir?

Veri özetleme, bir veri setindeki bilgilerin
temel istatistikler kullanılarak
daha anlaşılır hâle getirilmesidir.

Özetleme işlemleri genellikle:
- Ortalama
- Medyan
- Minimum
- Maksimum
- Toplam

gibi ölçütleri içerir.

---

## 3. summary Fonksiyonu

R’de bir veri setinin hızlı özetini almak için
`summary()` fonksiyonu kullanılır.

    summary(data)

Bu fonksiyon, her değişken için temel
istatistiksel bilgileri gösterir.

---

## 4. Temel İstatistiksel Fonksiyonlar

Tek tek değişkenler üzerinde
özetleme yapmak mümkündür.

Örnekler:

    mean(data$score)
    median(data$score)
    min(data$score)
    max(data$score)
    sum(data$score)

Bu fonksiyonlar paket programların
arka planında sıkça kullanılır.

---

## 5. Gruplama Kavramı

Gruplama, verinin belirli bir değişkene göre
parçalara ayrılarak analiz edilmesini ifade eder.

Örneğin:
- Bölgeye göre satışlar
- Sınıfa göre not ortalamaları
- Kategoriye göre ürün sayıları

---

## 6. aggregate Fonksiyonu

R’de gruplama yaparak özet hesaplamak için
`aggregate()` fonksiyonu kullanılır.

Örnek:

    aggregate(score ~ class, data = data, FUN = mean)

Bu kod, her sınıf için
ortalama puanı hesaplar.

---

## 7. Birden Fazla Özet Hesabı

Gruplara göre farklı özetler de alınabilir.

    aggregate(score ~ class, data = data, FUN = sum)

Fonksiyon parametresi değiştirilerek
istenen özet değeri elde edilir.

---

## 8. Gruplanmış Verilerin Yorumlanması

Gruplanmış veriler:
- Karşılaştırma yapmayı kolaylaştırır
- Eğilimleri ortaya çıkarır
- Paket program çıktılarının
  kullanıcı tarafından anlaşılmasını sağlar

Bu nedenle gruplama,
raporlama ve karar destek sistemlerinde
yaygın olarak kullanılır.

---

## 9. Veri Özetlemenin Paket Programlardaki Rolü

Paket programlar genellikle:
- Büyük veri setlerini alır
- Özetler üretir
- Kullanıcıya sade sonuçlar sunar

Bu hafta öğrenilen kavramlar,
paket programların temel işlevlerini
oluşturur.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Veri özetleme işlemlerini yapabilir
- Temel istatistikleri hesaplayabilir
- Gruplama mantığını kavrar
- Paket programlarda özet bilginin
  önemini anlar

---

## 11. Sonraki Haftaya Hazırlık

- Veri görselleştirme kavramını araştırınız
- Özetlenen verilerin grafikle
  nasıl sunulabileceğini düşününüz
