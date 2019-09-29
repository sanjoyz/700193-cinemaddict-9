import {Position, render, getMostValuesInFilms, getProfileRank, getAllFiltersConfig} from '../utils.js';
import {filters} from '../data.js';
import FilmList from '../components/film-list.js';
import ShowMoreButton from '../components/show-more-button.js';
import Sort from '../components/sort.js';
import Navigation from '../components/navigation.js';
import MovieController from '../controllers/movie-controller.js';
// import Statistic from '../components/statistic.js';
import FilmListController from '../controllers/film-list-controller.js';
import TopRated from '../components/top-rated.js';
import MostCommented from '../components/most-commented.js';
import StatisticController from './statistic-controller.js';

const FILMS_IN_ROW = 5;

export default class PageController {
  constructor(container, films, _onDataChange) {
    this._container = container;
    this._films = films;
    this._shownFilms = FILMS_IN_ROW;
    this._filmsInRow = FILMS_IN_ROW;
    this._subscriptions = [];
    this._filmsList = new FilmList();
    this._showMoreButton = new ShowMoreButton();
    this._sort = new Sort();
    // this._statistic = new Statistic();
    this._navigation = new Navigation(getAllFiltersConfig(this._films)[1].count, getAllFiltersConfig(this._films)[2].count, getAllFiltersConfig(this._films)[3].count);
    this._topRated = new TopRated();
    this._mostCommented = new MostCommented();

    this._filmListConroller = new FilmListController(this._filmsList.getElement(), this._onDataChange.bind(this));
    this._filmListTopRatedController = new FilmListController(this._topRated.getElement(), this._onDataChange.bind(this));
    this._filmListMostCommentedController = new FilmListController(this._mostCommented.getElement(), this._onDataChange.bind(this));

    this._filmsListContainer = this._filmsList.getElement().querySelector(`.films-list__container`);
    this._onDataChange = this._onDataChange.bind(this);
    this._allFilmsCard = [];
    this._constCardsConfig = [];
    this._currentlyCardsConfig = [];
    this._init();
  }
  _init() {
    render(this._container, this._navigation.getElement(), Position.BEFOREEND);
    render(this._container, this._sort.getElement(), Position.BEFOREEND);
    // render(this._container, this._statistic.getElement(), Position.BEFOREEND);
    render(this._container, this._filmsList.getElement(), Position.BEFOREEND);
    render(this._container.querySelector(`.films`), this._topRated.getElement(), Position.BEFOREEND);
    render(this._container.querySelector(`.films`), this._mostCommented.getElement(), Position.BEFOREEND);
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    this._navigation.getElement(filters).addEventListener(`click`, (evt) => this._onNavigationChange(evt));
    this._renderFooterFilmsNumber();
    this._renderStatistic();
    this._show(this._films);
  }
  _renderFilmsContainer(films, count = 5) {
    this._filmsList.getElement().querySelector(`.films-list__container`).innerHTML = ``;
    this._topRated.getElement().querySelector(`.films-list__container`).innerHTML = ``;
    this._mostCommented.getElement().querySelector(`.films-list__container`).innerHTML = ``;

    // getAllFiltersConfig(this._constCardsConfig).reverse().forEach((filter) => this._renderFilters(this._navigationContainer, filter));

    this._filmListTopRatedController.setFilms(getMostValuesInFilms(`rating`, this._constCardsConfig));
    this._filmListMostCommentedController.setFilms(getMostValuesInFilms(`comments`, this._constCardsConfig));
    this._filmListConroller.setFilms(films.slice(0, count));

    if (films.length > count) {
      this._showMoreFilms(films);
    }
  }
  _showMoreFilms(films) {
    const showMoreButttonElement = this._showMoreButton.getElement();
    showMoreButttonElement.addEventListener(`click`, () => {
      this._filmListConroller.addFilms(films.slice(this._shownFilms, this._shownFilms + this._filmsInRow));
      this._shownFilms += this._filmsInRow;
      if (this._shownFilms >= films.length) {
        this._showMoreButton.removeElement();
      }
    });
    const filmsList = this._filmsList.getElement().querySelector(`.films-list`);
    render(filmsList, this._showMoreButton.getElement(), Position.BEFOREEND);
  }
  _renderStatistic() {
    const getFilmsWatched = () => {
      const filmsWatched = [];
      for (const value of this._films) {
        if (value.isMarkedAsWatched) {
          filmsWatched.push(value);
        }
      }
      return filmsWatched;
    };
    const statistic = new StatisticController(this._container, getFilmsWatched(), getProfileRank());
    statistic.init();
  }
  _deleteStatistic() {
    const statistic = this._container.querySelector(`.statistic`);
    if (statistic) {
      statistic.parentNode.removeChild(statistic);
    }
  }
  _onDataChange(newData, oldData) {
    const index = this._films.findIndex((film) => film === oldData);
    this._films[index] = newData;
    this._renderFilmsContainer(this._films, this._shownFilms);
    this._deleteStatistic();
    this._renderStatistic();
  }
  /* _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }*/

