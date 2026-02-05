# Hafta 04 – Veri Okuma ve Dosya İşlemleri

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 4  

---

## 1. Dersin Amacı

Bu haftanın amacı, R programlama dili kullanılarak
dosyalardan veri okuma ve dosyalara veri yazma
işlemlerini öğretmektir.

Paket programlar genellikle dış kaynaklardan
veri alır ve üretilen sonuçları dosya olarak
kullanıcıya sunar.

---

## 2. Dosya Kavramı

Dosya, bilgilerin kalıcı olarak saklandığı
veri yapılarıdır.

Paket programlarda dosyalar:
- Veri girişi
- Veri saklama
- Sonuç paylaşımı

amaçlarıyla kullanılır.

---

## 3. Çalışma Dizini (Working Directory)

R’de dosya işlemleri yapılırken çalışma dizini
kavramı önemlidir.

Mevcut çalışma dizinini öğrenmek için:

    getwd()

Çalışma dizinini değiştirmek için:

    setwd("klasor/yolu/buraya")

---

## 4. CSV Dosyası Okuma

CSV dosyaları, tablo yapısında veri saklayan
yaygın bir dosya formatıdır.

R’de CSV dosyası okumak için:

    data <- read.csv("veri.csv")

Bu işlem sonucunda veri bir **data frame**
olarak belleğe alınır.

---

## 5. Okunan Veriyi İnceleme

Dosya okunduktan sonra verinin doğru
okunup okunmadığı kontrol edilmelidir.

Sık kullanılan inceleme fonksiyonları:

    head(data)
    str(data)
    summary(data)

---

## 6. Dosyaya Veri Yazma

R’de oluşturulan veya işlenen veriler
dosyaya kaydedilebilir.

Bir data frame’i CSV dosyasına yazmak için:

    write.csv(data, "sonuc.csv", row.names = FALSE)

---

## 7. Dosya İşlemlerinin Paket Programlardaki Yeri

Dosya işlemleri:
- Programın veri ile çalışmasını sağlar
- Analiz sonuçlarını saklar
- Programın tekrar kullanılabilir olmasını sağlar

Bu nedenle dosya okuma ve yazma işlemleri,
paket programların temel bileşenlerindendir.

---

## 8. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Çalışma dizini kavramını bilir
- CSV dosyası okuyabilir
- Veriyi dosyaya yazabilir
- Paket programlarda dosya işlemlerinin
  rolünü kavrar

---

## 9. Sonraki Haftaya Hazırlık

- Veri temizleme kavramını araştırınız
- Okunan verilerin analize nasıl hazırlanacağını düşününüz
