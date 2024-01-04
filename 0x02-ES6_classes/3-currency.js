export default class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    get code() {
      return this._code;
    }
  
    set code(code) {
      this._code = code;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._code = name;
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
