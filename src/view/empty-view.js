import AbstractView from '../framework/abstract-view';

const template = '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class EmptyView extends AbstractView {
  get template() {
    return template;
  }
}
