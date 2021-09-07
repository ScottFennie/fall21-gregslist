import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
import { houseService } from "../Services/HouseServices.js"

function _drawHouses() {
    let template = ''
    ProxyState.houses.forEach(house => template += house.CardTemplate)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on("houses", _drawHouses)
        houseService.getHouses()
    }

    async addHouse() {
        event.preventDefault()

        const form = event.target

        const houseData = {
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            levels: form.levels.value,
            year: form.year.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
            price: form.price.value



        }

        await houseService.addHouse(houseData)
        document.getElementById('house-form').classList.toggle('visually-hidden')



        form.reset()
    }

    showHouses() {
        _drawHouses()
        document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
            // TODO build the house form
            // abstract it if you want
        document.getElementById('forms').innerHTML = getHouseFormTemplate()
    }

    toggleHouseForm() {
        document.getElementById('house-form').classList.toggle('visually-hidden')
    }
    async deleteHouse(houseId) {
        await houseService.deleteHouse(houseId)
    }

}