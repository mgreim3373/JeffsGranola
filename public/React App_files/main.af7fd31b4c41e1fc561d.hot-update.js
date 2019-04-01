webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _apis_youtube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apis/youtube */ "./src/apis/youtube.js");
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchBar.css */ "./src/components/SearchBar.css");
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _VideoList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VideoList */ "./src/components/VideoList.js");
/* harmony import */ var _VideoDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./VideoDetail */ "./src/components/VideoDetail.js");







var _jsxFileName = "/Users/mikegreim/Desktop/practice/video/video/src/components/App.js";







var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      videos: [],
      selectedVideo: null
    };

    _this.onTermSubmit =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(term) {
        var response;
        return _Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _apis_youtube__WEBPACK_IMPORTED_MODULE_9__["default"].get('/search', {
                  params: {
                    q: term
                  }
                });

              case 2:
                response = _context.sent;

                _this.setState({
                  videos: response.data.items,
                  selectedVideo: response.data.items[0]
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onVideoSelect = function (video) {
      _this.setState({
        selectedVideo: video
      });
    };

    return _this;
  }

  Object(_Users_mikegreim_Desktop_practice_video_video_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ui container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onFormSubmit: this.onTermSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ui grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ui row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "eleven wide column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_VideoDetail__WEBPACK_IMPORTED_MODULE_12__["default"], {
        video: this.state.selectedVideo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "five wide column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "'", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_VideoList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onVideoSelect: this.onVideoSelect,
        videos: this.state.videos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))))) // <div className="image-container">
      // <div className="colorPlane"></div>
      //   <div className="text-container">
      //     <div className="text">
      //       Jeff's
      //     </div>
      //   </div>
      // </div>
      // <div className="subTitle">
      //   GRANOLA
      // </div>
      // <svg className="box" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      //      width="340px" height="333px" viewBox="0.0 0.0 960.0 720.0" enableBackground="new 0 0 340 333">
      //
      //   <path className="path" fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" d="m150.3727 210.26509l602.77167 0l0 373.38586l-602.77167 0z"/>
      //
      // </svg>
      ;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.af7fd31b4c41e1fc561d.hot-update.js.map