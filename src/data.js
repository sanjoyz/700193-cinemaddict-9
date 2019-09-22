import moment from 'moment';

const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const FILMS_WE_HAVE = 15;
const MOCK_TITLES = [`Made for each other`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Santa Claus Conquers the Martians`,
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `The Great Flamarion`,
  `The Shawshank Redemption`,
  `The Green Mile`,
  `Forrest Gump`,
  `Schindler's List`,
  `Intouchables`,
  `Léon`,
  `Inception`,
  `The Lion King`
];
const MOCK_POSTERS = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`
];
const DESCRIPTION_STRING = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const MOCK_ORIGINAL_NAMES = [`Made for each other`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Santa Claus Conquers the Martians`,
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `The Great Flamarion`,
  `The Shawshank Redemption`,
  `The Green Mile`,
  `Forrest Gump`,
  `Schindler's List`,
  `Intouchables`,
  `Léon`,
  `Inception`,
  `The Lion King`,
];
const MOCK_COUNTRIES = [
  `USA`,
  `Russia`,
  `Italy`,
  `Japan`,
  `Germany`,
  `Mexica`,
  `India`,
];
const MOCK_NAMES = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Erich von Stoheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Sherman Huff`,
  `Otis Hodges`,
  `John Doe`,
  `Tim Macoeev`
];
const MOCK_EMOJIS = [
  `./images/emoji/smile.png`,
  `./images/emoji/sleeping.png`,
  `./images/emoji/puke.png`,
  `./images/emoji/angry.png`,
];
const MOCK_COMMENTS_TEXT = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];
const MOCK_GENRES = [
  `Animation`,
  `Adventure`,
  `Family`,
  `Thriller`,
  `Sci-Fi`,
  `Action`,
  `Comedy`,
  `Horror`,
];
const getRandomDescription = (string) => {
  const arr = string.replace(/([.?!])\s*(?=[A-Z])/g, `$1|`).split(`|`);
  let result = ``;
  for (let i = 0; i < getRandomNumber(1, 3); i++) {
    result = result.concat(`${arr[getRandomNumber(0, arr.length - 1)]}`);
  }
  return result;
};
const getRandomName = () => {
  return MOCK_NAMES[getRandomNumber(0, MOCK_NAMES.length - 1)];
};
const getComment = () => ({
  emoji: MOCK_EMOJIS[getRandomNumber(0, MOCK_EMOJIS.length - 1)],
  text: MOCK_COMMENTS_TEXT[getRandomNumber(0, MOCK_COMMENTS_TEXT.length - 1)],
  author: getRandomName(MOCK_NAMES),
  commentDay: `${getRandomNumber(0, 10)} days ago`,
});

const getFilm = () => ({
  name: MOCK_TITLES[getRandomNumber(0, MOCK_TITLES.length - 1)],
  nameOriginal: MOCK_ORIGINAL_NAMES[getRandomNumber(0, MOCK_ORIGINAL_NAMES.length)],
  poster: MOCK_POSTERS[getRandomNumber(0, MOCK_POSTERS.length - 1)],
  description: getRandomDescription(DESCRIPTION_STRING),
  rating: getRandomNumber(0, 11),
  // commentsCount: getRandomNumber(0, 8),
  releaseDate: moment(new Date(Date.now() - getRandomNumber(0, 10) * 365 * 7 * 24 * 60 * 60 * 1000)),
  watchDate: Date.now() - getRandomNumber(0, 2) * 12 * getRandomNumber(0, 7) * 24 * 60 * 60 * 1000,
  genre: MOCK_GENRES[getRandomNumber(0, MOCK_GENRES.length - 1)],
  duration: `${getRandomNumber(0, 4)}h ${getRandomNumber(0, 60)}m`,
  country: MOCK_COUNTRIES[getRandomNumber(0, MOCK_COUNTRIES.length + 1)],
  director: getRandomName(),
  actors: new Array(getRandomNumber(1, 7)).fill(``).map(getRandomName),
  writers: new Array(getRandomNumber(1, 5)).fill(``).map(getRandomName),
  age: `${getRandomNumber(0, 22)}+`,
  comments: new Array(getRandomNumber(1, 5)).fill(``).map(getComment),
  isAddedToWatchList: Boolean(getRandomNumber(0, 1)),
  isMarkedAsWatched: Boolean(getRandomNumber(0, 1)),
  isFavorite: Boolean(getRandomNumber(0, 1)),
});

export const getFilmsMocks = new Array(FILMS_WE_HAVE).fill(``).map(getFilm);

export const filters = [
  {
    title: `All movies`,
    count: 15,
    isChecked: true,
  },
  {
    title: `Watchlist`,
    count: 13,
    isChecked: false,
  },
  {
    title: `History`,
    count: 4,
    isChecked: false,
  },
  {
    title: `Favorites`,
    count: 8,
    isChecked: false,
  },
  {
    title: `Stats`,
    count: 0,
    isChecked: false,
  }
];
