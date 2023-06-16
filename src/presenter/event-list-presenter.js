
import EventListView from '../view/event-list-view';
import { render } from '../render';
import EventItemPresenter from './event-item-presenter';
import EventCreatorView from '../view/event-creator';
import EventEditorView from '../view/event-editor';

export default class EventListPresenter {
  tripEventsList;
  eventItemPresenter;

  constructor(model) {
    this.model = model;
    this.points = model.getPoints();
  }

  presentList() {
    render(new EventListView(), document.querySelector('.trip-events'));
    this.tripEventsList = document.querySelector('.trip-events__list');
    this.eventItemPresenter = new EventItemPresenter(this.tripEventsList);
  }

  presentEvents() {
    for(let i = 0; i < this.model.getPointsAmount(); i++) {
      this.eventItemPresenter.presentEvent(this.points[i]);
    }
  }

  presentEventCreator() {
    render(new EventCreatorView(), this.tripEventsList);
  }

  presentEventEditor() {
    render(new EventEditorView(), this.tripEventsList);
  }
}
