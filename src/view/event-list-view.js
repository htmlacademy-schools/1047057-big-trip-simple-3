import AbstractView from '../framework/abstract-view';

const eventListLayout = `<ul class="trip-events__list">
                        </ul>`;

export default class eventListView extends AbstractView {
  get template() {
    return eventListLayout;
  }
}
