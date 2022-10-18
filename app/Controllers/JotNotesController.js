import { jotNotesService } from "../Services/JotNotesService.js";
import { Pop } from "../Utils/Pop.js";

export class JotNotesController {
  constructor() {
    console.log("jot notes controller loaded");
  }

  createJotNote(jotId) {
    // @ts-ignore
    window.event.preventDefault();
    console.log("creating a jot note for a jot", jotId);
    let form = window.event?.target;
    let newJotNote = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      date: form.date.value,
      // @ts-ignore
      body: form.body.value,
      jotId: jotId,
    };
    console.log(newJotNote);
    jotNotesService.createJotNote(newJotNote);
    Pop.toast("New Jot Note Created!", "success");
  }

  async deleteJotNote(id) {
    if (await Pop.confirm()) {
      jotNotesService.deleteJotNote(id);
    }
  }
}
