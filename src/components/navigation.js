import AbstractComponent from '../components/abstract-component.js';
export default class Navigation extends AbstractComponent {
  getTemplate(filters) {
    return `<nav class="main-navigation">
    <a href="#${filters[0].title.replace(/ [\s\S]+/, ``).toLowerCase()}" class="main-navigation__item main-navigation__item${filters[0].isChecked ? `--active` : ``}">${filters[0].title}</a>
    <a href="#${filters[1].title}" class="main-navigation__item${filters[1].isChecked ? `--active` : ``}">${filters[1].title} <span class="main-navigation__item-count">${filters[1].count}</span></a>
    <a href="#${filters[2].title}" class="main-navigation__item${filters[2].isChecked ? `--active` : ``}">${filters[2].title} <span class="main-navigation__item-count">${filters[2].count}</span></a>
    <a href="#${filters[3].title}" class="main-navigation__item${filters[3].isChecked ? `--active` : ``}">${filters[3].title}<span class="main-navigation__item-count">${filters[3].count}</span></a>
    <a href="#${filters[4].title}" class="main-navigation__item${filters[4].isChecked ? `--active` : ``} main-navigation__item--additional">${filters[4].title}</a>
  </nav>`.trim();
  }
}
