// Internationalization (i18n) translations
const translations = {
  en: {
    "page.title": "TerraceAI Lab - From Idea to Intelligence",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "hero.from": "From",
    "hero.idea": "Idea",
    "hero.to": "to",
    "hero.intelligence": "Intelligence",
    "hero.subtitle":
      "AI development company that transforms ideas into intelligence",
    "hero.description":
      "We create the future of business with sustainable technology and innovative AI solutions.",
    "hero.start_project": "Start Project",
    "hero.view_portfolio": "View Portfolio",
    "about.title": "Sustainable AI Innovation",
    "about.subtitle":
      "Intelligent solutions created through the harmony of technology and nature",
    "about.card1.title": "Sustainable Technology",
    "about.card1.description":
      "We create a sustainable future with eco-friendly AI solutions.",
    "about.card2.title": "Step-by-Step Growth",
    "about.card2.description":
      "We grow businesses through systematic and phased approaches.",
    "about.card3.title": "AI Network",
    "about.card3.description":
      "We create new value through connected intelligent systems.",
    "services.title": "AI Development Services",
    "services.subtitle": "From ideas to intelligent solutions",
    "services.service1.title": "AI Consulting",
    "services.service1.description":
      "From business requirement analysis to AI strategy formulation",
    "services.service1.item1": "AI feasibility assessment",
    "services.service1.item2": "Technology roadmap design",
    "services.service1.item3": "ROI analysis",
    "services.service2.title": "Custom AI Development",
    "services.service2.description":
      "Enterprise-specific AI model and system development",
    "services.service2.item1": "Machine learning model development",
    "services.service2.item2": "Data pipeline construction",
    "services.service2.item3": "AI service deployment",
    "services.service3.title": "Intelligent Automation",
    "services.service3.description":
      "Process automation and optimization solutions",
    "services.service3.item1": "Business process analysis",
    "services.service3.item2": "Automation system design",
    "services.service3.item3": "Performance monitoring",
    "portfolio.title": "Success Stories",
    "portfolio.subtitle": "AI innovation stories across various industries",
    "portfolio.project1.title": "Smart Factory AI",
    "portfolio.project1.description":
      "Predictive maintenance system that achieved 40% productivity improvement for manufacturers",
    "portfolio.project1.tag2": "Predictive Analytics",
    "portfolio.project1.tag3": "Automation",
    "portfolio.project2.title": "Customer Behavior Analysis AI",
    "portfolio.project2.description":
      "60% increase in conversion rate with personalized recommendation system",
    "portfolio.project2.tag1": "Recommendation System",
    "portfolio.project2.tag2": "Big Data",
    "portfolio.project2.tag3": "Personalization",
    "portfolio.project3.title": "Intelligent Document Processing",
    "portfolio.project3.description":
      "80% reduction in document processing time with natural language processing technology",
    "portfolio.project3.tag2": "Document Automation",
    "contact.title": "Start Your Project",
    "contact.subtitle":
      "Have an idea? Let's develop it into an intelligent solution together.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Tell us about your project",
    "contact.form.submit": "Send Inquiry",
    "footer.tagline": "From Idea to Intelligence",
    "footer.services.title": "Services",
    "footer.services.consulting": "AI Consulting",
    "footer.services.development": "Custom AI Development",
    "footer.services.automation": "Intelligent Automation",
    "footer.company.title": "Company",
    "footer.company.about": "About Us",
    "footer.company.portfolio": "Portfolio",
    "footer.company.contact": "Contact",
    "footer.copyright": "© 2024 TerraceAI Lab. All rights reserved.",
  },
  ko: {
    "page.title": "테라스AI 연구소 - 아이디어에서 지능으로",
    "nav.home": "홈",
    "nav.about": "소개",
    "nav.services": "서비스",
    "nav.portfolio": "포트폴리오",
    "nav.contact": "문의",
    "hero.from": "아이디어에서",
    "hero.idea": "아이디어를",
    "hero.to": "",
    "hero.intelligence": "지능으로",
    "hero.subtitle": "아이디어를 지능으로 변환하는 AI 개발 전문 기업",
    "hero.description":
      "지속가능한 기술과 혁신적인 AI 솔루션으로 비즈니스의 미래를 만들어갑니다.",
    "hero.start_project": "프로젝트 시작하기",
    "hero.view_portfolio": "포트폴리오 보기",
    "about.title": "지속가능한 AI 혁신",
    "about.subtitle": "기술과 자연의 조화로 만드는 지능형 솔루션",
    "about.card1.title": "지속가능한 기술",
    "about.card1.description":
      "환경을 생각하는 AI 솔루션으로 지속가능한 미래를 만듭니다.",
    "about.card2.title": "단계별 성장",
    "about.card2.description":
      "체계적이고 단계적인 접근으로 비즈니스를 성장시킵니다.",
    "about.card3.title": "AI 네트워크",
    "about.card3.description":
      "연결된 지능형 시스템으로 새로운 가치를 창출합니다.",
    "services.title": "AI 개발 서비스",
    "services.subtitle": "아이디어에서 지능형 솔루션까지",
    "services.service1.title": "AI 컨설팅",
    "services.service1.description":
      "비즈니스 요구사항 분석부터 AI 전략 수립까지",
    "services.service1.item1": "AI 가능성 평가",
    "services.service1.item2": "기술 로드맵 설계",
    "services.service1.item3": "ROI 분석",
    "services.service2.title": "맞춤형 AI 개발",
    "services.service2.description": "기업 특화 AI 모델 및 시스템 구축",
    "services.service2.item1": "머신러닝 모델 개발",
    "services.service2.item2": "데이터 파이프라인 구축",
    "services.service2.item3": "AI 서비스 배포",
    "services.service3.title": "지능형 자동화",
    "services.service3.description": "프로세스 자동화 및 최적화 솔루션",
    "services.service3.item1": "업무 프로세스 분석",
    "services.service3.item2": "자동화 시스템 설계",
    "services.service3.item3": "성능 모니터링",
    "portfolio.title": "성공 사례",
    "portfolio.subtitle": "다양한 산업군에서의 AI 혁신 스토리",
    "portfolio.project1.title": "스마트 팩토리 AI",
    "portfolio.project1.description":
      "제조업체의 생산성 40% 향상을 달성한 예측 유지보수 시스템",
    "portfolio.project1.tag2": "예측분석",
    "portfolio.project1.tag3": "자동화",
    "portfolio.project2.title": "고객 행동 분석 AI",
    "portfolio.project2.description":
      "개인화된 추천 시스템으로 전환율 60% 증가",
    "portfolio.project2.tag1": "추천시스템",
    "portfolio.project2.tag2": "빅데이터",
    "portfolio.project2.tag3": "개인화",
    "portfolio.project3.title": "지능형 문서 처리",
    "portfolio.project3.description":
      "자연어 처리 기술로 문서 처리 시간 80% 단축",
    "portfolio.project3.tag2": "문서자동화",
    "contact.title": "프로젝트를 시작해보세요",
    "contact.subtitle":
      "아이디어가 있으신가요? 함께 지능형 솔루션으로 발전시켜보세요.",
    "contact.form.name": "이름",
    "contact.form.email": "이메일",
    "contact.form.company": "회사명",
    "contact.form.message": "프로젝트에 대해 설명해주세요",
    "contact.form.submit": "문의하기",
    "footer.tagline": "아이디어에서 지능으로",
    "footer.services.title": "서비스",
    "footer.services.consulting": "AI 컨설팅",
    "footer.services.development": "맞춤형 AI 개발",
    "footer.services.automation": "지능형 자동화",
    "footer.company.title": "회사",
    "footer.company.about": "회사소개",
    "footer.company.portfolio": "포트폴리오",
    "footer.company.contact": "문의하기",
    "footer.copyright": "© 2024 테라스AI 연구소. 모든 권리 보유.",
  },
  ja: {
    "page.title": "テラスAI研究所 - アイデアからインテリジェンスへ",
    "nav.home": "ホーム",
    "nav.about": "会社概要",
    "nav.services": "サービス",
    "nav.portfolio": "ポートフォリオ",
    "nav.contact": "お問い合わせ",
    "hero.from": "アイデアから",
    "hero.idea": "アイデア",
    "hero.to": "から",
    "hero.intelligence": "インテリジェンス",
    "hero.subtitle": "アイデアをインテリジェンスに変換するAI開発専門企業",
    "hero.description":
      "持続可能な技術と革新的なAIソリューションでビジネスの未来を創造します。",
    "hero.start_project": "プロジェクト開始",
    "hero.view_portfolio": "ポートフォリオを見る",
    "about.title": "持続可能なAIイノベーション",
    "about.subtitle": "技術と自然の調和で創るインテリジェントソリューション",
    "about.card1.title": "持続可能な技術",
    "about.card1.description":
      "環境に配慮したAIソリューションで持続可能な未来を創造します。",
    "about.card2.title": "段階的成長",
    "about.card2.description":
      "体系的で段階的なアプローチでビジネスを成長させます。",
    "about.card3.title": "AIネットワーク",
    "about.card3.description":
      "接続されたインテリジェントシステムで新たな価値を創出します。",
    "services.title": "AI開発サービス",
    "services.subtitle": "アイデアからインテリジェントソリューションまで",
    "services.service1.title": "AIコンサルティング",
    "services.service1.description": "ビジネス要件分析からAI戦略策定まで",
    "services.service1.item1": "AI実現可能性評価",
    "services.service1.item2": "技術ロードマップ設計",
    "services.service1.item3": "ROI分析",
    "services.service2.title": "カスタムAI開発",
    "services.service2.description": "企業特化型AIモデル及びシステム構築",
    "services.service2.item1": "機械学習モデル開発",
    "services.service2.item2": "データパイプライン構築",
    "services.service2.item3": "AIサービス配備",
    "services.service3.title": "インテリジェント自動化",
    "services.service3.description": "プロセス自動化及び最適化ソリューション",
    "services.service3.item1": "業務プロセス分析",
    "services.service3.item2": "自動化システム設計",
    "services.service3.item3": "パフォーマンス監視",
    "portfolio.title": "成功事例",
    "portfolio.subtitle": "様々な産業での AI イノベーションストーリー",
    "portfolio.project1.title": "スマートファクトリー AI",
    "portfolio.project1.description":
      "製造業の生産性40%向上を達成した予測保守システム",
    "portfolio.project1.tag2": "予測分析",
    "portfolio.project1.tag3": "自動化",
    "portfolio.project2.title": "顧客行動分析 AI",
    "portfolio.project2.description":
      "パーソナライズド推奨システムで転換率60%増加",
    "portfolio.project2.tag1": "推奨システム",
    "portfolio.project2.tag2": "ビッグデータ",
    "portfolio.project2.tag3": "パーソナライゼーション",
    "portfolio.project3.title": "インテリジェント文書処理",
    "portfolio.project3.description": "自然言語処理技術で文書処理時間80%短縮",
    "portfolio.project3.tag2": "文書自動化",
    "contact.title": "プロジェクトを始めましょう",
    "contact.subtitle":
      "アイデアをお持ちですか？一緒にインテリジェントソリューションに発展させましょう。",
    "contact.form.name": "お名前",
    "contact.form.email": "メールアドレス",
    "contact.form.company": "会社名",
    "contact.form.message": "プロジェクトについて説明してください",
    "contact.form.submit": "お問い合わせ",
    "footer.tagline": "アイデアからインテリジェンスへ",
    "footer.services.title": "サービス",
    "footer.services.consulting": "AIコンサルティング",
    "footer.services.development": "カスタムAI開発",
    "footer.services.automation": "インテリジェント自動化",
    "footer.company.title": "会社",
    "footer.company.about": "会社概要",
    "footer.company.portfolio": "ポートフォリオ",
    "footer.company.contact": "お問い合わせ",
    "footer.copyright": "© 2024 テラスAI研究所. 全著作権所有.",
  },
};

