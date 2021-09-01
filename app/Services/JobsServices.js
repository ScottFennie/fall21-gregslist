import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"

class JobServices {

    addJob(jobData) {

        console.log("this is the adding job function")

        var testJob = new Job(jobData)

        ProxyState.jobs = [...ProxyState.jobs, testJob]
    }
}

export const jobService = new JobServices()