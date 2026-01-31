# Hafta 12 – SSR, CSR ve Hydration
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 12  
**Kapsam:** Render yaklaşımları ve sayfa üretim süreçleri  

---

## 1. Dersin Amacı

Bu haftanın amacı, web uygulamalarında sayfaların nerede üretildiğini
ve bu üretim yöntemlerinin kullanıcı deneyimi üzerindeki etkilerini
açıklamaktır.

Bu hafta sonunda öğrenciler:
- SSR ve CSR kavramlarını ayırt edebilir
- Hydration’ın ne işe yaradığını anlayabilir
- Farklı render yaklaşımlarının avantajlarını karşılaştırabilir

---

## 2. Render Kavramı Nedir?

**Render**, bir web sayfasının kullanıcıya gösterilebilir hâle
getirilmesi sürecidir.

Bu süreçte:
- Veri işlenir
- Sayfa yapısı oluşturulur
- Görünüm kullanıcıya sunulur

Render işlemi farklı ortamlarda gerçekleşebilir.

---

## 3. Client-Side Rendering (CSR)

CSR yaklaşımında:
- Sayfa tarayıcıda oluşturulur
- Sunucudan temel yapı alınır
- İçerik JavaScript ile yüklenir

Avantajları:
- Dinamik ve etkileşimli arayüzler
- Daha az sunucu yükü

Dezavantajları:
- İlk yüklenme süresi uzayabilir
- SEO açısından sınırlamalar olabilir

---

## 4. Server-Side Rendering (SSR)

SSR yaklaşımında:
- Sayfa sunucu tarafında oluşturulur
- Tarayıcıya hazır içerik gönderilir

Avantajları:
- Daha hızlı ilk yüklenme
- SEO uyumluluğu

Dezavantajları:
- Sunucu yükü artabilir
- Karmaşık yapı gerektirebilir

---

## 5. SSR ve CSR Karşılaştırması

SSR:
- İçerik sunucuda üretilir
- İlk görüntü hızlıdır

CSR:
- İçerik tarayıcıda üretilir
- Etkileşim güçlüdür

Modern uygulamalar genellikle bu iki yaklaşımı birlikte kullanır.

---

## 6. Hydration Kavramı

**Hydration**, sunucuda oluşturulan sayfanın
tarayıcıda etkileşimli hâle getirilmesi sürecidir.

Bu süreçte:
- Statik HTML alınır
- JavaScript bağlanır
- Sayfa interaktif olur

Hydration, SSR ve CSR arasında köprü görevi görür.

---

## 7. Modern Web Uygulamalarında Yaklaşım

Güncel framework’ler:
- Hem SSR
- Hem CSR
- Hem de hydration

yaklaşımlarını birlikte kullanır.

Bu sayede:
- Performans
- SEO
- Kullanıcı deneyimi

denge içinde sağlanır.

---

## 8. Kullanıcı Deneyimi ve Performans

Render yaklaşımı:
- Sayfa açılış hızını
- Etkileşim süresini
- Algılanan performansı

doğrudan etkiler.

Doğru yaklaşım, uygulamanın amacına göre seçilmelidir.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- SSR, CSR ve hydration kavramlarını tanımlar
- Render yaklaşımlarını karşılaştırır
- Performans ve SEO ilişkisini kavrar

---

## 10. Sonraki Haftaya Hazırlık

- Bir sonraki haftanın konu başlıklarını gözden geçiriniz.
- Render yaklaşımlarını tekrar ediniz.

