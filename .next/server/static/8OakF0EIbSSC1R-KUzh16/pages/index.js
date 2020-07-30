module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0,
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"9":"fe501b2fb9285617a79f"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "489e":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "GMnU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "OurWorksList", function() { return /* binding */ OurWorksList; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__("iHhI");
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/Content.js
var Content = __webpack_require__("QZnN");

// EXTERNAL MODULE: ./hooks/isMobile.js
var isMobile = __webpack_require__("Gp+z");

// CONCATENATED MODULE: ./components/WorkCard.js

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const isVideo = url => {
  const ext = url.split('.').pop();
  return ['mp4'].includes(ext);
};

const WorkCard = (_ref) => {
  var _data$thumbnail, _data$thumbnail2, _data$thumbnail3, _data$video;

  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data"]);

  const player = Object(external_react_["useRef"])(null);
  const {
    0: played,
    1: setPlayed
  } = Object(external_react_["useState"])(false);
  const {
    0: preview,
    1: setPreview
  } = Object(external_react_["useState"])(false);

  const mouseLeave = () => {
    if (!played) {
      setPreview(false);
      player.current.seekTo(0, 'seconds');
    }
  };

  const playVideo = () => {
    if (!played) {
      var _player$current, _player$current$seekT;

      setPlayed(true);
      player === null || player === void 0 ? void 0 : (_player$current = player.current) === null || _player$current === void 0 ? void 0 : (_player$current$seekT = _player$current.seekTo) === null || _player$current$seekT === void 0 ? void 0 : _player$current$seekT.call(_player$current, 0, 'seconds');
    }
  };

  return __jsx("div", _extends({}, props, {
    onMouseLeave: mouseLeave,
    onMouseEnter: () => !played && setPreview(true),
    className: "work-card relative"
  }), isVideo(data === null || data === void 0 ? void 0 : (_data$thumbnail = data.thumbnail) === null || _data$thumbnail === void 0 ? void 0 : _data$thumbnail.url) ? __jsx(external_react_player_default.a, {
    ref: player,
    playing: played || preview,
    width: "100%",
    height: "100%",
    url: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$thumbnail2 = data.thumbnail) === null || _data$thumbnail2 === void 0 ? void 0 : _data$thumbnail2.url),
    controls: played,
    volume: 1,
    muted: !played
  }) : __jsx(external_react_default.a.Fragment, null, !preview && __jsx("img", {
    className: "absolute left-0 w-full",
    src: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$thumbnail3 = data.thumbnail) === null || _data$thumbnail3 === void 0 ? void 0 : _data$thumbnail3.url),
    alt: data === null || data === void 0 ? void 0 : data.title,
    style: {
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }), __jsx(external_react_player_default.a, {
    style: {
      opacity: played || preview ? 1 : 0
    },
    ref: player,
    playing: played || preview,
    width: "100%",
    height: "100%",
    url: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$video = data.video) === null || _data$video === void 0 ? void 0 : _data$video.url),
    controls: played,
    volume: 1,
    muted: !played
  })), __jsx("div", {
    className: "work-card__text",
    style: {
      zIndex: 2
    }
  }, __jsx("h2", {
    className: "text-40px font-medium mb-2",
    style: {
      lineHeight: 1
    }
  }, data.title), __jsx("p", {
    className: "text-default w-full"
  }, data.short_description)));
};

WorkCard.Detail = ({
  data,
  closeDetail
}) => {
  var _data$video2;

  const isMobileDevice = Object(isMobile["a" /* default */])();
  return __jsx(external_semantic_ui_react_["Modal"], {
    open: data !== null,
    onClose: closeDetail,
    size: "large",
    style: {
      borderRadius: 0
    }
  }, __jsx("div", {
    className: "p-12"
  }, __jsx("div", {
    className: "flex justify-between items-center"
  }, __jsx("h1", {
    className: "m-0 text-16px md:text-60px w-10/12 md:w-full font-medium"
  }, data.title), __jsx("button", {
    type: "button",
    onClick: closeDetail,
    className: "self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0",
    style: {
      transform: isMobileDevice ? 'scale(0.5)' : 'scale(0.7)'
    }
  }, __jsx("span", {
    className: "hamburger-box"
  }, __jsx("span", {
    className: `hamburger-inner`
  })))), data.video && __jsx("div", {
    className: "my-8"
  }, __jsx(external_react_player_default.a, {
    playing: true,
    width: "100%",
    height: "100%",
    controls: true,
    url: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$video2 = data.video) === null || _data$video2 === void 0 ? void 0 : _data$video2.url)
  })), __jsx(Content["a" /* default */], {
    className: "work-card__detail text-12px md:text-default text-gray-600",
    text: data.description
  })));
};

/* harmony default export */ var components_WorkCard = (WorkCard);
// EXTERNAL MODULE: ./lib/axios.js
var axios = __webpack_require__("Jhtb");

// CONCATENATED MODULE: ./pages/our-works.js

var our_works_jsx = external_react_default.a.createElement;





const Logo = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "TtQW")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TtQW")],
    modules: ['components/Logo']
  }
});
const OurWorksList = ({
  data,
  className
}) => {
  const {
    0: work,
    1: setWork
  } = Object(external_react_["useState"])(null);
  return our_works_jsx(external_react_default.a.Fragment, null, our_works_jsx("div", {
    style: {
      flexGrow: 2
    },
    className: external_clsx_default()("grid grid-cols-2 xl:gap-12 gap-6", className)
  }, data.map((work, index) => our_works_jsx(components_WorkCard, {
    onClick: () => setWork(work),
    data: work,
    key: index
  }))), work !== null && our_works_jsx(components_WorkCard.Detail, {
    data: work,
    closeDetail: () => setWork(null)
  }));
};
const getServerSideProps = async () => {
  const data = await axios["a" /* default */].get('/our-works-page');
  return {
    props: {
      data: data
    }
  };
};

