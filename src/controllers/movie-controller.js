import Film from '../components/film-card.js';
import FilmDetails from '../components/film-details.js';
import {getFilm} from '../data.js';
import {render} from '../utils.js';
import {deleteElement} from '../utils.js';
const TOP_RATED_FILMS = 2;
const MOST_COMMENTED_FILMS = 2;

export default class MovieController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._film = new Film(data);
    this._filmDetails = new FilmDetails(data);
    this.init();
  }
  _renderFilm(filmMock, renderContainer) {
    const mainElement = document.querySelector(`.main`);
    const film = new Film(filmMock);
    const filmDetails = new FilmDetails(filmMock);
    if (document.querySelectorAll(`.film-card`).length > FILMS_WE_HAVE) {
      this._filmsList.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
      return;
    }
  }

  init() {
    // попап
    const filmsExtraElementTopRated = document.querySelector(`.films-list--extra.top-rated .films-list__container`);
    const filmsExtraElementMostCommented = document.querySelector(`.films-list--extra.most-commented .films-list__container`);
    const topRatedMocks = new Array(TOP_RATED_FILMS).fill(``).map(getFilm);
    const mostViewedMocks = new Array(MOST_COMMENTED_FILMS).fill(``).map(getFilm);
    topRatedMocks.forEach((mock) => this._renderFilm(mock, filmsExtraElementTopRated));
    mostViewedMocks.forEach((mock) => this._renderFilm(mock, filmsExtraElementMostCommented));

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
