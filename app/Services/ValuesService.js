import { ProxyState } from "../AppState.js";
import { Value } from "../Models/Value.js";
import { saveState } from "../Utils/Store.js";

function save() {
  saveState("values", ProxyState.values);
}

class ValuesService {
  removeAll() {
    ProxyState.values = [];
    save();
  }
  addValue() {
    ProxyState.values = [
      ...ProxyState.values,
      new Value({ title: Math.round(Math.random() * 20) }),
    ];
    save();
  }

  /**
   * @param {string} id
   */
  removeValue(id) {
    ProxyState.values = ProxyState.values.filter((v) => v.id !== id);
    save();
  }
}

export const valuesService = new ValuesService();