const OurWorks = ({
  data,
  HamburgerMenu
}) => {
  return our_works_jsx(external_react_default.a.Fragment, null, our_works_jsx(Logo, {
    hide: false,
    color: "dark"
  }), our_works_jsx(HamburgerMenu, {
    color: "dark"
  }), our_works_jsx("section", {
    id: "our-works",
    className: "min-h-screen pt-20 md:pt-0",
    style: {
      backgroundColor: '#FFFFFF'
    }
  }, our_works_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 mx-auto"
  }, our_works_jsx("nav", {
    className: "flex items-center justify-between mb-8"
  }, our_works_jsx("h1", {
    className: "text-32px md:text-52px font-medium uppercase"
  }, data.title)), our_works_jsx("p", {
    className: "text-gray-600 text-default mb-16",
    style: {
      lineHeight: '28px'
    }
  }, data.description), our_works_jsx(OurWorksList, {
    data: data.works
  }))));
};

/* harmony default export */ var our_works = __webpack_exports__["default"] = (OurWorks);

/***/ }),

/***/ "Gp+z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const isMobile = () => {
  const {
    0: isMobileDevice,
    1: setIsMobileDevice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
     false && false;
  }, []);
  return isMobileDevice;
};

/* harmony default export */ __webpack_exports__["a"] = (isMobile);

/***/ }),

/***/ "Jhtb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://admin-h3.xdevels.com",
  timeout: 1000 * 60 * 60
});
/* harmony default export */ __webpack_exports__["a"] = ({
  get: (url, config) => instance.get(url, config).then(res => res.data),
  post: (url, data, config) => instance.post(url, data, config),
  delete: (url, data, config) => instance.delete(url, data, config)
});

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QZnN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Content = (_ref) => {
  let {
    text
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text"]);

  return __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    source: text
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/ScrollDown.js

var __jsx = external_react_default.a.createElement;

const ScrollDown = Object(external_react_["forwardRef"])(({
  color: colorProps,
  onClick
}, ref) => {
  const color = colorProps === 'dark' ? '#9D9D9D' : '#FFF';
  return __jsx("div", {
    ref: ref,
    onClick: onClick,
    className: "fixed left-0 bottom-0 ml-8 sm:ml-12 lg:ml-16 mb-16 pl-2 flex flex-col items-center hidden md:flex cursor-pointer"
  }, __jsx("p", {
    className: "text-12px mb-4",
    style: {
      color,
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)'
    }
  }, "Scroll Down"), __jsx("svg", {
    width: "8",
    height: "59",
    viewBox: "0 0 8 59",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fill: color,
    d: "M3.64644 58.3535C3.84171 58.5488 4.15829 58.5488 4.35355 58.3535L7.53553 55.1716C7.73079 54.9763 7.73079 54.6597 7.53553 54.4645C7.34027 54.2692 7.02369 54.2692 6.82842 54.4645L4 57.2929L1.17157 54.4645C0.976308 54.2692 0.659726 54.2692 0.464463 54.4645C0.269201 54.6597 0.269201 54.9763 0.464463 55.1716L3.64644 58.3535ZM3.5 1.77104e-08L3.5 58L4.5 58L4.5 -1.77108e-08L3.5 1.77104e-08Z"
  })));
});
/* harmony default export */ var components_ScrollDown = (ScrollDown);
// CONCATENATED MODULE: ./components/Arrow.js

var Arrow_jsx = external_react_default.a.createElement;
const theme = {
  red: {
    main: '#B72842',
    secondary: 'white'
  },
  white: {
    main: 'white',
    secondary: '#B72842'
  }
};

const Arrow = ({
  color = 'red'
}) => {
  return Arrow_jsx("svg", {
    width: "64",
    height: "32",
    viewBox: "0 0 64 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Arrow_jsx("circle", {
    cx: "48",
    cy: "16",
    r: "16",
    fill: theme[color].main
  }), Arrow_jsx("path", {
    fill: theme[color].main,
    d: "M52.2071 16.7071C52.5976 16.3166 52.5976 15.6834 52.2071 15.2929L45.8431 8.92893C45.4526 8.53841 44.8195 8.53841 44.4289 8.92893C44.0384 9.31946 44.0384 9.95262 44.4289 10.3431L50.0858 16L44.4289 21.6569C44.0384 22.0474 44.0384 22.6805 44.4289 23.0711C44.8195 23.4616 45.4526 23.4616 45.8431 23.0711L52.2071 16.7071ZM0 17H51.5V15H0V17Z"
  }), Arrow_jsx("path", {
    fill: theme[color].secondary,
    d: "M52.2071 16.7071C52.5976 16.3166 52.5976 15.6834 52.2071 15.2929L45.8431 8.92893C45.4526 8.53841 44.8195 8.53841 44.4289 8.92893C44.0384 9.31946 44.0384 9.95262 44.4289 10.3431L50.0858 16L44.4289 21.6569C44.0384 22.0474 44.0384 22.6805 44.4289 23.0711C44.8195 23.4616 45.4526 23.4616 45.8431 23.0711L52.2071 16.7071ZM22.5 17L51.5 17V15L22.5 15V17Z"
  }));
};

/* harmony default export */ var components_Arrow = (Arrow);
// EXTERNAL MODULE: ./components/Content.js
var Content = __webpack_require__("QZnN");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/Quotes.js

var Quotes_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Slider = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "O/hg", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("O/hg")],
    modules: ['react-slick']
  }
});
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  pauseOnHover: false
};

const Quotes = ({
  data = []
}) => {
  const {
    0: indicator,
    1: setIndicator
  } = Object(external_react_["useState"])(0);
  return Quotes_jsx("section", {
    "menu-color": "light",
    className: "bg-red"
  }, Quotes_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col text-white"
  }, Quotes_jsx("div", {
    className: "flex-1 flex items-center"
  }, Quotes_jsx(Slider, _extends({}, settings, {
    afterChange: setIndicator
  }), data.map(({
    quote,
    author
  }, index) => Quotes_jsx("div", {
    className: "quote",
    key: index
  }, Quotes_jsx(Content["a" /* default */], {
    text: quote
  }), Quotes_jsx("p", {
    className: "text-20px md:text-28px normal-case"
  }, "- ", author))))), Quotes_jsx("div", {
    className: "flex items-center my-12"
  }, Quotes_jsx("span", {
    className: "text-default"
  }, ('0' + (indicator + 1).toString()).slice(-2)), Quotes_jsx("div", {
    className: "relative md:w-64 w-full mx-6"
  }, Quotes_jsx("div", {
    className: "absolute left-0 top-0 bg-white",
    style: {
      zIndex: 1,
      height: 2,
      width: ((indicator + 1) / data.length * 100).toString() + '%',
      backgroundColor: 'white',
      transition: 'width 300ms ease'
    }
  }), Quotes_jsx("div", {
    className: "absolute left-0 top-0 opacity-50",
    style: {
      height: 2,
      width: '100%',
      backgroundColor: '#D7D4D4'
    }
  })), Quotes_jsx("span", {
    className: "text-default"
  }, ('0' + data.length).slice(-2)))));
};

