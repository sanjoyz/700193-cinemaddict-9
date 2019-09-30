import {trimFilmDescription} from "../utils/functions";
import moment from "moment";

export default class ModelFilm {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`film_info`][`title`];
    this.rating = data[`film_info`][`total_rating`];
    this.year = moment(data[`film_info`][`release`][`date`]).format(`YYYY`);
    this.duration = data[`film_info`][`runtime`];
    this.genre = data[`film_info`][`genre`][0] || `No genre`;
    this.poster = data[`film_info`][`poster`];
    this.description = trimFilmDescription(data[`film_info`][`description`]);
    this.commentsAmount = data[`comments`].length;
    this.inWatchlist = data[`user_details`][`watchlist`];
    this.isWatched = data[`user_details`][`already_watched`];
    this.isFavorite = data[`user_details`][`favorite`];
    this.comments = data[`comments`];
    this.userRating = data[`user_details`][`already_watched`] ? data[`user_details`][`personal_rating`] : 0;
    this.watchingDate = data[`user_details`][`watching_date`];
    this.originalTitle = data[`film_info`][`alternative_title`];
    this.age = data[`film_info`][`age_rating`];
    this.director = data[`film_info`][`director`];
    this.writers = data[`film_info`][`writers`];
    this.actors = data[`film_info`][`actors`];
    this.releaseDate = moment(data[`film_info`][`release`][`date`]).format(`DD MMMM YYYY`);
    this.country = data[`film_info`][`release`][`release_country`];
    this.genres = data[`film_info`][`genre`];
    this.description = data[`film_info`][`description`];
  }

  static parseFilm(data) {
    return new ModelFilm(data);
  }

  static parseFilms(data) {
    return data.map(ModelFilm.parseFilm);
  }

  static toRAW(film) {
    return {
      'id': film.id,
      'comments': film.comments,
      'film_info': {
        'title': film.title,
        'alternative_title': film.originalTitle,
        'total_rating': film.rating,
        'poster': film.poster,
        'age_rating': film.age,
        'director': film.director,
        'writers': [...film.writers],
        'actors': [...film.actors],
        'release': {
          'date': film.releaseDate,
          'release_country': film.country,
        },
        'runtime': film.duration,
        'genre': [...film.genres],
        'description': film.description,
      },
      'user_details': {
        'personal_rating': Number(film.userRating) || 0,
        'watchlist': film.inWatchlist,
        'already_watched': film.isWatched,
        'watching_date': moment(film.watchingDate).toISOString() || moment().toISOString(),
        'favorite': film.isFavorite,
      },
    };
  }
}
