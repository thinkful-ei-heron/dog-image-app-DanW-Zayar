





const getImageSrc = function (data) {
    let html = ``
    data.message.forEach(srcUrl => {
        html += renderRandomImages(srcUrl);
    })
}

const fetchRandomDogs = function (number = 3) {
    let url = `https://dog.ceo/api/breeds/image/random/${number}`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            getImageSrc(data)
        })
        .catch(error => console.log(error));
}

const renderRandomImages = function (imageSrc) {
    $('.random-images').html(
        `<img src="${imageSrc}">
        `
    );
}

const handleSubmit = function () {
    $('.js-random').submit(event => {
        event.preventDefault();
        let num = $('#number').val();
        console.log(num);
        fetchRandomDogs(num);
    })
}

$(handleSubmit)

