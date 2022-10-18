import { Jot } from "./Models/Jot.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = [];

  /** @type {import('./Models/Jot.js').Jot[]} */
  jots = [];

  /** @type {import('./Models/Jot.js').Jot | null} */
  activeJot = null;

  /** @type {import('./Models/JotNote.js').JotNote[]} */
  jotNotes = [];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
