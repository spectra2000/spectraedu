# Hafta 09 – Shiny Server Mantığı

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 9  

---

## 1. Dersin Amacı

Bu haftanın amacı, Shiny uygulamalarında
sunucu tarafının (server)
nasıl çalıştığını ve
kullanıcıdan gelen girdilerin
nasıl işlendiğini öğretmektir.

Server, Shiny uygulamasının
“akıllı” kısmıdır.

---

## 2. Server Kavramı

Shiny uygulamalarında server:
- Kullanıcı girdilerini alır
- Analiz ve hesaplamaları yapar
- Sonuçları UI’a gönderir

Yani tüm mantık,
server tarafında çalışır.

---

## 3. server Fonksiyonunun Yapısı

Bir Shiny uygulamasında
server bir fonksiyon olarak tanımlanır.

Temel yapı:

    server <- function(input, output) {
      # işlemler burada yapılır
    }

Bu fonksiyon,
UI ile sürekli iletişim hâlindedir.

---

## 4. input Nesnesi

`input` nesnesi,
UI tarafındaki input bileşenlerinden
gelen değerleri içerir.

Örneğin UI’da tanımlanan:

    sliderInput("yas", ...)

server tarafında şu şekilde kullanılır:

    input$yas

---

## 5. output Nesnesi

`output` nesnesi,
server tarafında üretilen sonuçların
UI’da gösterilmesini sağlar.

Örnek:

    output$sonuc <- renderText({
      input$yas * 2
    })

Bu çıktı,
UI’da bir `textOutput` bileşeniyle
gösterilir.

---

## 6. input ve output Arasındaki Bağlantı

UI ve server,
inputId ve outputId üzerinden
birbirine bağlanır.

Bu bağlantı sayesinde:
- Kullanıcı etkileşimi algılanır
- Server yeniden çalışır
- UI otomatik güncellenir

---

## 7. Basit Bir Server Örneği

Tam bir örnek:

    ui <- fluidPage(
      sliderInput("x", "Bir sayı seçiniz", 0, 100, 10),
      textOutput("sonuc")
    )

    server <- function(input, output) {
      output$sonuc <- renderText({
        paste("Sonuç:", input$x * 2)
      })
    }

    shinyApp(ui, server)

---

## 8. Server Mantığının Paket Programlardaki Yeri

Server sayesinde:
- Analizler otomatik çalışır
- Kullanıcı girdilerine göre sonuç üretilir
- Program etkileşimli hâle gelir

Bu yapı, Shiny’yi
klasik R script’lerinden ayırır.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Server kavramını açıklar
- input ve output nesnelerini kullanabilir
- Basit bir server mantığı kurabilir
- UI ile server arasındaki ilişkiyi kavrar

---

## 10. Sonraki Haftaya Hazırlık

- Reaktif yapı kavramını araştırınız
- reactive ve observe farkını inceleyiniz
