// 漢堡選單切換
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 點擊選單項目後關閉選單
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 點擊選單外部關閉選單
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// 滾動動畫
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 照片放大功能
const profilePhoto = document.querySelector('.profile-photo');
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// 點擊照片開啟 modal
profilePhoto.addEventListener('click', () => {
    photoModal.classList.add('show');
    modalImage.src = profilePhoto.src;
    document.body.style.overflow = 'hidden'; // 防止背景滾動
});

// 點擊關閉按鈕
closeModal.addEventListener('click', () => {
    photoModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// 點擊 modal 背景關閉
photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// 按 ESC 鍵關閉
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoModal.classList.contains('show')) {
        photoModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// 語言切換功能
const langSwitch = document.getElementById('langSwitch');
let currentLang = localStorage.getItem('language') || 'zh';

// 翻譯字典
const translations = {
    skills: {
        backend: { zh: '💻 後端技術', en: '💻 Backend' },
        frontend: { zh: '🎨 前端技術', en: '🎨 Frontend' },
        tools: { zh: '🛠️ 開發工具', en: '🛠️ Dev Tools' },
        experience: { zh: '🏆 專業認證與經驗', en: '🏆 Experience & Certifications' }
    },
    experienceList: {
        exp1: { zh: '主導金流核心系統開發與現代化重構', en: 'Led payment core system development and modernization' },
        exp2: { zh: '協助取得 PCI DSS 4.0 國際安全認證', en: 'Contributed to achieving PCI DSS 4.0 certification' },
        exp3: { zh: '2 年以上金流系統開發實戰經驗', en: '2+ years of payment system development experience' },
        exp4: { zh: '國立台北護理健康大學資訊管理碩士班在讀', en: 'M.S. in Information Management (in progress)' }
    },
    projects: {
        title: { zh: '我的作品集', en: 'My Projects' },
        viewWebsite: { zh: '查看網站 →', en: 'View Website →' },
        viewProject: { zh: '查看專案 →', en: 'View Project →' },
        perfume: {
            title: { zh: '香水電商平台', en: 'Perfume E-commerce Platform' },
            desc: { zh: '透過與組員協作，完成一個販售香水的電商平台，藉此熟悉後端框架運用、設計模型、API 撰寫與前端網頁的資料傳輸。', en: 'Collaborated with team members to develop an e-commerce platform for perfume sales, gaining proficiency in backend framework usage, model design, API development, and frontend data transmission.' },
            responsibilities: { zh: '📋 負責項目', en: '📋 Responsibilities' },
            resp1: { zh: '資料表設計', en: 'Database design' },
            resp2: { zh: '頁面協助指導', en: 'Page guidance and support' },
            resp3: { zh: '商品列表與商品主頁面程式撰寫', en: 'Product list and detail page development' },
            resp4: { zh: '路由設計', en: 'Routing design' },
            resp5: { zh: 'Icon 設計', en: 'Icon design' },
            resp6: { zh: '購物車設計', en: 'Shopping cart implementation' },
            resp7: { zh: '會員中心與訂單詳細頁面設計', en: 'Member center and order details design' },
            resp8: { zh: '後台訂單管理', en: 'Backend order management' },
            tech: { zh: '🛠️ 運用技術', en: '🛠️ Technologies' }
        },
        django: {
            title: { zh: 'RuDjango 技術部落格平台', en: 'RuDjango Tech Blog Platform' },
            desc: { zh: '獨立開發並部署的全端部落格系統，採用現代化 Python Web 框架與雲端容器化部署架構。專案涵蓋完整的 CRUD 操作、使用者認證授權、即時通訊、安全性管控等企業級功能，實現從開發到生產環境的完整 DevOps 流程。', en: 'Independently developed and deployed full-stack blog system using modern Python web framework and cloud containerized deployment architecture. The project encompasses complete CRUD operations, user authentication and authorization, real-time messaging, security controls, and other enterprise-level features, implementing a complete DevOps workflow from development to production.' },
            features: { zh: '📋 核心功能與負責項目', en: '📋 Core Features & Responsibilities' },
            feat1: { zh: '資料庫架構設計（PostgreSQL 關聯式資料表建模）', en: 'Database architecture design (PostgreSQL relational modeling)' },
            feat2: { zh: 'RESTful API 設計', en: 'RESTful API design' },
            feat3: { zh: '文章管理系統（WYSIWYG 編輯器整合）', en: 'Article management system (WYSIWYG editor integration)' },
            feat4: { zh: '動態標籤分類系統（多對多關聯查詢優化）', en: 'Dynamic tag system (many-to-many query optimization)' },
            feat5: { zh: '使用者身份驗證機制（Session 管理、密碼雜湊加密）', en: 'User authentication (Session management, password hashing)' },
            feat6: { zh: '持久化登入功能（Remember Me Token）', en: 'Persistent login (Remember Me Token)' },
            feat7: { zh: '個人資料管理模組', en: 'Profile management module' },
            feat8: { zh: '密碼強度驗證與即時前端檢核', en: 'Password strength validation with real-time frontend checks' },
            feat9: { zh: '技能標籤系統', en: 'Skills tagging system' },
            feat10: { zh: 'WebSocket 即時私訊功能', en: 'WebSocket real-time messaging' },
            feat11: { zh: 'IP 黑白名單安全管控', en: 'IP whitelist/blacklist security control' },
            feat12: { zh: '登入嘗試記錄與異常偵測', en: 'Login attempt logging and anomaly detection' },
            feat13: { zh: 'Django Admin 後台擴充', en: 'Django Admin backend customization' },
            feat14: { zh: 'CI/CD 自動化部署流程（Railway Platform）', en: 'CI/CD automation (Railway Platform)' },
            techStack: { zh: '🛠️ 技術棧（Tech Stack）', en: '🛠️ Tech Stack' },
            highlights: { zh: '✨ 技術亮點', en: '✨ Technical Highlights' },
            high1: { zh: '實作 Django ORM 複雜查詢優化（select_related、prefetch_related）', en: 'Django ORM query optimization (select_related, prefetch_related)' },
            high2: { zh: '自訂 Django Middleware 處理請求攔截與 IP 過濾', en: 'Custom Django Middleware for request interception and IP filtering' },
            high3: { zh: '前後端分離式表單驗證（Server-side + Client-side Validation）', en: 'Separated form validation (Server-side + Client-side)' },
            high4: { zh: 'WebSocket 長連接實現即時雙向通訊', en: 'WebSocket long connection for real-time bidirectional communication' },
            high5: { zh: 'Database Migration 管理與版本控制', en: 'Database migration management and version control' },
            high6: { zh: '環境變數管理與敏感資料保護（.env 配置）', en: 'Environment variable management and sensitive data protection (.env)' },
            high7: { zh: '雲端部署自動化（Git Push 觸發自動部署）', en: 'Cloud deployment automation (triggered by Git Push)' }
        }
    },
    contact: {
        title: { zh: '聯絡我', en: 'Contact Me' }
    },
    footer: {
        copyright: { zh: '© 2026 Ruru\'s Portfolio. All rights reserved.', en: '© 2026 Ruru\'s Portfolio. All rights reserved.' }
    }
};

// 切換語言函數
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // 更新按鈕文字
    const langText = document.querySelector('.lang-text');
    langText.textContent = lang === 'zh' ? 'EN' : '中';

    // 更新所有帶 data-zh 和 data-en 的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // 更新技能分類標題
    const skillTitles = document.querySelectorAll('.skill-category h3');
    const skillKeys = ['backend', 'frontend', 'tools', 'experience'];
    skillTitles.forEach((title, index) => {
        if (translations.skills[skillKeys[index]]) {
            title.textContent = translations.skills[skillKeys[index]][lang];
        }
    });

    // 更新經驗列表
    const expItems = document.querySelectorAll('.experience-list li');
    const expKeys = ['exp1', 'exp2', 'exp3', 'exp4'];
    expItems.forEach((item, index) => {
        if (translations.experienceList[expKeys[index]]) {
            item.textContent = translations.experienceList[expKeys[index]][lang];
        }
    });

    // 更新專案內容
    updateProjectContent(lang);

    // 更新 HTML lang 屬性
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
}

// 更新專案內容
function updateProjectContent(lang) {
    // 專案 1: 香水電商
    const perfumeCard = document.querySelectorAll('.project-card')[0];
    if (perfumeCard) {
        const perfumeTitle = perfumeCard.querySelector('.project-header h3');
        const perfumeDesc = perfumeCard.querySelector('.project-description');
        const perfumeResp = perfumeCard.querySelector('.project-section h4');
        const perfumeTech = perfumeCard.querySelectorAll('.project-section h4')[1];
        const perfumeLink = perfumeCard.querySelector('.project-link');
        const perfumeOverlay = perfumeCard.querySelector('.overlay-link');

        if (perfumeTitle) perfumeTitle.textContent = translations.projects.perfume.title[lang];
        if (perfumeDesc) perfumeDesc.textContent = translations.projects.perfume.desc[lang];
        if (perfumeResp) perfumeResp.textContent = translations.projects.perfume.responsibilities[lang];
        if (perfumeTech) perfumeTech.textContent = translations.projects.perfume.tech[lang];
        if (perfumeLink) perfumeLink.textContent = translations.projects.viewProject[lang];
        if (perfumeOverlay) perfumeOverlay.textContent = translations.projects.viewWebsite[lang];

        // 更新負責項目列表
        const respItems = perfumeCard.querySelectorAll('.project-section ul li');
        const respKeys = ['resp1', 'resp2', 'resp3', 'resp4', 'resp5', 'resp6', 'resp7', 'resp8'];
        respItems.forEach((item, index) => {
            if (translations.projects.perfume[respKeys[index]]) {
                item.textContent = translations.projects.perfume[respKeys[index]][lang];
            }
        });
    }

    // 專案 2: Django
    const djangoCard = document.querySelectorAll('.project-card')[1];
    if (djangoCard) {
        const djangoTitle = djangoCard.querySelector('.project-header h3');
        const djangoDesc = djangoCard.querySelector('.project-description');
        const djangoFeatures = djangoCard.querySelector('.project-section h4');
        const djangoTech = djangoCard.querySelectorAll('.project-section h4')[1];
        const djangoHighlights = djangoCard.querySelector('.highlight-section h4');
        const djangoLink = djangoCard.querySelector('.project-link');
        const djangoOverlay = djangoCard.querySelector('.overlay-link');

        if (djangoTitle) djangoTitle.textContent = translations.projects.django.title[lang];
        if (djangoDesc) djangoDesc.textContent = translations.projects.django.desc[lang];
        if (djangoFeatures) djangoFeatures.textContent = translations.projects.django.features[lang];
        if (djangoTech) djangoTech.textContent = translations.projects.django.techStack[lang];
        if (djangoHighlights) djangoHighlights.textContent = translations.projects.django.highlights[lang];
        if (djangoLink) djangoLink.textContent = translations.projects.viewProject[lang];
        if (djangoOverlay) djangoOverlay.textContent = translations.projects.viewWebsite[lang];

        // 更新核心功能列表
        const featItems = djangoCard.querySelectorAll('.project-section ul li');
        const featKeys = ['feat1', 'feat2', 'feat3', 'feat4', 'feat5', 'feat6', 'feat7', 'feat8', 'feat9', 'feat10', 'feat11', 'feat12', 'feat13', 'feat14'];
        featItems.forEach((item, index) => {
            if (translations.projects.django[featKeys[index]]) {
                item.textContent = translations.projects.django[featKeys[index]][lang];
            }
        });

        // 更新技術亮點列表
        const highItems = djangoCard.querySelectorAll('.highlight-section ul li');
        const highKeys = ['high1', 'high2', 'high3', 'high4', 'high5', 'high6', 'high7'];
        highItems.forEach((item, index) => {
            if (translations.projects.django[highKeys[index]]) {
                item.textContent = translations.projects.django[highKeys[index]][lang];
            }
        });
    }
}

// 語言切換按鈕事件
langSwitch.addEventListener('click', () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    switchLanguage(newLang);
});

// 頁面載入時應用儲存的語言
switchLanguage(currentLang);
