import { ProxyState } from "../AppState.js";
import { jotsService } from "../Services/JotsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawJots() {
  let jots = ProxyState.jots;
  console.log("drawing jots", jots);
  let template = "";
  jots.forEach((j) => (template += j.jotTemplate));
  // @ts-ignore
  document.getElementById("jots").innerHTML = template;
}

function _drawActiveJot() {
  if (!ProxyState.activeJot) {
    return;
  }
  // @ts-ignore
  document.getElementById("activeJot").innerHTML =
    ProxyState.activeJot.ActiveJotNoteTemplate;
}

export class JotsController {
  constructor() {
    // console.log("Jots controller loaded");
    ProxyState.on("jots", _drawJots);
    ProxyState.on("activeJot", _drawActiveJot);
    ProxyState.on("jotNotes", _drawActiveJot);

    _drawJots();
  }

  newJot() {
    try {
      window.event?.preventDefault();
      let form = window.event?.target;
      // @ts-ignore
      let newJot = {
        // @ts-ignore
        title: form.title.value,
      };
      jotsService.createJot(newJot);
      Pop.toast("Jot Created!", "success");
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.log("new jot", error);
    }
  }

  activeJot(selectedJot) {
    try {
      jotsService.activeJot(selectedJot);
    } catch (error) {
      console.log("getting open Jot", error);
    }
  }

  async deleteJot(id) {
    if (await Pop.confirm()) {
      console.log("deleting jot", id);
      jotsService.deleteJot(id);
    }
  }
}
