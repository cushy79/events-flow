export default class Notification {
  constructor() {
    this._emoji = ":ghost:"
  }

  get emoji() { return this._emoji }
  set emoji(emoji) { this._emoji = emoji }

  parse() { }

  get webhook() {
    return {
      emoji: this.emoji
    };
  }
}
