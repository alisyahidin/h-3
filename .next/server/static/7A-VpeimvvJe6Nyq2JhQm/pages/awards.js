module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"6a5b67d345b4a92467ea"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("afKG");


/***/ }),

/***/ "489e":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

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

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

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
  logo,
  data,
  HamburgerMenu
}) => {
  Object(external_react_["useEffect"])(() => {
     false && false;
  }, []);
  return awards_jsx(external_react_default.a.Fragment, null, awards_jsx(head_default.a, null, awards_jsx("title", null, "Hakuhodo - Awards")), awards_jsx(Logo, {
    logo: logo,
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

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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