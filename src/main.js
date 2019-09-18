import {getProfileTemplate} from './components/profile.js';
import {createElement} from './utils.js';
import {render} from './utils.js';
import PageController from './controllers/page-controller.js';
import SearchController from './controllers/search-controller.js';
import Search from './components/search.js';
import {getFilm} from './data.js';
const FILMS_TO_SHOW = 5;
const search = new Search();
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const searchElement = createElement(search.getTemplate());
render(headerElement, searchElement, `beforeend`);
const profileElement = createElement(getProfileTemplate());
render(headerElement, profileElement, `beforeend`);

const filmMocks = new Array(FILMS_TO_SHOW).fill(``).map(getFilm);
const pageController = new PageController(mainElement, filmMocks);
pageController.init();


/*
Известные сейчас проблемы:
1. Жанры у карточек рандомятся при клике на контролы
2. Не сохраняется состояние контролов фильма при вызове деталей
3. Обработать статистику согласно ТЗ
4. Поле ввода комментария не переносится вниз после добавления нового комментария
5. Реализовать поиск
  5.1 Не удаляется результат
*/

const searchController = new SearchController(mainElement);
searchController.show(filmMocks);

const inputSearch = document.querySelector(`.search__field`);

inputSearch.addEventListener(`keyup`, () => {
  if (inputSearch.value.length === 0) {
    searchController.hideResults();
    pageController.show(filmMocks);
  }
});

search.getElement().querySelector(`.search__reset`).addEventListener(`click`, () => {
  searchController.hideResults();
  pageController.show(filmMocks);
});

