import {createElement} from '../utils.js';
export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstactComponent, only concrete one.`);
    }
    this._element = null;
  }
  getElement(x) {
    if (!this._element) {
      this._element = createElement(this.getTemplate(x));
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
  getTemplate() {
    throw Error(`Abstract method not implemented`);
  }
}
