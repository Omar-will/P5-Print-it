const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

// Sélectionne tous les éléments avec la classe 'img__slider'
let img__slider = document.getElementsByClassName('img__slider');
// Stocke le nombre d'images dans la variable nbr__img
let nbr__img = img__slider.length;

// Initialise l'étape à 0
let etape = 0;

// Sélectionne tous les éléments avec la classe 'dot'
const dots = document.getElementsByClassName('dot');

// Fonction pour supprimer la classe 'active' de toutes les images
function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

// Fonction pour mettre à jour l'état du point actif
function mettreAJourPointActif() {
    for(let i = 0 ; i < dots.length ; i++) {
        if(i === etape) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}

// Fonction pour afficher l'image correspondant à l'étape actuelle
function afficherImageEtape() {
    enleverActiveImages(); // Supprime la classe 'active' de toutes les images
    img__slider[etape].classList.add('active'); // Ajoute la classe 'active' à l'image correspondant à l'étape actuelle
    mettreAJourPointActif(); // Met à jour l'état du point actif
  
    // Mettre à jour la tagline correspondante
    const taglineElement = document.querySelector('.slider .tagline'); // Sélectionne l'élément avec la classe 'tagline' dans le conteneur du slider
    taglineElement.innerHTML = slides[etape].tagLine; // Met à jour le contenu HTML de l'élément avec la tagline correspondant à l'étape actuelle
  }
  

// Fonction pour passer à l'étape suivante
function passerEtapeSuivante() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    afficherImageEtape();
}

// Fonction pour passer à l'étape précédente
function passerEtapePrecedente() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    afficherImageEtape();
}

// Événement de clic sur le bouton suivant
let suivant = document.querySelector('.suivant');
suivant.addEventListener('click', passerEtapeSuivante);

// Événement de clic sur le bouton précédent
let precedent = document.querySelector('.precedent');
precedent.addEventListener('click', passerEtapePrecedente);

// Fonction qui change l'image affichée à intervalles réguliers
let intervalID = setInterval(passerEtapeSuivante, 5000);

// Gestionnaire d'événements à chaque point (dot)
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        // Met à jour l'étape actuelle en fonction du point cliqué
        etape = i;
        afficherImageEtape();
        // Réinitialise l'intervalle de défilement automatique
        clearInterval(intervalID);
        intervalID = setInterval(passerEtapeSuivante, 5000);
    });
}
  // Sélectionne l'élément HTML avec la classe "slider"
  const sliderContainer = document.querySelector('.slider');
  // Parcours chaque diapositive dans le tableau "slides"
  slides.forEach((slide, index) => {
    // Crée un élément <img> pour afficher l'image de la diapositive
    const imageElement = document.createElement('img');
    imageElement.classList.add('img__slider'); // Ajoute une classe "img__slider" à l'élément
    imageElement.src = slide.image;// Définit la source de l'image
    imageElement.alt = 'Slide Image';// Définit l'attribut "alt" de l'image
   // Crée un élément <p> pour afficher la légende de la diapositive
    const textElement = document.createElement('p');
    textElement.innerHTML = slide.tagLine;// Définit le contenu HTML de l'élément <p>
    textElement.classList.add('tagline'); // Ajoute une classe "tagline" à l'élément pour le style, si nécessaire
   // Crée un conteneur <div> pour la diapositive
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('slide');// Ajoute une classe "slide" au conteneur
    if (index === 0) {
      slideContainer.classList.add('active'); // Ajoute la classe "active" si c'est la première diapositive
    }
  // Ajoute l'élément <img> et l'élément <p> au conteneur de la diapositive
    slideContainer.appendChild(imageElement);
    slideContainer.appendChild(textElement);
   // Ajoute le conteneur de la diapositive au conteneur principal du carrousel
    sliderContainer.appendChild(slideContainer);
  });
  

