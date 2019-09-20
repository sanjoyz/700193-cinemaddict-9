import {getFilmsMocks} from './data.js';

export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  BEFORE: `before`
};

export const createElement = (template) => {
  const newDivElement = document.createElement(`div`);
  newDivElement.innerHTML = template;
  return newDivElement.firstChild;
};

export const render = (container, element, position) => {
  switch (position) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
    case Position.BEFORE:
      container.parentNode.insertBefore(element, container);
  }
};

export const deleteElement = (element) => {
  if (element) {
    element.remove();
  }
};

export const defineRank = () => {
  const count = getAllFiltersConfig(getFilmsMocks)[2].count;
  let rank;

  if (count === 0) {
    rank = ``;
  } else if (count > 0 && count <= 10) {
    rank = `novice`;
  } else if (count > 10 && count <= 20) {
    rank = `fan`;
  } else {
    rank = `movie buff`;
  }

  return rank;
};

const getAllFiltersConfig = (config) => {
  const arrayFilters = [];
  const nameFilters = new Set([
    `all`,
    `watchlist`,
    `watched`,
    `favorite`
  ]);
  const countAllFilters = getCountFilmsOptions(config);

  for (let name of nameFilters) {
    arrayFilters.push({name, count: countAllFilters[name]});
  }

  return arrayFilters;
};
const getCountFilmsOptions = (config) => {
  const countAllFilters = new Set();
  let countWathlist = 0;
  let countWatced = 0;
  let countFavorite = 0;

  config.forEach(({isAddedToWatchList, isMarkedAsWatched, isFavorite}) => {
    if (isAddedToWatchList) {
      countWathlist++;
    }

    if (isMarkedAsWatched) {
      countWatced++;
    }

    if (isFavorite) {
      countFavorite++;
    }
  });

  countAllFilters.all = config.length;
  countAllFilters.watchlist = countWathlist;
  countAllFilters.watched = countWatced;
  countAllFilters.favorite = countFavorite;

  return countAllFilters;
};

const defineMostValues = (config, type) => {
  const supportArray = [];
  const arrayValues = [];
  const arrayMostValue = [];

  if (type === `rating`) {
    config.map((item, i) => supportArray.push({i, [type]: item[type].toString()}));
  } else {
    config.map((item, i) => supportArray.push({i, [type]: item[type].length.toString()}));
  }

  supportArray.map((item) => arrayValues.push(item[type]));

  let twoMostValueElements = arrayValues.sort().splice(-2, 2).sort();
  const [one, two] = twoMostValueElements;

  supportArray.map((item, i) => {
    if (two.indexOf(item[type]) !== -1) {
      arrayMostValue.push(i);
    }
  });

  supportArray.map((item, i) => {
    if (one.indexOf(item[type]) !== -1) {
      arrayMostValue.push(i);
    }
  });

  return arrayMostValue;
};

export const defineMostValuesInFilms = (value, config = getFilmsMocks) => {
  const arrayMost = defineMostValues(config, value);

  return config.slice(arrayMost[0], arrayMost[0] + 1).concat(config.slice(arrayMost[1], arrayMost[1] + 1));
};
