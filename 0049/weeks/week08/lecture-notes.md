# Hafta 08 – Shiny UI Bileşenleri

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 8  

---

## 1. Dersin Amacı

Bu haftanın amacı,
Shiny uygulamalarında
kullanıcı arayüzünü oluşturan
temel bileşenleri öğretmektir.

---

## 2. UI (User Interface) Kavramı

UI, kullanıcı ile
uygulama arasındaki
etkileşim noktasıdır.

İyi bir UI:
- Anlaşılır
- Kullanımı kolay
- Amaca uygun

olmalıdır.

---

## 3. Layout Yapıları

Shiny’de arayüz düzeni
layout yapıları ile oluşturulur.

En sık kullanılan layout:

    fluidPage()

---

## 4. Input Bileşenleri

Kullanıcıdan veri almak için
input bileşenleri kullanılır.

Örnek input bileşenleri:
- sliderInput
- selectInput
- textInput

---

## 5. Örnek Input Kullanımı

    sliderInput(
      inputId = "yas",
      label = "Yaş",
      min = 0,
      max = 100,
      value = 25
    )

---

## 6. Output Bileşenleri

Output bileşenleri,
sonuçların kullanıcıya
gösterilmesini sağlar.

Örnek output bileşenleri:
- textOutput
- plotOutput

---

## 7. UI Bileşenlerinin Paket Programlardaki Rolü

UI bileşenleri sayesinde:
- Kullanıcı programı kontrol eder
- Analiz süreci etkileşimli hâle gelir
- Program daha kullanıcı dostu olur

---

## 8. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- UI kavramını açıklar
- Temel input ve output bileşenlerini kullanabilir
- Basit bir Shiny arayüzü oluşturabilir

---

## 9. Sonraki Haftaya Hazırlık

- Server mantığını araştırınız
- Reaktif yapı kavramını inceleyiniz
