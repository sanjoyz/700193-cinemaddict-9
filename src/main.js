import {getSearchTemplate} from './components/search.js';
import {getProfileTemplate} from './components/profile.js';
import {getNavigationTemplate} from './components/navigation.js';
import {getSortingTemplate} from './components/sort.js';
import {getFilmListTemplate} from './components/film-list.js';
import {getShowMoreButtonTemplate} from './components/show-more-button.js';
import {getNoFilmsTemplate} from './components/no-films.js';
import {filters} from './data.js';
import {comments} from './data.js';
import Film from './components/film-card.js';
import FilmDetails from './components/film-details.js';
import {createElement} from './utils.js';
import {render} from './utils.js';
import {deleteElement} from './utils.js';
import {Position} from './utils.js';
import {getFilm} from './data.js';
const FILMS_TO_SHOW = 5;
const FILMS_WE_HAVE = 15;
const TOP_RATED_FILMS = 2;
const MOST_COMMENTED_FILMS = 2;


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
const filmListElement = createElement(getFilmListTemplate());
render(mainElement, filmListElement, `beforeend`);
const filmsListElement = document.querySelector(`.films-list`);
const showMoreButtonElement = createElement(getShowMoreButtonTemplate());
render(filmsListElement, showMoreButtonElement, `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);

const renderFilm = (filmMock, renderContainer) => {
  const film = new Film(filmMock);
  const filmDetails = new FilmDetails(filmMock);
  if (document.querySelectorAll(`.film-card`).length > FILMS_WE_HAVE) {
    filmsListElement.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
    return;
  }
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      deleteElement(document.querySelector(`.film-details`));
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  // Попап по клику: постер, название, комменты
  film.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    render(mainElement, filmDetails.getElement(), `beforeend`);
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  film.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
    render(mainElement, filmDetails.getElement(), `beforeend`);
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  film.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
    render(mainElement, filmDetails.getElement(), `beforeend`);
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  // Если фокус в поле ввода комментария удаляем обработчик esc
  filmDetails.getElement().querySelector(`textarea`).addEventListener(`focus`, () => {
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  // Если поле ввода потеряло фокус, добавляет обработчик esc
  filmDetails.getElement().querySelector(`textarea`).addEventListener(`blur`, () => {
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  //
  const onCloseButtonClick = () => {
    deleteElement(document.querySelector(`.film-details`));
  };
  filmDetails.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, onCloseButtonClick);

  render(renderContainer, film.getElement(), Position.BEFOREEND);
};

const filmMocks = new Array(FILMS_TO_SHOW).fill(``).map(getFilm);
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

const filmsExtraElementTopRated = document.querySelector(`body > main > section > section:nth-child(2) > .films-list__container`);
const filmsExtraElementMostCommented = document.querySelector(`body > main > section > section:nth-child(3) > .films-list__container`);
const topRatedMocks = new Array(TOP_RATED_FILMS).fill(``).map(getFilm);
const mostViewedMocks = new Array(MOST_COMMENTED_FILMS).fill(``).map(getFilm);
topRatedMocks.forEach((mock) => renderFilm(mock, filmsExtraElementTopRated));
mostViewedMocks.forEach((mock) => renderFilm(mock, filmsExtraElementMostCommented));