// Language management
class LanguageManager {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }

    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    return translations[browserLang] ? browserLang : "en";
  }

  init() {
    this.updateLanguageDisplay();
    this.translatePage();
    document.documentElement.lang = this.currentLanguage;
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem("selectedLanguage", lang);
      document.documentElement.lang = lang;
      this.updateLanguageDisplay();
      this.translatePage();
    }
  }

  updateLanguageDisplay() {
    const currentLangElement = document.getElementById("currentLanguage");
    if (currentLangElement) {
      const langNames = { en: "EN", ko: "한국어", ja: "日本語" };
      currentLangElement.textContent = langNames[this.currentLanguage];
    }

    // Update language option states
    document.querySelectorAll(".language-option").forEach((option) => {
      option.classList.toggle(
        "active",
        option.dataset.lang === this.currentLanguage
      );
    });
  }

  translatePage() {
    const currentTranslations = translations[this.currentLanguage];

    // Translate elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (currentTranslations[key]) {
        element.textContent = currentTranslations[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (currentTranslations[key]) {
        element.placeholder = currentTranslations[key];
      }
    });

    // Update page title
    if (currentTranslations["page.title"]) {
      document.title = currentTranslations["page.title"];
    }
  }
}

// Theme management
class ThemeManager {
  constructor() {
    this.currentTheme = this.detectTheme();
    this.init();
  }

