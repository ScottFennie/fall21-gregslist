import { ProxyState } from "../AppState.js"
import { getJobsFormTemplate } from "../forms/jobsform.js"
import { jobService } from "../Services/JobsServices.js"

function _drawJobs() {
    let template = ''
    ProxyState.jobs.forEach(job => template += job.CardTemplate)
    document.getElementById('listings').innerHTML = template
}

export class JobController {
    constructor() {
        ProxyState.on("jobs", _drawJobs)
        jobService.getJobs()
    }

    async addJob() {
        event.preventDefault()

        const form = event.target

        const jobData = {
            jobTitle: form.jobTitle.value,
            rate: form.rate.value,
            company: form.company.value,
            description: form.description.value,
            hours: form.hours.value



        }

        await jobService.addJob(jobData)

        document.getElementById('jobs-form').classList.toggle('visually-hidden')



        form.reset()
    }

    showJobs() {
        _drawJobs()
        document.getElementById('controls').innerHTML = `
      <button class="btn btn-primary" onclick="app.jobsController.toggleJobsForm()">Add Job</button>
    `
            // TODO build the house form
            // abstract it if you want
        document.getElementById('forms').innerHTML = getJobsFormTemplate()
    }

    toggleJobsForm() {
        document.getElementById('jobs-form').classList.toggle('visually-hidden')
    }

    async deleteJob(jobId) {
        await jobService.deleteJob(jobId)
    }
}