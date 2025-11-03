// Typed name
window.addEventListener("DOMContentLoaded", () => {
  const text = "João Pedro Helbel";
  const el = document.getElementById("typing-animation");
  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 90);
    }
  };
  type();
});

// Smooth scroll for in-page links
document.querySelectorAll('a.nav-link[href^="#"], .back-to-top').forEach(a => {
  a.addEventListener("click", e => {
    const targetId = a.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      // close offcanvas if open
      const offcanvasEl = document.getElementById("offcanvasNav");
      if (offcanvasEl?.classList.contains("show")) bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
    }
  });
});

// Buttons
const cvPath = "img/Curriculo.Joao_Helbel.pdf"; // mantém seu arquivo
function downloadCV(){
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "Curriculo_Joao_Helbel.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
["downloadBtn","downloadBtnMobile","downloadBtnHero"].forEach(id=>{
  document.getElementById(id)?.addEventListener("click", downloadCV);
});
document.getElementById("sayHello")?.addEventListener("click", () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});

// Active section highlighting
const sections = ["home","about","skills","projects","experience","contact"].map(id => document.getElementById(id)).filter(Boolean);
const navLinks = [...document.querySelectorAll(".nav-link")];
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(l => {
        const href = l.getAttribute("href") || "";
        l.classList.toggle("active", href === `#${id}`);
      });
    }
  });
},{ rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });
sections.forEach(sec => io.observe(sec));

// Contact form (front-end only)
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }
    // Aqui você integra com um backend/EmailJS se quiser.
    alert("Thanks for your message! I’ll get back to you soon.");
    form.reset();
    form.classList.remove("was-validated");
  }, false);
})();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== utilidades rápidas que já existiam/ajudam =====
document.getElementById("year").textContent = new Date().getFullYear();

const sayHelloBtn = document.getElementById("sayHello");
if (sayHelloBtn) {
  sayHelloBtn.addEventListener("click", () => {
    window.location.href = "mailto:jp27helbel@gmail.com?subject=Olá%20João!";
  });
}

