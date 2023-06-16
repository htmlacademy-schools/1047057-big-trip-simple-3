import { render } from '../render';
import EventEditorView from '../view/event-editor';
import EventView from '../view/event-view';
import { generateKeydownFun } from '../utils/utils';

export default class EventItemPresenter {
  #tripEventsList;
  #point;
  #event;
  #editor;
  #replaceEventWithForm = null;
  #replaceFormWithEvent = null;
  #removeEvent = null;
  #open = false;
  #deleted = false;

  constructor(point, tripEventsList) {
    this.#tripEventsList = tripEventsList;
    this.#point = point;
  }

  close() {
    if (this.#open) {
      this.#replaceFormWithEvent();
    }
  }

  presentEvent(callback) {
    this.#event = new EventView(this.#point);
    this.#editor = new EventEditorView(this.#point);
    let EscKeydownListener;
    render(this.#event, this.#tripEventsList.element);

    this.#replaceEventWithForm = () => {
      callback();
      this.#open = true;
      this.#tripEventsList.element.replaceChild(this.#editor.element, this.#event.element);
    };
    this.#replaceFormWithEvent = () => {
      this.#open = false;
      this.#tripEventsList.element.replaceChild(this.#event.element, this.#editor.element);
      document.removeEventListener('keydown', EscKeydownListener);
    };
    this.#removeEvent = () => {
      this.#deleted = true;
      this.#open = false;
      this.#tripEventsList.element.removeChild(this.#editor.element);
      document.removeEventListener('keydown', EscKeydownListener);
    };

    this.#event.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      this.#replaceEventWithForm();
      EscKeydownListener = generateKeydownFun(document, this.#replaceFormWithEvent);
    });

    this.#editor.element.querySelector('.event--edit').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#replaceFormWithEvent();
    });

    this.#editor.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      this.#replaceFormWithEvent();
    });

    this.#editor.element.querySelector('.event__reset-btn').addEventListener('click', () => {
      this.#removeEvent();
      this.#editor.removeElement();
      this.#event.removeElement();
    });
  }
}
