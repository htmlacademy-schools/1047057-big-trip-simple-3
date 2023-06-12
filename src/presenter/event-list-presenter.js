
import EventListView from '../view/event-list-view';
import { render } from '../render';
import EventItemPresenter from './event-item-presenter';
import EventCreatorView from '../view/event-creator';
import EventEditorView from '../view/event-editor';

export default class EventListPresenter {
  tripEventsList;
  eventItemPresenter;

  presentList() {
    render(new EventListView(), document.querySelector('.trip-events'));
    this.tripEventsList = document.querySelector('.trip-events__list');
    this.eventItemPresenter = new EventItemPresenter(this.tripEventsList);
  }

  presentEvents(amount) {
    for(let i = 0; i < amount; i++) {
      this.eventItemPresenter.presentEvent();
    }
  }

  presentEventCreator() {
    render(new EventCreatorView(), this.tripEventsList);
  }

  presentEventEditor() {
    render(new EventEditorView(), this.tripEventsList);
  }
}
