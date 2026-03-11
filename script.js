// Texte à écrire
const text = "Développeur & Étudiant en Informatique";
let index = 0;
let repeatCount = 0;
const maxRepeats = 5;
const colors = ["#e63946", "#ff4d4d", "#ffffff", "#b22222", "#ff1a1a"];

function typeWriter() {
  const typingElement = document.querySelector(".typing-text span");
  if (typingElement && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    repeatCount++;
    if (repeatCount < maxRepeats) {
      index = 0;
      typingElement.textContent = "";
      typingElement.style.color = colors[repeatCount % colors.length];
      setTimeout(typeWriter, 1000);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text span");
  if (typingElement) typingElement.style.color = colors[0];
  typeWriter();
});

// Animation photo
document.addEventListener("DOMContentLoaded", () => {
  const photo = document.querySelector(".photo-animate");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
    } else{
      entry.target.classList.remove("schow");
    }
   });
  }, { threshold: 0.2 });
  if (photo) observer.observe(photo);
});

// Animation cartes
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));
});

// Gestion menu hamburger
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".menu li a");

  if (menuToggle && menu) {
    // ouvrir/fermer
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active"); // change couleur quand menu ouvert
    });

    // fermer automatiquement quand on clique sur un lien
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.classList.remove("active"); // hamburger redevient normal
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollDown = document.getElementById("scroll-down");
  const scrollUp = document.getElementById("scroll-up");

  // Flèche vers le bas → scroll vers la section suivante
  if(scrollDown){
    scrollDown.addEventListener("click", () => {
      // Trouver la hauteur de la fenêtre
      const windowHeight = window.innerHeight;
      // Descendre d'une "page" (hauteur de l'écran)
      window.scrollBy({ top: windowHeight, behavior: "smooth" });
    });
  }

  // Flèche vers le haut → retour accueil
  if(scrollUp){
    scrollUp.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Gestion apparition/disparition
  window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // Flèche vers le bas disparaît en bas de page
    if (scrollTop + windowHeight >= scrollHeight - 10) {
      scrollDown.classList.add("hidden");
    } else {
      scrollDown.classList.remove("hidden");
    }

    // Flèche vers le haut apparaît après avoir scrollé un peu
    if (scrollTop > 100) {
      scrollUp.classList.remove("hidden");
    } else {
      scrollUp.classList.add("hidden");
    }
  });
});

// Quand on scrolle jusqu'à la section compétences
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".progress");
  const section = document.getElementById("competences");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // ✅ quand la section apparaît → lance animation
        skills.forEach(skill => {
          if (skill.classList.contains("html")) skill.style.setProperty("--target-width", "45%");
          if (skill.classList.contains("css")) skill.style.setProperty("--target-width", "20%");
          if (skill.classList.contains("js")) skill.style.setProperty("--target-width", "20%");
          if (skill.classList.contains("python")) skill.style.setProperty("--target-width", "15%");

          skill.style.animation = "fill 3s forwards";
        });
      } else {
        // ✅ quand la section disparaît → reset
        skills.forEach(skill => {
          skill.style.animation = "none";
          skill.style.width = "0";
        });
      }
    });
  }, { threshold: 0.3 }); // déclenche quand ~30% visible

  observer.observe(section);
});

