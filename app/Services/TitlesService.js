import { Title } from "../Models/Title.js";
import { ProxyState } from "../AppState.js";

class TitlesService {
  createNoteTitle(newTitle) {
    ProxyState.titles = [...ProxyState.titles, new Title(newTitle)];
    console.log(ProxyState.titles);
  }

  setActiveNote(noteId) {
    let activeNote = ProxyState.titles.find((t) => t.id == noteId);

    if (!activeNote) {
      return;
    }
    ProxyState.activeNote = activeNote;
    console.log(ProxyState.activeNote);
  }
}

export const titlesService = new TitlesService();
