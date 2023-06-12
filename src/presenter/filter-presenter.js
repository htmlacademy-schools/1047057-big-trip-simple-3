import { render } from '../render';
import FilterView from '../view/filter-view';

export default class FilterPresenter {
  presentFilter() {
    render(new FilterView(), document.querySelector('.trip-controls__filters'));
  }
}