/* harmony default export */ var components_Quotes = (Quotes);
// EXTERNAL MODULE: ./components/Logo.js
var Logo = __webpack_require__("TtQW");

// EXTERNAL MODULE: ./lib/axios.js
var axios = __webpack_require__("Jhtb");

// EXTERNAL MODULE: ./pages/our-works.js + 1 modules
var our_works = __webpack_require__("GMnU");

// EXTERNAL MODULE: ./pages/awards.js + 1 modules
var pages_awards = __webpack_require__("afKG");

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__("489e");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;













const pages_Logo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "TtQW")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TtQW")],
    modules: ['components/Logo']
  }
});
const OurPeople = dynamic_default()(() => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "/Ia+")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("/Ia+")],
    modules: ['components/OurPeople']
  }
});

if (false) {}

const getMenuColor = element => {
  var _sections$filter$pop;

  const sections = false ? undefined : [];
  return (_sections$filter$pop = sections.filter(section => {
    var _element$current;

    return section.y <= window.pageYOffset + (element === null || element === void 0 ? void 0 : (_element$current = element.current) === null || _element$current === void 0 ? void 0 : _element$current.offsetTop);
  }).pop()) === null || _sections$filter$pop === void 0 ? void 0 : _sections$filter$pop.color;
};

const scrollToDown = () => {
  const scrollable = [...document.getElementsByTagName('section')].map(el => el.offsetTop).filter(val => val > window.pageYOffset);
  external_gsap_["gsap"].to(window, {
    duration: 2,
    scrollTo: {
      y: scrollable[0]
    },
    ease: 'expo.out'
  });
};

