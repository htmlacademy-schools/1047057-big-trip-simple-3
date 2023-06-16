import AbstractView from '../framework/abstract-view';

function generateTemplate(point) {
  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${point['date_from'].format('YYYY-MM-DD')}">${point['date_from'].format('MMM DD')}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${point['type']}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${point['type']} ${point['destination']['name']}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${point['date_from'].format('YYYY-MM-DD')}T${point['date_from'].format('HH:MM')}">${point['date_from'].format('HH:MM')}</time>
        &mdash;
        <time class="event__end-time" datetime="${point['date_to'].format('YYYY-MM-DD')}T${point['date_to'].format('HH:MM')}">${point['date_to'].format('HH:MM')}</time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${point['base_price']}</span>
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

export default class EventView extends AbstractView{
  #point = null;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return generateTemplate(this.#point);
  }
}
