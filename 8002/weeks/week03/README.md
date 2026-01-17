# Week 03 – İnternetin Yapısı ve HTTP Temelleri

## 🎯 Haftanın Amacı
Bu haftanın sonunda öğrenciler:
- İnternetin nasıl çalıştığını kavrayacak,
- İstemci–sunucu (client–server) mimarisini anlayacak,
- HTTP protokolünün temel mantığını öğrenecek,
- Tarayıcı–sunucu arasındaki iletişimi kavramsal düzeyde açıklayabilecektir.

---

## 🌐 İnternet Nasıl Çalışır?

- İnternet, birbirine bağlı **bilgisayar ağlarının** oluşturduğu küresel bir sistemdir.
- Web, internetin sunduğu servislerden **sadece biridir**.
- Web tarayıcıları (Chrome, Firefox vb.) internet üzerindeki web sunucularına istek gönderir.

---

## 🖥️ Client – Server Mimarisi

### Client (İstemci)
- Kullanıcının kullandığı taraf
- Web tarayıcıları
- Mobil uygulamalar

### Server (Sunucu)
- İstekleri karşılayan sistem
- Web siteleri burada barındırılır
- HTML, CSS, JavaScript dosyalarını gönderir

📌 **Örnek:**
Tarayıcı → `https://example.com`  
Sunucu → HTML içeriğini gönderir

---

## 🔄 HTTP Protokolü Nedir?

**HTTP (HyperText Transfer Protocol)**  
- Tarayıcı ile sunucu arasındaki iletişim protokolüdür
- Stateless (durum tutmaz)
- İstek–cevap mantığıyla çalışır

---

## 📤 HTTP Request (İstek)

Bir HTTP isteği şunları içerir:
- URL
- Metot (GET, POST vb.)
- Header bilgileri
- (Opsiyonel) Body

### Yaygın HTTP Metotları
| Metot | Açıklama |
|---|---|
| GET | Veri isteme |
| POST | Veri gönderme |
| PUT | Veri güncelleme |
| DELETE | Veri silme |

---

## 📥 HTTP Response (Cevap)

Sunucudan gelen cevap:
- Status Code
- Header bilgileri
- Response Body (HTML, JSON vb.)

### Yaygın HTTP Durum Kodları
| Kod | Anlam |
|---|---|
| 200 | OK |
| 404 | Not Found |
| 500 | Server Error |

---

## 🔍 Tarayıcı Üzerinden İnceleme

- Tarayıcı **Developer Tools** (F12)
- Network sekmesi
- Yapılan istekler ve cevaplar incelenir

📌 Öğrenciler için önemli farkındalık:
> “Web sayfası tek parça değil, çok sayıda HTTP isteğinden oluşur.”

---

## 🧪 Uygulama / Tartışma

- Bir web sitesini açarken neler olur?
- Tarayıcı hangi dosyaları ister?
- HTTP olmasaydı web çalışır mıydı?

---

## 📝 Haftalık Ödev (Opsiyonel)

- Bir web sitesinin Network trafiğini inceleyin
- En az 3 farklı HTTP isteğini gözlemleyin
- Status kodlarını not alın

---

## 📌 Haftanın Özeti

- İnternet ≠ Web
- Client–Server mimarisi
- HTTP temel kavramları
- Request–Response döngüsü

---

➡️ **Gelecek Hafta:**  
HTML yapısına giriş ve temel etiketler
