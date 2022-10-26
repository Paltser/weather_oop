class LS {
    constructor() {
        this.defaultcity = 'Tartu'
        this.city
    }
    getCity(){
        if (localStorage.getItem('city')=== null){
            this.city = this.defaultcity
        }else{
            this.city = localStorage.getItem('city')
        }
        return this.city
    }

    setCity(city){
        localStorage.setItem('city', city)
    }
}