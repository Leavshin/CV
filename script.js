// JavaScript pour rendre le CV dynamique

// Fonction pour afficher les sections avec une transition en fondu enchaîné
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".z-section");
    sections.forEach((section, index) => {
        section.style.opacity = "0"; // Définir l'opacité initiale à 0 pour créer l'effet de fondu enchaîné
        section.style.transition = "opacity 1s ease-in-out"; // Ajout de la transition
        section.style.transitionDelay = (index * 0.5) + "s"; // Ajout d'un délai de transition pour créer l'effet en Z
    });

    // Affichage progressif des sections avec un léger décalage
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
        });
    }, 100);
});


// Fonction pour les animations au survol des titres de section
let sections = document.querySelectorAll(".z-section");
sections.forEach(section => {
    section.addEventListener("mouseover", function() {
        this.classList.add("hovered");
    });
    section.addEventListener("mouseout", function() {
        this.classList.remove("hovered");
    });
});

// Fonction pour l'interactivité des compétences
document.addEventListener("DOMContentLoaded", function() {
    let competences = document.getElementById("competences");
    competences.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "LI") {
            // let description = event.target.getAttribute("data-description");
            // let projects = event.target.getAttribute("data-projects");
            // Animation au survol
            event.target.style.transform = "scale(1.1)";
            // Affichage des détails supplémentaires
            // let details = document.createElement("div");
            // details.classList.add("competence-details");
            // details.innerHTML = "<h3>Détails de la compétence</h3><p>" + description + "</p><h4>Projets liés :</h4><p>" + projects + "</p>";
            // event.target.appendChild(details);
        }
    });
    competences.addEventListener("mouseout", function(event) {
        if (event.target.tagName === "LI") {
            // Animation de retour à la taille normale
            event.target.style.transform = "scale(1)";
            // Suppression des détails supplémentaires
            let details = event.target.querySelector(".competence-details");
            if (details) {
                details.remove();
            }
        }
    });
});

// Effets de parallaxe (à ajouter si nécessaire)
window.addEventListener("scroll", function() {
    let parallaxElements = document.querySelectorAll(".parallax");
    for (let element of parallaxElements) {
        let parallaxRatio = element.getAttribute("data-parallax");
        let scrolled = window.scrollY;
        let yPos = -(scrolled * parallaxRatio);
        element.style.transform = "translate3d(0px, " + yPos + "px, 0px)";
    }
});

// Ajout d'un gestionnaire d'événements pour chaque titre de section
window.addEventListener("DOMContentLoaded", () => {
    // Sélection de tous les titres de section
    let accordionTitles = document.querySelectorAll(".accordion-title");
    
    // Boucle à travers chaque titre de section
    accordionTitles.forEach(title => {
        // Ajout d'un écouteur d'événements au clic sur chaque titre
        title.addEventListener("click", function() {
            // Sélection de la section suivante (le contenu de l'accordéon)
            let accordionContent = this.nextElementSibling;
            
            // Basculement de la classe 'hidden' pour afficher ou masquer le contenu de l'accordéon
            accordionContent.classList.toggle("hidden");
            
            // Basculement de la classe 'accordion-active' pour activer ou désactiver l'accordéon
            accordionContent.parentElement.classList.toggle("accordion-active");
        });
    });
});
