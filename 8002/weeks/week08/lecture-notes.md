# Hafta 08 – Template Yapısı ve State Yönetimi
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 8  
**Kapsam:** Template kavramı, veri bağlama ve state yönetimi  

---

## 1. Dersin Amacı

Bu haftanın amacı, Svelte bileşenlerinde kullanılan template yapısını
tanıtmak ve state kavramının arayüz ile nasıl ilişkilendiğini açıklamaktır.

Bu hafta sonunda öğrenciler:
- Template kavramının ne anlama geldiğini,
- Verinin arayüzde nasıl gösterildiğini,
- State değişiminin ekrana nasıl yansıdığını anlayacaktır.

---

## 2. Template Kavramı Nedir?

Template, bir bileşenin **ekranda nasıl görüneceğini** tanımlayan yapıdır.

Template içinde:
- Metinler
- Değişkenler
- Koşullu ifadeler

birlikte kullanılır.

Template, bileşenin **görünüm katmanıdır**.

---

## 3. Değişkenlerin Template İçinde Kullanımı

Bir bileşende tanımlanan değişkenler,
template içinde süslü parantezler ile gösterilir.

Bu kullanım:
- Değişken değerini ekrana yansıtır
- Okunabilirliği artırır

Örnek kavramsal gösterim:

```txt
değişken:
  count = 0

görünüm:
  ekranda count değeri gösterilir

