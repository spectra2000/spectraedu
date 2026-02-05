# Hafta 11 – Mini Shiny Uygulaması

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 11  

---

## 1. Dersin Amacı

Bu haftanın amacı, Shiny framework’ü ile
öğrenilen tüm temel kavramları kullanarak
çalışan bir mini uygulama geliştirmektir.

Bu çalışma, öğrencinin
paket program mantığını
uygulamalı olarak kavramasını sağlar.

---

## 2. Mini Shiny Uygulaması Nedir?

Mini Shiny uygulaması,
belirli bir problemi çözen,
kullanıcı ile etkileşimli,
küçük ölçekli bir web uygulamasıdır.

Bu tür uygulamalar:
- Girdi alır
- Hesaplama yapar
- Sonuç üretir

---

## 3. Uygulama Senaryosu

Bu hafta için örnek senaryo:

Kullanıcıdan iki sayısal değer alarak:
- Toplama
- Çıkarma
- Çarpma
- Bölme

işlemlerini yapan
basit bir hesaplama uygulaması geliştirmek.

---

## 4. UI Tasarımı

Uygulamanın UI tarafında:
- Kullanıcıdan sayı girişi alınır
- Hesaplama sonucu gösterilir

Örnek UI yapısı:

    ui <- fluidPage(
      numericInput("a", "Birinci sayı", 0),
      numericInput("b", "İkinci sayı", 0),
      textOutput("sonuc")
    )

---

## 5. Server Mantığı

Server tarafında:
- Kullanıcı girdileri alınır
- Hesaplama yapılır
- Sonuç UI’a gönderilir

Örnek server yapısı:

    server <- function(input, output) {
      output$sonuc <- renderText({
        input$a + input$b
      })
    }

---

## 6. Reaktif Yapının Kullanımı

Kullanıcı girdileri değiştiğinde
server otomatik olarak yeniden çalışır.

Bu davranış,
Shiny’nin reaktif yapısı sayesinde gerçekleşir
ve uygulamayı etkileşimli hâle getirir.

---

## 7. Uygulamanın Çalıştırılması

UI ve server tanımlandıktan sonra
uygulama şu şekilde çalıştırılır:

    shinyApp(ui, server)

Uygulama,
tarayıcı üzerinde açılır
ve kullanıcı ile etkileşime girer.

---

## 8. Mini Uygulamanın Paket Program Mantığı

Bu mini uygulama:
- Kullanıcıdan veri alır
- Hesaplama yapar
- Sonucu arayüzde gösterir

Bu yapı, gerçek hayattaki
paket programların
temel çalışma mantığını yansıtır.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Basit bir Shiny uygulaması geliştirebilir
- UI ve server bileşenlerini birlikte kullanabilir
- Reaktif yapıyı uygulama içinde kullanabilir
- Paket program mantığını kavrar

---

## 10. Sonraki Haftaya Hazırlık

- R paket kavramını araştırınız
- Paket yapısının neden önemli olduğunu inceleyiniz
