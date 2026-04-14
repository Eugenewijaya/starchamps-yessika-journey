<div align="center">

# ✨ Star Champs Yessika Journey ✨

[![Stars](https://img.shields.io/github/stars/Eugenewijaya/starchamps-yessika-journey?style=for-the-badge&color=FBBF24)](https://github.com/Eugenewijaya/starchamps-yessika-journey/stargazers)
[![Forks](https://img.shields.io/github/forks/Eugenewijaya/starchamps-yessika-journey?style=for-the-badge&color=38BDF8)](https://github.com/Eugenewijaya/starchamps-yessika-journey/network/members)
[![Language](https://img.shields.io/github/languages/top/Eugenewijaya/starchamps-yessika-journey?style=for-the-badge&color=4ADE80)](https://github.com/Eugenewijaya/starchamps-yessika-journey)
[![License](https://img.shields.io/badge/License-Unspecified-lightgrey?style=for-the-badge)](#license-information)

A personalized, interactive digital flipbook designed to celebrate the journey, achievements, and memorable moments of **Ms. Yessika** at **Star Champs Indonesia**. 

[Explore the Features](#-key-features) • [Installation](#%EF%B8%8F-quick-start-installation) • [Configuration](#%E2%9A%99%EF%B8%8F-configuration-guide) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

This repository hosts a client-side driven digital flipbook that serves as an interactive **"Raport Tumbuh Kembang"** (Growth and Development Report) or **"Buku Kenangan"** (Memory Book). By dynamically generating content via URL parameters and a central data hub, it offers a scalable, engaging, and heartfelt way to showcase staff achievements and personalized media.

---

## 🚀 Key Features

* **🎭 Dynamic Personalization**: Generates a unique experience for specific staff members based on simple URL parameters.
* **🖼️ Rich Media Integration**: Seamlessly embeds images and audio (e.g., `congrats.mp3`) for immersive storytelling.
* **🎨 Thematic Customization**: Distinct color palettes (cover, borders, backgrounds) and profile details configurable per staff member.
* **📱 Responsive & Fluid**: Optimized layouts ensuring a beautiful reading experience across desktops, tablets, and smartphones.
* **⚡ 100% Client-Side**: Built purely on front-end technologies. Easily deployable on any static hosting (GitHub Pages, Vercel, Netlify).
* **🧩 Modular Architecture**: All content is decoupled from the UI logic and managed within a single `data.js` file for effortless updates.

---

## 🛠️ Tech Stack

This project is built with lightweight, modern web technologies:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

* **Google Fonts**: Integrated via CDN for premium typography.

---

## 📂 Project Structure

A clean, logical organization of assets and source code:

```text
.
├── SCIYSSK-26.svg            # Vector graphics / branding
├── congrats.mp3              # Background/triggerable audio
├── data.js                   # 🧠 Main data source (Configurations & Content)
├── index.html                # 🌐 Main entry point
├── main.js                   # ⚙️ Core flipbook logic and rendering
├── style.css                 # 🎨 Custom animations and overrides
└── img/                      # 📸 Media directory
    ├── LogoSCI.png
    ├── DSCF0083.JPG
    ├── TJOH/                 # Event-specific folders
    ├── Christmas/
    └── Event WFA/

    🏎️ Quick Start: Installation
No complex server environments or build steps required.

Clone the repository:

Bash
git clone [https://github.com/Eugenewijaya/starchamps-yessika-journey.git](https://github.com/Eugenewijaya/starchamps-yessika-journey.git)
Navigate into the directory:

Bash
cd starchamps-yessika-journey
Launch the application:
Simply open index.html in your preferred modern web browser.

macOS: open index.html

Windows: start index.html

Usage Example
To view a specific staff member's journey, append their ID as a URL parameter:index.html?staff=yessika

(Note: If no parameter is provided, it defaults to yessika. Invalid IDs will trigger a custom error UI).

⚙️ Configuration Guide
The flipbook is highly extensible. All personalized content is managed inside data.js via the flipbookData object.

Here is the schema for adding or modifying a staff member:

JavaScript
const flipbookData = {
    "yessika": { // Matches the '?staff=yessika' URL parameter
        config: {
            coverColor: "#0284c7",  // Primary cover background
            coverBorder: "#bae6fd", // Primary cover border
            backColor: "#f59e0b",   // Back page background
            backBorder: "#fde68a"   // Back page border
        },
        profile: {
            name: "Ms. Yessika",
            title: "RAPORT<br>TUMBUH KEMBANG",
            subtitle: "Diberikan kepada Terapis Hebat:",
            company: "Star Champs Indonesia"
        },
        pages: [
            {
                type: "cover", // Special layout: Cover
                image: "img/LogoSCI.png",
                "img-caption": "Star Champs Indonesia"
            },
            {
                type: "message", // Layout: Text/Message
                title: "Opening Message",
                message: "Selamat ulang tahun dan selamat atas pencapaian luar biasa!"
            },
            {
                type: "image", // Layout: Full Image
                image: "img/TJOH/DSCF0083.JPG",
                "img-caption": "Momen berharga bersama tim"
            }
        ]
    }
    // Add new staff objects here...
};
🤝 Contributing
Contributions, issues, and feature requests are always welcome!

Fork the project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'feat: Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

Great areas for contribution include: Adding new staff profiles, refining UI/UX, or optimizing media loading.

📜 License Information
This project currently does not have an explicit license specified. Please contact the repository owner for specific licensing terms, usage permissions, or before utilizing these assets in a commercial capacity.

🙌 Acknowledgments
Developer: Eugenewijaya

Organization: Star Champs Indonesia

Inspiration: Ms. Yessika, the driving force behind this personalized journey.
