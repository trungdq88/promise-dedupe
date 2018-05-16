'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promiseDedupe = require('./promise-dedupe.js');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_promiseDedupe).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }