import { ProxyState } from "../AppState.js";
import { folderService } from "../Services/FolderService.js";
import { Pop } from "../Utils/Pop.js";
import { loadState } from "../Utils/Store.js";

function _drawFolders() {
  let template = "";
  let folders = ProxyState.folders;
  folders.forEach((f) => (template += f.folderTemplate));
  // @ts-ignore
  document.getElementById("folders").innerHTML = template;
}
export class FolderController {
  constructor() {
    ProxyState.on("folders", _drawFolders);
    _drawFolders();
    loadState("folder", ProxyState.folders);
  }

  createFolder() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      let form = window.event?.target;
      // @ts-ignore
      let newFolder = {
        // @ts-ignore
        title: form.title.value,
      };
      folderService.createFolder(newFolder);
      Pop.toast("Folder Created!", "success");
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.log("new folder", error);
    }
  }

  setActiveFolder(folderBody) {
    try {
      folderService.setActiveFolder(folderBody);
    } catch (error) {
      console.log("[Setting Active Folder]", error);
    }
  }
}
