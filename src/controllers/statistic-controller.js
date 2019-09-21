import Statistic from '../components/statistic';
import StatChart from '../components/statistic-chart';
import StatisticText from '../components/statistic-text';
import {render, Position} from '../utils.js';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default class StatisticController {
  constructor(container, films, rank) {
    this._container = container;
    this._films = films;
    this._rank = rank;
    this._statistic = new Statistic(this._rank);
  }
  init() {
    render(this._container, this._statistic.getElement());
    this._renderStatDiagram(this._films);
    this._renderStatText(this._films);
  }

  _getStatTopGenre(films) {
    const arrayGenres = [`Animation`, `Adventure`, `Family`, `Thriller`, `Sci-Fi`, `Action`, `Comedy`, `Horror`];
    const func = (genre) => {
      const array = [genre];
      for (const value of films) {
        if (value.genres.includes(genre)) {
          array.push(value);
        }
      }
      return array;
    };
    const arr = [];
    arrayGenres.forEach((genre) => arr.push(func(genre)));
    const sortByLength = (a, b) => {
      return b.length - a.length;
    };
    return arr.sort(sortByLength);
  }
  _renderStatText(films) {
    const statisticWatched = films.length;
    const statisticDuration = () => {
      let count;
      for (const value of films) {
        count += value.duration;
      }
      return count;
    };
    const statTopGenre = this._getStatTopGenre(films);
    let statText;
    if (films.length > 0) {
      statText = new StatisticText(statisticWatched, statisticDuration(), statTopGenre);
    } else {
      statText = new StatisticText(0, 0, `-`);
    }
    render(this._statistic.getElement(), statText.getElement(), Position.BEFOREEND);
  }
  _renderStatDiagram(films) {
    if (films.length > 0) {
      const chartContainer = new StatChart();
      render(this._statistic.getElement(), chartContainer.getElement(), Position.BEFOREEND);

      const getGenresLabels = () => {
        const labels = [];
        for (const value of this._getStatTopGenre(films)) {
          labels.push(value[0]);
        }
        return labels;
      };
      const getGenresData = () => {
        const genresData = [];
        for (const value of this._getStatTopGenre(films)) {
          genresData.push(value.length - 1);
        }
        return genresData;
      };

      const container = this._statistic.getElement().querySelector(`.statistic__chart`);
      const getGenresChart = () => {
        const genresChart = new Chart(container, {
          plugins: [ChartDataLabels],
          type: `horizontalBar`,
          data: {
            labels: getGenresLabels(),
            datasets: [{
              data: getGenresData(),
              backgroundColor: `yellow`,
              lineTension: 0,
              pointRadius: 8,
              pointHoverRadius: 8,
              pointBackgroundColor: `#ffffff`
            }]
          },
          options: {
            legend: {
              display: false
            },
          }
        });
        return genresChart;
      };
      getGenresChart();
    }
  }
}
