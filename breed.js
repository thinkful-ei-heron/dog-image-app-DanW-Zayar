function init() {
  getBreedList();
  handleBreedSubmit();
}

function getBreedList() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => getSelectHTML(data))
    .catch(err => console.log('Something went wrong: ' + err));
}

function getSelectHTML(data) {
  let html = '';
  console.log(data);
  Object.keys(data.message).forEach(breed => (html += `<option value="${breed}">${breed}</option>`));
  renderBreedFormHTML(html);
}

function renderBreedFormHTML(html) {
  $('.breeds').html(html);
}

const handleBreedSubmit = function() {
  $('.js-breed').submit(event => {
    event.preventDefault();
    let breed = $('.breeds').val();
    console.log(breed);
    fetchDogBreedURL(breed);
  });
};

const fetchDogBreedURL = function(breed) {
  let url = `https://dog.ceo/api/breed/${breed}/images/random`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getBreedImageHTML(data);
    })
    .catch(error => console.log(error));
};

const getBreedImageHTML = function(data) {
  let html = `<image src=${data.message}>`;
  renderBreedImage(html);
};

const renderBreedImage = function(imageHTML) {
  $('.single-breed').html(imageHTML);
};

$(init);
