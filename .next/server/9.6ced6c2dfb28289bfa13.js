exports.ids = [9];
exports.modules = {

/***/ "/Ia+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_isMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Gp+z");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "O/hg", 7)), {
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
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      dots: true
    }
  }]
};

const OurPeople = ({
  id,
  data
}) => {
  var _data$profile, _data$profile2, _data$profile3, _data$profile4, _data$profile5, _data$profile6, _data$profile7, _data$profile8, _data$profile9, _data$profile10;

  const {
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const isMobileDevice = Object(hooks_isMobile__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    id: id,
    "menu-color": "light",
    style: {
      backgroundColor: '#6F6F6F'
    }
  }, __jsx("div", {
    className: "container xl:px-24 md:px-16 px-8 py-12 min-h-screen mx-auto flex flex-col text-white"
  }, __jsx("div", {
    className: "flex-1 flex items-center mb-12"
  }, __jsx("h2", {
    className: "text-32px md:text-52px"
  }, "OUR PEOPLE")), __jsx("div", {
    style: {
      flexGrow: 2
    },
    className: "flex items-center"
  }, __jsx(Slider, settings, data.map((people, index) => {
    var _people$Photo;

    return __jsx("div", {
      onClick: () => setProfile(index),
      className: "cursor-pointer p-5",
      key: index
    }, __jsx("img", {
      className: "w-full",
      style: {
        objectFit: 'cover',
        height: window.innerWidth > 767 ? '250' : 'auto'
      },
      src: "https://h3cms.h-three.id" + (people === null || people === void 0 ? void 0 : (_people$Photo = people.Photo) === null || _people$Photo === void 0 ? void 0 : _people$Photo.url),
      alt: people === null || people === void 0 ? void 0 : people.Name
    }), __jsx("h3", {
      className: "text-16px md:text-32px mb-2"
    }, people === null || people === void 0 ? void 0 : people.Name), __jsx("p", {
      className: "text-14px mb-2",
      style: {
        lineHeight: 1
      }
    }, people === null || people === void 0 ? void 0 : people.Position), __jsx("p", {
      className: "text-14px"
    }, people === null || people === void 0 ? void 0 : people.Company));
  }))))), profile !== null && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    open: profile !== null,
    onClose: () => setProfile(null),
    size: "large",
    style: {
      borderRadius: 0
    }
  }, !isMobileDevice && __jsx("div", {
    className: "flex flex-col md:flex-row items-center md:items-start p-12"
  }, __jsx("img", {
    className: "md:mr-12 max-w-full md:w-4/12",
    height: "auto",
    src: "https://h3cms.h-three.id" + data[profile].Photo.url,
    alt: (_data$profile = data[profile]) === null || _data$profile === void 0 ? void 0 : _data$profile.Name
  }), __jsx("div", {
    className: "flex-1 text-center md:text-left"
  }, __jsx("h1", {
    className: "text-40px mb-0"
  }, (_data$profile2 = data[profile]) === null || _data$profile2 === void 0 ? void 0 : _data$profile2.Name), __jsx("p", {
    style: {
      color: '#222222',
      opacity: 0.7
    },
    className: "text-16px mb-0"
  }, (_data$profile3 = data[profile]) === null || _data$profile3 === void 0 ? void 0 : _data$profile3.Position), __jsx("p", {
    style: {
      color: '#222222',
      opacity: 0.7
    },
    className: "text-16px"
  }, (_data$profile4 = data[profile]) === null || _data$profile4 === void 0 ? void 0 : _data$profile4.Company), __jsx("p", {
    style: {
      color: '#222222',
      opacity: 0.7,
      whiteSpace: 'break-spaces'
    },
    className: "text-default"
  }, (_data$profile5 = data[profile]) === null || _data$profile5 === void 0 ? void 0 : _data$profile5.Description)), __jsx("button", {
    type: "button",
    onClick: () => setProfile(null),
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
    className: "text-16px md:text-60px w-8/12 md:w-full font-medium mb-0"
  }, __jsx("strong", null, (_data$profile6 = data[profile]) === null || _data$profile6 === void 0 ? void 0 : _data$profile6.Name)), __jsx("button", {
    type: "button",
    onClick: () => setProfile(null),
    className: "self-center hamburger hamburger--squeeze is-active pb-5 mt-5 md:mt-0",
    style: {
      transform: isMobileDevice ? 'scale(0.5)' : 'scale(0.7)',
      marginRight: -20
    }
  }, __jsx("span", {
    className: "hamburger-box"
  }, __jsx("span", {
    className: `hamburger-inner`
  })))), __jsx("img", {
    className: "md:mr-12 w-full md:w-4/12",
    height: "auto",
    src: "https://h3cms.h-three.id" + data[profile].Photo.url,
    alt: (_data$profile7 = data[profile]) === null || _data$profile7 === void 0 ? void 0 : _data$profile7.Name
  }), __jsx("p", {
    style: {
      color: '#222222',
      opacity: 0.7
    },
    className: "text-14px md:text-16px mt-4 mb-0"
  }, (_data$profile8 = data[profile]) === null || _data$profile8 === void 0 ? void 0 : _data$profile8.Position), __jsx("p", {
    style: {
      color: '#222222',
      opacity: 0.7
    },
    className: "text-14px md:text-16px"
  }, (_data$profile9 = data[profile]) === null || _data$profile9 === void 0 ? void 0 : _data$profile9.Company), __jsx("p", {
    style: {
      color: '#222222',
      opacity: 0.7,
      whiteSpace: 'pre-line'
    },
    className: "text-14px md:text-default max-w-md"
  }, (_data$profile10 = data[profile]) === null || _data$profile10 === void 0 ? void 0 : _data$profile10.Description))));
};

/* harmony default export */ __webpack_exports__["default"] = (OurPeople);

/***/ })

};;