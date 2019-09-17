import {Position, render, deleteElement} from '../utils.js';
import {filters} from '../data.js';
import FilmList from '../components/film-list.js';
import ShowMoreButton from '../components/show-more-button.js';
import Sort from '../components/sort.js';
import Navigation from '../components/navigation.js';
import MovieController from '../controllers/movie-controller.js';
import Statistic from '../components/statistic.js';
export default class PageController {
  constructor(container, films) {
    this._container = container;
    this._films = films;
    this._subscriptions = [];
    this._filmsList = new FilmList();
    this._showMoreButton = new ShowMoreButton();
    this._sort = new Sort();
    this._statistic = new Statistic();
    this._navigation = new Navigation();
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
    this._filmsListContainer = this._filmsList.getElement().querySelector(`.films-list__container`);
  }
  _onDataChange(newData, oldData) {
    const index = this._films.findIndex((film) => film === oldData);
    this._films[index] = newData;
    this._renderFilms(this._films);
  }
  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }
  _renderFilm(film) {
    const movieController = new MovieController(this._filmsList.getElement().querySelector(`.films-list__container`), film, this._onDataChange, this._onChangeView);
    this._subscriptions.push(movieController.setDefaultView.bind(movieController));
  }
  _renderFilms(films) {
    deleteElement(this._filmsList.getElement());
    this._filmsList.removeElement();
    render(this._container, this._filmsList.getElement(), Position.BEFOREEND);
    render(this._filmsList.getElement(), this._filmsList.getElement().querySelector(`.films-list__container`), Position.AFTERBEGIN);
    films.forEach((filmMock) => this._renderFilm(filmMock));
    const filmsList = this._filmsList.getElement().querySelector(`.films-list`);
    render(filmsList, this._showMoreButton.getElement(), Position.BEFOREEND);
  }
  // выводим количество фильмов в подвал
  _renderFooterFilmsNumber() {
    const footerStatisticElement = document.querySelector(`.footer__statistics`).firstElementChild;
    footerStatisticElement.textContent = `${this._films.length} movies inside`;
  }
  // скрываем статистику
  _statisticHide() {
    this._statistic.getElement().classList.add(`visually-hidden`);
  }
  // показываем статистику
  _statisticShow() {
    this._statistic.getElement().classList.remove(`visually-hidden`);
  }
  // переключение между статистикой и фильмами
  _onNavigationChange(evt) {
    switch (evt.target.innerHTML) {
      case `Stats`:
        this._statisticShow();
        this._filmsList.getElement().classList.add(`visually-hidden`);
        break;
      case `All movies`:
        this._statisticHide();
        this._filmsList.getElement().classList.remove(`visually-hidden`);
        break;
    }
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }
    this._filmsListContainer.innerHTML = ``;
    switch (evt.target.dataset.sortType) {
      case `default`:
        this._films.forEach((filmMock) => this._renderFilm(filmMock));
        break;
      case `by-date`:
        const sortedByDateFilms = this._films.slice().sort((a, b) => a.year - b.year);
        sortedByDateFilms.forEach((filmMock) => this._renderFilm(filmMock));
        break;
      case `by-rating`:
        const sortedByRatingFilms = this._films.slice().sort((a, b) => a.rating - b.rating);
        sortedByRatingFilms.forEach((filmMock) => this._renderFilm(filmMock));
        break;
    }
  }

  init() {
    render(this._container, this._navigation.getElement(filters), Position.BEFOREEND);
    render(this._container, this._sort.getElement(), Position.BEFOREEND);
    render(this._container, this._statistic.getElement(), Position.BEFOREEND);
    render(this._container, this._filmsList.getElement(), Position.BEFOREEND);
    this._films.forEach((filmMock) => this._renderFilm(filmMock));
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    this._navigation.getElement(filters).addEventListener(`click`, (evt) => this._onNavigationChange(evt));
    const filmsList = this._filmsList.getElement().querySelector(`.films-list`);
    render(filmsList, this._showMoreButton.getElement(), Position.BEFOREEND);
    const onShowMoreButtonClick = () => {
      this._films.forEach((filmMock) => this._renderFilm(filmMock));
    };
    this._showMoreButton.getElement().addEventListener(`click`, onShowMoreButtonClick);
    this._renderFooterFilmsNumber();
  }
}
