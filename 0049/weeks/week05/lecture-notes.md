# Hafta 05 – Veri Temizleme ve Dönüştürme

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 5  

---

## 1. Dersin Amacı

Bu haftanın amacı, paket programlarda kullanılan
verilerin neden ve nasıl temizlenmesi gerektiğini
öğretmektir.

Gerçek hayatta kullanılan veriler çoğu zaman:
- Eksik
- Hatalı
- Tutarsız

olabilir. Bu nedenle analizden önce
verinin hazırlanması zorunludur.

---

## 2. Veri Temizleme Nedir?

Veri temizleme, ham verinin
analiz ve işleme uygun hâle getirilmesi sürecidir.

Paket programlarda veri temizleme:
- Hatalı sonuçların önüne geçer
- Programın güvenilirliğini artırır
- Kullanıcıya doğru çıktılar sunulmasını sağlar

---

## 3. Eksik Veri (NA) Kavramı

R’de eksik veriler **NA** ile temsil edilir.

Eksik veriler:
- Ölçüm hatalarından
- Veri giriş eksikliklerinden
- Dosya okuma sorunlarından

kaynaklanabilir.

Bir veri setinde NA olup olmadığını görmek için:

    any(is.na(data))

---

## 4. Eksik Verilerin Tespiti

Eksik verilerin hangi sütunlarda
bulunduğu kontrol edilmelidir.

Bir veri setindeki NA sayısını görmek için:

    colSums(is.na(data))

Bu adım, veri temizleme sürecinin
ilk ve en önemli aşamasıdır.

---

## 5. Eksik Verilerin Temizlenmesi

Eksik veriler farklı şekillerde ele alınabilir.

Tüm eksik satırları silmek için:

    clean_data <- na.omit(data)

Bu yöntem:
- Basittir
- Ancak veri kaybına yol açabilir

Bu nedenle dikkatli kullanılmalıdır.

---

## 6. Veri Filtreleme

Bazı durumlarda,
veri setinin yalnızca belirli bir kısmı
analize dahil edilmek istenir.

Örneğin, belirli bir koşulu sağlayan
satırları seçmek için:

    filtered_data <- data[data$yas > 18, ]

Veri filtreleme,
paket programlarda kullanıcıya
özelleştirilmiş sonuçlar sunmayı sağlar.

---

## 7. Veri Dönüştürme

Veri dönüştürme, mevcut verinin
başka bir forma çevrilmesidir.

Örnek işlemler:
- Sütun adlarını değiştirme
- Yeni sütunlar oluşturma
- Mevcut değerleri yeniden hesaplama

Yeni bir sütun eklemek için:

    data$ortalama <- (data$vize + data$final) / 2

---

## 8. Temizlenmiş Verinin Kontrolü

Temizleme ve dönüştürme işlemlerinden sonra
veri tekrar kontrol edilmelidir.

    str(clean_data)
    summary(clean_data)

Bu adım, yapılan işlemlerin
doğru sonuç verdiğinden
emin olmak için gereklidir.

---

## 9. Temizlenmiş Verinin Kaydedilmesi

Temizlenmiş ve düzenlenmiş veri,
dosya olarak saklanabilir.

    write.csv(clean_data, "temiz_veri.csv", row.names = FALSE)

Bu işlem, paket programın
çıktı üretme ve tekrar kullanılabilirlik
özelliğini destekler.

---

## 10. Veri Temizlemenin Paket Programlardaki Önemi

Bu haftada öğrenilen işlemler sayesinde:
- Paket program hatalı verilerle çalışmaz
- Analiz sonuçları daha güvenilir olur
- Kullanıcıya doğru bilgi sunulur

Veri temizleme,
iyi bir paket programın
vazgeçilmez bir adımıdır.

---

## 11. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Eksik veri kavramını açıklar
- NA değerlerini tespit edebilir
- Veriyi filtreleyebilir
- Veri dönüştürme işlemleri yapabilir
- Temizlenmiş veriyi dosya olarak kaydedebilir

---

## 12. Sonraki Haftaya Hazırlık

- Veri özetleme kavramını araştırınız
- Gruplama işlemlerinin ne işe yaradığını inceleyiniz
