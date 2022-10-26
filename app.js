// weather object
const weather = new Weather('Tartu')
const ui = new UI()

// get city weahter
function getWeather(){
    weather.getWeather()
        .then(data => {
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}
getWeather()