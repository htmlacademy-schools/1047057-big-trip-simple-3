
import EventListView from '../view/event-list-view';
import { render } from '../render';
import EventItemPresenter from './event-item-presenter';

export default class EventListPresenter {
  #tripEventsList;
  #eventItemPresenter;

  constructor(model) {
    this.model = model;
    this.points = model.getPoints();
  }

  presentList() {
    this.#tripEventsList = new EventListView();
    render(new EventListView(), document.querySelector('.trip-events'));
    this.#eventItemPresenter = new EventItemPresenter(document.querySelector('.trip-events__list'));
  }

  presentEvents() {
    for(let i = 0; i < this.model.getPointsAmount(); i++) {
      this.#eventItemPresenter.presentEvent(this.points[i]);
    }
  }
}
