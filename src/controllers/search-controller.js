import SearchNoResult from '../components/search-no-result.js';
import SearchResult from '../components/search-result.js';
import {render, deleteElement, Position} from '../utils.js';
import FilmListController from './film-list-controller.js';
export default class SearchController {
  constructor(container) {
    this._container = container;
    this._filmsList = document.querySelector(`.films-list`);

    this._searchResult = new SearchResult({});
    this._searchNoResult = new SearchNoResult();
    this._filmListController = new FilmListController(this._filmsList, this._onDataChange.bind(this));

    this._onDataChange = this._onDataChange.bind(this);
  }

  show(cards) {
    const searchInput = document.querySelector(`.search__field`);

    searchInput.addEventListener(`keyup`, (evt) => {
      if (searchInput.value.length >= 3) {
        const value = evt.target.value;

        this.showResults(cards, value);
      }
    });
  }

  showResults(cards, value) {
    const navigation = document.querySelector(`.main-navigation`);
    const sort = document.querySelector(`.sort`);
    const extraFilms = document.querySelectorAll(`.films-list--extra`);
    const filmsListContainer = document.querySelector(`.films-list__container`);
    const filmsList = document.querySelector(`.films-list`);
    const showMoreBtn = document.querySelector(`.films-list__show-more`);
    const searchFilms = cards.filter((card) => card.name.toLowerCase().includes(value.toLowerCase()));

    if (showMoreBtn !== null) {
      showMoreBtn.remove();
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
    deleteElement(this._searchResult.getElement());
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
