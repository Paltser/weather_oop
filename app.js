const ls = new LS()
const initcity = ls.getCity()
// weather object
const weather = new Weather(initcity)
const ui = new UI()
const form = document.querySelector('#change-city')
form.addEventListener('submit', changeWeather)

function changeWeather(event){
    const city = document.querySelector('#city-name').value
    weather.changeCity(city)
    document.querySelector('#city-name').value = ''
    ls.setCity(city)
    getWeather()
    event.preventDefault()
}

// get city weahter
function getWeather(){
    weather.getWeather()
        .then(data => {
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}
getWeather()