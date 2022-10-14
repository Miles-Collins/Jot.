import { ProxyState } from "../AppState.js";
import { titlesService } from "../Services/TitlesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTitles() {
  let template = "";
  ProxyState.titles.forEach((t) => (template += t.titleTemplate));
  document.getElementById("title").innerHTML = template;
}

function _drawActiveNote() {
  let template = "";
  template += ProxyState.activeNote;
  document.getElementById("note").innerHTML = template;
  console.log();
}

export class TitlesController {
  constructor() {
    ProxyState.on("titles", _drawTitles);
    ProxyState.on("titles", _drawActiveNote);
    ProxyState.on("activeNote", _drawActiveNote);
    _drawTitles();
    _drawActiveNote();
  }

  newNote() {
    try {
      // console.log("titles controller");
      window.event?.preventDefault();
      let form = window.event?.target;
      let newNote = {
        title: form.title.value,
      };
      titlesService.createNoteTitle(newNote);
      Pop.toast("Note Created!", "success");
    } catch (error) {
      console.log("new note", error);
    }
  }

  setActiveNote(noteId) {
    try {
      titlesService.setActiveNote(noteId);
    } catch (error) {
      console.log("getting active note", error);
    }
  }
}
