
import FilmList from '../components/film-list.js';
import ShowMoreButton from '../components/show-more-button.js';
import Sort from '../components/sort.js';
import Navigation from '../components/navigation.js';
import {render} from '../utils.js';
import {filters} from '../data.js';
import {deleteElement} from '../utils.js';
import {Position} from '../utils.js';
const FILMS_WE_HAVE = 15;
export default class PageController {
  constructor(container, films) {
    this._container = container;
    this._films = films;
    this._filmsList = new FilmList();
    this._showMoreButton = new ShowMoreButton();
    this._sort = new Sort();
    this._navigation = new Navigation();
    this._filmsListContainer = this._filmsList.getElement().querySelector(`.films-list__container`);
  }
  _onDataChange(newData, oldData) {
    this._films[this._films.findIndex((it) => it === oldData)] = newData;
    this._renderFilms(this._films);
  }
  // переписать эту функцию
  _renderFilms(films) {
    deleteElement(this._filmsList.getElement());
    deleteElement(this._sort.getElement());
    this._sort.removeElement();
    this._filmsList.removeElement();
    render(this._board.getElement(), this._taskList.getElement(), Position.AFTERBEGIN);
    render(this._board.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    films.forEach((filmMock) => this._renderFilm(filmMock));
  }

  init() {
    render(this._container, this._navigation.getElement(filters), Position.BEFOREEND);
    render(this._container, this._sort.getElement(), Position.BEFOREEND);
    render(this._container, this._filmsList.getElement(), Position.BEFOREEND);
    this._films.forEach((filmMock) => this._renderFilm(filmMock, this._filmsListContainer));
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    const filmsList = this._filmsList.getElement().querySelector(`.films-list`);
    render(filmsList, this._showMoreButton.getElement(), Position.BEFOREEND);
    const onShowMoreButtonClick = () => {
      this._films.forEach((filmMock) => this._renderFilm(filmMock, this._filmsListContainer));
    };
    this._showMoreButton.getElement().addEventListener(`click`, onShowMoreButtonClick);
  }
  _onSortLinkClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }
    this._filmsListContainer.innerHTML = ``;
    switch (evt.target.dataset.sortType) {
      case `default`:
        this._films.forEach((filmMock) => this._renderFilm(filmMock, this._filmsListContainer));
        break;
      case `by-date`:
        const sortedByDateFilms = this._films.slice().sort((a, b) => a.year - b.year);
        sortedByDateFilms.forEach((filmMock) => this._renderFilm(filmMock, this._filmsListContainer));
        break;
      case `by-rating`:
        const sortedByRatingFilms = this._films.slice().sort((a, b) => a.rating - b.rating);
        sortedByRatingFilms.forEach((filmMock) => this._renderFilm(filmMock, this._filmsListContainer));
        break;
    }
  }


}
