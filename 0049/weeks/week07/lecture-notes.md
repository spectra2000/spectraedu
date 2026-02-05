# Hafta 07 – Veri Görselleştirme

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 7  

---

## 1. Dersin Amacı

Bu haftanın amacı, veri setlerinden
elde edilen bilgilerin
grafikler aracılığıyla
nasıl görselleştirileceğini öğretmektir.

Paket programlar,
kullanıcıya çoğu zaman
sayısal tablolar yerine
görsel çıktılar sunar.

---

## 2. Veri Görselleştirme Nedir?

Veri görselleştirme,
sayısal verilerin grafikler yardımıyla
görsel forma dönüştürülmesidir.

Bu sayede:
- Veriler daha hızlı anlaşılır
- Eğilimler kolayca fark edilir
- Sonuçlar daha etkili sunulur

---

## 3. Grafik Türleri

En sık kullanılan grafik türleri:
- Çizgi grafik (line plot)
- Çubuk grafik (bar plot)
- Histogram
- Nokta grafiği (scatter plot)

Her grafik türü,
farklı veri yapıları için uygundur.

---

## 4. R ile Grafik Oluşturma

R’de temel grafikler
`plot()` fonksiyonu ile oluşturulabilir.

Örnek:

    plot(data$yas, data$not)

Bu grafik,
iki sayısal değişken arasındaki
ilişkiyi gösterir.

---

## 5. Histogram

Histogramlar,
bir değişkenin dağılımını
görselleştirmek için kullanılır.

Örnek:

    hist(data$not)

Bu grafik sayesinde:
- Verinin yoğunlaştığı aralıklar
- Aykırı değerler

daha kolay fark edilir.

---

## 6. Grafik Başlıkları ve Etiketler

Grafiklerin anlaşılır olması için
başlık ve eksen etiketleri eklenmelidir.

Örnek:

    plot(
      data$yas,
      data$not,
      main = "Yaş ve Not İlişkisi",
      xlab = "Yaş",
      ylab = "Not"
    )

---

## 7. Grafiklerin Paket Programlardaki Rolü

Paket programlarda grafikler:
- Analiz sonuçlarını özetler
- Kullanıcıya hızlı içgörü sağlar
- Karar verme sürecini destekler

Bu nedenle grafikler,
paket programların
en önemli çıktılarındandır.

---

## 8. Grafik Yorumlama

Bir grafik oluşturmak kadar,
grafiği doğru yorumlamak da önemlidir.

Grafik yorumlarken:
- Genel eğilimlere
- Aykırı değerlere
- Dağılım yapısına

dikkat edilmelidir.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Temel grafik türlerini tanır
- R ile grafik oluşturabilir
- Grafik başlık ve etiketlerini düzenleyebilir
- Grafiklerin paket programlardaki önemini kavrar

---

## 10. Sonraki Haftaya Hazırlık

- Etkileşimli uygulama kavramını araştırınız
- Shiny framework’ünün ne amaçla kullanıldığını inceleyiniz
