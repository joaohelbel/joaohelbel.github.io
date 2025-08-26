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
