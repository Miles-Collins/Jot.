import { ProxyState } from "../AppState.js";
import { JotNote } from "../Models/JotNote.js";
import { saveState } from "../Utils/Store.js";

class JotNotesService {
  createJotNote(newJotNote) {
    console.log("creating jot note in the service", newJotNote);
    ProxyState.jotNotes = [...ProxyState.jotNotes, new JotNote(newJotNote)];
    console.log(ProxyState.jotNotes);
    saveState("jotNotes", ProxyState.jotNotes);
  }

  deleteJotNote(id) {
    console.log("deleting jot note", id);
    ProxyState.jotNotes = ProxyState.jotNotes.filter(
      (jotNote) => jotNote.id != id
    );
  }
}

export const jotNotesService = new JotNotesService();
