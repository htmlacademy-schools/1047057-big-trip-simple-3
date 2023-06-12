import { createElement } from '../render';

export default class AbstractView {
  element = null;

  getElement() {
    if (this.element === null) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  getTemplate() {
    throw new Error('Method not implemented!');
  }
}
