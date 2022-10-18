import { generateId } from "../Utils/generateId.js";

export class JotNote {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.date = new Date(data.date);
    this.body = data.body;
    this.jotId = data.jotId;
  }

  get Template() {
    return `
    <div class="col-12">
      <div class="row">
        <div class="col-6">
          <p>${this.title}</p>
        </div>
        <div class="col-6">
          <p>${this.date.toLocaleDateString("en-US")}</p>
        </div>
        <div class="col-12">
          <p>${this.body}</p>
        </div>
      </div>
    </div>
    `;
  }
}
