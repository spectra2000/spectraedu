# 10. API Tabanlı Uygulama (Gelişmiş)

## 🎯 Dersin Amacı
Bu haftada öğrenciler, API tabanlı Streamlit uygulamalarını bir adım ileri taşıyarak
kullanıcı girdileriyle çalışan, hata yönetimi olan ve daha gerçekçi senaryolara
uygun paket programlar geliştirmeyi öğreneceklerdir.

---

## 📘 Ders İçeriği
- Gelişmiş API kullanımı
- Kullanıcı girdilerine göre API isteği oluşturma
- Hata ve istisna yönetimi
- Yükleniyor (loading) göstergeleri
- Uygulama akışını kontrol etme

---

## 🛠️ Kullanılan Araçlar
- Python
- Streamlit
- requests
- Pandas
- Açık API servisleri

---

## 🔁 API Kullanım Senaryosu
Bu hafta geliştirilecek uygulama aşağıdaki özellikleri içermelidir:

- Kullanıcıdan parametre alma (şehir adı, para birimi vb.)
- Bu parametre ile API çağrısı yapma
- Gelen veriyi tablo ve metin olarak gösterme
- API hatalarını kullanıcıya anlaşılır şekilde bildirme

---

## 🧪 Uygulamalar
- `st.text_input()` ile kullanıcıdan veri alma
- `requests.get()` ile dinamik API çağrısı
- `try / except` ile hata yakalama
- `st.spinner()` ile yükleniyor göstergesi kullanma

---

## 🧑‍💻 Örnek Kod
```python
import streamlit as st
import requests

st.title("Gelişmiş API Uygulaması")

city = st.text_input("Şehir adı giriniz")

if city:
    with st.spinner("Veri alınıyor..."):
        try:
            url = f"https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0"
            response = requests.get(url)

            if response.status_code == 200:
                st.success("Veri başarıyla alındı")
                st.json(response.json())
            else:
                st.error("API isteği başarısız oldu")

        except Exception as e:
            st.error(f"Hata oluştu: {e}")
