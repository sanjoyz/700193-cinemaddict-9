const DESCRIPTION_STRING = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomDescription = (string) => {
  const arr = string.replace(/([.?!])\s*(?=[A-Z])/g, `$1|`).split(`|`); // http://qaru.site/questions/309544/split-string-into-sentences-in-javascript
  let result = ``;
  for (let i = 0; i < getRandomNumber(2) + 1; i++) {
    result = result.concat(`${arr[getRandomNumber(arr.length)]}`);
  }
  return result;
};

const getFilm = () => ({
  name: [
    `Made for each other`,
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
  ][getRandomNumber(15)],
  poster: [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`
  ][getRandomNumber(7)],
  description: getRandomDescription(DESCRIPTION_STRING),
  rating: getRandomNumber(10),
  commentsCount: getRandomNumber(8),
  year: 1950 + getRandomNumber(70),
  genre: [
    `Musical`,
    `Drama`,
    `Action`,
    `Cartoon`,
    `Adventure`,
    `Historical`
  ][getRandomNumber(7)],
  duration: `1h32m`,
});

export const getFilmsArray = (number) => new Array(number).fill(``).map(() => getFilm());

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