// ===== dicionário de traduções =====
const i18n = {
  en: {
    meta: { title: "João Pedro Helbel — Portfolio" },
    nav: {
      brand: "Helbel",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      social: "Social",
      linkedin: "LinkedIn",
      github: "GitHub",
      download: "Download CV",
      language: "Language",
    },
    hero: {
      hello: "Hello, I'm",
      sub: "Full stack developer · Java · Python · R · Tableau · Excel",
      sayHello: "Say hello",
      download: "Download CV",
      typing: [
        "João Pedro Helbel",
      ],
    },
    about: {
      title: "About",
      text:
        "I’m <strong>João Pedro Helbel</strong>, a developer focused on building clean, data-driven experiences. " +
        "I work across the stack with <strong>JavaScript/TypeScript</strong>, <strong>Python</strong> and " +
        "<strong>Java (Spring Boot)</strong>, and I love turning datasets into dashboards and insights. " +
        "I’m currently leveling up in <strong>data analytics</strong> and crafting UIs with performance and accessibility in mind.",
      li1: "🏗 Full-stack foundations: APIs, SQL/ETL, dashboards",
      li2: "📊 Data viz: Chart.js, Tableau, QuickSight",
      li3: "☁️ Cloud & Devops: Git/GitHub, Docker, CI/CD",
    },
    skills: {
      title: "Skills",
      subtitle: "Main technologies and tools I use on a daily basis.",
    },
    projects: {
      title: "Projects",
      subtitle: "A few highlights. More on my GitHub.",
    },
    proj: {
      btn: { repo: "Repository", link: "Open site" },
      smart: {
        title: "Smart Building Dashboard",
        desc:
          "IoT presence sensors + digital twin for <strong>Absolut Technologies</strong>. " +
          "ETL with Python/Flask + SQLAlchemy; viz with Chart.js.",
      },
      retail: {
        title: "Retail BI Pipeline",
        desc:
          "Case solution with star schema, Python ETL, and executive KPIs (CR5/HHI, Top-N, average ticket).",
      },
      negrana: {
        title: "Negrana",
        desc:
          "Financial education platform: Figma prototypes and landing page implemented in HTML/CSS/JS.",
      },
      emg: {
        title: "EMG Sensor",
        desc:
          "EMGods: muscle monitoring with EMG sensors, Spring Boot backend, and an interactive dashboard.",
      },
      diet: {
        title: "DietController",
        desc:
          "Nutrition tracking app with Next.js + React: auth, onboarding questionnaires, and a calorie calculator.",
      },
      hack: {
        title: "Hackathons",
        desc:
          "Ambev (street vendors ecosystem) and Green Hackathon (sustainability) — rapid prototyping and teamwork.",
      },
    },
    exp: {
      title: "Experience",
      item1: {
        title: "MarTech",
        period: "02/2024 – 02/2025",
        desc: "Applied data science in digital marketing campaigns, focusing on analytics and performance insights.",
      },
      item2: {
        title: "Experimental laboratory",
        period: "06/2024 – 06/2025",
        desc: "Collaborative academic projects integrating business, technology, and innovation with real-world challenges.",
      },
      item3: {
        title: "Programming Lab",
        period: "06/2024 – 06/2025",
        desc: "Hands-on experience in algorithms, data structures, and full-stack development using Java and Python.",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s build something great together.",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      placeholder: {
        name: "Your name",
        email: "your@email.com",
        message: "Type your message...",
      },
      err: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        message: "Please write a message.",
      },
    },
    pill: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      copy: "© <span id=\"year\"></span> João Pedro Helbel. All rights reserved.",
      backTop: "↑ Back to top",
    },
  },

  pt: {
    meta: { title: "João Pedro Helbel — Portfólio" },
    nav: {
      brand: "Helbel",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      social: "Redes",
      linkedin: "LinkedIn",
      github: "GitHub",
      download: "Baixar CV",
      language: "Idioma",
    },
    hero: {
      hello: "Olá, eu sou",
      sub: "Desenvolvedor full stack · Java · Python · R · Tableau · Excel",
      sayHello: "Dizer oi",
      download: "Baixar CV",
      typing: [
        "João Pedro Helbel"
      ],
    },
    about: {
      title: "Sobre",
      text:
        "Sou <strong>João Pedro Helbel</strong>, desenvolvedor focado em criar experiências limpas e orientadas a dados. " +
        "Atuo no stack com <strong>JavaScript/TypeScript</strong>, <strong>Python</strong> e " +
        "<strong>Java (Spring Boot)</strong>, e adoro transformar dados em dashboards e insights. " +
        "No momento, estou evoluindo em <strong>data analytics</strong> e criando UIs com foco em performance e acessibilidade.",
      li1: "🏗 Fundamentos full-stack: APIs, SQL/ETL, dashboards",
      li2: "📊 Visualização de dados: Chart.js, Tableau, QuickSight",
      li3: "☁️ Cloud & DevOps: Git/GitHub, Docker, CI/CD",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Principais tecnologias e ferramentas que uso no dia a dia.",
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns destaques. Veja mais no meu GitHub.",
    },
    proj: {
      btn: { repo: "Repositório", link: "Abrir site" },
      smart: {
        title: "Smart Building Dashboard",
        desc:
          "Sensores de presença IoT + gêmeo digital para a <strong>Absolut Technologies</strong>. " +
          "ETL com Python/Flask + SQLAlchemy; visualização com Chart.js.",
      },
      retail: {
        title: "Pipeline de BI em Varejo",
        desc:
          "Case com esquema estrela, ETL em Python e KPIs executivos (CR5/HHI, Top-N, ticket médio).",
      },
      negrana: {
        title: "Negrana",
        desc:
          "Plataforma de educação financeira: protótipos em Figma e landing page em HTML/CSS/JS.",
      },
      emg: {
        title: "Sensor EMG",
        desc:
          "EMGods: monitoramento muscular com sensores EMG, backend em Spring Boot e dashboard interativo.",
      },
      diet: {
        title: "DietController",
        desc:
          "App de acompanhamento nutricional com Next.js + React: autenticação, onboarding e calculadora de calorias.",
      },
      hack: {
        title: "Hackathons",
        desc:
          "Ambev (ecossistema de ambulantes) e Green Hackathon (sustentabilidade) — prototipagem rápida e trabalho em equipe.",
      },
    },
    exp: {
      title: "Experiência",
      item1: {
        title: "MarTech",
        period: "02/2024 – 02/2025",
        desc: "Data science aplicado em campanhas de marketing digital, com foco em analytics e performance.",
      },
      item2: {
        title: "Laboratório experimental",
        period: "06/2024 – 06/2025",
        desc: "Projetos acadêmicos colaborativos integrando negócios, tecnologia e inovação com desafios reais.",
      },
      item3: {
        title: "Laboratório de Programação",
        period: "06/2024 – 06/2025",
        desc: "Prática em algoritmos, estruturas de dados e desenvolvimento full-stack com Java e Python.",
      },
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos construir algo incrível juntos.",
    },
    form: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      placeholder: {
        name: "Seu nome",
        email: "seu@email.com",
        message: "Escreva sua mensagem...",
      },
      err: {
        name: "Por favor, informe seu nome.",
        email: "Por favor, informe um e-mail válido.",
        message: "Por favor, escreva uma mensagem.",
      },
    },
    pill: {
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      copy: "© <span id=\"year\"></span> João Pedro Helbel. Todos os direitos reservados.",
      backTop: "↑ Voltar ao topo",
    },
  },
};

