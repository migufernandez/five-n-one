'use strict';

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _starwarsNames = require('./starwars-names.json');

var _starwarsNames2 = _interopRequireDefault(_starwarsNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(_starwarsNames2.default);

module.exports = {
  all: _starwarsNames2.default,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}