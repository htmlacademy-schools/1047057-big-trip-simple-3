
import EventListView from '../view/event-list-view';
import { render } from '../render';
import EventItemPresenter from './event-item-presenter';
import EmptyView from '../view/empty-view';

export default class EventListPresenter {
  #tripEventsList;
  #eventItemPresenters;
  #points;

  constructor(model) {
    this.model = model;
    this.#points = model.points;
    this.#eventItemPresenters = new Array(this.model.pointsAmount);
  }

  presentList() {
    if(this.model.pointsAmount !== 0) {
      this.#tripEventsList = new EventListView();
      render(this.#tripEventsList, document.querySelector('.trip-events'));
    } else {
      render(new EmptyView(), document.querySelector('.trip-events'));
    }
  }

  presentEvents() {
    if (this.model.pointsAmount !== 0) {
      for(let i = 0; i < this.model.pointsAmount; i++) {
        this.#eventItemPresenters[i] = new EventItemPresenter(this.#points[i], this.#tripEventsList);
      }
      for(let i = 0; i < this.model.pointsAmount; i++) {
        this.#eventItemPresenters[i].presentEvent(this.#callback);
      }
    }
  }

  #callback = () => {
    for(let i = 0; i < this.model.pointsAmount; i++) {
      this.#eventItemPresenters[i].close();
    }
  };
}
