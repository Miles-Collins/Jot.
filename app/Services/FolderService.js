import { ProxyState } from "../AppState.js";
import { Folder } from "../Models/Folder.js";
import { saveState } from "../Utils/Store.js";

class FolderService {
  getFolderById(id) {
    let folder = ProxyState.folders.find((f) => f.id == id);
    if (!folder) {
      return;
    }
    return folder;
  }
  setActiveFolder(folderId) {
    console.log(folderId);
    let activeFolder = this.getFolderById(folderId);
    if (!activeFolder) {
      return;
    }
    ProxyState.activeFolder = activeFolder;
    console.log("Active Folder)", ProxyState.activeFolder);
  }

  createFolder(folderBody) {
    console.log(folderBody);
    ProxyState.folders = [...ProxyState.folders, new Folder(folderBody)];
    saveState("folder", ProxyState.folders);
  }
}

export const folderService = new FolderService();
