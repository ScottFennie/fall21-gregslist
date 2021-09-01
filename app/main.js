import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { JobController } from "./Controllers/JobsController.js";

class App {
    carsController = new CarsController()
    housesController = new HousesController()

    jobsController = new JobController()
}

window["app"] = new App();