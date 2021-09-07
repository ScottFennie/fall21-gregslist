import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"

export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/jobs'
})

class JobServices {

    async addJob(jobsData) {
        let res = await api.post('', jobsData)
        ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    }

    async getJobs() {
        let res = await api.get()

        ProxyState.jobs = res.data.map(j => new Job(j))

    }

    async deleteJob(jobId) {
        await api.delete(jobId)
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobId)
    }
}

export const jobService = new JobServices()