// ===== aplica textos (data-i18n) =====
function applyI18nText(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n").split(".");
    let val = i18n[lang];
    for (const p of path) val = val?.[p];
    if (typeof val === "string") el.innerHTML = val;
  });
}

// ===== aplica atributos (data-i18n-attr="placeholder=form.placeholder.name;aria-label=form...") =====
function applyI18nAttrs(lang) {
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const pairs = el
      .getAttribute("data-i18n-attr")
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    pairs.forEach((pair) => {
      const [attr, key] = pair.split("=").map((s) => s.trim());
      const path = key.split(".");
      let val = i18n[lang];
      for (const p of path) val = val?.[p];
      if (typeof val === "string") el.setAttribute(attr, val);
    });
  });
}

// ===== título da aba e lang do <html> =====
function applyTitle(lang) {
  const titleEl = document.querySelector('title[data-i18n="meta.title"]') || document.querySelector("title");
  const val = i18n[lang].meta?.title;
  if (titleEl && val) titleEl.textContent = val;
}
function setHtmlLang(lang) {
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

// ===== animação de digitação (reinicia ao trocar idioma) =====
let typingTimer = null;
function startTypingAnimation(strings) {
  const target = document.getElementById("typing-animation");
  if (!target || !strings?.length) return;
  if (typingTimer) clearTimeout(typingTimer);

  let idx = 0, char = 0, deleting = false;
  function tick() {
    const current = strings[idx] || "";
    if (!deleting) {
      target.textContent = current.slice(0, char + 1);
      char++;
      if (char === current.length) {
        deleting = true;
        typingTimer = setTimeout(tick, 1400);
        return;
      }
    } else {
      target.textContent = current.slice(0, char - 1);
      char--;
      if (char === 0) {
        deleting = false;
        idx = (idx + 1) % strings.length;
      }
    }
    typingTimer = setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}
function restartTypingForLang(lang) {
  const arr = i18n[lang]?.hero?.typing || [];
  startTypingAnimation(arr);
}

// ===== troca principal de idioma =====
function setLanguage(lang) {
  const safe = lang === "pt" || lang === "en" ? lang : "en";
  localStorage.setItem("lang", safe);
  setHtmlLang(safe);
  applyI18nText(safe);
  applyI18nAttrs(safe);
  applyTitle(safe);
  restartTypingForLang(safe);

  // Atualiza o rótulo do dropdown de idioma, se existir
  const langTrigger = document.querySelector('.nav-link.dropdown-toggle[data-i18n="nav.language"]');
  if (langTrigger) langTrigger.textContent = i18n[safe].nav.language;
}

// ===== listeners do seletor de idioma =====
document.querySelectorAll(".lang-option").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage(btn.dataset.lang);
  });
});

// ===== inicialização =====
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
