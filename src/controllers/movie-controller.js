import Film from '../components/film-card.js';
import FilmDetails from '../components/film-details';
import UserFilmRating from '../components/user-film-rating.js';
import {Position} from '../utils';
import {getFilm} from '../data';
import {render} from '../utils';
import {deleteElement} from '../utils';
import moment from 'moment';
const TOP_RATED_FILMS = 2;
const MOST_COMMENTED_FILMS = 2;
const FILMS_WE_HAVE = 15;

export default class MovieController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._film = new Film(data);
    this._filmDetails = new FilmDetails(data);
    this._mainElement = document.querySelector(`.main`);
    this._bodyElement = document.querySelector(`body`);
    this.init();
    this.addToWatchListHandler();
    this.markAsWatchedHandler();
    this.addToFavoriteHanlder();
    this.popupAddToWatchListHandler();
    this._commentDeleteHanlder();
    this._rateFilm(this._data);
    this._addEmoji();
    this._addComment();
  }
  _renderFilm(filmMock, renderContainer) {
    if (document.querySelectorAll(`.film-card`).length > FILMS_WE_HAVE) {
      this._filmsList.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
      return;
    }
    render(renderContainer, filmMock);
  }
  _getEntryObject() {
    const entry = {
      name: this._film._name,
      nameOriginal: this._filmDetails._nameOriginal,
      poster: this._film._poster,
      description: this._film._description,
      rating: this._film._rating,
      releaseDate: this._film._releaseDate,
      duration: this._film._duration,
      comments: this._film._comments,
      director: this._filmDetails._director,
      actors: this._filmDetails._actors,
      writers: this._filmDetails._writers,
      age: this._filmDetails._age,
      country: this._filmDetails._country,
      genres: this._filmDetails._genres
    };
    return entry;
  }
  // Обработчки кнопки Add to watch list
  addToWatchListHandler() {
    this._film.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const entry = this._getEntryObject();
      entry.isAddedToWatchList = this._film._isAddedToWatchList ? false : true;
      this._onDataChange(entry, this._data);
    });
  }
  // обработчик кнопки "просмотрен"
  markAsWatchedHandler() {
    this._film.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const entry = this._getEntryObject();
      entry.isMarkedAsWatched = this._film._isMarkedAsWatched ? false : true;
      this._onDataChange(entry, this._data);
    });
  }
  // обработчик кнопки избранное
  addToFavoriteHanlder() {
    this._film.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const entry = this._getEntryObject();
      entry.isFavorite = this._film._isFavorite ? false : true;
      this._onDataChange(entry, this._data);
    });
  }
  // обработчики в попапе
  popupAddToWatchListHandler() {
    this._filmDetails.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, () => {
      const entry = this._getEntryObject();
      entry.isAddedToWatchList = this._filmDetails._isAddedToWatchList ? false : true;
      this._onDataChange(entry, this._data);
    });
  }
  setDefaultView() {
    if (document.body.contains(this._filmDetails.getElement())) {
      deleteElement(this._filmDetails.getElement());
      this._filmDetails.removeElement();
    }
  }
  _rateFilm(film) {
    const filmWatchedButton = this._filmDetails.getElement().querySelector(`#watched`);
    const userRating = new UserFilmRating(film);
    filmWatchedButton.addEventListener(`click`, () => {
      if (filmWatchedButton.checked === true) {
        const sectionTop = this._filmDetails.getElement().querySelector(`.form-details__bottom-container`);
        render(sectionTop, userRating.getElement(), Position.BEFORE);
      } else {
        document.querySelector(`.form-details__middle-container`).remove();
      }
    });
  }
  _addEmoji() {
    const allEmojis = this._filmDetails.getElement().querySelectorAll(`.film-details__emoji-list`);
    allEmojis.forEach((emoji) => {
      emoji.addEventListener(`click`, (evt) => {
        const emojiContainer = this._filmDetails.getElement().querySelector(`.film-details__add-emoji-label`);
        if (evt.target.tagName === `INPUT`) {
          const imgElement = `<img id="${evt.target.value}" src="./images/emoji/${evt.target.value}.png" width="55" height="55" alt="emoji">`;
          emojiContainer.innerHTML = ``;
          emojiContainer.insertAdjacentHTML(`beforeend`, imgElement);
        }
      });
    });
  }
  _addComment() {
    const textAreaComment = this._filmDetails.getElement().querySelector(`.film-details__comment-input`);
    const commentsList = this._filmDetails.getElement().querySelector(`.film-details__comments-list`);
    const onEnterKeyDown = (e) => {
      if ((e.ctrlKey) && ((e.keyCode === 13))) {
        const imgAdress = this._filmDetails.getElement().querySelector(`.film-details__add-emoji-label`).firstChild.id;
        const comment = `<li class="film-details__comment">
                        <span class="film-details__comment-emoji">
                          <img src="./images/emoji/${imgAdress}.png" width="55" height="55" alt="emoji">
                        </span>
                        <div>
                          <p class="film-details__comment-text">${textAreaComment.value}</p>
                          <p class="film-details__comment-info">
                            <span class="film-details__comment-author">Random Author</span>
                            <span class="film-details__comment-day">${moment(new Date(Date.now())).format(`YY/MM/DD hh:mm`)}</span>
                            <button class="film-details__comment-delete">Delete</button>
                          </p>
                        </div>
                      </li>`;

        const entry = this._data;

        commentsList.insertAdjacentHTML(`beforeend`, comment);
        this._filmDetails.getElement().querySelector(`.film-details__comments-count`).innerHTML = this._filmDetails.getElement().querySelectorAll(`.film-details__comment`).length;

        entry.comments.push({
          text: textAreaComment.value,
          emoji: imgAdress + `.png`,
          author: `Random name from server`,
          commentDay: new Date()
        });

        this._onDataChange(entry, this._data);
        this._commentDeleteHanlder();
      }
    };

    textAreaComment.addEventListener(`keydown`, onEnterKeyDown);
  }
  _commentDeleteHanlder() {
    const commentDeleteButtons = this._filmDetails.getElement().querySelectorAll(`.film-details__comment-delete`);
    commentDeleteButtons.forEach((button, count) => {
      button.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        evt.target.closest(`.film-details__comment`).remove();
        this._filmDetails.getElement().querySelector(`.film-details__comments-count`).innerHTML = this._filmDetails.getElement().querySelectorAll(`.film-details__comment`).length;
        const entry = this._data;
        entry.comments.splice(count, 1);
        this._onDataChange(entry, this._data);
      });
    });
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
    this._film.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
      render(this._bodyElement, this._filmDetails.getElement(), `beforeend`);
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    this._film.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
      render(this._bodyElement, this._filmDetails.getElement(), `beforeend`);
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    this._film.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
      render(this._bodyElement, this._filmDetails.getElement(), `beforeend`);
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    // Если фокус в поле ввода комментария удаляем обработчик esc
    this._filmDetails.getElement().querySelector(`textarea`).addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
    // Если поле ввода потеряло фокус, добавляет обработчик esc
    this._filmDetails.getElement().querySelector(`textarea`).addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    //
    const onCloseButtonClick = () => {
      deleteElement(document.querySelector(`.film-details`));
      this._onChangeView();
    };
    this._filmDetails.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, onCloseButtonClick);

    render(this._container, this._film.getElement(), Position.BEFOREEND);
  }
}
