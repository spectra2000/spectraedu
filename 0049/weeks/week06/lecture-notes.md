# Hafta 06 – Veri Özetleme ve Gruplama

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 6  

---

## 1. Dersin Amacı

Bu haftanın amacı, veri setlerinden
anlamlı bilgiler elde etmek için
özetleme ve gruplama işlemlerinin
nasıl yapıldığını öğretmektir.

Paket programlar çoğu zaman
ham veriyi değil,
özetlenmiş ve yorumlanabilir
bilgileri kullanıcıya sunar.

---

## 2. Veri Özetleme Nedir?

Veri özetleme, büyük veri setlerini
daha küçük ve anlaşılır hâle
getirme sürecidir.

Bu işlem sayesinde:
- Genel eğilimler görülür
- Aykırı değerler fark edilir
- Verinin yapısı anlaşılır

---

## 3. Temel Özet Fonksiyonları

R’de en sık kullanılan
özetleme fonksiyonları şunlardır:

    summary(data)

Bu fonksiyon:
- Minimum
- Maksimum
- Ortalama
- Medyan

gibi temel istatistikleri verir.

---

## 4. Tek Değişken Üzerinde Özetleme

Belirli bir sütun için
özet istatistikler hesaplanabilir.

Örneğin:

    mean(data$not)
    median(data$not)
    min(data$not)
    max(data$not)

Bu işlemler,
paket programlarda
tek bir ölçümün hızlıca
analiz edilmesini sağlar.

---

## 5. Gruplama Kavramı

Gruplama, verilerin
belirli bir değişkene göre
alt kümelere ayrılmasıdır.

Örneğin:
- Bölgelere göre satış
- Sınıflara göre notlar
- Kategorilere göre maliyetler

---

## 6. Gruplara Göre Hesaplama

R’de gruplama işlemleri
`aggregate()` fonksiyonu ile yapılabilir.

Örnek:

    aggregate(not ~ sinif, data = data, mean)

Bu komut,
her sınıf için
ortalama notu hesaplar.

---

## 7. Birden Fazla Özet Hesaplama

Gruplar için
farklı özetler de alınabilir.

Örneğin:

    aggregate(not ~ sinif, data = data, summary)

Bu sayede her grup için
detaylı özet istatistikler elde edilir.

---

## 8. Özet Tabloların Paket Programlardaki Rolü

Özet tablolar:
- Karmaşık verileri sadeleştirir
- Karar verme sürecini kolaylaştırır
- Kullanıcıya net bilgi sunar

Bu nedenle paket programlarda
en sık üretilen çıktılardan biridir.

---

## 9. Veri Özetlemenin Paket Program Mantığı

Bu haftada öğrenilen işlemler sayesinde:
- Ham veri anlamlı bilgiye dönüşür
- Kullanıcı sonuçları hızlıca yorumlar
- Program daha işlevsel hâle gelir

Veri özetleme,
paket programların
en kritik adımlarından biridir.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Veri özetleme kavramını açıklar
- Temel istatistikleri hesaplayabilir
- Gruplama işlemleri yapabilir
- Gruplara göre özet tablolar oluşturabilir

---

## 11. Sonraki Haftaya Hazırlık

- Grafik türlerini araştırınız
- Verinin görselleştirilmesinin
  neden önemli olduğunu düşününüz
