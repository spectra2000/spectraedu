<!-- TEST: Eğer bu sayfa hala mavi ise sorun CSS cache -->

# Hafta 07 – Svelte’e Giriş
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 7  
**Kapsam:** Svelte framework’ü, bileşen yapısı ve temel çalışma mantığı  

---

## 1. Dersin Amacı

Bu haftanın amacı, modern frontend geliştirmede kullanılan framework
kavramını Svelte üzerinden tanıtmak ve bileşen (component) tabanlı
yaklaşımı öğrencilere kazandırmaktır.

Bu hafta sonunda öğrenciler:
- Framework kavramının neden ortaya çıktığını,
- Svelte’in ne olduğunu ve nasıl çalıştığını,
- Bileşen tabanlı yapının temel mantığını anlayacaktır.

---

## 2. Neden Framework Kullanılır?

Basit web sayfaları büyüdükçe:
- Kod karmaşıklaşır
- Dosya sayısı artar
- Yönetim zorlaşır

Framework’ler bu problemleri çözmek için kullanılır:
- Uygulama yapısını standartlaştırır
- Kod tekrarını azaltır
- Büyük projeleri yönetilebilir hâle getirir

---

## 3. Svelte Nedir?

**Svelte**, modern ve hafif bir frontend framework’üdür.

Svelte’in temel özellikleri:
- Derleme (compile-time) yaklaşımı kullanır
- Sanal DOM kullanmaz
- Tarayıcıya daha az JavaScript gönderir

Bu sayede:
- Performans artar
- Uygulama daha sade olur

---

## 4. Svelte’in Diğer Framework’lerden Farkı

Geleneksel framework’ler (React, Vue gibi):
- Tarayıcıda çalışan bir runtime’a sahiptir

Svelte:
- Kodları geliştirme aşamasında derler
- Tarayıcıya optimize edilmiş JavaScript üretir

Bu yaklaşım Svelte’i:
- Daha hızlı
- Daha az karmaşık
- Öğrenmesi daha kolay

hâle getirir.

---

## 5. Bileşen (Component) Kavramı

Svelte uygulamaları **bileşenlerden (components)** oluşur.

Bir bileşen:
- Görünümü (HTML)
- Davranışı (JavaScript)
- Stili (CSS)

tek bir dosyada birleştirir.

Bu yapı:
- Kodun okunabilirliğini artırır
- Bileşenlerin tekrar kullanılmasını sağlar

---

## 6. Bir Svelte Bileşeninin Yapısı

Bir Svelte bileşeni üç ana bölümden oluşur:

- Script bölümü → Mantık
- Style bölümü → Stil
- HTML bölümü → Görünüm

Aşağıda **yalnızca yapıyı göstermek amacıyla** bir örnek verilmiştir:

```txt
<script>
  let name = "Dünya";
</script>

<style>
  h1 {
    color: blue;
  }
</style>

<h1>Merhaba {name}</h1>
