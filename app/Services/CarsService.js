import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"

// @ts-ignore
export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/cars'
})

class CarsService {
    async addCar(carData) {
        let res = await api.post('', carData)
        ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
    }

    async getCars() {
        let res = await api.get()

        ProxyState.cars = res.data.map(c => new Car(c))

        console.log("what is the car?", ProxyState.cars)

    }
    async deleteCar(carId) {
        await api.delete(carId)
        ProxyState.cars = ProxyState.cars.filter(c => c.id !== carId)
    }
}

// singleton pattern
export const carsService = new CarsService()