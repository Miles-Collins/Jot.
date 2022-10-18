import { generateId } from "../Utils/generateId.js";

export class Jot {
  constructor(data) {
    this.id = data.id || generateId();
    this.image = data.image;
    this.title = data.title;
    this.noteTitle = data.noteTitle;
    this.noteBody = data.noteBody;
  }

  get jotTemplate() {
    return `
    <div class="col-12" onclick="app.jotsController.activeJot('${this.title}')">
      <img class="${this.image}" alt="">
      <p>${this.title}</p>
    </div>
    `;
  }

  get activeJotTemplate() {
    return `
    <div class="col-12">
      <p>${this.title}</p>
      <form action="" onsubmit="app.jotsController.newJotNote()">
        <input class="form-control" name="noteTitle" type="text" value="${this.noteTitle}" placeholder="Note Title">
        <textarea class="form-control" name="noteBody" id="" cols="30" rows="10" value="${this.noteBody}" placeholder="Start your Jot..."></textarea>
        <button class="btn btn-primary" type="submit">Create Note</button>
      </form>
    </div>
    `;
  }
}
