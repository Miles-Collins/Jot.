import { ProxyState } from "../AppState.js";
import { Jot } from "../Models/Jot.js";

class JotsService {
  createJot(newJot) {
    ProxyState.jots = [...ProxyState.jots, new Jot(newJot)];
    console.log("creating a new jot", ProxyState.jots);
  }

  activeJot(selectedJot) {
    let activeJot = ProxyState.jots.find((j) => j.title == selectedJot);
    if (!activeJot) {
      return;
    }
    ProxyState.activeJot = activeJot;
    console.log("active jot", ProxyState.activeJot);
  }

  createJotNote(newJotNote) {
    ProxyState.jotNotes = [...ProxyState.jotNotes, new Jot(newJotNote)];
    console.log("creating a new jot note", ProxyState.jotNotes);
  }
}

export const jotsService = new JotsService();
