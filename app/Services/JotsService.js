import { ProxyState } from "../AppState.js";
import { Jot } from "../Models/Jot.js";
import { saveState } from "../Utils/Store.js";

class JotsService {
  createJot(newJot) {
    ProxyState.jots = [...ProxyState.jots, new Jot(newJot)];
    console.log("creating a new jot", ProxyState.jots);
    saveState("jots", ProxyState.jots);
  }

  activeJot(selectedJot) {
    let activeJot = ProxyState.jots.find((j) => j.title == selectedJot);
    if (!activeJot) {
      return;
    }
    ProxyState.activeJot = activeJot;
    console.log("active jot", ProxyState.activeJot);
  }

  deleteJot(id) {
    ProxyState.jots = ProxyState.jots.filter((j) => j.id != id);
    // TODO reset the AppState after deleting a jot
    ProxyState.activeJot = ProxyState.activeJot;
  }
}

export const jotsService = new JotsService();
