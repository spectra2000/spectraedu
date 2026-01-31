# Hafta 10 – Struct ve Union
**Ders:** Programlama Dilleri I (Standart C Dili)  
**Hafta:** 10  
**Kapsam:** Yapısal veri tipleri ve bellek kullanımı  

---

## 1. Dersin Amacı

Bu haftanın amacı, C programlama dilinde
birden fazla farklı veri tipinin
tek bir yapı altında nasıl gruplandığını açıklamaktır.

Bu hafta sonunda öğrenciler:
- Struct kavramını açıklar
- Union kavramının mantığını anlar
- Struct ve union arasındaki farkı ayırt eder

---

## 2. Yapısal Veri Tipi Kavramı

Yapısal veri tipleri:
- Birden fazla değişkeni
- Tek bir mantıksal yapı altında

toplamaya yarar.

Bu yaklaşım, gerçek dünyadaki varlıkları
programlama ortamına taşımayı kolaylaştırır.

---

## 3. Struct Nedir?

**Struct**, farklı veri tiplerinden oluşan
değişkenleri tek bir isim altında toplayan yapıdır.

Struct sayesinde:
- İlişkili veriler birlikte tutulur
- Kod daha okunabilir hâle gelir
- Veri organizasyonu güçlenir

---

## 4. Struct Kullanım Mantığı

Bir struct:
- Alanlardan (field) oluşur
- Her alan kendi veri tipine sahiptir
- Bellekte ardışık şekilde saklanır

Struct’lar, karmaşık veri modelleri için idealdir.

---

## 5. Union Nedir?

**Union**, struct’a benzeyen ancak
bellek kullanımında farklı çalışan bir yapıdır.

Union’da:
- Tüm alanlar aynı bellek alanını paylaşır
- Aynı anda yalnızca bir alan anlamlıdır

Bu yapı, bellek tasarrufu sağlar.

---

## 6. Struct ve Union Arasındaki Fark

Struct:
- Her alan için ayrı bellek ayırır
- Aynı anda tüm alanlar kullanılabilir

Union:
- Tek bir bellek alanı kullanır
- Alanlar sırayla kullanılır

Seçim, ihtiyaçlara göre yapılmalıdır.

---

## 7. Struct ve Pointer İlişkisi

Struct’lar:
- Pointer’lar ile birlikte sıkça kullanılır
- Büyük veri yapılarının verimli yönetimini sağlar

Bu ilişki, ileri seviye C programlamanın temelidir.

---

## 8. Kullanım Senaryoları

Struct genellikle:
- Öğrenci bilgileri
- Sensör verileri
- Kayıt sistemleri

için kullanılır.

Union ise:
- Bellek kısıtlı sistemler
- Donanım odaklı uygulamalar

için tercih edilir.

---

## 9. Yapısal Veri Tiplerinin Önemi

Struct ve union:
- Veri organizasyonunu güçlendirir
- Gerçekçi programlar yazmayı sağlar
- Büyük projelerin temelini oluşturur

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Struct ve union kavramlarını açıklar
- Aralarındaki farkları ayırt eder
- Doğru veri yapısını seçebilir

---

## 11. Sonraki Haftaya Hazırlık

- Dosya işlemleri kavramını araştırınız.
- Verilerin kalıcı olarak nasıl saklanabileceğini düşününüz.

