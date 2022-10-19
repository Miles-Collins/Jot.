import { generateId } from "../Utils/generateId.js";

export class Folder {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
  }

  get folderTemplate() {
    return `
    <div class="col-12 selectable rounded" onclick="app.folderController.setActiveFolder('${this.id}')">
      <div class="fs-4">
        <p class="my-0">${this.title}</p>
      </div>
    </div>
    `;
  }
}
