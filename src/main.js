
import {createElement, defineRank} from './utils.js';
import {render} from './utils.js';
import PageController from './controllers/page-controller.js';
import Profile from './components/profile.js';
import SearchController from './controllers/search-controller.js';
import Search from './components/search.js';
import {getFilmsMocks} from './data.js';

const search = new Search();
const profile = new Profile(defineRank());
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const searchElement = createElement(search.getTemplate());
const profileElement = createElement(profile.getTemplate());
render(headerElement, searchElement, `beforeend`);
render(headerElement, profileElement, `beforeend`);

const filmMocks = getFilmsMocks;

const pageController = new PageController(mainElement, filmMocks);
pageController.show(filmMocks);

const searchController = new SearchController(mainElement, search);
searchController.show(filmMocks);

const inputSearch = document.querySelector(`.search__field`);

inputSearch.addEventListener(`keyup`, () => {
  if (inputSearch.value.length === 0) {
    searchController.hideResults();
    pageController.show(filmMocks);
  }
});

search.getElement().querySelector(`.search__reset`).addEventListener(`click`, () => {
  searchController.hideResult();
  pageController.show(filmMocks);
});

/*
Известные сейчас проблемы:

2. Не сохраняется состояние контролов фильма при вызове деталей
3. Обработать статистику согласно ТЗ

5. Реализовать поиск
  5.1 Не удаляется результат
*/
