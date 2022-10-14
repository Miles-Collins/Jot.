import { TitlesController } from "./Controllers/TitlesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  titlesController = new TitlesController();
}

window["app"] = new App();
