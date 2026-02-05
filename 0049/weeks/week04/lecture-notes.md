# Hafta 04 – Veri Okuma ve Dosya İşlemleri

**Ders:** Paket Programlar  
**Programlama Dili:** R  
**Hafta:** 4  

---

## 1. Dersin Amacı

Bu haftanın amacı, R programlama dili kullanılarak
dosyalardan veri okuma ve dosyalara veri yazma
işlemlerini öğretmektir.

Paket programlar genellikle kullanıcıdan veri alır
veya dış kaynaklardan veri okur. Bu nedenle dosya
işlemleri, paket program geliştirmenin temel
bileşenlerinden biridir.

---

## 2. Dosya Kavramı ve Veri Kaynakları

Bir paket programda veri farklı kaynaklardan gelebilir:
- CSV dosyaları
- Excel dosyaları
- Metin (TXT) dosyaları
- Kullanıcı tarafından sağlanan dosyalar

Bu derste temel olarak **CSV dosyaları** üzerinden
ilerlenecektir.

---

## 3. Çalışma Dizini (Working Directory)

R’de dosya işlemleri yapılırken çalışma dizini
kavramı önemlidir.

Çalışma dizini, R’nin dosyaları aradığı varsayılan
klasördür.

Mevcut çalışma dizinini öğrenmek için:

    getwd()

Çalışma dizinini değiştirmek için:

    setwd("klasor/yolu/buraya")

---

## 4. CSV Dosyası Okuma

CSV dosyaları, tablo yapısında veri saklayan
yaygın bir dosya formatıdır.

R’de CSV dosyası okumak için `read.csv()` fonksiyonu
kullanılır.

    data <- read.csv("veri.csv")

Bu işlem sonucunda veri bir **data frame** olarak
belleğe alınır.

---

## 5. Okunan Veriyi İnceleme

Dosya okunduktan sonra verinin doğru okunup
okunmadığı kontrol edilmelidir.

Bunun için sık kullanılan fonksiyonlar:

    head(data)
    str(data)
    summary(data)

Bu adım, paket programın hatasız çalışması için
kritik öneme sahiptir.

---

## 6. Dosyaya Veri Yazma

R’de oluşturulan veya işlenen veriler dosyaya
kaydedilebilir.

Bir data frame’i CSV dosyasına yazmak için:

    write.csv(data, "sonuc.csv", row.names = FALSE)

Bu işlem, paket programın ürettiği çıktıyı
kullanıcıya sunmak için kullanılır.

---

## 7. Dosya İşlemlerinin Paket Program Mantığındaki Yeri

Dosya işlemleri:
- Veri girişini sağlar
- Analiz sonuçlarını saklar
- Programın tekrar kullanılabilir olmasını sağlar

Bu nedenle dosya okuma ve yazma işlemleri,
paket programların arka planında temel rol oynar.

---

## 8. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Çalışma dizini kavramını bilir
- CSV dosyası okuyabilir
- Veriyi dosyaya yazabilir
- Paket programlarda dosya işlemlerinin önemini kavrar

---

## 9. Sonraki Haftaya Hazırlık

- Veri temizleme kavramını araştırınız
- Okunan veriler üzerinde hangi işlemlerin
  yapılabileceğini düşününüz
