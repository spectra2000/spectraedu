# Hafta 07 – Svelte’e Giriş
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 7  
**Kapsam:** Svelte framework’ü, bileşen yapısı ve temel çalışma mantığı  

---

## 1. Dersin Amacı

Bu haftanın amacı, modern web uygulamalarında neden framework
kullanıldığını açıklamak ve bu yaklaşımı Svelte framework’ü
üzerinden tanıtmaktır.

Bu hafta sonunda öğrenciler:
- Framework kavramının neden ortaya çıktığını,
- Svelte’in temel felsefesini,
- Bileşen (component) tabanlı yaklaşımın mantığını kavrayacaktır.

---

## 2. Neden Framework Kullanılır?

Basit HTML ve CSS ile yazılan sayfalar büyüdükçe:
- Kod yönetimi zorlaşır
- Tekrar eden yapılar artar
- Dosya organizasyonu karmaşık hâle gelir

Framework’ler:
- Uygulama yapısını standartlaştırır
- Büyük projelerin yönetimini kolaylaştırır
- Kodun sürdürülebilirliğini artırır

---

## 3. Svelte Nedir?

Svelte, modern ve hafif bir frontend geliştirme aracıdır.

Diğer yaygın yaklaşımlardan farkı:
- Kodları tarayıcıda çalıştırmak yerine
- Geliştirme aşamasında derleyerek
- Daha sade ve hızlı çıktı üretmesidir

Bu nedenle Svelte:
- Performans odaklıdır
- Öğrenmesi görece kolaydır
- Eğitim amaçlı projelerde sıkça tercih edilir

---

## 4. Svelte’in Genel Çalışma Mantığı

Svelte uygulamaları:
- Küçük, bağımsız parçalardan oluşur
- Bu parçalara **bileşen (component)** adı verilir

Her bileşen:
- Görünümü
- Davranışı
- Görsel düzeni

tek bir yapı altında toplar.

---

## 5. Bileşen (Component) Kavramı

Bileşen yaklaşımı şu avantajları sağlar:
- Kodun tekrar kullanılabilir olması
- Uygulamanın parçalara ayrılması
- Okunabilirliğin artması

Bir sayfa, birden fazla bileşenin birleşimi olarak düşünülür.

---

## 6. Örnek Bileşen Yapısı (Kavramsal)

Aşağıdaki örnek **çalışan kod değildir**.  
Sadece Svelte’te bileşen yapısının nasıl düşünüldüğünü göstermek içindir.

```txt
değişken tanımı:
  name = "Dünya"

görünüm:
  ekrana "Merhaba {name}" yazdırılır
