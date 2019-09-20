import MovieController from '../controllers/movie-controller.js';

export default class FilmListController {
  constructor(container, onDataChange) {
    this._container = container;
    this._onDataChangeMain = onDataChange;

    this._films = [];
    this._subscriptions = [];

    this.onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }
  _renderFilmCard(data) {
    return new MovieController(this._container.querySelector(`.films-list__container`), data, this._onDataChange);
  }
  _onDataChange(newData, oldData) {
    const index = this._films.findIndex((film) => film === oldData);

    if (newData === null) {
      this._films = [...this._films.slice(0, index), ...this._films.slice(index + 1)];
    } else if (oldData === null) {
      this._films = [newData, ...this._films];
    } else {
      this._films[index] = newData;
    }

    // this.setTasks(this._films);

    this._onDataChangeMain(this._films);
    /*
    const index = this._films.findIndex((film) => film === oldData);
    this._films[index] = newData;
    this._renderFilms(this._films);
    */
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
