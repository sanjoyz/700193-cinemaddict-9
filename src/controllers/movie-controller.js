import Film from '../components/film-card.js';
import FilmDetails from '../components/film-details';
import {Position} from '../utils';
import {getFilm} from '../data';
import {render} from '../utils';
import {deleteElement} from '../utils';
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
    this.init();
    this.addToWatchListHandler();
    this.markAsWatchedHandler();
  }
  _renderFilm(filmMock, renderContainer) {
  // const mainElement = document.querySelector(`.main`)
    if (document.querySelectorAll(`.film-card`).length > FILMS_WE_HAVE) {
      this._filmsList.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
      return;
    }
    render(renderContainer, filmMock);
  }
  // Обработчки кнопки Add to watch list
  addToWatchListHandler() {
    this._film.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      // const formData = new FormData(this._film.getElement().querySelector(`.film-card__controls`));
      const entry = {
        name: this._film._name,
        description: this._film._description,
        commentsCount: this._film._commentsCount,
        duration: this._film._duration,
        genre: this._film._genre,
        poster: this._film._poster,
        rating: this._film._rating,
        year: this._film._year,
        details: {
          comments: [
            {
              emoji: `./images/emoji/smile.png`,
              text: `Interesting setting and a good cast`,
              author: `Tim Macoveev`,
              commentDay: `3 days ago`,
            },
            {
              emoji: `./images/emoji/sleeping.png`,
              text: `Booooooooooring`,
              author: `John Doe`,
              commentDay: `3 days ago`,
            },
            {
              emoji: `./images/emoji/puke.png`,
              text: `Very very old. Meh`,
              author: `John Doe`,
              commentDay: `2 days ago`,
            },
            {
              emoji: `./images/emoji/angry.png`,
              text: `Almost two hours? Seriously?`,
              author: `John Doe`,
              commentDay: `Today`,
            },
          ],
          name: `The Great Flamarion`,
          nameOriginal: `The Great Flamarion`,
          director: `Anthony Mann`,
          poster: `./images/posters/the-great-flamarion.jpg`,
          writers: [
            `Anne Wigton`,
            `Heinz Herald`,
            `Richard Weil`,
          ],
          actors: [
            `Erich von Stoheim`,
            `Mary Beth Hughes`,
            `Dan Duryea`
          ],
          releaseDate: `30 March 1945`,
          duration: `1h 18m`,
          country: `USA`,
          genres: [
            `Drama`,
            `Film-Noir`,
            `Mystery`,
          ],
          description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events
          leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous
          marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie
          (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with
          Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.`,
          age: `18+`,
          rating: `8.9`,
        },
        isAddedToWatchList: this._data.isAddedToWatchList ? false : true
      };
      this._onDataChange(entry, this._data);
    });
  }
  // обработчик кнопки "просмотрен"
  markAsWatchedHandler() {
    this._film.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      // const formData = new FormData(this._film.getElement().querySelector(`.film-card__controls`));
      const entry = {
        name: this._film._name,
        description: this._film._description,
        commentsCount: this._film._commentsCount,
        duration: this._film._duration,
        genre: this._film._genre,
        poster: this._film._poster,
        rating: this._film._rating,
        year: this._film._year,
        details: {
          comments: [
            {
              emoji: `./images/emoji/smile.png`,
              text: `Interesting setting and a good cast`,
              author: `Tim Macoveev`,
              commentDay: `3 days ago`,
            },
            {
              emoji: `./images/emoji/sleeping.png`,
              text: `Booooooooooring`,
              author: `John Doe`,
              commentDay: `3 days ago`,
            },
            {
              emoji: `./images/emoji/puke.png`,
              text: `Very very old. Meh`,
              author: `John Doe`,
              commentDay: `2 days ago`,
            },
            {
              emoji: `./images/emoji/angry.png`,
              text: `Almost two hours? Seriously?`,
              author: `John Doe`,
              commentDay: `Today`,
            },
          ],
          name: `The Great Flamarion`,
          nameOriginal: `The Great Flamarion`,
          director: `Anthony Mann`,
          poster: `./images/posters/the-great-flamarion.jpg`,
          writers: [
            `Anne Wigton`,
            `Heinz Herald`,
            `Richard Weil`,
          ],
          actors: [
            `Erich von Stoheim`,
            `Mary Beth Hughes`,
            `Dan Duryea`
          ],
          releaseDate: `30 March 1945`,
          duration: `1h 18m`,
          country: `USA`,
          genres: [
            `Drama`,
            `Film-Noir`,
            `Mystery`,
          ],
          description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events
            leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous
            marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie
            (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with
            Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.`,
          age: `18+`,
          rating: `8.9`,
        },
        isMarkedAsWatched: this._film.isMarkedAsWatched ? false : true
      };
      this._onDataChange(entry, this._data);
    });
  }
  // обработчик кнопки избранное
  addTOFavoriteHanlder() {
    this._film.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      // const formData = new FormData(this._film.getElement().querySelector(`.film-card__controls`));
      const entry = {
        name: this._film._name,
        description: this._film._description,
        commentsCount: this._film._commentsCount,
        duration: this._film._duration,
        genre: this._film._genre,
        poster: this._film._poster,
        rating: this._film._rating,
        year: this._film._year,
        details: {
          comments: [
            {
              emoji: `./images/emoji/smile.png`,
              text: `Interesting setting and a good cast`,
              author: `Tim Macoveev`,
              commentDay: `3 days ago`,
            },
            {
              emoji: `./images/emoji/sleeping.png`,
              text: `Booooooooooring`,
              author: `John Doe`,
              commentDay: `3 days ago`,
            },
            {
              emoji: `./images/emoji/puke.png`,
              text: `Very very old. Meh`,
              author: `John Doe`,
              commentDay: `2 days ago`,
            },
            {
              emoji: `./images/emoji/angry.png`,
              text: `Almost two hours? Seriously?`,
              author: `John Doe`,
              commentDay: `Today`,
            },
          ],
          name: `The Great Flamarion`,
          nameOriginal: `The Great Flamarion`,
          director: `Anthony Mann`,
          poster: `./images/posters/the-great-flamarion.jpg`,
          writers: [
            `Anne Wigton`,
            `Heinz Herald`,
            `Richard Weil`,
          ],
          actors: [
            `Erich von Stoheim`,
            `Mary Beth Hughes`,
            `Dan Duryea`
          ],
          releaseDate: `30 March 1945`,
          duration: `1h 18m`,
          country: `USA`,
          genres: [
            `Drama`,
            `Film-Noir`,
            `Mystery`,
          ],
          description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events
            leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous
            marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie
            (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with
            Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.`,
          age: `18+`,
          rating: `8.9`,
        },
        isFavorite: this._film.isFavorite ? false : true
      };
      this._onDataChange(entry, this._data);
    });
  }
  setDefaultView() {
    if (document.body.contains(this._filmDetails.getElement())) {
      deleteElement(this._filmDetails.getElement());
      this._filmDetails.removeElement();
    }
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
      render(this._mainElement, this._filmDetails.getElement(), `beforeend`);
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    this._film.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
      render(this._mainElement, this._filmDetails.getElement(), `beforeend`);
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    this._film.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
      render(this._mainElement, this._filmDetails.getElement(), `beforeend`);
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
