import { createElement } from '../render';

export default class AbstractView {
  #element = null;

  get element() {
    if (this.#element === null) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    throw new Error('Method not implemented!');
  }

  removeElement() {
    this.#element = null;
  }
}
