# Hafta 05 – State ve Akış Kontrolü
**Ders:** Paket Programlar (Python / Streamlit Framework)  
**Hafta:** 5  
**Kapsam:** Uygulama durumu ve etkileşimli akış yönetimi  

---

## 1. Dersin Amacı

Bu haftanın amacı, Streamlit uygulamalarında
kullanıcı etkileşimleri sırasında
verilerin nasıl korunduğunu ve
uygulama akışının nasıl yönetildiğini açıklamaktır.

Bu hafta sonunda öğrenciler:
- State kavramını tanımlar
- Akış kontrolünün neden gerekli olduğunu anlar
- Etkileşimli uygulama davranışları geliştirir

---

## 2. State (Durum) Nedir?

**State**, uygulama çalışırken
tutulması gereken geçici verileri ifade eder.

Bu veriler:
- Kullanıcı seçimleri
- Ara sonuçlar
- Uygulama adımları

olabilir.

State sayesinde uygulama,
kullanıcıyla tutarlı bir iletişim kurar.

---

## 3. Streamlit’te Çalışma Mantığı ve State İhtiyacı

Streamlit’te:
- Her kullanıcı etkileşiminde uygulama yeniden çalışır
- State kullanılmazsa önceki bilgiler kaybolur

Bu nedenle state,
dinamik uygulamalar için kritiktir.

---

## 4. Akış Kontrolü Nedir?

Akış kontrolü:
- Uygulamanın hangi adımda olduğunu
- Hangi içeriğin gösterileceğini

belirleyen mantıktır.

Bu yapı sayesinde:
- Çok adımlı uygulamalar oluşturulabilir
- Kullanıcı yönlendirilir

---

## 5. Koşullarla Akış Yönetimi

Akış kontrolü genellikle:
- Koşullar
- Kullanıcı seçimleri

üzerine kurulur.

Bu yaklaşım:
- Gereksiz ekran karmaşasını önler
- Kullanıcıyı doğru adımlara yönlendirir

---

## 6. State Kullanım Senaryoları

State genellikle:
- Form adımları
- Hesaplama sonuçları
- Kullanıcı tercihleri

gibi durumlarda kullanılır.

Bu senaryolar,
paket program mantığının temelini oluşturur.

---

## 7. Tutarlı Kullanıcı Deneyimi

State ve akış kontrolü:
- Kullanıcı deneyimini iyileştirir
- Uygulamanın profesyonel görünmesini sağlar

Kullanıcı, yaptığı işlemlerin
boşa gitmediğini hisseder.

---

## 8. Sık Yapılan Hatalar

Yeni başlayanlar genellikle:
- State kullanmadan karmaşık akışlar kurar
- Uygulamanın her seferinde sıfırlanmasına neden olur

Bu hatalar, kullanıcıyı olumsuz etkiler.

---

## 9. Paket Programlarda State’in Önemi

Paket programlarda:
- Kullanıcı süreklilik bekler
- Seçimlerin korunmasını ister

State, bu beklentinin karşılanmasını sağlar.

---

## 10. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- State kavramını açıklar
- Akış kontrolünü uygular
- Etkileşimli uygulamalar geliştirir

---

## 11. Sonraki Haftaya Hazırlık

- Dosya okuma ve yazma kavramlarını inceleyiniz.
- Uygulamalarda verinin nasıl saklandığını düşününüz.