  _renderFilm(film) {
    const movieController = new MovieController(this._filmsList.getElement().querySelector(`.films-list__container`), film, this._onDataChange, this._onChangeView);
    this._subscriptions.push(movieController.setDefaultView.bind(movieController));
  }
  _renderFilms(films) {
    this._filmsList.removeElement();
    render(this._container, this._filmsList.getElement(), Position.BEFOREEND);
    render(this._filmsList.getElement(), this._filmsList.getElement().querySelector(`.films-list__container`), Position.AFTERBEGIN);
    films.forEach((filmMock) => this._renderFilm(filmMock));
    const filmsList = this._filmsList.getElement().querySelector(`.films-list`);
    render(filmsList, this._showMoreButton.getElement(), Position.BEFOREEND);
  }
  _renderAllFilms() {
    this._currentlyCardsConfig = this._constCardsConfig.slice();
    this._allFilmsCard = this._constCardsConfig.slice();
    this._countShownCard = this._CARDS_IN_ROW;
    this._renderFilmsContainer(this._constCardsConfig.slice(), this._countShownCard);
  }
  _renderSelectedFilms(filter) {
    const selectedFilms = [];
    this._constCardsConfig.slice().forEach((card) => {
      if (filter === `Watchlist` && card.isAddedToWatchList) {
        selectedFilms.push(card);
      } else if (filter === `Favorites` && card.isFavorite) {
        selectedFilms.push(card);
      } else if (filter === `History` && card.isMarkedAsWatched) {
        selectedFilms.push(card);
      }
    });
    this._allFilmsCard = selectedFilms;
    this._renderFilmsContainer(this._allFilmsCard.slice(), this._shownFilms);
  }

  _show(films) {
    this._allFilmsCard = films;
    this._constCardsConfig = films;
    this._currentlyCardsConfig = films;
    this._renderFilmsContainer(films);
  }

  // выводим количество фильмов в подвал
  _renderFooterFilmsNumber() {
    const footerStatisticElement = document.querySelector(`.footer__statistics`).firstElementChild;
    footerStatisticElement.textContent = `${this._films.length} movies inside`;
  }

  // скрываем статистику
  _statisticHide() {
    this._container.querySelector(`.statistic`).classList.add(`visually-hidden`);
  }
  // показываем статистику
  _statisticShow() {
    this._container.querySelector(`.statistic`).classList.remove(`visually-hidden`);
  }
  // переключение между статистикой и фильмами
  _onNavigationChange(evt) {
    const activeItemChanger = () => {
      this._navigation.getElement().querySelectorAll(`.main-navigation__item`).forEach((item) => item.classList.remove(`main-navigation__item--active`));
      evt.target.classList.add(`main-navigation__item--active`);
    };
    switch (evt.target.hash.slice(1)) {
      case `Stats`:
        this._statisticShow();
        activeItemChanger();
        this._filmsList.getElement().classList.add(`visually-hidden`);
        break;
      case `All`:
        this._statisticHide();
        activeItemChanger();
        this._filmsList.getElement().classList.remove(`visually-hidden`);
        this._renderAllFilms(evt.target.hash.slice(1));
        break;
      case `Watchlist`:
        this._statisticHide();
        activeItemChanger();
        this._renderSelectedFilms(evt.target.hash.slice(1));
        break;
      case `History`:
        this._statisticHide();
        activeItemChanger();
        this._renderSelectedFilms(evt.target.hash.slice(1));
        break;
      case `Favorites`:
        this._statisticHide();
        activeItemChanger();
        this._renderSelectedFilms(evt.target.hash.slice(1));
        break;
    }
  }
  // сортировка по дате и рейтингу
  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }
    // снимаем активный класс со всех кнопок
    this._sort.getElement().querySelectorAll(`.sort__button`).forEach((item) => item.classList.remove(`sort__button--active`));
    // добавляем той, по которой нажали
    evt.target.classList.add(`sort__button--active`);
    this._filmsListContainer.innerHTML = ``;
    switch (evt.target.dataset.sortType) {
      case `default`:
        // this._films.forEach((filmMock) => this._renderFilm(filmMock));
        this._renderFilmsContainer(this._films, this._shownFilms);
        break;
      case `by-date`:
        const sortedByDateFilms = this._films.slice().sort((a, b) => b.releaseDate.format(`YYYY`) - a.releaseDate.format(`YYYY`));
        // sortedByDateFilms.forEach((filmMock) => this._renderFilmsContainer(filmMock, this._filmsInRow));
        this._renderFilmsContainer(sortedByDateFilms, this._shownFilms);
        break;
      case `by-rating`:
        const sortedByRatingFilms = this._films.slice().sort((a, b) => a.rating - b.rating);
        // sortedByRatingFilms.forEach((filmMock) => this._renderFilmsContainer(filmMock, this._filmsInRow));
        this._renderFilmsContainer(sortedByRatingFilms, this._shownFilms);
        break;
    }
  }
}