  detectTheme() {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  init() {
    this.applyTheme();
    this.updateThemeDisplay();
  }

  toggle() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("selectedTheme", this.currentTheme);
    this.applyTheme();
    this.updateThemeDisplay();
  }

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.currentTheme);
  }

  updateThemeDisplay() {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      const sunIcon = themeToggle.querySelector(".sun-icon");
      const moonIcon = themeToggle.querySelector(".moon-icon");

      if (this.currentTheme === "dark") {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      }
    }
  }
}

// Main application
document.addEventListener("DOMContentLoaded", function () {
  // Initialize managers
  const languageManager = new LanguageManager();
  const themeManager = new ThemeManager();

  // Language selector functionality
  const languageToggle = document.getElementById("languageToggle");
  const languageDropdown = document.getElementById("languageDropdown");

  if (languageToggle && languageDropdown) {
    languageToggle.addEventListener("click", function () {
      languageDropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !languageToggle.contains(e.target) &&
        !languageDropdown.contains(e.target)
      ) {
        languageDropdown.classList.remove("active");
      }
    });

    // Language option handlers
    document.querySelectorAll(".language-option").forEach((option) => {
      option.addEventListener("click", function () {
        const selectedLang = this.dataset.lang;
        languageManager.setLanguage(selectedLang);
        languageDropdown.classList.remove("active");
      });
    });
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      themeManager.toggle();
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          mobileMenuBtn.classList.remove("active");
        }
      }
    });
  });

  // Header background on scroll
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = "0 2px 20px var(--card-shadow)";
    } else {
      header.style.boxShadow = "none";
    }

    lastScroll = currentScroll;
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".card, .service-card, .portfolio-item, .hero-text, .hero-visual"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const requiredFields = this.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "#ef4444";
        } else {
          field.style.borderColor = "var(--border-color)";
        }
      });

      if (isValid) {
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        console.log("Form submitted:", formObject);

        // Show success message based on current language
        const messages = {
          en: "Your inquiry has been sent successfully. We will contact you soon.",
          ko: "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.",
          ja: "お問い合わせが正常に送信されました。近日中にご連絡いたします。",
        };
        alert(messages[languageManager.currentLanguage] || messages.en);
        this.reset();
      } else {
        const errorMessages = {
          en: "Please fill in all required fields.",
          ko: "필수 필드를 모두 입력해주세요.",
          ja: "必須フィールドをすべて入力してください。",
        };
        alert(
          errorMessages[languageManager.currentLanguage] || errorMessages.en
        );
      }
    });
  }

  // Dynamic network animation
  function animateNetworkConnections() {
    const connections = document.querySelectorAll(".connection");

    connections.forEach((connection, index) => {
      connection.style.strokeDasharray = "5 5";
      connection.style.strokeDashoffset = "0";
      connection.style.animation = `flow 3s infinite ${index * 0.5}s`;
    });
  }

  // Initialize network animation
  setTimeout(animateNetworkConnections, 1000);

  // Enhanced button interactions
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(0) scale(0.98)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-2px) scale(1)";
    });
  });

  // Add loading animation
  document.body.classList.add("loaded");

  // System theme preference listener
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("selectedTheme")) {
        themeManager.currentTheme = e.matches ? "dark" : "light";
        themeManager.applyTheme();
        themeManager.updateThemeDisplay();
      }
    });
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
