import moment from 'moment';
export default class FilmAdapter {
  constructor(data) {
    this.id = data[`id`];
    this.comments = data[`comments`];
    this.name = data[`film_info`][`title`];
    this.nameOriginal = data[`film_info`][`alternative_title`];
    this.poster = data[`film_info`][`poster`];
    this.description = data[`film_info`][`description`];
    this.rating = data[`film_info`][`total_rating`];
    this.releaseDate = moment(data[`film_info`][`release`][`date`]);
    this.genre = data[`film_info`][`genre`];
    this.duration = data[`film_info`][`runtime`];
    this.country = data[`film_info`][`release`][`release_country`];
    this.director = data[`film_info`][`director`];
    this.actors = data[`film_info`][`actors`];
    this.writers = data[`film_info`][`writers`];
    this.ageRating = data[`film_info`][`age_rating`];
    this.isAddedToWatchList = Boolean(data[`user_details`][`watchlist`]);
    this.isFavorite = Boolean(data[`user_details`][`favorite`]);
    this.isMarkedAsWatched = Boolean(data[`user_details`][`already_watched`]);
    this.watchDate = data[`user_details`][`watching_date`];

  }
  static parseFilm(data) {
    return new FilmAdapter(data);
  }

  static parseFilms(data) {
    return data.map(FilmAdapter.parseFilm);
  }

  toRAW() {
    return {
      'id': this.id,
      'comments': this.comments,
      'film_info': {
        'title': this.filmInfo.title,
        'alternative_title': this.filmInfo.alternativeTitle,
        'total_rating': this.filmInfo.totalRating,
        'poster': this.filmInfo.poster,
        'age_rating': this.filmInfo.ageRating,
        'director': this.filmInfo.director,
        'writers': this.filmInfo.writers,
        'actors': this.filmInfo.actors,
        'release': {
          'date': this.filmInfo.release.date,
          'release_country': this.filmInfo.release.releaseCountry,
        },
        'runtime': this.filmInfo.runtime,
        'genre': this.filmInfo.genre,
        'description': this.filmInfo.description,
      },
      'user_details': {
        'personal_rating': this.userDetails.personalRating,
        'watchlist': this.userDetails.watchlist,
        'already_watched': this.userDetails.alreadyWatched,
        'watching_date': this.userDetails.watchingDate,
        'favorite': this.userDetails.favorite,
      }
    };
  }
}
