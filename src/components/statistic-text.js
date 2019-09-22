import AbstractComponent from './abstract-component.js';

export default class StatisticText extends AbstractComponent {
  constructor(statWatched, statDuration, statTopGenre) {
    super();
    this._statWatched = statWatched;
    this._statDuration = statDuration;
    this._statTopGenre = statTopGenre;
  }
  getTemplate() {
    return `<ul class="statistic__text-list">
        <li class="statistic__text-item">
            <h4 class="statistic__item-title">You watched</h4>
            <p class="statistic__item-text">${this._statWatched}<span class="statistic__item-description">movies</span></p>
        </li>
        <li class="statistic__text-item">
            <h4 class="statistic__item-title">Total duration</h4>
            <p class="statistic__item-text">${Math.trunc(this._statDuration / 60)}<span class="statistic__item-description">h</span> ${Math.trunc(this._statDuration % 60)} <span class="statistic__item-description">m</span></p>
        </li>
        <li class="statistic__text-item">
            <h4 class="statistic__item-title">Top genre</h4>
            <p class="statistic__item-text">${this._statTopGenre}</p>
        </li>
    </ul>`;
  }
}


