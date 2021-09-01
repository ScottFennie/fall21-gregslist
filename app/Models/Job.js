import { generateId } from "../Utils/generateId.js"

export class Job {
    constructor(jobData) {
        this.id = jobData.id || generateId()
        this.title = jobData.title
        this.pay = jobData.pay
        this.description = jobData.description
        this.startdate = jobData.startdate
        this.img = jobData.img
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span>${this.title} needed! ${this.startdate}</span>
                <span>$${this.pay}/hr</span>
              </h5>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
    }


}