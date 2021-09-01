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
    }

    addHouse() {
        event.preventDefault()

        const form = event.target

        const houseData = {
            bedrooms: form.bedrooms.value,
            size: form.size.value,
            floors: form.floors.value,
            description: form.description.value,
            img: form.img.value,
            price: form.price.value



        }

        houseService.addHouse(houseData)
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

}