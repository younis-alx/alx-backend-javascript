import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    /* eslint-disable no-underscore-dangle */
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
