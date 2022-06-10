"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([["src_pages_AboutPage_tsx"],{

/***/ "./node_modules/@mui/material/Stack/Stack.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Stack/Stack.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/breakpoints.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/spacing.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/deepmerge.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["component", "direction", "spacing", "divider", "children"];






/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */



function joinChildren(children, separator) {
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }

    return output;
  }, []);
}

const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};

const style = ({
  ownerState,
  theme
}) => {
  let styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    display: 'flex'
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
    theme
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    const transformer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.createUnarySpacing)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    const directionValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.spacing,
      base
    });

    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.getValue)(transformer, propValue)
        }
      };
    };

    styles = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  return styles;
};
const StackRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__["default"])(themeProps);

  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StackRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 true ? Stack.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * Add an element between each child.
   */
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),

  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ "./src/components/card/HoverableCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/card/HoverableCard.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoverableCard": () => (/* binding */ HoverableCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function HoverableCard(props) {
    const [isMouseOver, setMouseOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: props.sx, elevation: isMouseOver ? 5 : 2, onMouseOver: () => setMouseOver(true), onMouseLeave: () => setMouseOver(false), children: props.children }));
}


/***/ }),

/***/ "./src/components/card/MediaCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/card/MediaCard.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaCard": () => (/* binding */ MediaCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/Launch */ "./node_modules/@mui/icons-material/Launch.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardHeader */ "./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/grey.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fonts */ "./src/fonts/index.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./src/routes/index.tsx");
/* harmony import */ var _HoverableCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HoverableCard */ "./src/components/card/HoverableCard.tsx");




















function MediaCard(props) {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const accessMediaButtonLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (["post", "thesis"].includes(props.item.type)) {
            return t("literal:read");
        }
        if (props.item.type === "live") {
            return t("literal:watch");
        }
        if (props.item.type === "conference") {
            return t("literal:slides");
        }
        return t("literal:view");
    }, [props.item.type, t]);
    const formattedMediaDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (["code", "thesis"].includes(props.item.type)) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(props.item.releaseDate, "yyyy");
        }
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(props.item.releaseDate, "MMM dd, yyyy");
    }, [props.item.releaseDate, props.item.type]);
    const iconRoute = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (props.item.publishedAt === "KIE Community") {
            return _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.kie;
        }
        if (props.item.publishedAt === "Towards Data Science") {
            return _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.tds;
        }
        if (props.item.publishedAt === "UNICAMP") {
            return app.colorMode === "light" ? _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.unicamp.light : _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.unicamp.dark;
        }
        if (props.item.publishedAt === "The Developer's Conference") {
            return _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.tdc;
        }
        if (props.item.publishedAt === "GitHub") {
            return app.colorMode === "light" ? _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.github.light : _routes__WEBPACK_IMPORTED_MODULE_4__.routes.images.github.dark;
        }
    }, [app.colorMode, props.item.publishedAt]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_HoverableCard__WEBPACK_IMPORTED_MODULE_5__.HoverableCard, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], { title: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], { sx: {
                        fontFamily: _fonts__WEBPACK_IMPORTED_MODULE_3__.Fonts.OXYGEN,
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: "bold",
                        height: { xs: "auto", lg: "50px" },
                    }, color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__["default"][app.colorMode === "light" ? 700 : 500], gutterBottom: true, children: props.item.title }), action: iconRoute && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], { title: props.item.publishedAt, arrow: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { style: { margin: "4px 8px 0px 16px", width: "20px", height: "20px" }, src: iconRoute, alt: "", loading: "lazy" }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { pt: 0 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { height: { xs: "auto", lg: "50px" } }, container: true, spacing: 1, children: [...props.item.keywordKeys]
                        .sort((a, b) => b.length - a.length)
                        .map((keywordKey) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], { item: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_14__["default"], { label: t(`literal:${keywordKey}`), color: "success", variant: props.selectedKeywords.includes(keywordKey) ? "filled" : "outlined", size: "small", onClick: () => props.onKeywordClicked(keywordKey) }) }, `media-keyword-${keywordKey}`))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { pt: 0, px: "16px" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], { sx: { width: 1 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], { sx: { fontSize: 13, float: "left", lineHeight: "30px" }, color: "text.secondary", component: "div", children: formattedMediaDate }), props.item.url && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_17__["default"], { underline: "none", rel: "noreferrer", target: "_blank", href: props.item.url, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { float: "right" }, size: "small", endIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_19__["default"], {}), color: "success", children: accessMediaButtonLabel }) }))] }) })] }));
}


