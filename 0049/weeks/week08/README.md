# 08. Mini Uygulama – Streamlit ile Paket Program Geliştirme

## 🎯 Dersin Amacı
Bu haftada öğrenciler, önceki haftalarda öğrendikleri Streamlit bileşenlerini bir araya
getirerek küçük ölçekli ama çalışabilir bir paket program geliştireceklerdir.
Amaç, tek bir uygulama üzerinden arayüz, veri okuma, grafik ve kullanıcı etkileşimini
birlikte kullanabilmektir.

---

## 📘 Ders İçeriği
- Mini proje kavramı
- Uygulama senaryosu belirleme
- Streamlit bileşenlerini birlikte kullanma
- Basit bir paket program mimarisi oluşturma

---

## 🛠️ Kullanılan Araçlar
- Python
- Streamlit
- Pandas
- Matplotlib / Plotly

---

## 📂 Uygulama Senaryosu
Öğrencilerden aşağıdaki özelliklere sahip bir mini paket program geliştirmeleri beklenir:

- Kullanıcıdan veri alma (dosya veya form)
- Veriyi ekranda tablo olarak gösterme
- En az **bir grafik** ile veriyi görselleştirme
- Kullanıcı etkileşimine göre arayüzü güncelleme

---

## 🧪 Uygulama Adımları
1. Streamlit uygulama dosyasının oluşturulması
2. Kullanıcıdan veri alınması (`st.file_uploader`, `st.text_input`)
3. Verinin işlenmesi ve ekranda gösterilmesi
4. Grafiklerin eklenmesi
5. Uygulamanın test edilmesi

---

## 🧑‍💻 Örnek Başlangıç Kodu
```python
import streamlit as st
import pandas as pd

st.title("Mini Paket Program")

file = st.file_uploader("CSV dosyası yükleyin")

if file:
    df = pd.read_csv(file)
    st.dataframe(df)
    st.line_chart(df)
