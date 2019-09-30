import {Description, Position, UserRank} from "./constants";

const createElement = (template) => {
  const containerElement = document.createElement(`div`);
  containerElement.innerHTML = template;
  return containerElement.firstChild;
};
const render = (container, element, position = Position.BEFOREEND) => {
  switch (position) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};
const removeElement = (element) => {
  if (element) {
    element.remove();
  }
};
const getUserRank = (amount) => {
  let rank;

  if (amount >= UserRank.MILESTONES.FIRST && amount <= UserRank.MILESTONES.SECOND) {
    rank = UserRank.TITLES.FIRST;
    return rank;
  } else if (amount >= UserRank.MILESTONES.THIRD && amount <= UserRank.MILESTONES.FOURTH) {
    rank = UserRank.TITLES.SECOND;
    return rank;
  }

  rank = UserRank.TITLES.THIRD;
  return rank;
};
const countDuplicateElements = (list) => {
  let counts = {};
  list.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  return counts;
};
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);
};
const toJSON = (response) => {
  return response.json();
};
const isOnline = () => {
  return window.navigator.onLine;
};
const objectToArray = (object) => {
  return Object.keys(object).map((id) => object[id]);
};

const trimFilmDescription = (description) => {
  return description.length < Description.LENGTH.MAX ? description : `${description.slice(0, Description.LENGTH.TO_DISPLAY).trim()}…`;
};

export {createElement, render, removeElement, getUserRank, countDuplicateElements, checkStatus, toJSON, isOnline, objectToArray, trimFilmDescription};