/***/ }),

/***/ "./src/components/card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/card/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoverableCard": () => (/* reexport safe */ _HoverableCard__WEBPACK_IMPORTED_MODULE_0__.HoverableCard),
/* harmony export */   "MediaCard": () => (/* reexport safe */ _MediaCard__WEBPACK_IMPORTED_MODULE_1__.MediaCard)
/* harmony export */ });
/* harmony import */ var _HoverableCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverableCard */ "./src/components/card/HoverableCard.tsx");
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaCard */ "./src/components/card/MediaCard.tsx");




/***/ }),

/***/ "./src/components/page/MediaSection.tsx":
/*!**********************************************!*\
  !*** ./src/components/page/MediaSection.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaSection": () => (/* binding */ MediaSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card */ "./src/components/card/index.tsx");







function MediaSection(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_2__["default"], { in: true, timeout: props.fadeTime, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], { sx: { mt: "30px" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], { textAlign: "left", sx: { mb: "30px", "::before": { width: "1%" }, "::after": { width: "99%" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { fontWeight: "light", variant: "overline", component: "div", sx: { fontSize: "14px", color: "text.secondary" }, children: props.title }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { container: true, spacing: 3, children: props.mediaList.map((item, idx) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { item: true, sx: { width: { xs: "100%", lg: "50%", xl: "33%" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_card__WEBPACK_IMPORTED_MODULE_1__.MediaCard, { item: item, selectedKeywords: props.selectedKeywords, onKeywordClicked: props.onKeywordClicked }) }, `${props.title}-${idx}`))) })] }) }));
}


/***/ }),

/***/ "./src/components/page/Page.tsx":
/*!**************************************!*\
  !*** ./src/components/page/Page.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");


function Page(props) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { p: "16px 24px", mb: "24px" }, children: props.children });
}


/***/ }),

/***/ "./src/components/page/PageHeader.tsx":
/*!********************************************!*\
  !*** ./src/components/page/PageHeader.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeader": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/Fade/Fade.js");



function PageHeader(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_1__["default"], { in: true, timeout: props.fadeTime, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], { children: props.children }) }));
}


/***/ }),

/***/ "./src/components/page/index.tsx":
/*!***************************************!*\
  !*** ./src/components/page/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaSection": () => (/* reexport safe */ _MediaSection__WEBPACK_IMPORTED_MODULE_0__.MediaSection),
/* harmony export */   "Page": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_1__.Page),
/* harmony export */   "PageHeader": () => (/* reexport safe */ _PageHeader__WEBPACK_IMPORTED_MODULE_2__.PageHeader)
/* harmony export */ });
/* harmony import */ var _MediaSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaSection */ "./src/components/page/MediaSection.tsx");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/components/page/Page.tsx");
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeader */ "./src/components/page/PageHeader.tsx");





/***/ }),

/***/ "./src/hooks/usePageActive.tsx":
/*!*************************************!*\
  !*** ./src/hooks/usePageActive.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageActive": () => (/* binding */ usePageActive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeout */ "./src/hooks/useTimeout.tsx");


function usePageActive() {
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,_useTimeout__WEBPACK_IMPORTED_MODULE_1__.useTimeout)(() => setActive(true), 0);
    return active;
}


/***/ }),

/***/ "./src/hooks/useTimeout.tsx":
/*!**********************************!*\
  !*** ./src/hooks/useTimeout.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTimeout": () => (/* binding */ useTimeout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeout(callback, delay) {
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    const set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
    }, [delay]);
    const clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        timeoutRef.current && window.clearTimeout(timeoutRef.current);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        set();
        return clear;
    }, [delay, set, clear]);
    const reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        clear();
        set();
    }, [clear, set]);
    return { reset, clear };
}


/***/ }),

