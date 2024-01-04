export default class HolbertonClass {
  constructor(size, location) {
    /* eslint-disable no-underscore-dangle */
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
