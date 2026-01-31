# Hafta 12 – Kimlik Doğrulama ve State Management
**Ders:** Internet Teknolojileri ve Web Programlama  
**Hafta:** 12  
**Kapsam:** Authentication kavramı ve uygulama state yönetimi  

---

## 1. Dersin Amacı

Bu haftanın amacı, web uygulamalarında kullanıcı kimliğinin nasıl
doğrulandığını ve bu bilginin uygulama genelinde nasıl yönetildiğini
açıklamaktır.

Bu hafta sonunda öğrenciler:
- Kimlik doğrulama kavramını açıklar
- Kullanıcı state’inin ne anlama geldiğini anlar
- Authentication ve state arasındaki ilişkiyi kavrar

---

## 2. Kimlik Doğrulama (Authentication) Nedir?

**Kimlik doğrulama**, bir kullanıcının gerçekten
iddia ettiği kişi olup olmadığının kontrol edilmesi sürecidir.

Bu süreçte:
- Kullanıcı sisteme giriş yapar
- Kimlik bilgileri doğrulanır
- Kullanıcıya erişim izni verilir

Kimlik doğrulama, güvenli web uygulamalarının temelidir.

---

## 3. Kimlik Doğrulama Neden Gereklidir?

Authentication sayesinde:
- Yetkisiz erişimler engellenir
- Kullanıcıya özel içerik sunulur
- Sistem güvenliği sağlanır

Örnek senaryolar:
- Kullanıcı giriş ekranları
- Yönetici panelleri
- Kişisel hesap sayfaları

---

## 4. Authentication ve Authorization Farkı

Bu iki kavram sıkça karıştırılır.

- **Authentication:** Kullanıcı kim?
- **Authorization:** Kullanıcı ne yapabilir?

Önce kimlik doğrulama yapılır,
sonra yetkilendirme kontrol edilir.

---

## 5. State Kavramı Nedir?

**State**, bir uygulamanın veya bileşenin o anki durumunu temsil eder.

Örnek state’ler:
- Kullanıcı giriş yaptı mı?
- Kullanıcının rolü nedir?
- Seçilen tema veya dil

State, uygulamanın davranışını belirler.

---

## 6. Kullanıcı State’i

Authentication sonrası elde edilen bilgiler:
- Kullanıcı bilgileri
- Giriş durumu
- Yetkiler

uygulama state’i olarak tutulur.

Bu state sayesinde:
- Kullanıcıya özel içerikler gösterilir
- Sayfalar arası tutarlılık sağlanır

---

## 7. State Management Neden Önemlidir?

State doğru yönetilmezse:
- Tutarsız arayüzler oluşur
- Güvenlik açıkları ortaya çıkabilir
- Kullanıcı deneyimi bozulur

Bu nedenle state yönetimi,
authentication kadar kritik bir konudur.

---

## 8. Uygulama Genelinde State Kullanımı

State genellikle:
- Uygulama genelinde paylaşılır
- Birden fazla sayfa tarafından kullanılır

Bu yaklaşım:
- Kod tekrarını azaltır
- Merkezi kontrol sağlar

---

## 9. Authentication ve State İlişkisi

Kimlik doğrulama:
- State’i başlatır

State management:
- Bu bilginin uygulama boyunca korunmasını sağlar

Bu iki yapı birlikte çalışarak
güvenli ve tutarlı uygulamalar oluşturur.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- Authentication kavramını tanımlar
- State yönetiminin önemini açıklar
- Kullanıcı durumunun uygulamaya etkisini kavrar

---

## 11. Sonraki Haftaya Hazırlık

- Bir sonraki haftanın konu başlıklarını gözden geçiriniz.
- Authentication ve state kavramlarını tekrar ediniz.

