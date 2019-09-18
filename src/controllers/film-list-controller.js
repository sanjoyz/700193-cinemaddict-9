import MovieController from '../controllers/movie-controller.js';

export default class FilmListController {
  constructor(container, onDataChange) {
    this._container = container;
    this._films = [];

    this._onDataChange = onDataChange.bind(this);
  }
  _renderFilmCard(data) {
    return new MovieController(this._container, data, this._onDataChange);
  }
  setFilms(films) {
    this._films = films;
    this._films.forEach((film) => this._renderFilmCard(film));
  }
  addCards(cards) {
    cards.forEach((card) => this._renderCards(card));
    this._cards = this._cards.concat(cards);
  }
}