const getServerSideProps = async () => {
  const data = await axios["a" /* default */].get('/landing-page');
  const works = await axios["a" /* default */].get('/our-works-page');
  const awards = await axios["a" /* default */].get('/awards-page');
  const footer = await axios["a" /* default */].get('/footer');
  return {
    props: {
      data,
      works: works.works,
      awards: awards.awards,
      footer
    }
  };
};
function Home({
  data,
  works,
  awards,
  footer,
  HamburgerMenu
}) {
  var _getMenuColor, _getMenuColor2, _data$logo, _data$logo2, _footer$social_media, _footer$social_media2;

  const menu = Object(external_react_["useRef"])(null);
  const scrollDown = Object(external_react_["useRef"])(null);
  const {
    0: menuColor,
    1: setMenuColor
  } = Object(external_react_["useState"])((_getMenuColor = getMenuColor(menu)) !== null && _getMenuColor !== void 0 ? _getMenuColor : 'hide');
  const {
    0: scrollDownColor,
    1: setScrollDownColor
  } = Object(external_react_["useState"])((_getMenuColor2 = getMenuColor(scrollDown)) !== null && _getMenuColor2 !== void 0 ? _getMenuColor2 : 'dark');
  Object(external_react_["useEffect"])(() => {
    document.addEventListener('scroll', () => {
      setMenuColor(getMenuColor(menu));
      setScrollDownColor(getMenuColor(scrollDown));
    });
    return () => document.addEventListener('scroll', () => {
      setMenuColor(getMenuColor(menu));
      setScrollDownColor(getMenuColor(scrollDown));
    });
  }, []);
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Hakuhodo"), pages_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), pages_jsx(pages_Logo, {
    hide: menuColor === 'hide',
    color: menuColor
  }), pages_jsx(HamburgerMenu, {
    ref: menu,
    color: menuColor === 'hide' ? 'dark' : menuColor
  }), pages_jsx(components_ScrollDown, {
    ref: scrollDown,
    color: scrollDownColor === 'hide' ? 'dark' : scrollDownColor,
    onClick: scrollToDown
  }), pages_jsx("section", {
    id: "home",
    "menu-color": "hide",
    className: "bg-white"
  }, pages_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col items-center"
  }, pages_jsx("div", {
    className: "flex-1 flex flex-col justify-center items-center"
  }, (data === null || data === void 0 ? void 0 : (_data$logo = data.logo) === null || _data$logo === void 0 ? void 0 : _data$logo.url) && pages_jsx("img", {
    className: "w-32 md:w-64",
    src: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$logo2 = data.logo) === null || _data$logo2 === void 0 ? void 0 : _data$logo2.url),
    alt: "Hakuhodo"
  })), pages_jsx("div", {
    className: "flex flex-col items-center"
  }, pages_jsx("p", {
    onClick: scrollToDown,
    className: "cursor-pointer text-14px mb-4"
  }, "HERE WE ARE"), pages_jsx("svg", {
    onClick: scrollToDown,
    className: "cursor-pointer",
    width: "8",
    height: "30",
    viewBox: "0 0 8 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pages_jsx("path", {
    d: "M3.64645 29.3536C3.84171 29.5488 4.15829 29.5488 4.35355 29.3536L7.53553 26.1716C7.73079 25.9763 7.73079 25.6597 7.53553 25.4645C7.34027 25.2692 7.02369 25.2692 6.82843 25.4645L4 28.2929L1.17157 25.4645C0.97631 25.2692 0.659727 25.2692 0.464465 25.4645C0.269203 25.6597 0.269203 25.9763 0.464465 26.1716L3.64645 29.3536ZM3.5 -2.18557e-08L3.5 29L4.5 29L4.5 2.18557e-08L3.5 -2.18557e-08Z",
    fill: "black"
  }))))), pages_jsx(components_Quotes, {
    data: data.quotes
  }), pages_jsx("section", {
    id: "about-us",
    "menu-color": "light",
    style: {
      backgroundColor: '#221F1F'
    }
  }, pages_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col"
  }, pages_jsx("div", {
    className: "flex-1 flex items-end md:items-center"
  }, pages_jsx("h2", {
    className: "text-32px md:text-52px text-red"
  }, "ABOUT US")), pages_jsx("div", {
    style: {
      flexGrow: 2
    },
    className: "flex items-center"
  }, pages_jsx("div", {
    className: "text-20px md:text-32px text-white uppercase",
    style: {
      whiteSpace: 'break-spaces'
    }
  }, pages_jsx(Content["a" /* default */], {
    text: data['about_us']
  }))))), pages_jsx("section", {
    id: "philosophy",
    "menu-color": "light",
    style: {
      backgroundColor: '#6F6F6F'
    }
  }, pages_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col"
  }, pages_jsx("div", {
    className: "flex-1 flex items-end md:items-center"
  }, pages_jsx("h2", {
    className: "text-32px md:text-52px text-white"
  }, "PHILOSOPHY")), pages_jsx("div", {
    style: {
      flexGrow: 2
    },
    className: "flex items-center text-20px md:text-32px"
  }, pages_jsx(Content["a" /* default */], {
    text: data['philosophy']
  })))), pages_jsx("section", {
    id: "our-works",
    "menu-color": "dark",
    className: "bg-white"
  }, pages_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col"
  }, pages_jsx("div", {
    className: "flex-1 flex items-center mb-12"
  }, pages_jsx("h2", {
    className: "text-32px md:text-52px"
  }, "OUR WORKS")), pages_jsx(our_works["OurWorksList"], {
    data: works.filter((_, index) => index < 6),
    className: "mb-6"
  }), pages_jsx(link_default.a, {
    href: "/our-works"
  }, pages_jsx("a", {
    className: "flex items-center justify-end mt-6 text-red"
  }, pages_jsx("h2", {
    className: "text-20px mb-0 mr-4"
  }, "See More"), pages_jsx(components_Arrow, null))))), pages_jsx(OurPeople, {
    id: "our-people",
    data: data.our_peoples
  }), pages_jsx("section", {
    id: "awards",
    "menu-color": "light",
    style: {
      backgroundColor: '#221F1F'
    }
  }, pages_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col"
  }, pages_jsx("div", {
    className: "flex-1 flex items-center mb-12"
  }, pages_jsx("h2", {
    className: "text-32px md:text-52px text-white"
  }, "AWARDS")), pages_jsx("div", {
    style: {
      flexGrow: 2
    },
    className: "flex items-center"
  }, pages_jsx(pages_awards["AwardList"], {
    icon: true,
    className: "mb-6",
    data: awards.filter((_, index) => index < 5),
    link: pages_jsx(link_default.a, {
      href: "/awards"
    }, pages_jsx("a", {
      className: "flex items-center mt-6 md:order-4 order-5"
    }, pages_jsx("h2", {
      className: "text-20px text-white mb-0 mr-4"
    }, "See More"), pages_jsx(components_Arrow, {
      color: "white"
    })))
  })))), pages_jsx("section", {
    "menu-color": "hide",
    className: "bg-white"
  }, pages_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 pb-0 md:pb-12 pt-12 min-h-screen mx-auto flex flex-col"
  }, pages_jsx("div", {
    className: "flex-1 flex items-center"
  }, footer.logo && pages_jsx("div", {
    className: "hidden md:flex w-2/12 flex-1 flex-col justify-center items-center"
  }, pages_jsx("img", {
    src: "http://admin-h3.xdevels.com" + footer.logo.url,
    alt: "Hakuhodo"
  })), pages_jsx("div", {
    className: "md:ml-64",
    style: {
      flex: 2
    }
  }, pages_jsx("h2", {
    className: "text-32px text-red"
  }, footer.title), footer.telephone && pages_jsx("p", {
    className: "text-20px mb-0",
    style: {
      color: '#4F4F4F'
    }
  }, "Tel. ", footer.telephone), footer.faximile && pages_jsx("p", {
    className: "text-20px mb-0",
    style: {
      color: '#4F4F4F'
    }
  }, "Fax. ", footer.faximile), footer.email && pages_jsx("p", {
    className: "text-20px mb-4",
    style: {
      color: '#4F4F4F'
    }
  }, "Mail. ", pages_jsx("a", {
    style: {
      color: '#4F4F4F'
    },
    href: "mailto:" + footer.email
  }, footer.email)), pages_jsx("p", {
    className: "text-20px mb-4 mt-8 md:mt-0",
    style: {
      color: '#4F4F4F',
      whiteSpace: 'break-spaces'
    }
  }, footer.address))), pages_jsx("div", {
    className: "flex justify-between border-gray-200 border-t-2 py-6"
  }, pages_jsx("div", null, pages_jsx("a", {
    style: {
      color: '#757575',
      opacity: 0.4
    },
    className: "text-12px md:text-default mr-6"
  }, "Terms"), pages_jsx("a", {
    style: {
      color: '#757575',
      opacity: 0.4
    },
    className: "text-12px md:text-default"
  }, "Hakuhodo Global")), pages_jsx("div", {
    className: "hidden md:block"
  }, pages_jsx("span", {
    style: {
      color: '#757575',
      opacity: 0.4
    },
    className: "text-12px md:text-default mr-3"
  }, "@ Hakuhodo H3 2020 all rights reserved"), footer === null || footer === void 0 ? void 0 : (_footer$social_media = footer.social_media) === null || _footer$social_media === void 0 ? void 0 : _footer$social_media.map(({
    name,
    link
  }, index) => link && pages_jsx("a", {
    key: index,
    href: link,
    target: "_blank"
  }, pages_jsx("i", {
    style: {
      color: '#757575',
      opacity: 0.4
    },
    className: `text-12px md:text-default icon ${name}`,
    "aria-hidden": "true"
  })))))), pages_jsx("div", {
    className: "flex md:hidden px-8 py-6 justify-between",
    style: {
      backgroundColor: '#F2F2F2'
    }
  }, pages_jsx("span", {
    style: {
      color: '#757575',
      opacity: 0.4
    },
    className: "text-12px md:text-default mr-3"
  }, "@ Hakuhodo H3 2020 all rights reserved"), pages_jsx("div", null, footer === null || footer === void 0 ? void 0 : (_footer$social_media2 = footer.social_media) === null || _footer$social_media2 === void 0 ? void 0 : _footer$social_media2.map(({
    name,
    link
  }, index) => link && pages_jsx("a", {
    key: index,
    href: link,
    target: "_blank"
  }, pages_jsx("i", {
    style: {
      color: '#757575',
      opacity: 0.4
    },
    className: `text-12px md:text-default icon ${name}`,
    "aria-hidden": "true"
  })))))));
}

