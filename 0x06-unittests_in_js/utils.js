const Utils = {
    calculateNumber(type, a, b) {
      let RESULT = null;
      switch (type) {
        case 'SUM':
          RESULT = Math.round(a) + Math.round(b);
          break;
        case 'SUBTRACT':
          RESULT = Math.round(a) - Math.round(b);
          break;
        case 'DIVIDE':
          RESULT = Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
          break;
        default:
          RESULT = 0;
          break;
      }
      return RESULT;
    }
  };
  
  module.exports = Utils;