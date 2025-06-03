// Fonction pour passer à l'image suivante
function nextImage(carouselId) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll('.image-wrapper img');
  const label = carousel.querySelector('.label');
  const labels = Array.from(images).map(img => img.alt); // Récupère les alt des images
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  // Retirer la classe active de l'image actuelle
  images[currentIndex].classList.remove('active');

  // Passer à l'image suivante ou revenir à la première
  currentIndex = (currentIndex + 1) % images.length;

  // Ajouter la classe active à la nouvelle image
  images[currentIndex].classList.add('active');

  // Mettre à jour le label
  label.textContent = labels[currentIndex];
}

// Fonction pour revenir à l'image précédente
function prevImage(carouselId) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll('.image-wrapper img');
  const label = carousel.querySelector('.label');
  const labels = Array.from(images).map(img => img.alt); // Récupère les alt des images
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  // Retirer la classe active de l'image actuelle
  images[currentIndex].classList.remove('active');

  // Revenir à l'image précédente ou aller à la dernière
  currentIndex = (currentIndex - 1 + images.length) % images.length;

  // Ajouter la classe active à la nouvelle image
  images[currentIndex].classList.add('active');

  // Mettre à jour le label
  label.textContent = labels[currentIndex];
}

// Ajout des boutons de navigation
const carousel = document.getElementById('monCarousel');
const prevButton = document.createElement('button');
prevButton.textContent = '<-';
prevButton.onclick = () => prevImage('monCarousel');
carousel.parentNode.insertBefore(prevButton, carousel);

const nextButton = document.createElement('button');
nextButton.textContent = '->';
nextButton.onclick = () => nextImage('monCarousel');
carousel.parentNode.insertBefore(nextButton, carousel.nextSibling);