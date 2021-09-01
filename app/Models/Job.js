import { generateId } from "../Utils/generateId.js"

export class Job {
    constructor(houseData) {
        this.id = houseData.id || generateId()
        this.bedrooms = houseData.bedrooms
        this.size = houseData.size
        this.floors = houseData.floors
        this.description = houseData.description
        this.price = houseData.price
        this.img = houseData.img
    }
}