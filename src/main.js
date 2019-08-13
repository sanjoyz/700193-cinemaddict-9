import {getSearchTemplate} from './components/search.js';
import {getProfileTemplate} from './components/profile.js';
import {getNavigationTemplate} from './components/navigation.js';
import {getSortingTemplate} from './components/sort.js';
import {getFilmsTemplate} from './components/films.js';
import {getFilmCardTemplate} from './components/film-card.js';
import {getShowMoreButtonTemplate} from './components/show-more-button.js';
import {getFilmDetailsTemplate} from './components/film-details.js';

const renderComponent = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.header`);

renderComponent(headerElement, getSearchTemplate(), `beforeend`);
renderComponent(headerElement, getProfileTemplate(), `beforeend`);

const mainElement = document.querySelector(`.main`);

renderComponent(mainElement, getNavigationTemplate(), `beforeend`);
renderComponent(mainElement, getSortingTemplate(), `beforeend`);

renderComponent(mainElement, getFilmsTemplate(), `beforeend`);
const filmsListElement = document.querySelector(`.films-list`);
const filmsListContainerElement = document.querySelector(`.films-list__container`);
for (let i = 0; i < 5; i++) {
  renderComponent(filmsListContainerElement, getFilmCardTemplate(), `beforeend`);
}

// дополнительно карточка отрисовывается дважды в блоках топ рейтед и мост комментед
const filmsExtraElementTopRated = document.querySelector(`body > main > section > section:nth-child(2) > .films-list__container`);
const filmsExtraElementMostCommented = document.querySelector(`body > main > section > section:nth-child(3) > .films-list__container`);

renderComponent(filmsExtraElementTopRated, getFilmCardTemplate(), `beforeend`);
renderComponent(filmsExtraElementTopRated, getFilmCardTemplate(), `beforeend`);
renderComponent(filmsExtraElementMostCommented, getFilmCardTemplate(), `beforeend`);
renderComponent(filmsExtraElementMostCommented, getFilmCardTemplate(), `beforeend`);

renderComponent(filmsListElement, getShowMoreButtonTemplate(), `beforeend`);

const footerElement = document.querySelector(`.footer`);
renderComponent(footerElement, getFilmDetailsTemplate(), `afterend`);
