import { generateId } from "../Utils/generateId.js"

export class Job {
    constructor(jobData) {
        this.id = jobData.id || generateId()
        this.jobTitle = jobData.jobTitle
        this.rate = jobData.rate
        this.description = jobData.description
        this.company = jobData.company
        this.hours = jobData.hours
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span>${this.jobTitle} needed for ${this.hours} hours</span>
                <span>pays $${this.rate}</span>
                <span>Company:${this.company}</span>
              </h5>
              <p>${this.description}</p>
              <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
          </div>
        </div>
        `
    }


}