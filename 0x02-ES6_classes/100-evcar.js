import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    /* eslint-disable no-underscore-dangle */
    this._range = range;
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}
