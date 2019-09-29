import {render} from './utils.js';
import PageController from './controllers/page-controller.js';
import SearchController from './controllers/search-controller.js';
import Search from './components/search.js';
import {getFilmsMocks} from './data.js';
import Api from './api.js';
import {onDataChange} from './components/on-data-change.js';

const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=${Math.random()}`;
const END_POINT = `https://htmlacademy-es-9.appspot.com/cinemaddict`;
const api = new Api({endPoint: END_POINT, authorization: AUTHORIZATION});
const search = new Search();
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const searchElement = search.getElement();
render(headerElement, searchElement, `beforeend`);


const filmMocks = getFilmsMocks;
api.getFilms().then((films) => {
  const mainOnDateChange = (actionType, update, old, unit, evt) => {
    return onDataChange(actionType, update, old, unit, evt, pageController);
  };

  const pageController = new PageController(mainElement, films, mainOnDateChange);

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
    searchController.hideResults();
    pageController.show(filmMocks);
  });
});
export {api};
