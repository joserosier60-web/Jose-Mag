// Texte à écrire
const text = "Développeur & Étudiant en Informatique";
let index = 0;
let repeatCount = 0;
const maxRepeats = 5; // nombre de répétitions

// Palette adaptée au thème (rouge/noir/blanc)
const colors = ["#e63946", "#ff4d4d", "#ffffff", "#b22222", "#ff1a1a"];

function typeWriter() {
  const typingElement = document.querySelector(".typing-text span");
  if (typingElement && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // vitesse d’écriture
  } else {
    // Quand le texte est fini
    repeatCount++;
    if (repeatCount < maxRepeats) {
      // Efface et recommence
      index = 0;
      typingElement.textContent = "";
      // Changer la couleur selon la répétition
      typingElement.style.color = colors[repeatCount % colors.length];
      setTimeout(typeWriter, 1000); // pause avant de recommencer
    }
  }
}

// Lancer l’effet quand la page est chargée
window.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text span");
  if (typingElement) {
    typingElement.style.color = colors[0]; // première couleur
  }
  typeWriter();
});
