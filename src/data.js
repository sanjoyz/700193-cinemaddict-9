const DESCRIPTION_STRING = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomDescription = (string) => {
  const arr = string.replace(/([.?!])\s*(?=[A-Z])/g, `$1|`).split(`|`);
  let result = ``;
  for (let i = 0; i < getRandomNumber(2) + 1; i++) {
    result = result.concat(`${arr[getRandomNumber(arr.length)]}`);
  }
  return result;
};

export const getFilm = () => ({
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
  }
});

// export const getFilmsArray = (number) => new Array(number).fill(``).map(() => getFilm());

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

export const comments = [
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
];
