
import EventListView from '../view/event-list-view';
import { render } from '../render';
import EventItemPresenter from './event-item-presenter';
import EmptyView from '../view/empty-view';

export default class EventListPresenter {
  #tripEventsList;
  #eventItemPresenter;

  constructor(model) {
    this.model = model;
    this.points = model.points;
  }

  presentList() {
    if(this.model.pointsAmount !== 0) {
      this.#tripEventsList = new EventListView();
      render(this.#tripEventsList, document.querySelector('.trip-events'));
      this.#eventItemPresenter = new EventItemPresenter(this.#tripEventsList);
    } else {
      render(new EmptyView(), document.querySelector('.trip-events'));
    }
  }

  presentEvents() {
    if (this.model.pointsAmount !== 0) {
      for(let i = 0; i < this.model.pointsAmount; i++) {
        this.#eventItemPresenter.presentEvent(this.points[i]);
      }
    }
  }
}
