import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HouseServices {

    addHouse(houseData) {

        console.log("this is the adding house function")

        var testHouse = new House(houseData)

        ProxyState.houses = [...ProxyState.houses, testHouse]
    }
}

export const houseService = new HouseServices()