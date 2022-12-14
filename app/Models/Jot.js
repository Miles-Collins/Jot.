import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Jot {
  constructor(data) {
    this.id = data.id || generateId();
    this.image = data.image;
    this.title = data.title;
    this.dateCreated = data.date;
    // Change this into a jotNote array
    // this.noteTitle = data.noteTitle;
    // this.noteBody = data.noteBody;
  }

  get jotTemplate() {
    return `
    <div class="col-12 align-items-center d-flex my-2" onclick="app.jotsController.activeJot('${this.title}')">
      <img class="${this.image}" alt="">
      <p class="mb-0">${this.title}</p>
    </div>
    `;
  }

  get ActiveJotNoteTemplate() {
    return `
    <div class="col-12">

      <div class="row mt-4">
        <div class="col-6">
          <h1 class="text-decoration-underline">${this.title}</h1>
        </div>
        <div class="col-6 text-end ">
          <button class="btn btn-danger" onclick="app.jotsController.deleteJot('${this.id}')">Delete Jot</button>
        </div>
      </div>

      <form class="row" id="form" onsubmit="app.jotNotesController.createJotNote('${this.id}')">
        <div class="col-4 my-3">
          <input class="form-control" name="title" id="name" type="text" placeholder="Jot Note Title...">
        </div>
        <div class="col-12 my-3">
          <textarea class="form-control" name="body" id="body" cols="30" rows="10" placeholder="Start your Jot..."></textarea>
        </div>
        <div class="col-12 text-end my-3">
          <button class="btn btn-primary" type="submit">Create Note</button>
        </div>
      </form>

      <div class="row">
        ${this.JotNoteTemplate}
      </div>

    </div>
    `;
  }

  get JotNoteTemplate() {
    let template = "";
    // let jotNotes = ProxyState.jotNotes.sort((a, b) => a.date - b.date);
    ProxyState.jotNotes
      .filter((jotNote) => jotNote.jotId == this.id)
      .forEach((jotNote) => (template += jotNote.Template));
    if (template) {
      return template;
    } else {
      return "<p>No Jot Notes yet!</p>";
    }
  }
}
