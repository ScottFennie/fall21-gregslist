import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
    /** @type {import('./Models/Car').Car[]} */
    /** @type {import('./Models/House').House[]} */
    /** @type {import('./Models/Job').Job[]} */
    cars = []
    houses = []

    jobs = []
}

export const ProxyState = new Proxy(new AppState(), {
    get(target, prop) {
        isValidProp(target, prop)
        return target[prop]
    },
    set(target, prop, value) {
        isValidProp(target, prop)
        target[prop] = value
        target.emit(prop, value)
        return true
    }
})