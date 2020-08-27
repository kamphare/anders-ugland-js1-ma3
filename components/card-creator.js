function createCard(name, rating, tags) {
  content.innerHTML += `<div class="card">
      <p class="name">Name: <b>${name}</b></p>
      <p class="rating">Rating: <b>${rating}</b></p>
      <p class="tags">Tags: <b>${tags}</b></p>
    </div>`;
}
