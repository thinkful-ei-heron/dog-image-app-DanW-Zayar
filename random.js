const handleSubmit = function() {
  $('.js-random').submit(event => {
    event.preventDefault();
    let num = $('#number').val();
    if (!num) num = 3;
    fetchRandomDogs(num);
  });
};

const fetchRandomDogs = function(number = 3) {
  let url = `https://dog.ceo/api/breeds/image/random/${number}`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getImageHTML(data);
    })
    .catch(error => console.log(error));
};

const getImageHTML = function(data) {
  let html = ``;
  data.message.forEach(srcUrl => {
    html += `<img src="${srcUrl}">`;
  });
  renderRandomImages(html);
};

const renderRandomImages = function(imageHTML) {
  $('.random-images').html(imageHTML);
};

$(handleSubmit);
