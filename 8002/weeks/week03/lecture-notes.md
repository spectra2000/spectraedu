# Hafta 03 – HTTP, URL ve Tarayıcı Mantığı
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 3  
**Kapsam:** HTTP protokolü, URL yapısı ve web tarayıcılarının çalışma prensibi  

---

## 1. Dersin Amacı

Bu haftanın amacı, web üzerinde istemci (tarayıcı) ile sunucu arasındaki iletişimin
hangi kurallar çerçevesinde gerçekleştiğini açıklamaktır.

Bu hafta sonunda öğrenciler:
- HTTP protokolünün ne işe yaradığını,
- URL yapısının hangi parçalardan oluştuğunu,
- Bir web sayfası açıldığında tarayıcının neler yaptığını anlayacaktır.

---

## 2. HTTP Nedir?

**HTTP (HyperText Transfer Protocol)**, web üzerinde veri alışverişini sağlayan
uygulama katmanı protokolüdür.

HTTP’nin temel özellikleri:
- İstemci–sunucu mantığıyla çalışır
- Metin tabanlıdır
- Stateless (durum tutmaz) bir protokoldür

Tarayıcı istek gönderir, sunucu yanıt verir.

---

## 3. HTTP İstek – Yanıt Yapısı

### 3.1 HTTP Request (İstek)

Bir HTTP isteği şu bileşenlerden oluşur:
- Request Method (GET, POST, vb.)
- URL
- Header’lar
- (Varsa) Body

Örnek:

---

### 3.2 HTTP Response (Yanıt)

Sunucudan gelen yanıt:
- Status Code
- Header’lar
- Body (HTML, JSON vb.)

Örnek:

---

## 4. HTTP Metotları

En yaygın HTTP metotları:

| Metot | Açıklama |
|----|---------|
| GET | Veri almak |
| POST | Veri göndermek |
| PUT | Veri güncellemek |
| DELETE | Veri silmek |

Modern web uygulamaları bu metotları yoğun şekilde kullanır.

---

## 5. URL (Uniform Resource Locator) Yapısı

Bir URL, web üzerindeki bir kaynağın adresidir.

Örnek:

### URL Bileşenleri:
- Protokol (https)
- Domain (example.com)
- Port (opsiyonel)
- Path
- Query string
- Fragment

---

## 6. Tarayıcılar Nasıl Çalışır?

Bir kullanıcı URL girdiğinde tarayıcı şu adımları izler:

1. URL ayrıştırılır
2. DNS sorgusu yapılır
3. Sunucuya HTTP isteği gönderilir
4. Yanıt alınır
5. HTML parse edilir
6. Sayfa render edilir

Bu süreç milisaniyeler içinde gerçekleşir.

---

## 7. Rendering Süreci (Genel Bakış)

Tarayıcı:
- HTML’i DOM’a çevirir
- CSS’i CSSOM’a çevirir
- JavaScript’i çalıştırır
- Sayfayı ekrana çizer

Bu süreç performans açısından kritiktir.

---

## 8. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- HTTP protokolünün temel mantığını açıklar
- URL yapısını analiz edebilir
- Tarayıcı–sunucu etkileşimini adım adım tarif edebilir

---

## 9. Sonraki Haftaya Hazırlık

- Bir sonraki haftanın konu başlıklarını gözden geçiriniz.
- Ders notları üzerinden temel kavramları tekrar ediniz.
