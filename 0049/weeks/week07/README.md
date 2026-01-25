# 07. Grafikler ve Veri Görselleştirme (Streamlit)

## 🎯 Dersin Amacı
Bu haftada öğrenciler, Streamlit kullanarak verileri görsel hale getirmeyi öğreneceklerdir.
Grafiklerin kullanıcı arayüzlerinde nasıl etkili biçimde sunulacağı ve farklı grafik türlerinin
hangi senaryolarda tercih edilmesi gerektiği ele alınacaktır.

---

## 📘 Ders İçeriği
- Veri görselleştirmenin temel prensipleri
- Streamlit ile grafik üretme mantığı
- Statik ve etkileşimli grafikler
- Grafiklerin kullanıcı deneyimine etkisi

---

## 🛠️ Kullanılan Araçlar
- Python
- Streamlit
- Pandas
- Matplotlib
- Plotly

---

## 📊 Grafik Türleri
- Çizgi Grafikleri (Line Chart)
- Çubuk Grafikleri (Bar Chart)
- Dağılım Grafikleri (Scatter Plot)
- Pasta Grafikleri (Pie Chart)
- Etkileşimli grafikler (Plotly)

---

## 🧪 Uygulamalar
- CSV dosyasından veri okuma
- `st.line_chart()` ile hızlı grafik oluşturma
- Matplotlib ile özelleştirilmiş grafik çizimi
- Plotly kullanarak etkileşimli grafikler üretme

---

## 🧑‍💻 Örnek Kod
```python
import streamlit as st
import pandas as pd

df = pd.read_csv("data.csv")
st.line_chart(df)
