export default class Airport {
  constructor(name, code) {
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${typeof (this)} ${this._code}]`;
  }
}
