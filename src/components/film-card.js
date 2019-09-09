import AbstractComponent from '../components/abstract-component.js';
export default class Film extends AbstractComponent {
  constructor({name, rating, year, duration, genre, poster, description, commentsCount, isAddedToWatchList, isMarkedAsWatched, isFavorite}) {
    super();
    this._name = name;
    this._rating = rating;
    this._year = year;
    this._duration = duration;
    this._genre = genre;
    this._poster = poster;
    this._description = description;
    this._commentsCount = commentsCount;
    this._isAddeToWatchList = isAddedToWatchList;
    this._isMarkedAsWatched = isMarkedAsWatched;
    this._isFavorite = isFavorite;
    this._element = null;
  }
  getTemplate() {
    return `<article class="film-card">
            <h3 class="film-card__title">${this._name}</h3>
            <p class="film-card__rating">${this._rating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${this._year}</span>
              <span class="film-card__duration">${this._duration}</span>
              <span class="film-card__genre">${this._genre}</span>
            </p>
            <img src="${this._poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${this._description}</p>
            <a class="film-card__comments">${this._commentsCount} comments</a>
            <form class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${this._isAddeToWatchList ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${this._isMarkedAsWatched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite ${this._isFavorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
            </form>
    </article>`.trim();
  }
}
