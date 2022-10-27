class Weather {
    constructor(city) {
        this.city = city
        this.key = 'b97f23532fee00d95139acc44e7de5c9'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await response.json()
        console.log(responceData)
        return responceData
    }

    changeCity(city){
        this.city = city
    }
}