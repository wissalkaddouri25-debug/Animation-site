// Kaddouri Animation - Script Interaction

document.addEventListener("DOMContentLoaded", () => {
    console.log("Kaddouri Animation site is fully loaded and ready! 🚀");

    // 2. ANIMATION AUX BOUTONS (Hover effect avec JS si besoin)
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Nettoyer l'ancienne classe active
            document.querySelector("nav a.active")?.classList.remove("active");
            // Ajouter la classe au lien cliqué
            link.classList.add("active");
        });
    });
});