/***/ "./src/pages/AboutPage.tsx":
/*!*********************************!*\
  !*** ./src/pages/AboutPage.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card */ "./src/components/card/index.tsx");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./src/components/page/index.tsx");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/social */ "./src/components/social/index.tsx");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts */ "./src/fonts/index.tsx");
/* harmony import */ var _hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePageActive */ "./src/hooks/usePageActive.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./src/routes/index.tsx");













function AboutPage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useApp)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__.usePageActive)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__.Page, { children: active && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_8__["default"], { in: true, timeout: 1000, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_card__WEBPACK_IMPORTED_MODULE_1__.HoverableCard, { sx: { p: "28px", width: { xs: "100%", xl: "1170px" }, margin: "0 auto" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], { spacing: 4, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { component: "div", sx: {
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontFamily: _fonts__WEBPACK_IMPORTED_MODULE_5__.Fonts.PHILOSOPHER,
                                        fontSize: { xs: "16px", sm: "20px" },
                                    }, children: app.data.about.welcome }), app.data.about.paragraphs.map((paragraph, idx) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Paragraph, { children: paragraph }, `about-paragraph-${idx}`)))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], { disableSpacing: true, sx: { display: { xs: "auto", md: "none" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { width: 1 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_social__WEBPACK_IMPORTED_MODULE_3__.SocialBar, { sx: { width: "150px", mx: "auto", float: "center" }, urls: _routes__WEBPACK_IMPORTED_MODULE_7__.routes.urls.social }) }) })] }) }) })) }));
}
function Paragraph(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { component: "div", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: {
                textAlign: "justify",
                lineHeight: 1.7,
                fontFamily: _fonts__WEBPACK_IMPORTED_MODULE_5__.Fonts.NUNITO,
                fontSize: { xs: "13px", sm: "16px" },
            }, children: props.children }) }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsdURBQWtCLEVBQUUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUk7QUFDdmM7QUFDQTtBQUNBLFlBQVksc0RBQUksQ0FBQyxpRUFBVSxJQUFJLDRCQUE0QixzREFBSSxDQUFDLDBEQUFHLElBQUk7QUFDdkU7QUFDQTtBQUNBLDRCQUE0QixnREFBWTtBQUN4Qyw0QkFBNEIsd0JBQXdCO0FBQ3BELGFBQWEsNEJBQTRCLEdBQUc7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9TdGFjay9TdGFjay5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jYXJkL0hvdmVyYWJsZUNhcmQudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvTWVkaWFDYXJkLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL01lZGlhU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VQYWdlQWN0aXZlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlVGltZW91dC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL3BhZ2VzL0Fib3V0UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNvbXBvbmVudFwiLCBcImRpcmVjdGlvblwiLCBcInNwYWNpbmdcIiwgXCJkaXZpZGVyXCIsIFwiY2hpbGRyZW5cIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlVW5hcnlTcGFjaW5nLCBnZXRWYWx1ZSwgaGFuZGxlQnJlYWtwb2ludHMsIHVuc3RhYmxlX2V4dGVuZFN4UHJvcCBhcyBleHRlbmRTeFByb3AsIHVuc3RhYmxlX3Jlc29sdmVCcmVha3BvaW50VmFsdWVzIGFzIHJlc29sdmVCcmVha3BvaW50VmFsdWVzIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlcy9zdHlsZWQnO1xuaW1wb3J0IHVzZVRoZW1lUHJvcHMgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lUHJvcHMnO1xuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgd2l0aCB0aGUgc2VwYXJhdG9yIFJlYWN0IGVsZW1lbnQgaW50ZXJzcGVyc2VkIGJldHdlZW5cbiAqIGVhY2ggUmVhY3Qgbm9kZSBvZiB0aGUgaW5wdXQgY2hpbGRyZW4uXG4gKlxuICogPiBqb2luQ2hpbGRyZW4oWzEsMiwzXSwgMClcbiAqIFsxLDAsMiwwLDNdXG4gKi9cblxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcblxuZnVuY3Rpb24gam9pbkNoaWxkcmVuKGNoaWxkcmVuLCBzZXBhcmF0b3IpIHtcbiAgY29uc3QgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTtcbiAgcmV0dXJuIGNoaWxkcmVuQXJyYXkucmVkdWNlKChvdXRwdXQsIGNoaWxkLCBpbmRleCkgPT4ge1xuICAgIG91dHB1dC5wdXNoKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA8IGNoaWxkcmVuQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgb3V0cHV0LnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoc2VwYXJhdG9yLCB7XG4gICAgICAgIGtleTogYHNlcGFyYXRvci0ke2luZGV4fWBcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LCBbXSk7XG59XG5cbmNvbnN0IGdldFNpZGVGcm9tRGlyZWN0aW9uID0gZGlyZWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3c6ICdMZWZ0JyxcbiAgICAncm93LXJldmVyc2UnOiAnUmlnaHQnLFxuICAgIGNvbHVtbjogJ1RvcCcsXG4gICAgJ2NvbHVtbi1yZXZlcnNlJzogJ0JvdHRvbSdcbiAgfVtkaXJlY3Rpb25dO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gKHtcbiAgb3duZXJTdGF0ZSxcbiAgdGhlbWVcbn0pID0+IHtcbiAgbGV0IHN0eWxlcyA9IF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSwgaGFuZGxlQnJlYWtwb2ludHMoe1xuICAgIHRoZW1lXG4gIH0sIHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICB2YWx1ZXM6IG93bmVyU3RhdGUuZGlyZWN0aW9uLFxuICAgIGJyZWFrcG9pbnRzOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNcbiAgfSksIHByb3BWYWx1ZSA9PiAoe1xuICAgIGZsZXhEaXJlY3Rpb246IHByb3BWYWx1ZVxuICB9KSkpO1xuXG4gIGlmIChvd25lclN0YXRlLnNwYWNpbmcpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1lciA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh0aGVtZSk7XG4gICAgY29uc3QgYmFzZSA9IE9iamVjdC5rZXlzKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcykucmVkdWNlKChhY2MsIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGlmIChvd25lclN0YXRlLnNwYWNpbmdbYnJlYWtwb2ludF0gIT0gbnVsbCB8fCBvd25lclN0YXRlLmRpcmVjdGlvblticmVha3BvaW50XSAhPSBudWxsKSB7XG4gICAgICAgIGFjY1ticmVha3BvaW50XSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIGNvbnN0IGRpcmVjdGlvblZhbHVlcyA9IHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICAgIHZhbHVlczogb3duZXJTdGF0ZS5kaXJlY3Rpb24sXG4gICAgICBiYXNlXG4gICAgfSk7XG4gICAgY29uc3Qgc3BhY2luZ1ZhbHVlcyA9IHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICAgIHZhbHVlczogb3duZXJTdGF0ZS5zcGFjaW5nLFxuICAgICAgYmFzZVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3R5bGVGcm9tUHJvcFZhbHVlID0gKHByb3BWYWx1ZSwgYnJlYWtwb2ludCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJyYgPiA6bm90KHN0eWxlKSArIDpub3Qoc3R5bGUpJzoge1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBbYG1hcmdpbiR7Z2V0U2lkZUZyb21EaXJlY3Rpb24oYnJlYWtwb2ludCA/IGRpcmVjdGlvblZhbHVlc1ticmVha3BvaW50XSA6IG93bmVyU3RhdGUuZGlyZWN0aW9uKX1gXTogZ2V0VmFsdWUodHJhbnNmb3JtZXIsIHByb3BWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgc3R5bGVzID0gZGVlcG1lcmdlKHN0eWxlcywgaGFuZGxlQnJlYWtwb2ludHMoe1xuICAgICAgdGhlbWVcbiAgICB9LCBzcGFjaW5nVmFsdWVzLCBzdHlsZUZyb21Qcm9wVmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuY29uc3QgU3RhY2tSb290ID0gc3R5bGVkKCdkaXYnLCB7XG4gIG5hbWU6ICdNdWlTdGFjaycsXG4gIHNsb3Q6ICdSb290JyxcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiB7XG4gICAgcmV0dXJuIFtzdHlsZXMucm9vdF07XG4gIH1cbn0pKHN0eWxlKTtcbmNvbnN0IFN0YWNrID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3RhY2soaW5Qcm9wcywgcmVmKSB7XG4gIGNvbnN0IHRoZW1lUHJvcHMgPSB1c2VUaGVtZVByb3BzKHtcbiAgICBwcm9wczogaW5Qcm9wcyxcbiAgICBuYW1lOiAnTXVpU3RhY2snXG4gIH0pO1xuICBjb25zdCBwcm9wcyA9IGV4dGVuZFN4UHJvcCh0aGVtZVByb3BzKTtcblxuICBjb25zdCB7XG4gICAgY29tcG9uZW50ID0gJ2RpdicsXG4gICAgZGlyZWN0aW9uID0gJ2NvbHVtbicsXG4gICAgc3BhY2luZyA9IDAsXG4gICAgZGl2aWRlcixcbiAgICBjaGlsZHJlblxuICB9ID0gcHJvcHMsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qgb3duZXJTdGF0ZSA9IHtcbiAgICBkaXJlY3Rpb24sXG4gICAgc3BhY2luZ1xuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goU3RhY2tSb290LCBfZXh0ZW5kcyh7XG4gICAgYXM6IGNvbXBvbmVudCxcbiAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyLCB7XG4gICAgY2hpbGRyZW46IGRpdmlkZXIgPyBqb2luQ2hpbGRyZW4oY2hpbGRyZW4sIGRpdmlkZXIpIDogY2hpbGRyZW5cbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdGFjay5wcm9wVHlwZXNcbi8qIHJlbW92ZS1wcm9wdHlwZXMgKi9cbj0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0IGlzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqIEBkZWZhdWx0ICdjb2x1bW4nXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXSksIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXSkpLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqXG4gICAqIEFkZCBhbiBlbGVtZW50IGJldHdlZW4gZWFjaCBjaGlsZC5cbiAgICovXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIGltbWVkaWF0ZSBjaGlsZHJlbi5cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgc3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgc3lzdGVtIHByb3AsIHdoaWNoIGFsbG93cyBkZWZpbmluZyBzeXN0ZW0gb3ZlcnJpZGVzIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBDU1Mgc3R5bGVzLlxuICAgKi9cbiAgc3g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pKSwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFN0YWNrOyIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEhvdmVyYWJsZUNhcmQocHJvcHMpIHtcbiAgICBjb25zdCBbaXNNb3VzZU92ZXIsIHNldE1vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChfanN4KENhcmQsIHsgc3g6IHByb3BzLnN4LCBlbGV2YXRpb246IGlzTW91c2VPdmVyID8gNSA6IDIsIG9uTW91c2VPdmVyOiAoKSA9PiBzZXRNb3VzZU92ZXIodHJ1ZSksIG9uTW91c2VMZWF2ZTogKCkgPT4gc2V0TW91c2VPdmVyKGZhbHNlKSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pKTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgTGF1bmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MYXVuY2hcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRIZWFkZXJcIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL0NoaXBcIjtcbmltcG9ydCB7IGdyZXkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpbmtcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2x0aXBcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgRm9udHMgfSBmcm9tIFwiLi4vLi4vZm9udHNcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCB7IEhvdmVyYWJsZUNhcmQgfSBmcm9tIFwiLi9Ib3ZlcmFibGVDYXJkXCI7XG5leHBvcnQgZnVuY3Rpb24gTWVkaWFDYXJkKHByb3BzKSB7XG4gICAgY29uc3QgYXBwID0gdXNlQXBwKCk7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IGFjY2Vzc01lZGlhQnV0dG9uTGFiZWwgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKFtcInBvc3RcIiwgXCJ0aGVzaXNcIl0uaW5jbHVkZXMocHJvcHMuaXRlbS50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnJlYWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0udHlwZSA9PT0gXCJsaXZlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDp3YXRjaFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS50eXBlID09PSBcImNvbmZlcmVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnNsaWRlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6dmlld1wiKTtcbiAgICB9LCBbcHJvcHMuaXRlbS50eXBlLCB0XSk7XG4gICAgY29uc3QgZm9ybWF0dGVkTWVkaWFEYXRlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChbXCJjb2RlXCIsIFwidGhlc2lzXCJdLmluY2x1ZGVzKHByb3BzLml0ZW0udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQocHJvcHMuaXRlbS5yZWxlYXNlRGF0ZSwgXCJ5eXl5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXQocHJvcHMuaXRlbS5yZWxlYXNlRGF0ZSwgXCJNTU0gZGQsIHl5eXlcIik7XG4gICAgfSwgW3Byb3BzLml0ZW0ucmVsZWFzZURhdGUsIHByb3BzLml0ZW0udHlwZV0pO1xuICAgIGNvbnN0IGljb25Sb3V0ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJLSUUgQ29tbXVuaXR5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXMuaW1hZ2VzLmtpZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJUb3dhcmRzIERhdGEgU2NpZW5jZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVzLmltYWdlcy50ZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVU5JQ0FNUFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gcm91dGVzLmltYWdlcy51bmljYW1wLmxpZ2h0IDogcm91dGVzLmltYWdlcy51bmljYW1wLmRhcms7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVGhlIERldmVsb3BlcidzIENvbmZlcmVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5pbWFnZXMudGRjO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIkdpdEh1YlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gcm91dGVzLmltYWdlcy5naXRodWIubGlnaHQgOiByb3V0ZXMuaW1hZ2VzLmdpdGh1Yi5kYXJrO1xuICAgICAgICB9XG4gICAgfSwgW2FwcC5jb2xvck1vZGUsIHByb3BzLml0ZW0ucHVibGlzaGVkQXRdKTtcbiAgICByZXR1cm4gKF9qc3hzKEhvdmVyYWJsZUNhcmQsIHsgY2hpbGRyZW46IFtfanN4KENhcmRIZWFkZXIsIHsgdGl0bGU6IF9qc3goVHlwb2dyYXBoeSwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRm9udHMuT1hZR0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMTRweFwiLCBzbTogXCIxNnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiBcImF1dG9cIiwgbGc6IFwiNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbG9yOiBncmV5W2FwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IDcwMCA6IDUwMF0sIGd1dHRlckJvdHRvbTogdHJ1ZSwgY2hpbGRyZW46IHByb3BzLml0ZW0udGl0bGUgfSksIGFjdGlvbjogaWNvblJvdXRlICYmIChfanN4KFRvb2x0aXAsIHsgdGl0bGU6IHByb3BzLml0ZW0ucHVibGlzaGVkQXQsIGFycm93OiB0cnVlLCBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHN0eWxlOiB7IG1hcmdpbjogXCI0cHggOHB4IDBweCAxNnB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9LCBzcmM6IGljb25Sb3V0ZSwgYWx0OiBcIlwiLCBsb2FkaW5nOiBcImxhenlcIiB9KSB9KSkgfSksIF9qc3goQ2FyZENvbnRlbnQsIHsgc3g6IHsgcHQ6IDAgfSwgY2hpbGRyZW46IF9qc3goR3JpZCwgeyBzeDogeyBoZWlnaHQ6IHsgeHM6IFwiYXV0b1wiLCBsZzogXCI1MHB4XCIgfSB9LCBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDEsIGNoaWxkcmVuOiBbLi4ucHJvcHMuaXRlbS5rZXl3b3JkS2V5c11cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoa2V5d29yZEtleSkgPT4gKF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBjaGlsZHJlbjogX2pzeChDaGlwLCB7IGxhYmVsOiB0KGBsaXRlcmFsOiR7a2V5d29yZEtleX1gKSwgY29sb3I6IFwic3VjY2Vzc1wiLCB2YXJpYW50OiBwcm9wcy5zZWxlY3RlZEtleXdvcmRzLmluY2x1ZGVzKGtleXdvcmRLZXkpID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZWRcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiAoKSA9PiBwcm9wcy5vbktleXdvcmRDbGlja2VkKGtleXdvcmRLZXkpIH0pIH0sIGBtZWRpYS1rZXl3b3JkLSR7a2V5d29yZEtleX1gKSkpIH0pIH0pLCBfanN4KENhcmRBY3Rpb25zLCB7IHN4OiB7IHB0OiAwLCBweDogXCIxNnB4XCIgfSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyB3aWR0aDogMSB9LCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBzeDogeyBmb250U2l6ZTogMTMsIGZsb2F0OiBcImxlZnRcIiwgbGluZUhlaWdodDogXCIzMHB4XCIgfSwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiwgY29tcG9uZW50OiBcImRpdlwiLCBjaGlsZHJlbjogZm9ybWF0dGVkTWVkaWFEYXRlIH0pLCBwcm9wcy5pdGVtLnVybCAmJiAoX2pzeChMaW5rLCB7IHVuZGVybGluZTogXCJub25lXCIsIHJlbDogXCJub3JlZmVycmVyXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogcHJvcHMuaXRlbS51cmwsIGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgeyBzeDogeyBmbG9hdDogXCJyaWdodFwiIH0sIHNpemU6IFwic21hbGxcIiwgZW5kSWNvbjogX2pzeChMYXVuY2hJY29uLCB7fSksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgY2hpbGRyZW46IGFjY2Vzc01lZGlhQnV0dG9uTGFiZWwgfSkgfSkpXSB9KSB9KV0gfSkpO1xufVxuIiwiZXhwb3J0IHsgSG92ZXJhYmxlQ2FyZCB9IGZyb20gXCIuL0hvdmVyYWJsZUNhcmRcIjtcbmV4cG9ydCB7IE1lZGlhQ2FyZCB9IGZyb20gXCIuL01lZGlhQ2FyZFwiO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaXZpZGVyXCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9GYWRlXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBNZWRpYUNhcmQgfSBmcm9tIFwiLi4vY2FyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhU2VjdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiBwcm9wcy5mYWRlVGltZSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyBtdDogXCIzMHB4XCIgfSwgY2hpbGRyZW46IFtfanN4KERpdmlkZXIsIHsgdGV4dEFsaWduOiBcImxlZnRcIiwgc3g6IHsgbWI6IFwiMzBweFwiLCBcIjo6YmVmb3JlXCI6IHsgd2lkdGg6IFwiMSVcIiB9LCBcIjo6YWZ0ZXJcIjogeyB3aWR0aDogXCI5OSVcIiB9IH0sIGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIHsgZm9udFdlaWdodDogXCJsaWdodFwiLCB2YXJpYW50OiBcIm92ZXJsaW5lXCIsIGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHsgZm9udFNpemU6IFwiMTRweFwiLCBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0sIGNoaWxkcmVuOiBwcm9wcy50aXRsZSB9KSB9KSwgX2pzeChHcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMywgY2hpbGRyZW46IHByb3BzLm1lZGlhTGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4gKF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBzeDogeyB3aWR0aDogeyB4czogXCIxMDAlXCIsIGxnOiBcIjUwJVwiLCB4bDogXCIzMyVcIiB9IH0sIGNoaWxkcmVuOiBfanN4KE1lZGlhQ2FyZCwgeyBpdGVtOiBpdGVtLCBzZWxlY3RlZEtleXdvcmRzOiBwcm9wcy5zZWxlY3RlZEtleXdvcmRzLCBvbktleXdvcmRDbGlja2VkOiBwcm9wcy5vbktleXdvcmRDbGlja2VkIH0pIH0sIGAke3Byb3BzLnRpdGxlfS0ke2lkeH1gKSkpIH0pXSB9KSB9KSk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmV4cG9ydCBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9qc3goQm94LCB7IHN4OiB7IHA6IFwiMTZweCAyNHB4XCIsIG1iOiBcIjI0cHhcIiB9LCBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0ZhZGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBQYWdlSGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChfanN4KEZhZGUsIHsgaW46IHRydWUsIHRpbWVvdXQ6IHByb3BzLmZhZGVUaW1lLCBjaGlsZHJlbjogX2pzeChCb3gsIHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pIH0pKTtcbn1cbiIsImV4cG9ydCB7IE1lZGlhU2VjdGlvbiB9IGZyb20gXCIuL01lZGlhU2VjdGlvblwiO1xuZXhwb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcbmV4cG9ydCB7IFBhZ2VIZWFkZXIgfSBmcm9tIFwiLi9QYWdlSGVhZGVyXCI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZVRpbWVvdXRcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdlQWN0aXZlKCkge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlVGltZW91dCgoKSA9PiBzZXRBY3RpdmUodHJ1ZSksIDApO1xuICAgIHJldHVybiBhY3RpdmU7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSkge1xuICAgIGNvbnN0IGNhbGxiYWNrUmVmID0gdXNlUmVmKGNhbGxiYWNrKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrO1xuICAgIH0sIFtjYWxsYmFja10pO1xuICAgIGNvbnN0IHNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2tSZWYuY3VycmVudCgpLCBkZWxheSk7XG4gICAgfSwgW2RlbGF5XSk7XG4gICAgY29uc3QgY2xlYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCAmJiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldCgpO1xuICAgICAgICByZXR1cm4gY2xlYXI7XG4gICAgfSwgW2RlbGF5LCBzZXQsIGNsZWFyXSk7XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIHNldCgpO1xuICAgIH0sIFtjbGVhciwgc2V0XSk7XG4gICAgcmV0dXJuIHsgcmVzZXQsIGNsZWFyIH07XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBIb3ZlcmFibGVDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCB7IFNvY2lhbEJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NvY2lhbFwiO1xuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSBcIi4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgRm9udHMgfSBmcm9tIFwiLi4vZm9udHNcIjtcbmltcG9ydCB7IHVzZVBhZ2VBY3RpdmUgfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnZUFjdGl2ZVwiO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xuICAgIGNvbnN0IGFwcCA9IHVzZUFwcCgpO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHVzZVBhZ2VBY3RpdmUoKTtcbiAgICByZXR1cm4gKF9qc3goUGFnZSwgeyBjaGlsZHJlbjogYWN0aXZlICYmIChfanN4KEZhZGUsIHsgaW46IHRydWUsIHRpbWVvdXQ6IDEwMDAsIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKEhvdmVyYWJsZUNhcmQsIHsgc3g6IHsgcDogXCIyOHB4XCIsIHdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgeGw6IFwiMTE3MHB4XCIgfSwgbWFyZ2luOiBcIjAgYXV0b1wiIH0sIGNoaWxkcmVuOiBbX2pzeHMoU3RhY2ssIHsgc3BhY2luZzogNCwgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcImRpdlwiLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGb250cy5QSElMT1NPUEhFUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxNnB4XCIsIHNtOiBcIjIwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2hpbGRyZW46IGFwcC5kYXRhLmFib3V0LndlbGNvbWUgfSksIGFwcC5kYXRhLmFib3V0LnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgsIGlkeCkgPT4gKF9qc3goUGFyYWdyYXBoLCB7IGNoaWxkcmVuOiBwYXJhZ3JhcGggfSwgYGFib3V0LXBhcmFncmFwaC0ke2lkeH1gKSkpXSB9KSwgX2pzeChDYXJkQWN0aW9ucywgeyBkaXNhYmxlU3BhY2luZzogdHJ1ZSwgc3g6IHsgZGlzcGxheTogeyB4czogXCJhdXRvXCIsIG1kOiBcIm5vbmVcIiB9IH0sIGNoaWxkcmVuOiBfanN4KEJveCwgeyBzeDogeyB3aWR0aDogMSB9LCBjaGlsZHJlbjogX2pzeChTb2NpYWxCYXIsIHsgc3g6IHsgd2lkdGg6IFwiMTUwcHhcIiwgbXg6IFwiYXV0b1wiLCBmbG9hdDogXCJjZW50ZXJcIiB9LCB1cmxzOiByb3V0ZXMudXJscy5zb2NpYWwgfSkgfSkgfSldIH0pIH0pIH0pKSB9KSk7XG59XG5mdW5jdGlvbiBQYXJhZ3JhcGgocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goVHlwb2dyYXBoeSwgeyBjb21wb25lbnQ6IFwiZGl2XCIsIGNoaWxkcmVuOiBfanN4KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS43LFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZvbnRzLk5VTklUTyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxM3B4XCIsIHNtOiBcIjE2cHhcIiB9LFxuICAgICAgICAgICAgfSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==