/***/ }),

/***/ "TtQW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoSVG", function() { return LogoSVG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jhtb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LogoSVG = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((_ref, ref) => {
  let {
    className,
    color
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "color"]);

  return __jsx("svg", _extends({}, props, {
    className: className,
    ref: ref,
    viewBox: "0 0 114 142",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink"
  }), __jsx("rect", {
    width: "114",
    height: "142",
    fill: "url(#pattern0)"
  }), __jsx("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "114",
    height: "142"
  }, __jsx("rect", {
    width: "114",
    height: "142",
    fill: "url(#pattern1)"
  })), __jsx("g", {
    mask: "url(#mask0)"
  }, __jsx("rect", {
    x: "19",
    y: "124",
    width: "8",
    height: "18",
    fill: color === 'light' ? '#48D7BD' : '#B72842'
  })), __jsx("defs", null, __jsx("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1"
  }, __jsx("use", {
    href: "#logo-image",
    transform: "translate(-0.00235849) scale(0.00293777 0.00235849)"
  })), __jsx("pattern", {
    id: "pattern1",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1"
  }, __jsx("use", {
    href: "#logo-image",
    transform: "translate(-0.00235849) scale(0.00293777 0.00235849)"
  })), __jsx("image", {
    id: "logo-image",
    width: "342",
    height: "424",
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAGoCAMAAAAq6T3YAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAuhQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQpG+4QAAAPh0Uk5TwP8AgFSj3dyiUzSSzfzssngYkNfUjlIXDEJ9wuihYygBIGn19LBnHhCe5/7FfDIKWPlXCQI+mO3KcRoSZtHPZQVMsemCJD2q+/qoOyGK7shaBqBApH/zy9XSOh2s73sES60W4t83uvhqv7kRheWppdscA6trG9kLPA+IYeQuKeF0tPEOFZ0HuESnZGJo6y+1bvaDflstdjaMwbt5m5ZV4ImEQ3IxcDBgrhQrQRmfzNg46pw/ttYsI0VtCL4TUJlGX4Eix/d6i01Hk06XXI0qdR/Tc/2Us70NJcSROfDD0FFWXmwmxidJ3pWPybcz8ppdd4e8NdrOSkh4SBJrAAARmklEQVR4nO2deXxU1RXHcx9LUJYE1BoQIYPsUQImFZEtgsGAyhaLiEoExCBKUaqIFAVRUJGlCIIIiigmsmiQRQuKslUquKfW2kbpYm21VbvZ/tsAk5u5M2/mnjvvdyfhvfP998075/y+n8nL2+a9tDRRX0hzPNKgrhPUksZabcBarcBarcBarcBarcBarcBarcBarZDWsFHjup7hBOlNTvOq9fSmzZrXdYzjtMjIPP4VaXlaqzPqdI4zz/rB2V6dniSrdZtz6lRt23Pbtc92nJq/vFCHjPPqZI6OnTp3wSitoWvDbt3rJErO+Rf0yD45Q8QGLbdnRq8UD9Kr04V5WKcnyf/hRb1THEVc3OeS2gHU/xN9+/VP4SADBna14fQkBZcOykldlMGXFSrdY/79Drm8KCWDDB12hT2nJ7nyquEpiSJGjBwV1dplr6bLaPsb/aKLwBtUd7IyW1iPItKKYxu77iwWXm15kiaFbm1tkPWjMXajXNParW2cffAhYy1Ocu04myKjue56i1Fu6Jzv2jTeoU3BeFtbgqLMEnsOXbmxraUoYsLEOC3jHzGOm2RlkpsmWxCnoeXNVqKUTonbMcGBeN9bLIwy9VYL2rTk32YhyrQe8RsmOr8x6sfwUaanegNQQwd4lNvvSNAu4WmjGZ3Ao/xkBtgWnTvBUW66K1G3xGfjsmZCRxl7N9SUGd2gUYYm2AI4Oq1Oa+gss4CWjLlnMDLK7MTNdOeOLweOcjVMUVL8FBhlTm7iXjqt9wJnuQ9mKClK5uKizNP00l7pwO3y3Q/SkzR9YFHmP6BppdXaEzaL54sqXnkQdm5uga6VVmtuR9Ao8xdi5HjgIVAU8bCuk/5y5wTQKI9AzHhiESjKcO3ut15rZ9Asj0LMeCIEijJB20mvtRA0y3UIMR5Jx0RZrG1EuOdhCWSUaQArnmkEiSKWahsRtC6DjNIJYMUzP4NEWa4/X0TQ+hhklhUAK56ZBYkyQt+IoHUlZJaG3qV4py8kymh9I4LWHpBZHvcuBQDkQuwqfR+C1q6IUYTm3ESKGIGIQvjDo9z9OB8wyhLPRiBATsit1vehaEVc3B7g2QiEJwBRREt9H4rWNYBRnvRsBMJaQBRRoO9D0ToBMMowz0YgII7ExxD6ULSuA8zylFchGJ4GRFlP6EPR+gxglg1ehWB4FhClGaEPRet4wCzPeRWCYSMgCkUZ5TPPA2Z53qsQDGWAKMsIfVKldaBXIRiuBEShnDSiaEWcVC/3KgRDCBDlBUIfitZywCxetW7aPKt4S3HZVo93G4UAURoR+lC0DgTM4kFr4aIXX1peU6d5xfXztiXvNgSIgtoIILatyV7JKrytIrbYy9uHJFkuBIhSn7QmtyewY2e8ervKk7ql8xVAlFNd66sJr+tX/DyJkogdrFNba/buUk3NblnGRQOvdSHhVvCxxj/uCrrWPa9Rqs4x/X1XwLVmT6CVTX/drG7AtZJbDjKrG2ytW+m3Ke41Khxsra3ohfsbFQ601gKTy/mnm1QOtNbVJpUzTSoHWqvRmcjpJpUDrTXTpPJUk8qB1mr0nDCjp5KxViqslQprpcJaY2CtCqw1BtZKhbVSYa1UWGsMrFWBtcbAWqmwViqslQprjYG1KrDWGFgrFdZKhbVSYa0xsFYF1hoDa6XCWqmwVir2tGaYVGatyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1opMKWGtyJQS1kqF8tpVCWul8oZJZdZKxehd8m8CogRDaz+TyvsAUYKh1ei9pPsBUYKh9YBJ5emAKIHQOibbpPK1gCiB0HrQpPDCIkCUQGhtZVJ4MiBJMLQ2NCk8D5AkEFpzJpoUXgZIEgitI0zq5h4CJAmE1l+Y1N0LCFK/tL5VZsBF9LqvmmglvESeQH3SaolbTKz27QXpGQCtK020Pofp6X+tc0sMrI6ahGnqf61TDKw65aCmvteavtDAau4cUFffaz1sYNVZgerqd61GT8XeXIpq63Ot3R80sFryEqyvv7Xm/NLAqtMU19jfWjNNrC4CNva11rdNrB4ZCuzsZ61HTa61QK36WesGE6v9oFb9q3X5OwZSS94Fd/er1v7vGVhtfzG6vT+1HmpTQJc66n3IBQEFP2rNmf4BXWp2z5ssjOA/raXdDP7+8wZ+aGUIv2m99qOJZKfZ285qYWkMP2ktWrO2Pdmp4+yba28U/2itXFMeMpDqON0sDuMfrceZs+4I/az11sXL8LsAYfyltZrev9pMFus8sKiZnSl8p7Waj7fRxTo7fm1jBD9qFWJYFwOxz47FD+BPreLQ+zPoXgsyMfdcROBTrUKsuYTu1dk4E9zdt1pF29UGXj/ZiW3uX61i+Y0GXmesg/b2sVYx9IiB1+yjyNZ+1ipKd5h4RR51+VqrGP4bA6+jPsU19rdW0X+PgdeW02B9fa5V/NZAq3MjrK3fteb8zsTraFRbv2sV/fMNtN5aBerqe61in4FWZy2oqf+1ppvc5J7XHdPU/1rFhQZanfGYngHQ+pmJ1rMxNw0FQKu4z8TrI5CW9UnrtM8NaEuv+5iJ1ksBQeqXVlu/ed1lUjdvOSBJILQKowvdnQBJgqG1nUnhzoAkwdB6rknhjYAkwdA61qRwCeKejEBorcw1qXwQECUQWsVSk8qIq1rB0HrMpHIbQJRgaP3IpDI/upHKMyaVtwCiBEPrdpPK/FhcZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa0WmlLBWZEoJa6UyyKQya6VCSSBhrVRYKxXWSoW1xsBaFVhrDKyVCmulwlqpsNYYWKsCa42BtVJhrVRYKxXWGgNrVWCtMbBWKqyVCmulwlpjYK0KrDUG1kqFtVJhrVRYawwp19rHpPLHJpUDrfX3JpWPmlQOtNYrTSo/alI50FqdAfTCRRNNCgdbazt64elGhYOttWQstW7pAaPCwdbqbOxFrLvbrG7AtTp/oJXtlm1WNuhanX6VhKpNZhhWDbxW58gNupqV+w2/q6y1mg9eS1yycWvzmqy1mp7p8QtWtdmTREW/af1jEg6qd7RWfuZeLn1V16QK/gkQpT5pLU/KwnERmV8MjapV8e4Q441qmBAgCkprOWCWpLVWk7tj91P3X5O+fu76z6e+mHn4QQ+lQoAoEwh9TgWtQEKAKFcT+lC0TgHM4iOt9WnbeqdXIRj+DIiC0mp0sj4OSe1g4UHsYD1J6EPRanRpKQ6ZXoVgWA2Icg6hD0VrK8AsV3kVguFLQJSxhD4UrY0As2z3KgTDSkCU7oQ+FK3LALO84FUIht2AKL0IfShaRwBm+cyrEAyIfxPibn0fita/AEap8GwEwlFAFHFA34egNT/6mDwZDnk2AmEnIIrYou9D0HoHYhQx0asRCGciohCOGAlatyBGEbO8O/FOfikiym36RgStiFMCQrTzLsU7ByBRCHs1BK1/hczylXcp3jkMiTJT34ig9WvILOd7l+KdyyBRxD3aRnqto6h3QiTmPNNrzzb4GySKeFjbSK91CGYUsRrhxRsl8zFR9ms76bXux4wiLkCI8cY4UJQvtJ30WjGbViE+RYjxBmjTKpr31XXSasXsk1STcwfGjQcqUFn66Tppta5FjSLmYdwkz99hUV7TtdJpLZkLm6VxPkhPsiyARRGvaFrptI7EjSIaovwkx1bEKaMwL2p6abQuvB03ithVAFOUDG8AozTXfF01WscDRxFiFc6ROZNzkFHWJL5dKbHW1ZgjrBpKeyA9mfHATGgUzVckodbCwdhRxLRCqCoDcjU3yxpTuTJRu0RaNy4BjyLEnKVgXUS6psGjVCY61ZlAa8OO8FGE+OYYXBmB+86wEEW8Ff9fcFyteyBX01x4e6EVc4koP89OlINd4nWMp/UKyFUfV/pvs2QvDnddby3KDQPj7BC4a9203dok1eR8qz1VgaPk+W9sZjno/s/CTWvXBlU2J6mmakWWXZk15PdEHs+4kXOu295NrNa+a7U/iALQIvNW+1ILRu5KQZTmo9trtZYtOJSCSY6z/Nt77Uo9e8W0FEURNx+JOo2kaJ045YtUDXKC8xdvsuV04bHLgWdW9Kx/7D53rZu+e6golYOcoGjnd69bcPrmAtBVKxMGrKrdyp7Umj+5wdfQMxEGVB5ccTryTOyBDhmWdlP1pDf9Mi+sNW9IZkbvupojzJKMf1yRzG8to8h/vHOTxnUcpfScfx5+3UnbntJNUAKGrvNqdZHt/UIyFWn4cxDJYvScMDcg9wRjYK1WYK1WYK1WYK1WYK1WYK1WYK1WSNvQqb6wwavWnnWdoBbPXxHGDdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqBdZqhbTyCNQHVZVFLnrPbeVZe6N51eVTSp34ZMVdR/0JdOSSkeo4bmXf2VscSvCM05aEyZTsWYQVyhzl9tb1SkfldlHXV93E3hvr9jHibaehuOuoj/iOXFKlLBkdr/SYf30U7zkVxYTJlFAhwgoNgqG1mpxB/2ateK3VYtd9wlojl2C0CnH7ZtYaAUqr6D2ZtdYC0yqGxzz+g7UCtIr/RD96h7UitIqjrLUGpNacqOdWsVaIVjGMtYaBai1Snxh36mptWRZBRuSn+0QuGYXVekHxSY49EfUgmkfja72lzBXlpd2hyBVmuq/QMhVa40ffG/dj3rXW1u77kDJiE2UdRSvlfcOK1s/jfSoAWp3cDyMXnKmsw1rDmGt1Lo1csFxZh7WGSUJrgfLcRGUjzlrDJKHVmRS5pGvkkvqo9f6qaDropqqbb6vyZkflyXv1UWsS1P229RtlnVRobVsciTJlXWqdrYxlrlXdE2imrKOUuzkUS0nUZIrWXS4rnNh0Ux/VUpda40Pbb52qrLNAWUd7lKUc/DmEo6yy45/yrdaao6ynv4p6oOOFyjqs1YUkzgl0zFPWYa0uJKH1GbURa3XBXGtV1NO4WasL5lpHRjVirS4Ya50d3Yi1umCqdXbMK1hYqwtmWse4vGOStbpgpPURt9vbWKsLJlpHuDZKhdaXlXtVh0UuqkutTZWxIpcYfVuL3RopWr/X3XbrRGmd5LLCiUuQvj2D9XGrVq1eULQedGtUH08MFia+SOlGSk8M5nVXvP7XpVF91Frvrw6sUoYb4PKGO9YaxkRrlvpGNd0OFmulaXUuU6bbFfumI9YaxkjrJvVdtftiGrHWMEZana+U8dKjL6Gw1hrMtN6lvrdqcXQj1hrGTKuzTplvknptIEprRQNXlNf9Klrbuq9Q7H+thZUJBzx1b8TUR48FeJ+AcgwuBkcdjLLWMJFLKFqXqhNmqo1Ya5jIJaT7BJYpE1Ypt2Cx1hoil5C0jlNH3K+sw1rDRC6h3SykjtlRufbKWsNELqFp/Z864xOR67DWMJFLiHcMfq/MeGhrxCLWGiZyCVFrQ3XIpyIWsdYwkUuIWvPPUIYc+kHtItYaJnIJ9Sb3cnXK0bVLLGn9P6TzU9Kl3mioAAAAAElFTkSuQmCC"
  })));
});

