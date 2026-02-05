# Hafta 10 – Reaktif Yapılar

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 10  

---

## 1. Dersin Amacı

Bu haftanın amacı, Shiny uygulamalarında
kullanıcı etkileşimine bağlı olarak
uygulamanın otomatik şekilde
nasıl güncellendiğini açıklamaktır.

Bu davranış, **reaktif programlama**
mantığı ile sağlanır.

---

## 2. Reaktif Kavramı

Reaktif yapı, bir değerin
başka bir değere bağlı olması
ve bu bağımlı değer değiştiğinde
otomatik olarak güncellenmesi anlamına gelir.

Shiny’de reaktif yapılar sayesinde:
- Kullanıcı girdileri izlenir
- Gerekli hesaplamalar otomatik yapılır
- UI kendini günceller

---

## 3. reactive() Fonksiyonu

`reactive()` fonksiyonu,
değeri değişebilen bir ifade oluşturur.

Örnek:

    hesapla <- reactive({
      input$x * 2
    })

Bu ifade, `input$x` değiştiğinde
otomatik olarak yeniden hesaplanır.

---

## 4. Reaktif Değerlerin Kullanımı

Bir `reactive()` ifadesinin
değerini kullanmak için
fonksiyon gibi çağrılması gerekir.

    output$sonuc <- renderText({
      hesapla()
    })

Bu çağrı olmadan
reaktif ifade çalışmaz.

---

## 5. observe() Fonksiyonu

`observe()` fonksiyonu,
bir reaktif olayı izlemek
ancak doğrudan çıktı üretmemek için kullanılır.

Örnek:

    observe({
      print(input$x)
    })

Bu yapı,
arka planda işlem yapmak için uygundur.

---

## 6. observeEvent() Fonksiyonu

`observeEvent()` fonksiyonu,
belirli bir olay gerçekleştiğinde
kod çalıştırmak için kullanılır.

Örnek:

    observeEvent(input$buton, {
      print("Butona basıldı")
    })

Bu yapı, kullanıcı aksiyonlarına
tepki vermek için idealdir.

---

## 7. render Fonksiyonları

Reaktif çıktılar,
`render` fonksiyonları ile üretilir.

En sık kullanılanlar:
- renderText()
- renderPlot()
- renderTable()

Bu fonksiyonlar,
UI’daki output bileşenlerine
bağlı olarak çalışır.

---

## 8. Reaktif Akışın Kontrolü

Reaktif yapılar kontrolsüz kullanılırsa
gereksiz hesaplamalara yol açabilir.

Bu nedenle:
- Olay bazlı reaktiflik
- observeEvent kullanımı
- Gerekli yerlerde reaktif yapı tanımlama

önemlidir.

---

## 9. Reaktif Yapıların Paket Programlardaki Rolü

Reaktif yapılar sayesinde:
- Uygulama canlı hâle gelir
- Kullanıcı deneyimi artar
- Program daha verimli çalışır

Bu özellikler,
Shiny uygulamalarını
gerçek paket programlara dönüştürür.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Reaktif kavramını açıklar
- reactive(), observe() ve observeEvent kullanabilir
- Reaktif çıktılar üretebilir
- Reaktif akışı kontrol edebilir

---

## 11. Sonraki Haftaya Hazırlık

- Küçük bir Shiny uygulama fikri düşününüz
- Mini proje senaryosu hazırlayınız
