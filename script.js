function setRating(n) {
  document
    .getElementsByClassName('current-rating')[0]
    .classList.remove('current-rating');
  document.getElementById(n).classList.add('current-rating');
  document.getElementById('final-rating').innerHTML = n;
}

function showResult() {
  document.getElementById('rating-state').classList.add('hidden');
  document.getElementById('thank-you-state').classList.remove('hidden');
}