const Logo = ({
  color,
  hide
}) => {
  const {
    0: logo,
    1: setLogo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    light: null,
    dark: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    lib_axios__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].get('/logo').then(data => {
      setLogo({
        light: data.light.url,
        dark: data.dark.url
      });
    }).catch(console.error);
  }, []);
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(__jsx("div", {
    className: "hidden md:block fixed md:fixed--center left-0 top-0 ml-8 sm:ml-12 lg:ml-16 z-10 md:z-0 mt-6 md:mt-0"
  }, __jsx("div", {
    className: "relative cursor-pointer",
    style: {
      visibility: hide ? 'hidden' : 'visible'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    width: "42px",
    src: "http://admin-h3.xdevels.com" + logo.dark,
    alt: "Logo",
    className: "z-10",
    style: {
      opacity: color === 'light' ? 0 : 100
    }
  }), __jsx("img", {
    width: "42px",
    src: "http://admin-h3.xdevels.com" + logo.light,
    alt: "Logo",
    className: "absolute left-0 top-0",
    style: {
      opacity: color === 'dark' ? 0 : 100
    }
  }))))), document.body);
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "afKG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AwardList", function() { return /* binding */ AwardList; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ./lib/axios.js
var axios = __webpack_require__("Jhtb");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/Content.js
var Content = __webpack_require__("QZnN");

// EXTERNAL MODULE: ./hooks/isMobile.js
var isMobile = __webpack_require__("Gp+z");

// CONCATENATED MODULE: ./components/AwardCard.js

var __jsx = external_react_default.a.createElement;






const AwardCard = ({
  data,
  sort,
  icon,
  onClick = null
}) => {
  var _data$thumbnail, _data$picture;

  const isMobileDevice = Object(isMobile["a" /* default */])();
  const {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])('initial');
  const image = icon ? "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$thumbnail = data.thumbnail) === null || _data$thumbnail === void 0 ? void 0 : _data$thumbnail.url) : "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$picture = data.picture) === null || _data$picture === void 0 ? void 0 : _data$picture.url);
  Object(external_react_["useEffect"])(() => {
    setHeight(icon ? 'initial' : isMobileDevice ? 'initial' : 200);
  }, [isMobileDevice]);
  return __jsx("div", {
    className: external_clsx_default()(["flex items-start justify-center mb-6 cursor-pointer", "order-" + sort, icon || isMobileDevice ? 'flex-row' : 'flex-col']),
    onClick: onClick
  }, __jsx("div", {
    className: "mr-4 md:mr-8 flex items-start md:items-center md:mb-6 overflow-hidden",
    style: {
      height,
      width: isMobileDevice ? 'calc(30vw - 12px)' : 'initial'
    }
  }, __jsx("img", {
    className: "flex-1",
    src: image,
    alt: 'Awward' + sort,
    style: {
      objectFit: 'cover',
      width: "100%",
      height: isMobileDevice ? 'initial' : 'auto'
    }
  })), __jsx("div", {
    className: "text-white flex-1"
  }, __jsx("h2", {
    className: "text-20px md:text-24px mb-2"
  }, data.title), __jsx("p", {
    className: "text-16px",
    style: {
      color: icon ? '#E0E0E0' : '#E0E0E0'
    }
  }, data.short_description)));
};

