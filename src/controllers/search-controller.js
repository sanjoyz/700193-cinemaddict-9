import SearchNoResult from '../components/search-no-result.js';
import SearchResult from '../components/search-result.js';
import {render, Position} from '../utils.js';
import FilmListController from './film-list-controller.js';

export default class SearchController {
  constructor(container, search) {
    this._container = container;
    this._search = search;

    this._filmsList = document.querySelector(`.films-list`);

    this._searchNoResult = new SearchNoResult();
    this._searchResult = new SearchResult({});
    this._filmListController = new FilmListController(this._filmsList, this._onDataChange.bind(this));

    this._onDataChange = this._onDataChange.bind(this);
  }

  show(films) {
    const searchInput = this._search.getElement().querySelector(`input`);
    searchInput.addEventListener(`keyup`, (evt) => {
      if (searchInput.value.length >= 3) {
        const value = evt.target.value;
        this.showResults(films, value);
      }
    });
  }
  showResults(films, value) {
    const navigation = document.querySelector(`.main-navigation`);
    const sort = document.querySelector(`.sort`);
    const extraFilms = document.querySelectorAll(`.films-list--extra`);
    const filmsListContainer = document.querySelector(`.films-list__container`);
    const filmsList = document.querySelector(`.films-list`);
    const showMoreButton = document.querySelector(`.films-list__show-more`);
    const searchFilms = films.filter((film) => film.name.toLowerCase().includes(value.toLowerCase()));

    if (showMoreButton !== null) {
      showMoreButton.remove();
    }

    navigation.classList.add(`visually-hidden`);
    sort.classList.add(`visually-hidden`);
    extraFilms.forEach((block) => block.classList.add(`visually-hidden`));

    if (searchFilms.length > 0) {
      this._searchNoResult.removeElement();
      filmsListContainer.classList.remove(`visually-hidden`);
      filmsListContainer.innerHTML = ``;
      this._filmListController.setFilms(searchFilms);
    } else {
      filmsListContainer.classList.add(`visually-hidden`);
      render(filmsList, this._searchNoResult.getElement(), Position.AFTERBEGIN);
    }

    this._searchResult.removeElement();
    this._searchResult = new SearchResult(searchFilms.length);
    render(this._container, this._searchResult.getElement(), Position.AFTERBEGIN);
  }

  hideResults() {
    const navigation = document.querySelector(`.main-navigation`);
    const sort = document.querySelector(`.sort`);
    const extraFilms = document.querySelectorAll(`.films-list--extra`);
    const filmsListContainer = document.querySelector(`.films-list__container`);

    navigation.classList.remove(`visually-hidden`);
    sort.classList.remove(`visually-hidden`);
    filmsListContainer.classList.remove(`visually-hidden`);
    extraFilms.forEach((block) => block.classList.remove(`visually-hidden`));
    this._searchResult.removeElement();
    this._searchNoResult.removeElement();
  }

  _onDataChange() {

  }
}
