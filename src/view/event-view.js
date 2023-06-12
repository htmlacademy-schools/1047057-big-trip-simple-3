import AbstractView from '../framework/abstract-view';

const eventLayout = `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-20">MAR 20</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                </div>
                <h3 class="event__title">Drive Geneva</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-20T08:25">08:25</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-20T09:25">09:25</time>
                  </p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">20</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <li class="event__offer">
                    <span class="event__offer-title">No additional offers</span>
                  </li>
                </ul>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;

export default class EventView extends AbstractView{
  getTemplate() {
    return eventLayout;
  }
}
