import { generateId } from "../Utils/generateId.js";

export class Title {
  constructor(data) {
    (this.id = data.id || generateId()),
      (this.title = data.title),
      (this.body = data.body);
  }

  get titleTemplate() {
    return `
    <div class="col-12">
      <div class="row">
        <div class="col-12" onclick="app.titlesController.setActiveNote('${this.id}')">${this.title}</div>      
      </div>
    </div>
    `;
  }

  get noteTemplate() {
    return `
    <div class="col-12">
      <div class="row">
        <div class="col-6">${this.title}</div>
        <div class="col-3">
          <button class="btn btn-primary">Edit</button>
        </div>
        <div class="col-3">
          <button class="btn btn-primary">Delete</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">${this.body}</div>
      </div>
    </div>
    `;
  }

  get activeNote() {
    // let template = "";
    // template += ProxyState.activeNote;
    // document.getElementById("note").innerHTML = template;
    // console.log()
  }
}
