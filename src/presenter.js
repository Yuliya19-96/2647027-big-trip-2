import SortingView from './view/sorting.js';
import FiltersView from './view/filters.js';
import PointView from './view/point.js';
import EditFormView from './view/edit-form.js';
import CreateFormView from './view/create-form.js';

document.addEventListener('DOMContentLoaded', () => {
  const tripEvents = document.querySelector('.trip-events');
  const filtersContainer = document.querySelector('.trip-controls__filters');

  // Сортировка
  tripEvents.insertAdjacentElement('afterbegin', new SortingView().getElement());

  // Фильтры
  filtersContainer.appendChild(new FiltersView().getElement());

  // Создаём <ul> для списка
  const list = document.createElement('ul');
  list.classList.add('trip-events__list');
  tripEvents.appendChild(list);

  // Форма создания — первой
  list.appendChild(new CreateFormView().getElement());

  // Форма редактирования
  list.appendChild(new EditFormView().getElement());

  // 3 точки маршрута
  for (let i = 0; i < 3; i++) {
    list.appendChild(new PointView().getElement());
  }
});
