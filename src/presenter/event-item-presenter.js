import { render } from '../render';
import EventEditorView from '../view/event-editor';
import EventView from '../view/event-view';
import { generateKeydownFun } from '../utils/utils';

export default class EventItemPresenter {
  #tripEventsList;
  #replaceEventWithForm = null;
  #replaceFormWithEvent = null;
  #removeEvent = null;

  constructor(tripEventsList) {
    this.#tripEventsList = tripEventsList;
  }

  presentEvent(newPoint) {
    const point = newPoint;
    const event = new EventView(point);
    const editor = new EventEditorView(point);
    let EscKeydownListener;
    render(event, this.#tripEventsList.element);

    const replaceEventWithForm = () => {
      this.#tripEventsList.element.replaceChild(editor.element, event.element);
    };
    const replaceFormWithEvent = () => {
      this.#tripEventsList.element.replaceChild(event.element, editor.element);
      document.removeEventListener('keydown', EscKeydownListener);
    };
    const removeEvent = () => {
      this.#tripEventsList.element.removeChild(editor.element);
      document.removeEventListener('keydown', EscKeydownListener);
    };

    event.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEventWithForm();
      EscKeydownListener = generateKeydownFun(document, replaceFormWithEvent);
    });

    editor.element.querySelector('.event--edit').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormWithEvent();
    });

    editor.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormWithEvent();
    });

    editor.element.querySelector('.event__reset-btn').addEventListener('click', () => {
      removeEvent();
      editor.removeElement();
      event.removeElement();
    });
  }


}
