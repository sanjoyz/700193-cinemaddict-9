import {getSearchTemplate} from './components/search.js';
import {getProfileTemplate} from './components/profile.js';
import {getNavigationTemplate} from './components/navigation.js';
import {getSortingTemplate} from './components/sort.js';
import {getNoFilmsTemplate} from './components/no-films.js';
import {filters} from './data.js';
import {createElement} from './utils.js';
import {render} from './utils.js';
import PageController from './controllers/page-controller.js';
import {getFilm} from './data.js';
const FILMS_TO_SHOW = 5;

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const searchElement = createElement(getSearchTemplate());
render(headerElement, searchElement, `beforeend`);
const profileElement = createElement(getProfileTemplate());
render(headerElement, profileElement, `beforeend`);
const navigationElement = createElement(getNavigationTemplate(filters));
render(mainElement, navigationElement, `beforeend`);
const sortingElement = createElement(getSortingTemplate());
render(mainElement, sortingElement, `beforeend`);
// const filmListElement = createElement(getFilmListTemplate());
// render(mainElement, filmListElement, `beforeend`);
// const filmsListElement = document.querySelector(`.films-list`);
// const showMoreButtonElement = createElement(getShowMoreButtonTemplate());
// render(filmsListElement, showMoreButtonElement, `beforeend`);

const filmMocks = new Array(FILMS_TO_SHOW).fill(``).map(getFilm);
const pageController = new PageController(mainElement, filmMocks);
pageController.init();

/*
if (filmMocks.length > 0) {
  filmMocks.forEach((filmMock) => renderFilm(filmMock, filmsListContainerElement));
} else {
  const noFilmsElement = createElement(getNoFilmsTemplate());
  render(filmsListContainerElement, noFilmsElement, `beforeend`);
}
const onshowMoreButtonClick = () => {
  filmMocks.forEach((filmMock) => renderFilm(filmMock, filmsListContainerElement));
};

const showMoreButton = document.querySelector(`.films-list__show-more`);
showMoreButton.addEventListener(`click`, onshowMoreButtonClick);


*/
