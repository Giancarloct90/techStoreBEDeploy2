"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(
  require("@babel/runtime/regenerator")
);

var _asyncToGenerator2 = _interopRequireDefault(
  require("@babel/runtime/helpers/asyncToGenerator")
);

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../config"));

var connecToDB = /*#__PURE__*/ (function () {
  var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/ _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _mongoose["default"].connect(_config["default"].URI_DB, {
                  useNewUrlParser: true,
                  useCreateIndex: true,
                  useUnifiedTopology: true,
                  useFindAndModify: false,
                });

              case 3:
                console.log("DB ONLINE");
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log("Error to Connect to DB");

              case 9:
              case "end":
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[0, 6]]
      );
    })
  );

  return function connecToDB() {
    return _ref.apply(this, arguments);
  };
})();

connecToDB();
