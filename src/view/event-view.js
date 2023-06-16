import AbstractView from '../framework/abstract-view';

export default class EventView extends AbstractView{
  constructor(point) {
    super();
    this.point = point;
  }

  getTemplate() {
    return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${this.point['date_from'].format('YYYY-MM-DD')}">${this.point['date_from'].format('MMM DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${this.point['type']}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${this.point['type']} ${this.point['destination']['name']}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${this.point['date_from'].format('YYYY-MM-DD')}T${this.point['date_from'].format('HH:MM')}">${this.point['date_from'].format('HH:MM')}</time>
          &mdash;
          <time class="event__end-time" datetime="${this.point['date_to'].format('YYYY-MM-DD')}T${this.point['date_to'].format('HH:MM')}">${this.point['date_to'].format('HH:MM')}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${this.point['base_price']}</span>
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
  }
}
