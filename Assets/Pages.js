// Sélectionner la barre de recherche et les éléments à filtrer
const searchInput = document.getElementById('search-input');
const pagesItem = document.querySelectorAll('.pages-item');

// Ajouter un écouteur d'événement pour détecter les saisies
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase(); // Récupérer la valeur saisie en minuscules

  pagesItems.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase(); // Récupérer le titre de l'élément
    if (title.includes(query)) {
      item.style.display = 'block'; // Afficher l'élément s'il correspond à la recherche
    } else {
      item.style.display = 'none'; // Masquer l'élément s'il ne correspond pas
    }
  });
});