# Ruru's Portfolio | 潘昱如作品集

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Full%20Stack%20Software%20Engineer-1a5f3f?style=for-the-badge)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-ruruland.swift.moe-2d7a52?style=for-the-badge&logo=github)](https://ruruland.swift.moe)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-3a9664?style=for-the-badge&logo=github)](https://github.com/swiftruru/RuruLand)

**現代化全端軟體工程師個人作品集網站**

[🌐 查看網站](https://ruruland.swift.moe) • [📧 聯絡我](https://swift.moe) • [💻 GitHub](https://github.com/swiftruru)

</div>

---

## 📋 目錄

- [專案簡介](#-專案簡介)
- [技術棧](#-技術棧)
- [核心特色](#-核心特色)
- [專案結構](#-專案結構)
- [本地開發](#-本地開發)
- [部署架構](#-部署架構)
- [設計理念](#-設計理念)
- [作品展示](#-作品展示)
- [效能優化](#-效能優化)
- [瀏覽器支援](#-瀏覽器支援)
- [授權資訊](#-授權資訊)
- [關於我](#-關於我)

---

## 🎯 專案簡介

這是一個精心設計的全端軟體工程師個人作品集網站，展示了專業的技術能力、完整的專案經驗，以及對現代化 Web 開發的深入理解。網站採用原生技術開發，注重效能、使用者體驗與視覺設計，完整展現從前端到部署的全端開發能力。

### 🎨 設計亮點

- **專業色彩系統**：採用北一女綠色系（`#1a5f3f`）作為主色調，展現專業感與信賴感
- **流暢動畫效果**：精心設計的滾動動畫與過場效果，提升使用者體驗
- **響應式設計**：完美適配桌面、平板、手機等各種裝置
- **漸進式增強**：從基本功能到動畫效果的層層遞進，確保各裝置均可訪問

---

## 🛠️ 技術棧

### 前端技術
```
HTML5          - 語義化結構與 SEO 優化
CSS3           - 現代化樣式、Grid/Flexbox 佈局、CSS 變數系統
JavaScript ES6 - 原生 JS、Intersection Observer API、DOM 操作
```

### 設計技術
```
CSS Variables   - 主題色彩系統管理
CSS Grid        - 響應式網格佈局
Flexbox         - 彈性盒模型佈局
CSS Animations  - 關鍵幀動畫與過渡效果
Media Queries   - 響應式斷點設計
```

### 開發工具
```
Git              - 版本控制
GitHub           - 程式碼託管與協作
GitHub Pages     - 靜態網站託管
GitHub Actions   - CI/CD 自動化部署
Custom Domain    - 自訂域名配置
```

### 資產管理
```
Favicon Generator - 多尺寸 Favicon 生成
Web App Manifest  - PWA 基礎配置
Image Optimization - 圖片壓縮與格式優化
```

---

## ✨ 核心特色

### 1️⃣ 視覺設計

- **色彩系統**：使用 CSS 變數實現統一的色彩管理系統
- **漸層背景**：多層次漸層效果營造視覺深度
- **動態背景**：浮動泡泡動畫增添活力感
- **卡片設計**：現代化卡片式佈局，hover 互動效果

### 2️⃣ 互動體驗

- **滾動動畫**：使用 Intersection Observer API 實現滾動觸發動畫
- **平滑滾動**：錨點導航搭配平滑滾動效果
- **懸浮效果**：精心調校的 hover 效果與陰影變化
- **漢堡選單**：手機版側邊滑出式選單

### 3️⃣ 響應式設計

```css
/* 斷點策略 */
Desktop:  > 768px  - 雙欄佈局、完整動畫
Tablet:   ≤ 768px  - 單欄佈局、漢堡選單
Mobile:   < 480px  - 優化字體與間距
```

### 4️⃣ 效能優化

- **資源優化**：圖片格式選擇與壓縮
- **CSS 優化**：減少重繪與重排
- **JavaScript 優化**：事件委派與節流處理
- **載入優化**：關鍵資源優先載入

### 5️⃣ SEO 與可訪問性

- **語義化 HTML**：正確使用標籤結構
- **Meta 標籤**：完整的 meta 資訊配置
- **Alt 屬性**：所有圖片均含描述性 alt 文字
- **ARIA 標籤**：輔助技術支援
- **Web App Manifest**：PWA 基礎支援

---

## 📁 專案結構

```
RuruLand/
│
├── index.html                          # 主頁面
├── CNAME                               # 自訂域名配置
├── README.md                           # 專案說明文件
│
├── assets/
│   ├── css/
│   │   └── style.css                   # 主樣式表（完整 CSS 變數系統）
│   │
│   ├── js/
│   │   └── main.js                     # 主要 JavaScript 邏輯
│   │
│   └── images/
│       ├── favicon/                    # Favicon 資源
│       │   ├── favicon.ico
│       │   ├── favicon-16x16.png
│       │   ├── favicon-32x32.png
│       │   ├── apple-touch-icon.png
│       │   ├── android-chrome-192x192.png
│       │   ├── android-chrome-512x512.png
│       │   └── site.webmanifest        # PWA manifest
│       │
│       └── projects/                   # 專案截圖
│           ├── 01_FLORIS.jpeg          # 香水電商平台
│           └── 02_RuDjango.png         # Django 部落格平台
│
└── .gitignore                          # Git 忽略配置
```

### 架構說明

```
HTML (結構層)
  ↓
CSS (表現層) - CSS Variables + Grid/Flexbox
  ↓
JavaScript (行為層) - 原生 ES6+ JavaScript
  ↓
GitHub Pages (部署層) - 自動化 CI/CD
```

---

## 🚀 本地開發

### 環境需求

- 現代化瀏覽器（Chrome 90+, Firefox 88+, Safari 14+）
- 本地伺服器（推薦使用 VS Code Live Server 或 Python HTTP Server）

### 快速開始

1. **克隆專案**
```bash
git clone https://github.com/swiftruru/RuruLand.git
cd RuruLand
```

2. **啟動本地伺服器**

**方法一：使用 Python 3**
```bash
python -m http.server 8000
```

**方法二：使用 Python 2**
```bash
python -m SimpleHTTPServer 8000
```

**方法三：使用 VS Code Live Server**
```
安裝 Live Server 擴充套件 → 右鍵 index.html → Open with Live Server
```

3. **開啟瀏覽器**
```
訪問 http://localhost:8000
```

### 開發建議

```bash
# 檢視即時變更
- 使用 Live Server 實現熱重載
- 開啟瀏覽器開發者工具監控效能

# 測試響應式設計
- Chrome DevTools → Toggle Device Toolbar (Cmd/Ctrl + Shift + M)
- 測試不同裝置尺寸與解析度
```

---

## 🌐 部署架構

### GitHub Pages 配置

```yaml
# 部署流程
本地開發 → Git Commit → Git Push → GitHub Pages 自動部署 → CDN 分發
```

### 自訂域名設置

1. **GitHub Repository 設定**
   - Settings → Pages → Custom domain
   - 輸入：`ruruland.swift.moe`

2. **DNS 配置（Cloudflare/其他 DNS 服務商）**
```dns
Type:  CNAME
Name:  ruruland
Value: swiftruru.github.io
TTL:   Auto
```

3. **HTTPS 啟用**
   - GitHub Pages 自動提供免費 SSL 憑證
   - 勾選 "Enforce HTTPS" 選項

### 部署指令

```bash
# 推送至 GitHub
git add .
git commit -m "Update portfolio content"
git push origin main

# GitHub Pages 將自動部署（通常 1-2 分鐘內完成）
```

---

## 🎨 設計理念

### 色彩系統

```css
:root {
  /* 主要色彩 - 北一女綠色系 */
  --primary-color: #1a5f3f;      /* 主要綠 */
  --secondary-color: #2d7a52;    /* 次要綠 */
  --accent-color: #3a9664;       /* 強調綠 */

  /* 背景色彩 */
  --light-green: #e8f5e9;        /* 淺綠背景 */
  --soft-green: #c8e6c9;         /* 柔和綠 */
  --card-bg: #ffffff;            /* 卡片背景 */

  /* 文字色彩 */
  --text-primary: #1a3a2e;       /* 主文字 */
  --text-secondary: #2d5f4d;     /* 次文字 */
  --text-muted: #4a7c59;         /* 淡化文字 */

  /* 漸層效果 */
  --gradient-1: linear-gradient(135deg, #1a5f3f 0%, #2d7a52 100%);
  --gradient-2: linear-gradient(135deg, #2d7a52 0%, #3a9664 100%);
  --gradient-3: linear-gradient(135deg, #3a9664 0%, #4caf50 100%);
}
```

### 排版系統

```css
/* 字體階層 */
h1: 4rem (64px)   - 主標題
h2: 3rem (48px)   - 區塊標題
h3: 1.8rem (28.8px) - 卡片標題
p:  1.1rem (17.6px) - 內文

/* 間距系統 */
Section Padding: 5rem (80px)
Card Padding:    2rem (32px)
Element Gap:     1.5-2rem (24-32px)
```

### 動畫設計

```javascript
// 滾動觸發動畫
Intersection Observer → 元素進入視窗 → 添加 .visible class → CSS 動畫觸發

// 動畫時序
fadeInUp:  1s ease-out
hover:     0.3s ease
scroll:    smooth behavior
```

---

## 🎬 作品展示

### 專案一：香水電商平台 (FLORIS)

**技術棧**：`ASP.NET MVC` `C#` `T-SQL` `Razor` `JavaScript` `Sass`

**專案描述**：與團隊協作開發的完整電商平台，負責商品系統、購物車、會員中心等核心功能。

**核心功能**：
- 商品管理與展示系統
- 購物車與訂單流程
- 會員中心與權限管理
- 後台訂單管理系統

**線上展示**：[perfume.azurewebsites.net](https://perfume.azurewebsites.net/)

---

### 專案二：RuDjango 技術部落格平台

**技術棧**：`Python` `Django 6.0` `PostgreSQL` `Django Channels` `WebSocket` `Docker`

**專案描述**：獨立開發的全端部落格系統，涵蓋 CRUD、認證授權、即時通訊、安全管控等企業級功能。

**技術亮點**：
- Django ORM 複雜查詢優化
- WebSocket 即時私訊功能
- 自訂 Middleware IP 過濾
- 雲端容器化部署（Railway）

**線上展示**：[django.swift.moe](https://django.swift.moe/)

---

## ⚡ 效能優化

### 載入效能

```
首次內容繪製 (FCP):    < 1.0s
最大內容繪製 (LCP):    < 2.0s
累積佈局偏移 (CLS):    < 0.1
首次輸入延遲 (FID):    < 100ms
```

### 優化策略

1. **圖片優化**
   - JPEG 格式用於照片（品質 85%）
   - PNG 格式用於 Logo 與 Icon
   - WebP 格式作為現代瀏覽器備選

2. **CSS 優化**
   - 使用 CSS Variables 減少重複程式碼
   - 關鍵 CSS 內聯載入
   - 使用 `will-change` 優化動畫效能

3. **JavaScript 優化**
   - 原生 ES6+ 語法，無框架依賴
   - Intersection Observer 替代 scroll 事件
   - 事件委派減少監聽器數量

4. **載入優化**
   - 字體使用系統字體棧
   - 圖片 lazy loading（未來計畫）
   - Service Worker 離線支援（未來計畫）

---

## 🌍 瀏覽器支援

| 瀏覽器 | 最低版本 | 說明 |
|--------|----------|------|
| Chrome | 90+ | 完整支援 |
| Firefox | 88+ | 完整支援 |
| Safari | 14+ | 完整支援 |
| Edge | 90+ | 完整支援 |
| iOS Safari | 14+ | 完整支援 |
| Chrome Android | 90+ | 完整支援 |

### 漸進式增強策略

- **基礎層**：所有瀏覽器均可訪問基本內容
- **增強層**：現代瀏覽器享受完整動畫與互動效果
- **降級策略**：舊版瀏覽器自動降級至靜態版本

---

## 📄 授權資訊

```
MIT License

Copyright (c) 2026 Yu-Ru Pan (潘昱如)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 關於我

<div align="center">

### 潘昱如 | Yu-Ru Pan

**Full Stack Software Engineer | 全端軟體工程師**

專注於現代化 Web 應用開發 × 雲端架構設計 × 系統優化

---

### 🎓 教育背景

**國立台北護理健康大學**
資訊管理碩士班在讀

---

### 💼 專業經驗

✓ 2 年以上金流系統開發實戰經驗
✓ 主導金流核心系統開發與現代化重構
✓ 協助取得 PCI DSS 4.0 國際安全認證
✓ 熟悉 Git、Azure DevOps、GCP 雲端平台
✓ 具優良 TA 經驗，樂於技術分享與團隊協作

---

### 🛠️ 技術專長

**後端開發**
`.NET Framework` `.NET Core` `ASP.NET MVC` `C#` `Python` `Django`

**前端開發**
`Vue.js` `JavaScript` `HTML5` `CSS3` `Sass`

**資料庫**
`SQL Server` `PostgreSQL` `T-SQL`

**開發工具**
`Git` `Azure DevOps` `GCP` `Docker`

---

### 📬 聯絡方式

🌐 個人網站：[swift.moe](https://swift.moe)
💻 GitHub：[@swiftruru](https://github.com/swiftruru)
📧 作品集：[ruruland.swift.moe](https://ruruland.swift.moe)

---

### 🌟 技術亮點

```
全端開發能力    ████████████████████ 100%
系統架構設計    ████████████████████ 100%
雲端部署運維    ███████████████████░  95%
團隊協作溝通    ████████████████████ 100%
技術文件撰寫    ███████████████████░  95%
```

---

**開放工作機會 | Open to Opportunities**

💡 *"持續學習，追求卓越，用技術創造價值"*

</div>

---

<div align="center">

**⭐ 如果你喜歡這個專案，歡迎給予 Star 支持！**

Made with 💚 by Ruru | © 2026 All Rights Reserved

</div>
