export default class CommentAdapter {
  constructor(data) {
    this.id = data[`id`];
    this.author = data[`author`];
    this.text = data[`comment`];
    this.commentDay = data[`date`];
    this.emoji = `./images/emoji/${data[`emotion`]}.png`;
  }

  static parseComment(data) {
    return new CommentAdapter(data);
  }

  static parseComments(data) {
    return data.map(CommentAdapter.parseComment);
  }
}
