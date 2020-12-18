module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"166a833694125eb47f31"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GMnU");


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

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

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
    url: "https://h3cms.h-three.id" + (data === null || data === void 0 ? void 0 : (_data$thumbnail2 = data.thumbnail) === null || _data$thumbnail2 === void 0 ? void 0 : _data$thumbnail2.url),
    controls: played,
    volume: 1,
    muted: !played
  }) : __jsx(external_react_default.a.Fragment, null, !preview && __jsx("img", {
    className: "absolute left-0 w-full",
    src: "https://h3cms.h-three.id" + (data === null || data === void 0 ? void 0 : (_data$thumbnail3 = data.thumbnail) === null || _data$thumbnail3 === void 0 ? void 0 : _data$thumbnail3.url),
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
    url: "https://h3cms.h-three.id" + (data === null || data === void 0 ? void 0 : (_data$video = data.video) === null || _data$video === void 0 ? void 0 : _data$video.url),
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
    url: "https://h3cms.h-three.id" + (data === null || data === void 0 ? void 0 : (_data$video2 = data.video) === null || _data$video2 === void 0 ? void 0 : _data$video2.url)
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
  logo,
  data,
  HamburgerMenu
}) => {
  return our_works_jsx(external_react_default.a.Fragment, null, our_works_jsx(head_default.a, null, our_works_jsx("title", null, "Hakuhodo - Our Works")), our_works_jsx(Logo, {
    logo: logo,
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
  baseURL: "https://h3cms.h-three.id",
  timeout: 1000 * 60 * 60
});
/* harmony default export */ __webpack_exports__["a"] = ({
  get: (url, config) => instance.get(url, config).then(res => res.data),
  post: (url, data, config) => instance.post(url, data, config),
  delete: (url, data, config) => instance.delete(url, data, config)
});

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
    allowDangerousHtml: true,
    renderers: {
      heading: ({
        level,
        children
      }) => {
        switch (level) {
          case 1:
            const __html = children.map(({
              props
            }) => props.value).join('');

            return __jsx("h1", {
              dangerouslySetInnerHTML: {
                __html
              }
            });

          case 2:
            return __jsx("h2", null, children);

          case 3:
            return __jsx("h3", null, children);

          case 4:
            return __jsx("h4", null, children);

          case 5:
            return __jsx("h5", null, children);

          case 6:
            return __jsx("h6", null, children);
        }
      }
    },
    children: text
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });