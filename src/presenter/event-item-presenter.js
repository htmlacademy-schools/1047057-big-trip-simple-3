import { render } from '../render';
import EventView from '../view/event-view';

export default class EventItemPresenter {
  tripEventsList;

  constructor(tripEventsList) {
    this.tripEventsList = tripEventsList;
  }

  presentEvent() {
    render(new EventView(), this.tripEventsList);
  }
}
