class UI {
    constructor() {
        this.description = document.querySelector('#description')
        this.temp =  document.querySelector('#temp')
        this.city =  document.querySelector('#location')
        this.humidity = document.querySelector('#humidity')
        this.wind = document.querySelector('#wind')
        this.pressure = document.querySelector('#pressure')
        this.visiblity = document.querySelector('#visibility')

    }
    drawWeather(data) {
        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        let description = data.weather[0].description;
        let humidity = data.main.humidity
        let windspeed = data.wind.speed
        let winddeg = data.wind.deg
        let pressure = data.main.pressure
        let visibility = data.visibility
        let locationicon = data.weather[0].icon;



        this.description.innerHTML = description + `<img src="icons/${icon}.png">`;
        this.temp.innerHTML = celcius + `&deg;`;
        this.city.innerHTML = data.name;
        this.humidity.innerHTML = 'humidity ' + humidity + '%'
        this.wind.innerHTML = winddegree(winddeg) + ' ' +windspeed + ' m/s'
        this.pressure.innerHTML = pressure + ' psi'
        this.visiblity.innerHTML = visibility / 1000 + ' km'
    }
}
function winddegree(d) {
    let directions = ['Northerly', 'North Easterly', 'Easterly', 'South Easterly', 'Southerly', 'South Westerly', 'Westerly', 'North Westerly'];

    d += 22.5;

    if (d < 0)
        d = 360 - Math.abs(d) % 360;
    else
        d = d % 360;

    let w = parseInt(d / 45);
    return `${directions[w]}`;
}