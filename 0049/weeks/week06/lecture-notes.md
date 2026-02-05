# Hafta 06 – Veri Görselleştirme (ggplot2)

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 6  

---

## 1. Dersin Amacı

Bu haftanın amacı, veri setlerinden elde edilen
bilgilerin **ggplot2** paketi kullanılarak
görsel hâle getirilmesini öğretmektir.

Paket programlar, kullanıcıya çoğu zaman
sayısal tablolar yerine
grafiklerle desteklenmiş sonuçlar sunar.

---

## 2. Veri Görselleştirme Nedir?

Veri görselleştirme,
sayısal verilerin grafikler yardımıyla
anlamlı ve yorumlanabilir hâle getirilmesidir.

Bu sayede:
- Eğilimler daha hızlı fark edilir
- Karşılaştırmalar kolaylaşır
- Sonuçlar daha etkili sunulur

---

## 3. ggplot2 Paketi

ggplot2, R’de kullanılan
en güçlü görselleştirme paketlerinden biridir.

ggplot2’nin avantajları:
- Katmanlı yapı
- Esnek grafik üretimi
- Profesyonel görsel çıktı

Paketi yüklemek için:

    install.packages("ggplot2")

Kullanmak için:

    library(ggplot2)

---

## 4. ggplot Yapısı

Bir ggplot grafiği temel olarak üç bileşenden oluşur:
- Veri (data)
- Estetikler (aes)
- Grafik türü (geom)

Temel yapı:

    ggplot(data, aes(x = degisken1, y = degisken2)) +
      geom_point()

---

## 5. Nokta Grafiği (Scatter Plot)

Nokta grafikleri,
iki sayısal değişken arasındaki
ilişkiyi göstermek için kullanılır.

Örnek:

    ggplot(data, aes(x = yas, y = not)) +
      geom_point()

---

## 6. Çubuk Grafik (Bar Plot)

Çubuk grafikler,
kategorik verilerin
karşılaştırılması için uygundur.

Örnek:

    ggplot(data, aes(x = sinif)) +
      geom_bar()

---

## 7. Grafik Başlıkları ve Etiketler

Grafiklerin anlaşılır olması için
başlık ve eksen etiketleri eklenmelidir.

    ggplot(data, aes(x = yas, y = not)) +
      geom_point() +
      labs(
        title = "Yaş ve Not İlişkisi",
        x = "Yaş",
        y = "Not"
      )

---

## 8. Grafiklerin Paket Programlardaki Rolü

Paket programlarda grafikler:
- Analiz sonuçlarını özetler
- Kullanıcıya hızlı içgörü sağlar
- Karar verme sürecini destekler

Bu nedenle görselleştirme,
paket programların vazgeçilmez bir parçasıdır.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- ggplot2 paketini kullanabilir
- Temel grafik türleri oluşturabilir
- Grafik çıktılarının anlamını yorumlayabilir

---

## 10. Sonraki Haftaya Hazırlık

- Etkileşimli uygulama kavramını araştırınız
- Shiny framework’ünün ne işe yaradığını inceleyiniz
