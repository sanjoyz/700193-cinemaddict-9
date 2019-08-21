import {getSearchTemplate} from './components/search.js';
import {getProfileTemplate} from './components/profile.js';
import {getNavigationTemplate} from './components/navigation.js';
import {getSortingTemplate} from './components/sort.js';
import {getFilmListTemplate} from './components/film-list.js';
import {getShowMoreButtonTemplate} from './components/show-more-button.js';
import {filters} from './data.js';
import {comments} from './data.js';
import Film from './components/film-card.js';
import FilmDetails from './components/film-details.js';
import {createElement} from './utils.js';
import {render} from './utils.js';
import {unrender} from './utils.js';
import {Position} from './utils.js';
import {getFilm} from './data.js';
const FILMS_TO_SHOW = 5;
const FILMS_WE_HAVE = 15;


const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, createElement(getSearchTemplate()), `beforeend`);
render(headerElement, createElement(getProfileTemplate()), `beforeend`);
render(mainElement, createElement(getNavigationTemplate(filters)), `beforeend`);
render(mainElement, createElement(getSortingTemplate()), `beforeend`);
render(mainElement, createElement(getFilmListTemplate()), `beforeend`);

const filmsListElement = document.querySelector(`.films-list`);
render(filmsListElement, createElement(getShowMoreButtonTemplate()), `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);

const renderFilm = (filmMock) => {
  const film = new Film(filmMock);
  const filmDetails = new FilmDetails(filmMock);
  if (document.querySelectorAll(`.film-card`).length > FILMS_WE_HAVE) {
    filmsListElement.querySelector(`.films-list__show-more`).classList.add(`visually-hidden`);
    return;
  }
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      unrender(document.querySelector(`.film-details`));
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  film.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    render(mainElement, createElement(filmDetails.getTemplate()), `beforeend`);
    // document.addEventListener(`keydown`, onEscKeyDown);
  });

  filmDetails.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    filmDetails.removeElement();
  });


  /*
  taskEdit.getElement().querySelector(`textarea`).addEventListener(`focus`, () => {
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  taskEdit.getElement().querySelector(`textarea`).addEventListener(`blur`, () => {
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  taskEdit.getElement().querySelector(`.card__save`).addEventListener(`click`, () => {
    tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  */
  render(filmsListContainerElement, film.getElement(), Position.BEFOREEND);
};

const filmMocks = new Array(FILMS_TO_SHOW).fill(``).map(getFilm);
filmMocks.forEach((filmMock) => renderFilm(filmMock));
/*
const onshowMoreButtonClick = () => {
  renderFilms(getFilmsArray(FILMS_TO_SHOW));
};

const showMoreButtonElement = document.querySelector(`.films-list__show-more`);
showMoreButtonElement.addEventListener(`click`, onshowMoreButtonClick);
*/
/*
// дополнительно карточка отрисовывается дважды в блоках топ рейтед и мост комментед
const filmsExtraElementTopRated = document.querySelector(`body > main > section > section:nth-child(2) > .films-list__container`);
const filmsExtraElementMostCommented = document.querySelector(`body > main > section > section:nth-child(3) > .films-list__container`);

renderComponent(filmsExtraElementTopRated, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);
renderComponent(filmsExtraElementTopRated, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);
renderComponent(filmsExtraElementMostCommented, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);
renderComponent(filmsExtraElementMostCommented, getFilmCardTemplate(getFilmsArray(FILMS_TO_SHOW)), `beforeend`);


const footerElement = document.querySelector(`.footer`);
renderComponent(footerElement, getFilmDetailsTemplate(filmDetails, comments), `afterend`);

*/
