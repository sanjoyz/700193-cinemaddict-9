import {getSearchTemplate} from './components/search.js';
import {getProfileTemplate} from './components/profile.js';
import {getNavigationTemplate} from './components/navigation.js';
import {getSortingTemplate} from './components/sort.js';
import {getFilmsTemplate} from './components/films.js';
import {getFilmCardTemplate} from './components/film-card.js';
import {getShowMoreButtonTemplate} from './components/show-more-button.js';
import {getFilmDetailsTemplate} from './components/film-details.js';
import {getFilmsArray} from './data.js';
import {filters} from './data.js';

const FILMS_TO_SHOW = 5;
const FILMS_WE_HAVE = 15;
const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.header`);

renderComponent(headerElement, getSearchTemplate(), `beforeend`);
renderComponent(headerElement, getProfileTemplate(), `beforeend`);

const mainElement = document.querySelector(`.main`);

renderComponent(mainElement, getNavigationTemplate(filters), `beforeend`);
renderComponent(mainElement, getSortingTemplate(), `beforeend`);

renderComponent(mainElement, getFilmsTemplate(), `beforeend`);

const filmsListElement = document.querySelector(`.films-list`);
renderComponent(filmsListElement, getShowMoreButtonTemplate(), `beforeend`);
const filmsListContainerElement = document.querySelector(`.films-list__container`);

const renderFilms = (films) => {
  films.forEach((film) => {
    if (document.querySelectorAll(`section.films-list > div > article.film-card`).length === getFilmsArray(FILMS_WE_HAVE).length) {
      filmsListElement.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
      return;
    }
    renderComponent(filmsListContainerElement, getFilmCardTemplate(film));
  });
};

renderFilms(getFilmsArray(FILMS_TO_SHOW));

const onshowMoreButtonClick = () => {
  renderFilms(getFilmsArray(FILMS_TO_SHOW));
};
const showMoreButtonElement = document.querySelector(`.films-list__show-more`);
showMoreButtonElement.addEventListener(`click`, onshowMoreButtonClick);

// дополнительно карточка отрисовывается дважды в блоках топ рейтед и мост комментед
const filmsExtraElementTopRated = document.querySelector(`body > main > section > section:nth-child(2) > .films-list__container`);
const filmsExtraElementMostCommented = document.querySelector(`body > main > section > section:nth-child(3) > .films-list__container`);

renderComponent(filmsExtraElementTopRated, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);
renderComponent(filmsExtraElementTopRated, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);
renderComponent(filmsExtraElementMostCommented, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);
renderComponent(filmsExtraElementMostCommented, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);


const footerElement = document.querySelector(`.footer`);
// renderComponent(footerElement, getFilmDetailsTemplate(), `afterend`);
