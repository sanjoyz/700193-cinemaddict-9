export const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

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
