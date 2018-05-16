'use strict';

var _promiseDedupe = require('./promise-dedupe.js');

var _promiseDedupe2 = _interopRequireDefault(_promiseDedupe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('dedupe', function () {
  it('should work when resolves', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var variable, id;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variable = void 0;
            id = Math.random();

            (0, _promiseDedupe2.default)(id, new Promise(function (r) {
              return setTimeout(function () {
                return r(1);
              }, 300);
            })).then(function (value) {
              return variable = value;
            });
            (0, _promiseDedupe2.default)(id, new Promise(function (r) {
              return setTimeout(function () {
                return r(2);
              }, 10);
            })).then(function (value) {
              return variable = value;
            });

            _context.next = 6;
            return new Promise(function (r) {
              return setTimeout(r, 500);
            });

          case 6:
            expect(variable).toBe(2);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('should work when rejects', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var variable, id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            variable = void 0;
            id = Math.random();

            (0, _promiseDedupe2.default)(id, new Promise(function (_, r) {
              return setTimeout(function () {
                return r(1);
              }, 300);
            })).catch(function (value) {
              return variable = value;
            });
            (0, _promiseDedupe2.default)(id, new Promise(function (_, r) {
              return setTimeout(function () {
                return r(2);
              }, 10);
            })).catch(function (value) {
              return variable = value;
            });
            _context2.next = 6;
            return new Promise(function (r) {
              return setTimeout(r, 500);
            });

          case 6:
            expect(variable).toBe(2);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));
});