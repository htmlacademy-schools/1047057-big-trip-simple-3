import { render } from '../render';
import SortView from '../view/sort-view';

export default class SortPresenter {
  presentSort() {
    render(new SortView(), document.querySelector('.trip-events'));
  }
}
