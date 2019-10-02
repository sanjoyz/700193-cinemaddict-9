import {getArrayFromObject} from "./utils/functions";
import ModelFilm from "./models/film";
import ModelComment from "./models/comment";

export default class Provider {
  constructor({api, store, isOnline}) {
    this._api = api;
    this._store = store;
    this._isOnline = isOnline;
  }

  getCards() {
    if (this._isOnline()) {
      return this._api.getCards()
        .then((cards) => {
          cards.map((card) => this._store.setItem({key: card.id, item: ModelFilm.toRAW(card)}));
          return cards;
        });
    }

    const rawCardsMap = this._store.getAll();
    const rawCards = getArrayFromObject(rawCardsMap);
    const cards = ModelFilm.parseFilms(rawCards);
    return Promise.resolve(cards);
  }

  syncCards() {
    return this._api.syncCards({cards: getArrayFromObject(this._store.getAll())});
  }

  updateCard({id, data}) {
    if (this._isOnline()) {
      return this._api.updateCard({id, data})
        .then((card) => {
          this._store.setItem({key: card.id, item: ModelFilm.toRAW(card)});
          return card;
        });
    }

    const card = data;
    this._store.setItem({key: card.id, item: card});
    return Promise.resolve(ModelFilm.parseFilm(card));
  }

  getComments({id}) {
    if (this._isOnline()) {
      return this._api.getComments({id})
        .then((comments) => {
          this._store.setItem({key: id, item: comments.map((comment) => ModelComment.toRAW(comment))});
          return comments;
        });
    }

    const rawCommentsMap = this._store.getAll();
    const rawComments = getArrayFromObject(rawCommentsMap);
    const comments = rawComments.map((rawComment) => {
      ModelComment.parseComments(rawComment);
    });
    return Promise.resolve(comments);
  }
}
