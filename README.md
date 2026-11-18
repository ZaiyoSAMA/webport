# 💻 Personal Portfolio Website - ปัทมราช บูรณวินซ์ (ต้า)

เว็บไซต์พอร์ตโฟลิโอส่วนตัว (Personal Portfolio Website) สำหรับนักศึกษาสายเทคโนโลยีสารสนเทศ (IT) ออกแบบตามสไตล์ **Modern Minimalist ผสม Soft UI** โดยใช้โทนสี **Pastel Pink, Lavender, White และ Purple** อ้างอิงการจัดวางองค์ประกอบและข้อมูลจริงจากเรซูเม่

---

## 🎨 แนวคิดและสไตล์การออกแบบ (Design Concept)
- **Palette โทนสี**: 
  - Pastel Pink (`#fbcfe8`, `#f472b6`, `#ec4899`)
  - Lavender (`#f3e8ff`, `#e9d5ff`, `#c084fc`)
  - Deep Purple (`#7e22ce`, `#581c87`)
  - White & Soft Gradients
- **ดีไซน์**: Modern Minimalist + Soft UI (Glassmorphism, ขอบโค้งมน, มิติแสงเงาละมุนตา, เคลื่อนไหวลื่นไหล)
- **แอนิเมชัน**: Fade In On Scroll, Floating Badges, Smooth Scrolling, Hover Card Lift Effects
- **Responsive**: รองรับการใช้งานสมบูรณ์แบบ 100% ทั้งบน Smartphone, Tablet และ PC/Desktop

---

## 📂 โครงสร้างโฟลเดอร์ของโปรเจกต์ (Project Structure)
```
portfolio-patthamarat/
├── index.html                 # โค้ด HTML หลัก จัดโครงสร้าง Semantic และ SEO
├── server.js                  # Local Development Server (Node.js ในตัว)
├── README.md                  # เอกสารคู่มือการใช้งานและปรับแต่ง
└── assets/
    ├── css/
    │   └── style.css          # ไฟล์ CSS ดีไซน์ Soft UI, Responsive Breakpoints
    ├── js/
    │   └── main.js            # JavaScript คอนโทรล Scrollspy, Filter, Copy, Modal
    └── images/
        ├── profile.png        # รูปโปรไฟล์ทรงกลม ไดคัทโปร่งใสจากเรซูเม่
        ├── profile.jpg        # รูปโปรไฟล์ความละเอียดสูง
        ├── resume-original.jpg # ภาพเรซูเม่ต้นฉบับสำหรับปุ่มดูเรซูเม่
        ├── activity-music.svg # ภาพเวกเตอร์กิจกรรมฟังเพลง (ธีม Pastel)
        ├── activity-reading.svg # ภาพเวกเตอร์กิจกรรมอ่านหนังสือ (ธีม Pastel)
        ├── activity-sports.svg # ภาพเวกเตอร์กิจกรรมเล่นกีฬา (ธีม Pastel)
        ├── career-programmer.svg # ภาพประกอบเป้าหมาย Programmer
        └── career-business.svg # ภาพประกอบเป้าหมายเปิดธุรกิจส่วนตัว
```

---

## 🚀 วิธีการเปิดใช้งานเว็บไซต์ (How to Run)

### วิธีที่ 1: เปิดผ่านเบราว์เซอร์โดยตรง (ง่ายที่สุด)
- ดับเบิลคลิกที่ไฟล์ `index.html` เพื่อเปิดใช้งานบน Google Chrome, Microsoft Edge, Safari หรือเบราว์เซอร์ใด ๆ ได้ทันทีโดยไม่ต้องติดตั้งโปรแกรมเสริม

### วิธีที่ 2: เปิดผ่าน Local Server (Node.js)
```bash
node server.js
```
เปิดบราวเซอร์ไปที่: `http://localhost:3000`

### วิธีที่ 3: เปิดผ่าน VS Code Live Server
- คลิกขวาที่ไฟล์ `index.html` ใน Visual Studio Code แล้วเลือก **Open with Live Server**

---

## ⚙️ วิธีการปรับแต่งข้อมูล (Easy Customization)

### 1. การเปลี่ยนรูปโปรไฟล์
- วางไฟล์รูปใหม่ที่ต้องการในโฟลเดอร์ `assets/images/` และเปลี่ยนชื่อเป็น `profile.png` หรือแก้ไข path รูปใน `index.html` ตรง:
```html
<img src="assets/images/profile.png" alt="ปัทมราช บูรณวินซ์ (ต้า)" class="avatar-img">
```

### 2. การแก้ไขระดับทักษะ (Skills Level)
- ใน `index.html` แต่ละการ์ดทักษะจะมีข้อความระดับและแถบเปอร์เซ็นต์ที่สามารถปรับได้ตามต้องการ เช่น:
```html
<span class="skill-level-badge">ใช้งานได้คล่องแคล่ว</span>
...
<div class="skill-progress-bar" style="width: 85%;"></div>
```

### 3. การแก้ไขข้อมูลติดต่อ
- ในส่วน `#contact` ของ `index.html` สามารถอัปเดตเบอร์โทร LINE ID หรือ Facebook ได้ง่าย ๆ พร้อมทั้งแก้ไขในแอตทริบิวต์ `data-copy` เพื่อให้ปุ่มคัดลอกทำงานตรงกัน

---

## 🌟 ฟังก์ชันพิเศษที่เพิ่มเข้ามา (Interactive Features)
1. **Interactive Resume Modal**: ป๊อปอัปพรีวิวเรซูเม่ต้นฉบับ พร้อมปุ่มดาวน์โหลดเอกสาร
2. **One-Click Copy to Clipboard**: กดปุ่มเดียวคัดลอกเบอร์โทรศัพท์ (061-830-9944), LINE ID (mxzart_k) หรือ Facebook (Kise Mochi) พร้อมแจ้งเตือน Toast สวยงาม
3. **Interactive Contact Form**: มีแบบฟอร์มส่งข้อความติดต่อพร้อมตรวจสอบความถูกต้องและเชื่อมโยงสู่ Email Client
4. **Skill Category Filter**: สลับดูทักษะได้ทั้ง "ทักษะทั้งหมด", "Technical Skills" และ "Soft Skills"
5. **Smart Scrollspy & Active Navigation**: เมนูด้านบนจะไฮไลต์อัตโนมัติตามตำแหน่งที่กำลังดูอยู่

---
© 2026 Patthamarat Portfolio. All Rights Reserved.
