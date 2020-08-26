const content = document.querySelector('.content');
const loading = document.querySelector('.loading');
let fakeLoading;

document.querySelector('.loading__bar').classList.remove('start');

const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

function removeLoading() {
  fakeLoading = setTimeout(function () {
    loading.remove();
    fetchData();
  }, 1000);
}

function generateHTML(apiData) {
  apiData = apiData.results;
  let name;
  let rating;
  let tags;

  for (i = 0; i < 8; i++) {
    name = apiData[i].name;
    rating = apiData[i].rating;
    tags = apiData[i].tags.length;
    createCard(name, rating, tags);
    setTimeout(() => null, 300);
  }
}

function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => generateHTML(data));
}

removeLoading();
