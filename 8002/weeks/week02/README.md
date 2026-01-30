# Hafta 02 – İnternet ve Web Temelleri
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 2  
**Kapsam:** Internet altyapısı, veri iletimi ve web’in temel yapı taşları  

---

## 1. Dersin Amacı

Bu haftanın amacı, Internet’in teknik altyapısını ve web tabanlı sistemlerin
hangi temel kavramlar üzerine kurulduğunu açıklamaktır.

Bu hafta sonunda öğrenciler:
- Internet’in nasıl çalıştığını,
- Verinin ağlar üzerinden nasıl iletildiğini,
- Web teknolojilerinin hangi katmanlardan oluştuğunu anlayacaktır.

Bu hafta hâlâ **programlama yapılmaz**; kavramsal altyapı oluşturulur.

---

## 2. Internet Nasıl Çalışır?

Internet, **paket anahtarlama (packet switching)** mantığıyla çalışan bir ağdır.

Bir veri gönderildiğinde:
- Veri küçük paketlere bölünür
- Paketler farklı ağ yollarından iletilir
- Hedefte tekrar birleştirilir

Bu yaklaşım:
- Hata toleransı sağlar
- Ağın ölçeklenebilir olmasını mümkün kılar
- Merkezi bir yapıya bağımlılığı azaltır

---

## 3. Protokol Kavramı

**Protokol**, ağ üzerindeki cihazların birbiriyle nasıl iletişim kuracağını
tanımlayan kurallar bütünüdür.

Günlük hayattan örnek:
> İki insanın aynı dili konuşması gibi

Internet üzerinde en yaygın kullanılan protokol ailesi **TCP/IP**’dir.

---

## 4. TCP/IP Protokol Ailesi

### 4.1 IP (Internet Protocol)

- Adresleme ve yönlendirmeden sorumludur
- Paketin hangi cihaza gideceğini belirler
- Güvenilirlik sağlamaz

---

### 4.2 TCP (Transmission Control Protocol)

- Güvenilir veri iletimi sağlar
- Paket sıralamasını ve hata kontrolünü yapar
- Eksik paketleri yeniden ister

Web, e-posta ve dosya aktarımı gibi servislerde kullanılır.

---

### 4.3 UDP (User Datagram Protocol)

- Hız önceliklidir
- Paket kaybı kontrol edilmez
- Gecikmenin kritik olduğu durumlarda kullanılır

Örnek kullanım alanları:
- Canlı video
- Online oyunlar
- Ses iletimi

---

## 5. IP Adresi Kavramı

IP adresi, Internet üzerindeki her cihazın sahip olduğu **benzersiz kimliktir**.

### IP adresi türleri:
- **IPv4:** 32 bit (örn: 192.168.1.1)
- **IPv6:** 128 bit (adres ihtiyacını karşılamak için geliştirilmiştir)

IP adresi olmadan Internet üzerinde iletişim mümkün değildir.

---

## 6. Port Kavramı

Bir cihaz üzerinde birden fazla servis çalışabilir.  
**Portlar**, bu servisleri ayırt etmek için kullanılır.

| Port | Servis |
|----|------|
| 80 | HTTP |
| 443 | HTTPS |
| 21 | FTP |
| 22 | SSH |

> IP adresi **cihazı**, port ise **uygulamayı** temsil eder.

---

## 7. Web’in Temel Yapı Taşları

Bir web sistemi temel olarak şu bileşenlerden oluşur:
- Web tarayıcısı (Client)
- Web sunucusu (Server)
- HTTP protokolü
- HTML içerik

Bu yapı **istemci–sunucu mimarisi** üzerine kuruludur.

---

## 8. İstemci – Sunucu Mimarisi

İstemci–sunucu modelinde:
- İstemci istek gönderir
- Sunucu isteği işler
- Sunucu yanıt döner

Web tarayıcıları istemci, web sunucuları sunucu rolündedir.

---

## 9. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Internet’in teknik çalışma mantığını açıklayabilir
- TCP ve UDP arasındaki farkları bilir
- IP adresi ve port kavramlarını ayırt edebilir
- Web sistemlerinin temel bileşenlerini tanımlar

---

## 10. Sonraki Haftaya Hazırlık

- Bir sonraki haftanın konu başlıklarını gözden geçiriniz.
- Ders notları üzerinden temel kavramları tekrar ediniz.
