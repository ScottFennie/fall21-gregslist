import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/houses'
})

class HouseServices {

    async addHouse(housesData) {
        let res = await api.post('', housesData)
        ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    }

    async getHouses() {
        let res = await api.get()

        ProxyState.houses = res.data.map(h => new House(h))

    }
    async deleteHouse(houseId) {
        await api.delete(houseId)
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseId)
    }

}

export const houseService = new HouseServices()