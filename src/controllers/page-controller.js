import Film from '../components/film-card.js';
import FilmDetails from '../components/film-details.js';
import FilmList from '../components/film-list.js';
import ShowMoreButton from '../components/show-more-button.js';
import {render} from '../utils.js';
import {deleteElement} from '../utils.js';
import {getFilm} from '../data.js';
import {Position} from '../utils.js';
const FILMS_WE_HAVE = 15;
const TOP_RATED_FILMS = 2;
const MOST_COMMENTED_FILMS = 2;
export default class PageController {
  constructor(container, films) {
    this._container = container;
    this._films = films;
    this._filmsList = new FilmList();
    this._showMoreButton = new ShowMoreButton();
  }
  init() {
    const filmsListContainer = this._filmsList.getElement().querySelector(`.films-list__container`);
    render(this._container, this._filmsList.getElement(), Position.BEFOREEND);
    this._films.forEach((filmMock) => this._renderFilm(filmMock, filmsListContainer));
    const filmsList = this._filmsList.getElement().querySelector(`.films-list`);
    render(filmsList, this._showMoreButton.getElement(), Position.BEFOREEND);
    const onShowMoreButtonClick = () => {
      this._films.forEach((filmMock) => this._renderFilm(filmMock, filmsListContainer));
    };
    this._showMoreButton.getElement().addEventListener(`click`, onShowMoreButtonClick);

    const filmsExtraElementTopRated = document.querySelector(`body > main > section > section:nth-child(2) > .films-list__container`);
    const filmsExtraElementMostCommented = document.querySelector(`body > main > section > section:nth-child(3) > .films-list__container`);
    const topRatedMocks = new Array(TOP_RATED_FILMS).fill(``).map(getFilm);
    const mostViewedMocks = new Array(MOST_COMMENTED_FILMS).fill(``).map(getFilm);
    topRatedMocks.forEach((mock) => this._renderFilm(mock, filmsExtraElementTopRated));
    mostViewedMocks.forEach((mock) => this._renderFilm(mock, filmsExtraElementMostCommented));
  }
  _renderFilm(filmMock, renderContainer) {
    const mainElement = document.querySelector(`.main`);
    const film = new Film(filmMock);
    const filmDetails = new FilmDetails(filmMock);
    if (document.querySelectorAll(`.film-card`).length > FILMS_WE_HAVE) {
      this._filmsList.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
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
  }
}
