import MovieController from '../controllers/movie-controller.js';

export default class FilmListController {
  constructor(container, onDataChange) {
    this._container = container;

    this._films = [];
    this._subscriptions = [];

    this.onChangeView = this._onChangeView.bind(this);
    this._onDataChange = onDataChange.bind(this);
  }
  _renderFilmCard(data) {
    return new MovieController(this._container.querySelector(`.films-list__container`), data, this._onDataChange);
  }
  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }
  setFilms(films) {
    this._films = films;
    this._films.forEach((film) => this._renderFilmCard(film));
  }
  addFilms(films) {
    films.forEach((film) => this._renderFilmCard(film));
    this._films = this._films.concat(films);
  }
}
