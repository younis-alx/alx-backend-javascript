export default class Car {
  constructor(brand, motor, color) {
    /* eslint-disable no-underscore-dangle */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
