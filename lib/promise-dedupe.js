import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var requestById = {};

// responses of outdated requests will be pending FOREVER!
export default (function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id, promise) {
    var check;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestById[id] = promise;

            check = function check(value) {
              var shouldResolve = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              return new Promise(function (resolve, reject) {
                if (requestById[id] === promise) {
                  if (shouldResolve) {
                    resolve(value);
                  } else {
                    reject(value);
                  }
                }
              });
            };

            return _context.abrupt("return", promise.then(function (r) {
              return check(r, true);
            }).catch(function (r) {
              return check(r, false);
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();