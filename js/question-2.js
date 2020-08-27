const content = document.querySelector('.content');
const loading = document.querySelector('.loading');
const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

document.querySelector('.loading__bar').classList.remove('start');

function handleData(data) {
  let name;
  let rating;
  let tags;

  loading.remove();

  for (i = 0; i < 8; i++) {
    name = data[i].name;
    rating = data[i].rating;
    tags = data[i].tags.length;
    createCard(name, rating, tags);
  }
}

function fetchData() {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => handleData(data.results));
  } catch (error) {
    handleError();
  }
}

fetchData();
