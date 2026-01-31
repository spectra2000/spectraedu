# Hafta 07 – Svelte’e Giriş
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 7  
**Kapsam:** Svelte framework’ü, bileşen yapısı ve temel çalışma mantığı  

---

## 1. Dersin Amacı

Bu haftanın amacı, modern frontend geliştirmede kullanılan framework
kavramını Svelte üzerinden tanıtmak ve bileşen tabanlı yaklaşımı
öğrencilere kazandırmaktır.

Bu hafta sonunda öğrenciler:
- Svelte’in ne olduğunu,
- Neden bir framework kullanıldığını,
- Bileşen (component) kavramını anlayacaktır.

---

## 2. Neden Framework Kullanılır?

Büyük web uygulamalarında:
- Kod karmaşıklaşır
- Yönetim zorlaşır
- Tekrar eden yapılar artar

Framework’ler:
- Uygulama yapısını düzenler
- Kod tekrarını azaltır
- Ölçeklenebilirlik sağlar

---

## 3. Svelte Nedir?

**Svelte**, modern ve hafif bir frontend framework’üdür.

Svelte’in temel özellikleri:
- Derleme (compile-time) yaklaşımı kullanır
- Sanal DOM kullanmaz
- Daha az JavaScript üretir

Bu özellikler performans avantajı sağlar.

---

## 4. Svelte’in Diğer Framework’lerden Farkı

React ve Vue gibi framework’ler:
- Tarayıcıda çalışan runtime kullanır

Svelte:
- Kodları derleme aşamasında optimize eder
- Tarayıcıya daha az yük bırakır

Bu nedenle Svelte daha hızlı ve sade bir yapı sunar.

---

## 5. Bileşen (Component) Kavramı

Svelte uygulamaları **bileşenlerden** oluşur.

Bir bileşen:
- HTML yapısı
- JavaScript mantığı
- CSS stilleri

tek bir dosyada barındırır.

Bu yapı:
- Okunabilirliği artırır
- Bileşenlerin tekrar kullanılmasını sağlar

---

## 6. Basit Bir Svelte Bileşeni

Bir Svelte bileşeni şu bölümlerden oluşur:
 txt
<script>
  let name = "Dünya";
</script>

<style>
  h1 { color: blue; }
</style>

<h1>Merhaba {name}</h1>