AwardCard.Detail = ({
  data,
  closeDetail
}) => {
  var _data$picture2, _data$detail, _data$detail2, _data$detail3, _data$detail4, _data$detail5, _data$detail6, _data$detail7, _data$detail8, _data$detail9, _data$detail10, _data$detail11, _data$detail12, _data$picture3;

  const isMobileDevice = Object(isMobile["a" /* default */])();
  return __jsx(external_semantic_ui_react_["Modal"], {
    open: data !== null,
    onClose: closeDetail,
    size: "large",
    style: {
      borderRadius: 0
    }
  }, !isMobileDevice && __jsx("div", {
    className: "flex flex-col md:flex-row items-center md:items-start p-12"
  }, __jsx("img", {
    className: "md:mr-12 max-w-full md:w-4/12",
    height: "auto",
    src: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$picture2 = data.picture) === null || _data$picture2 === void 0 ? void 0 : _data$picture2.url),
    alt: data.title
  }), __jsx("div", {
    className: "flex-1 text-center md:text-left",
    style: {
      whiteSpace: 'break-spaces'
    }
  }, __jsx("h1", {
    className: "text-40px font-medium mb-8"
  }, data.title), (data === null || data === void 0 ? void 0 : data.detail) && __jsx(external_react_default.a.Fragment, null, ((_data$detail = data.detail) === null || _data$detail === void 0 ? void 0 : _data$detail.trophy) && __jsx("p", {
    className: "mb-1 font-bold"
  }, (_data$detail2 = data.detail) === null || _data$detail2 === void 0 ? void 0 : _data$detail2.trophy), ((_data$detail3 = data.detail) === null || _data$detail3 === void 0 ? void 0 : _data$detail3.category) && __jsx("p", {
    className: "mb-1"
  }, (_data$detail4 = data.detail) === null || _data$detail4 === void 0 ? void 0 : _data$detail4.category), ((_data$detail5 = data.detail) === null || _data$detail5 === void 0 ? void 0 : _data$detail5.awarding_event) && __jsx("p", {
    className: "mb-1"
  }, (_data$detail6 = data.detail) === null || _data$detail6 === void 0 ? void 0 : _data$detail6.awarding_event), ((_data$detail7 = data.detail) === null || _data$detail7 === void 0 ? void 0 : _data$detail7.project_name) && __jsx("p", {
    className: "mb-1"
  }, (_data$detail8 = data.detail) === null || _data$detail8 === void 0 ? void 0 : _data$detail8.project_name), ((_data$detail9 = data.detail) === null || _data$detail9 === void 0 ? void 0 : _data$detail9.product_name) && __jsx("p", {
    className: "mb-1"
  }, (_data$detail10 = data.detail) === null || _data$detail10 === void 0 ? void 0 : _data$detail10.product_name), ((_data$detail11 = data.detail) === null || _data$detail11 === void 0 ? void 0 : _data$detail11.client_name) && __jsx("p", {
    className: "mb-1"
  }, (_data$detail12 = data.detail) === null || _data$detail12 === void 0 ? void 0 : _data$detail12.client_name)), __jsx(Content["a" /* default */], {
    text: data.description,
    style: {
      color: '#222222',
      opacity: 0.7
    }
  })), __jsx("button", {
    type: "button",
    onClick: closeDetail,
    className: "self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0",
    style: {
      transform: 'scale(0.7)'
    }
  }, __jsx("span", {
    className: "hamburger-box"
  }, __jsx("span", {
    className: `hamburger-inner`
  })))), isMobileDevice && __jsx("div", {
    className: "p-12"
  }, __jsx("div", {
    className: "flex justify-between items-center"
  }, __jsx("h1", {
    className: "text-16px md:text-60px w-10/12 md:w-full font-medium m-0"
  }, data.title), __jsx("button", {
    type: "button",
    onClick: closeDetail,
    className: "self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0",
    style: {
      transform: 'scale(0.5)'
    }
  }, __jsx("span", {
    className: "hamburger-box"
  }, __jsx("span", {
    className: `hamburger-inner`
  })))), __jsx("img", {
    className: "md:mr-12 max-w-full md:w-4/12 my-8",
    height: "auto",
    src: "http://admin-h3.xdevels.com" + (data === null || data === void 0 ? void 0 : (_data$picture3 = data.picture) === null || _data$picture3 === void 0 ? void 0 : _data$picture3.url),
    alt: data.title
  }), __jsx(Content["a" /* default */], {
    text: data.description,
    style: {
      color: '#222222',
      opacity: 0.7
    }
  })));
};

