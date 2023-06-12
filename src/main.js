import EventListPresenter from './presenter/event-list-presenter';
import FilterPresenter from './presenter/filter-presenter';
import SortPresenter from './presenter/sort-presenter';

function renderFilter() {
  const filterPresenter = new FilterPresenter();
  filterPresenter.presentFilter();
  const sortPresenter = new SortPresenter();
  sortPresenter.presentSort();
  const eventListPresenter = new EventListPresenter();
  eventListPresenter.presentList();
  eventListPresenter.presentEventEditor();
  eventListPresenter.presentEvents(3);
}

renderFilter();
