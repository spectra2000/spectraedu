# Hafta 07 – Shiny’ye Giriş

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 7  

---

## 1. Dersin Amacı

Bu haftanın amacı, R ile
etkileşimli paket programlar
geliştirmeyi sağlayan
Shiny framework’ünü tanıtmaktır.

---

## 2. Shiny Nedir?

Shiny, R ile
web tabanlı ve etkileşimli
uygulamalar geliştirmeyi sağlayan
bir framework’tür.

Shiny sayesinde:
- Kullanıcıdan girdi alınabilir
- Analizler anlık çalıştırılabilir
- Sonuçlar arayüz üzerinden sunulabilir

---

## 3. Shiny Nerelerde Kullanılır?

Shiny uygulamaları:
- Veri analiz araçları
- Raporlama panelleri
- Akademik projeler
- Kurumsal analiz uygulamaları

gibi birçok alanda kullanılır.

---

## 4. Shiny Uygulama Yapısı

Bir Shiny uygulaması iki ana bölümden oluşur:
- Kullanıcı arayüzü (UI)
- Sunucu tarafı (Server)

Basit bir Shiny uygulaması
`app.R` dosyası içinde yazılabilir.

---

## 5. İlk Shiny Uygulaması

Örnek en basit Shiny uygulaması:

    library(shiny)

    ui <- fluidPage(
      "Merhaba Shiny"
    )

    server <- function(input, output) {}

    shinyApp(ui, server)

---

## 6. Shiny Uygulamasını Çalıştırma

Shiny uygulaması,
RStudio üzerinden
`Run App` butonu ile çalıştırılabilir.

Bu işlem sonucunda
uygulama tarayıcıda açılır.

---

## 7. Shiny’nin Paket Program Mantığı

Shiny ile:
- Analiz → arayüz → çıktı
tek bir uygulama içinde birleşir.

Bu yapı, Shiny’yi
paket program geliştirme için
çok güçlü bir araç hâline getirir.

---

## 8. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Shiny’nin ne olduğunu açıklar
- Temel bir Shiny uygulamasını çalıştırabilir
- Shiny’nin paket programlardaki rolünü kavrar

---

## 9. Sonraki Haftaya Hazırlık

- UI kavramını araştırınız
- Shiny arayüz bileşenlerini inceleyiniz