/* harmony default export */ var components_AwardCard = (AwardCard);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__("489e");

// CONCATENATED MODULE: ./pages/awards.js

var awards_jsx = external_react_default.a.createElement;






const Logo = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "TtQW")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TtQW")],
    modules: ['components/Logo']
  }
});

if (false) {}

const AwardList = ({
  data,
  className,
  icon = false,
  link = null
}) => {
  const {
    0: award,
    1: setAward
  } = Object(external_react_["useState"])(null);
  return awards_jsx(external_react_default.a.Fragment, null, awards_jsx("div", {
    style: {
      flexGrow: 2
    },
    className: external_clsx_default()("grid gap-6 grid-cols-1", icon ? 'md:grid-cols-2' : 'md:grid-cols-3', className)
  }, data.map((award, index) => awards_jsx(components_AwardCard, {
    onClick: () => setAward(award),
    data: award,
    sort: index + 1,
    icon: icon,
    key: index
  })), link && link), award !== null && awards_jsx(components_AwardCard.Detail, {
    data: award,
    closeDetail: () => setAward(null)
  }));
};
const getServerSideProps = async () => {
  const data = await axios["a" /* default */].get('/awards-page');
  return {
    props: {
      data: data
    }
  };
};

const Awards = ({
  data,
  HamburgerMenu
}) => {
  Object(external_react_["useEffect"])(() => {
     false && false;
  }, []);
  return awards_jsx(external_react_default.a.Fragment, null, awards_jsx(Logo, {
    hide: false,
    color: "light"
  }), awards_jsx(HamburgerMenu, {
    color: "light"
  }), awards_jsx("section", {
    id: "awards",
    className: "min-h-screen pt-20 md:pt-0",
    style: {
      backgroundColor: '#221F1F'
    }
  }, awards_jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 mx-auto"
  }, awards_jsx("h1", {
    className: "text-32px md:text-52px text-white font-medium uppercase mb-12"
  }, data.title), awards_jsx("p", {
    className: "text-white opacity-75 text-22px mb-20",
    style: {
      lineHeight: '28px'
    }
  }, data.description), awards_jsx(AwardList, {
    data: data.awards
  }))));
};

/* harmony default export */ var awards = __webpack_exports__["default"] = (Awards);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "iHhI":
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });