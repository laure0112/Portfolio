function changeButtonColor() {
  var button = document.getElementById("changeColorButton");

  // Génération d'une couleur aléatoire
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Changement de la couleur du bouton
  button.style.backgroundColor = randomColor;
}

