import AbstractComponent from '../components/abstract-component.js';
export default class Navigation extends AbstractComponent {
  constructor(countAddedToWatchList, countWatched, countFavorites) {
    super();
    this._countAddedToWatchList = countAddedToWatchList;
    this._countWatched = countWatched;
    this._countFavorites = countFavorites;
  }
  getTemplate() {
    return `<nav class="main-navigation">
    <a href="#All" class="main-navigation__item main-navigation__item--all main-navigation__item--active">All movies</a>
    <a href="#Watchlist" class="main-navigation__item main-navigation__item--watchlist">Watchlist <span class="main-navigation__item-count">${this._countAddedToWatchList}</span></a>
    <a href="#History" class="main-navigation__item main-navigation__item--history">History <span class="main-navigation__item-count">${this._countWatched}</span></a>
    <a href="#Favorites" class="main-navigation__item main-navigation__item--favorites">Favorites <span class="main-navigation__item-count">${this._countFavorites}</span></a>
    <a href="#Stats" class="main-navigation__item main-navigation__item--additional">Stats</a>  
  </nav>`.trim();
  }
}
