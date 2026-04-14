```markdown
# 🌟 Star Champs — Yessika Journey

<p align="center">
  <img src="https://img.shields.io/github/stars/Eugenewijaya/starchamps-yessika-journey?style=for-the-badge&color=yellow" />
  <img src="https://img.shields.io/github/forks/Eugenewijaya/starchamps-yessika-journey?style=for-the-badge&color=blue" />
  <img src="https://img.shields.io/github/languages/top/Eugenewijaya/starchamps-yessika-journey?style=for-the-badge&color=green" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

<p align="center">
  <b>✨ A Personalized Digital Flipbook Experience ✨</b><br>
  Celebrating memories, growth, and meaningful journeys in an interactive storytelling format.
</p>

---

## 🚀 Overview

**Star Champs Yessika Journey** adalah sebuah **interactive digital flipbook** yang dirancang sebagai bentuk apresiasi perjalanan profesional.

Berfungsi sebagai:
- 📘 *Raport Tumbuh Kembang*
- 💌 *Buku Kenangan Digital*
- 🎥 *Storytelling Experience berbasis web*

Seluruh konten dihasilkan secara dinamis menggunakan **client-side JavaScript**, menghasilkan pengalaman yang ringan, fleksibel, dan mudah dikembangkan.

---

## ✨ Key Features

🔹 **Dynamic Flipbook Engine**  
Konten berubah secara otomatis berdasarkan parameter URL (`?staff=`)

🔹 **Rich Media Experience**  
Mendukung:
- 🖼️ Image gallery
- 🎵 Audio (`congrats.mp3`)
- 📖 Narrative pages

🔹 **Custom Theme System**  
Setiap profil memiliki:
- Warna cover & back
- Styling unik per individu

🔹 **Fully Responsive**  
Optimal di:
- Desktop 💻
- Tablet 📱
- Mobile 📲

🔹 **Zero Backend Required**  
100% berjalan di browser — cocok untuk deployment cepat

🔹 **Centralized Content (data.js)**  
Semua konfigurasi terpusat → mudah di-scale

---

## 🧠 Tech Stack

### 💻 Core
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

### 🎨 Styling & UI
- **Tailwind CSS (CDN)**
- **Google Fonts**

---

## 📁 Project Structure

```

📦 starchamps-yessika-journey
├── index.html        # Entry point
├── main.js           # Flipbook engine logic
├── style.css         # Custom styling & animation
├── data.js           # Core content configuration
├── congrats.mp3      # Audio asset
├── img/              # Image assets
└── assets lainnya

````

---

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/Eugenewijaya/starchamps-yessika-journey.git
cd starchamps-yessika-journey
````

### 2. Run Project

Cukup buka:

```bash
index.html
```

Tanpa server, tanpa instalasi tambahan.

---

## 🎯 Usage

Gunakan parameter URL untuk menentukan konten:

```
index.html?staff=yessika
```

📌 Behavior:

* Default → `yessika`
* Invalid ID → akan menampilkan error

---

## ⚙️ Configuration (Core System)

Semua data dikontrol melalui:

```
data.js
```

### Struktur Utama:

```js
const flipbookData = {
  "yessika": {
    config: {
      coverColor: "#0284c7",
      backColor: "#f59e0b"
    },
    profile: {
      name: "Ms. Yessika",
      title: "RAPORT TUMBUH KEMBANG"
    },
    pages: [
      { type: "cover" },
      { type: "message" },
      { type: "image" }
    ]
  }
};
```

### 🧩 Page Types:

| Type    | Fungsi             |
| ------- | ------------------ |
| cover   | Halaman pembuka    |
| message | Narasi / ucapan    |
| image   | Dokumentasi visual |

---

## 🛠️ Extend the Project

Menambahkan profil baru:

```js
flipbookData["new_staff"] = {
  config: {...},
  profile: {...},
  pages: [...]
};
```

Akses via:

```
index.html?staff=new_staff
```

---

## 🤝 Contributing

Kontribusi terbuka untuk:

* ✨ UI/UX Enhancement
* ⚡ Performance Improvement
* 🧩 Feature Development
* 🐞 Bug Fix

### Workflow:

```bash
fork → clone → branch → commit → push → pull request
```

---

## 📜 License

Saat ini belum terdapat lisensi resmi.

Disarankan menggunakan:

* MIT License
* Apache 2.0

Untuk kejelasan penggunaan dan distribusi.

---

## 💡 Acknowledgments

* 👨‍💻 **Eugenewijaya** — Project Creator
* 🏢 **Star Champs Indonesia** — Organization
* 🎨 **Tailwind CSS** — UI Framework
* 🔤 **Google Fonts** — Typography
* 🌟 **Ms. Yessika** — Inspiration

---

## 🌈 Closing Note

> “Every journey deserves to be remembered — not just recorded.”

Project ini bukan sekadar dokumentasi, tetapi bentuk **apresiasi yang dikemas secara digital, personal, dan emosional**.

```
```
