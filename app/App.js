import { JotNotesController } from "./Controllers/JotNotesController.js";
import { JotsController } from "./Controllers/JotsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  jotsController = new JotsController();

  jotNotesController = new JotNotesController();
}

window["app"] = new App();
