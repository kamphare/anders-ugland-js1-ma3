const content = document.querySelector('.content');

const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

function writeHTML(apiData) {
  apiData = apiData.results;
  let name;
  let rating;
  let tags;

  for (i = 0; i < 8; i++) {
    name = apiData[i].name;
    rating = apiData[i].rating;
    tags = apiData[i].tags.length;

    content.innerHTML += `<div class="game">
      <p class="name">Name: ${name}</p>
      <p class="rating">Rating: ${rating}</p>
      <p class="tags">Tags: ${tags}</p>
    </div>`;
  }
}

const games = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => writeHTML(data));
