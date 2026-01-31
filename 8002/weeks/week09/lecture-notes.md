# Hafta 09 – Routing (SvelteKit)
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 9  
**Kapsam:** Routing kavramı ve SvelteKit’te sayfa yapısı  

---

## 1. Dersin Amacı

Bu haftanın amacı, modern web uygulamalarında routing kavramını tanıtmak
ve SvelteKit framework’ünde sayfaların nasıl oluşturulduğunu açıklamaktır.

Bu hafta sonunda öğrenciler:
- Routing kavramının ne işe yaradığını,
- Çok sayfalı uygulamaların nasıl yapılandırıldığını,
- Dosya tabanlı routing yaklaşımını anlayacaktır.

---

## 2. Routing Nedir?

**Routing**, bir uygulamada farklı URL adreslerine karşılık
farklı içeriklerin gösterilmesini sağlayan yapıdır.

Örnek:
- Ana sayfa
- Hakkında sayfası
- İletişim sayfası

Her biri farklı bir route (yol) olarak düşünülür.

---

## 3. Geleneksel Routing Yaklaşımı

Geleneksel web uygulamalarında:
- Her URL için ayrı bir HTML dosyası bulunur
- Sunucu, isteğe göre ilgili dosyayı döner

Bu yaklaşım:
- Basit siteler için yeterlidir
- Büyük uygulamalarda zor yönetilir

---

## 4. Modern Routing Yaklaşımı

Modern framework’lerde routing:
- Uygulama içinde yönetilir
- Sayfa yenilenmeden geçiş yapılır
- Kullanıcı deneyimi iyileşir

Bu yapı, tek sayfa uygulamaların (SPA) temelini oluşturur.

---

## 5. SvelteKit’te Routing Mantığı

SvelteKit, **dosya tabanlı routing** yaklaşımını kullanır.

Bu yaklaşımda:
- Klasör yapısı URL’leri temsil eder
- Dosya isimleri sayfaları belirler

Yani:
- Dosya yapısı = Sayfa yapısı

---

## 6. Sayfa Yapısının Mantığı (Kavramsal)

Kavramsal bir örnek yapı:

```txt
routes/
  ana-sayfa
  hakkinda
  iletisim

