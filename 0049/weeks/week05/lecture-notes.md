# Hafta 05 – Veri Temizleme ve Dönüştürme

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 5  

---

## 1. Dersin Amacı

Bu haftanın amacı, R programlama dili kullanılarak
veri setlerinin temizlenmesi ve analize uygun hâle
getirilmesini öğretmektir.

Paket programlar, doğru ve temiz veri ile
çalıştığında güvenilir sonuçlar üretir.

---

## 2. Veri Temizleme Nedir?

Veri temizleme, veri seti içindeki:
- Eksik değerlerin
- Hatalı girişlerin
- Tutarsız kayıtların

tespit edilmesi ve düzeltilmesi sürecidir.

Gerçek hayatta veriler çoğu zaman
doğrudan analize uygun değildir.

---

## 3. Eksik Veriler (NA)

R’de eksik veriler `NA` ile gösterilir.

Bir veri setinde eksik değer olup olmadığını
kontrol etmek için:

    is.na(data)

Eksik değerlerin sayısını görmek için:

    sum(is.na(data))

---

## 4. Eksik Verilerin Kaldırılması

Eksik veriler bazı durumlarda veri setinden
çıkarılabilir.

Eksik değer içeren satırları silmek için:

    clean_data <- na.omit(data)

Bu yöntem, veri kaybına yol açabileceği için
dikkatli kullanılmalıdır.

---

## 5. Veri Filtreleme

Belirli koşullara göre veri seçmek,
paket programlarda sık kullanılan bir işlemdir.

Örneğin belirli bir değerden büyük olan
kayıtları seçmek için:

    filtered_data <- data[data$age > 18, ]

---

## 6. Veri Dönüştürme

Veri dönüştürme, mevcut verilerden
yeni değişkenler üretmeyi ifade eder.

Örnek:

    data$age_group <- ifelse(data$age < 30, "Genç", "Yetişkin")

Bu işlem, paket programın kullanıcıya
daha anlamlı sonuçlar sunmasını sağlar.

---

## 7. Veri Tipi Dönüşümleri

Veri tipleri gerektiğinde dönüştürülebilir.

Örnek dönüşümler:

    as.numeric(data$score)
    as.character(data$name)

Yanlış veri tipi, analiz ve görselleştirme
hatalarına yol açabilir.

---

## 8. Temizlenmiş Verinin Kontrolü

Veri temizlendikten sonra tekrar
kontrol edilmesi gerekir.

    str(clean_data)
    summary(clean_data)

Bu adım, paket programın doğru
veriyle çalıştığından emin olmak için önemlidir.

---

## 9. Veri Temizlemenin Paket Programlardaki Rolü

Paket programlar genellikle:
- Kullanıcıdan gelen verilerle
- Dosyalardan okunan verilerle

çalışır.

Bu nedenle veri temizleme,
paket programların arka planında
vazgeçilmez bir adımdır.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Eksik verileri tespit edebilir
- Veriyi temizleyebilir
- Veriyi dönüştürebilir
- Paket programlarda veri kalitesinin
  önemini kavrar

---

## 11. Sonraki Haftaya Hazırlık

- Veri özetleme ve gruplama kavramlarını araştırınız
- Temizlenmiş verilerle yapılabilecek
  analizleri düşününüz
