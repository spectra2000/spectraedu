# Hafta 07 – Veri Görselleştirme

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 7  

---

## 1. Dersin Amacı

Bu haftanın amacı, veri setlerinden elde edilen
bilgilerin grafikler yardımıyla
görselleştirilmesini öğretmektir.

Grafikler, sayısal bilgilerin
daha hızlı ve anlaşılır şekilde
yorumlanmasını sağlar.

---

## 2. Veri Görselleştirme Nedir?

Veri görselleştirme, verilerin grafiksel
temsiller kullanılarak sunulmasıdır.

Görselleştirme sayesinde:
- Eğilimler daha kolay fark edilir
- Karşılaştırmalar yapılabilir
- Karmaşık bilgiler sadeleştirilir

---

## 3. R’de Grafik Oluşturma

R’de temel grafikler
`plot()` fonksiyonu ile oluşturulur.

    plot(data$age, data$score)

Bu grafik, iki değişken arasındaki
ilişkiyi görsel olarak gösterir.

---

## 4. Temel Grafik Türleri

R’de sık kullanılan grafik türleri şunlardır:
- Çizgi grafik
- Nokta grafik
- Sütun grafik
- Histogram

Her grafik türü farklı
veri yapıları için uygundur.

---

## 5. Histogram

Histogram, sayısal verilerin
dağılımını göstermek için kullanılır.

    hist(data$score)

Histogramlar, veri yoğunluğunu
anlamak için önemlidir.

---

## 6. Sütun Grafik (Bar Plot)

Sütun grafikler, kategorik
verilerin karşılaştırılması için kullanılır.

    barplot(table(data$class))

Bu grafik, her sınıftaki
gözlem sayısını gösterir.

---

## 7. Grafiklere Başlık ve Etiket Ekleme

Grafiklerin anlaşılır olması için
başlık ve eksen etiketleri eklenmelidir.

    plot(
      data$age,
      data$score,
      main = "Yaş ve Puan İlişkisi",
      xlab = "Yaş",
      ylab = "Puan"
    )

---

## 8. Grafiklerin Paket Programlardaki Rolü

Paket programlarda grafikler:
- Sonuçları görsel hâle getirir
- Kullanıcıya hızlı geri bildirim sağlar
- Karar destek süreçlerini güçlendirir

Bu nedenle görselleştirme,
paket programların vazgeçilmez
bir bileşenidir.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Temel grafik türlerini bilir
- R ile grafik oluşturabilir
- Grafiklerin ne zaman
  kullanılacağını kavrar
- Paket programlarda
  görselleştirmenin önemini anlar

---

## 10. Sonraki Haftaya Hazırlık

- Birden fazla grafiğin
  birlikte nasıl kullanılacağını araştırınız
- Grafiklerin Shiny içinde
  nasıl gösterileceğini düşününüz
