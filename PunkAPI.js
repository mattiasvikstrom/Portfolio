document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.beer__button')
    const container = document.querySelector('.container')
    const randomBeer = document.querySelector('.random__beer')
    const descriptionDisplay = document.querySelector('.descriptionDisplay')
    const beerImage = document.querySelector('.beerImage')

    function getData(e) {
    e.preventDefault()
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
        return response.json()
    })
    .then(data => {
        const name = data[0].name
        const description = data[0].description
        const img = document.createElement('img');
        img.src = data[0].image_url;   
        randomBeer.innerHTML = name
        descriptionDisplay.innerHTML = description
        beerImage.innerHTML = ""; /*fixade duplicering/addering av bilder på sidan*/
        if(img) {
        beerImage.append(img)
        }
    })
}
    button.addEventListener('click', getData)
})