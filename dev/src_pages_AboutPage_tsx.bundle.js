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
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardHeader */ "./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/grey.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fonts */ "./src/fonts/index.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./src/routes/index.tsx");
/* harmony import */ var _chip_StaticChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chip/StaticChip */ "./src/components/chip/StaticChip.tsx");
/* harmony import */ var _HoverableCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HoverableCard */ "./src/components/card/HoverableCard.tsx");




















function MediaCard(props) {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const accessMediaButtonLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (["post", "thesis"].includes(props.item.kind)) {
            return t("literal:read");
        }
        if (props.item.kind === "live") {
            return t("literal:watch");
        }
        if (props.item.kind === "conference") {
            return t("literal:slides");
        }
        return t("literal:view");
    }, [props.item.kind, t]);
    const formattedMediaDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (["code", "thesis"].includes(props.item.kind)) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(props.item.releaseDate, "yyyy");
        }
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(props.item.releaseDate, "MMM dd, yyyy");
    }, [props.item.releaseDate, props.item.kind]);
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_HoverableCard__WEBPACK_IMPORTED_MODULE_6__.HoverableCard, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_9__["default"], { title: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: {
                        fontFamily: _fonts__WEBPACK_IMPORTED_MODULE_3__.Fonts.OXYGEN,
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: "bold",
                        height: { xs: "auto", lg: "50px" },
                    }, color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_11__["default"][app.colorMode === "light" ? 700 : 500], gutterBottom: true, children: props.item.title }), action: iconRoute && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], { title: props.item.publishedAt, arrow: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { style: { margin: "4px 8px 0px 16px", width: "20px", height: "20px" }, src: iconRoute, alt: "", loading: "lazy" }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { pt: 0 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], { sx: { height: { xs: "auto", lg: "50px" } }, container: true, spacing: 1, children: [...props.item.keywordKeys]
                        .sort((a, b) => b.length - a.length)
                        .map((keywordKey) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], { item: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chip_StaticChip__WEBPACK_IMPORTED_MODULE_5__.StaticChip, { label: t(`literal:${keywordKey}`), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: "small", onClick: () => props.keywordSelection.onItemSelected(keywordKey) }) }, `media-keyword-${keywordKey}`))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { pt: 0, px: "16px" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], { sx: { width: 1 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { fontSize: 13, float: "left", lineHeight: "30px" }, color: "text.secondary", component: "div", children: formattedMediaDate }), props.item.url && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_17__["default"], { underline: "none", rel: "noreferrer", target: "_blank", href: props.item.url, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { float: "right" }, size: "small", endIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_19__["default"], {}), color: "success", children: accessMediaButtonLabel }) }))] }) })] }));
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

/***/ "./src/components/chip/StaticChip.tsx":
/*!********************************************!*\
  !*** ./src/components/chip/StaticChip.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticChip": () => (/* binding */ StaticChip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");


function StaticChip(props) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__["default"], { ...props, sx: { borderWidth: "1px", borderStyle: "solid", borderColor: `${props.color}.main` } });
}


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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_2__["default"], { in: true, timeout: props.fadeTime, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], { sx: { mt: "30px" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], { textAlign: "left", sx: { mb: "30px", "::before": { width: "1%" }, "::after": { width: "99%" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { fontWeight: "light", variant: "overline", component: "div", sx: { fontSize: "14px", color: "text.secondary" }, children: props.title }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { container: true, spacing: 3, children: props.mediaList.map((item, idx) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { item: true, sx: { width: { xs: "100%", lg: "50%", xl: "33%" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_card__WEBPACK_IMPORTED_MODULE_1__.MediaCard, { item: item, keywordSelection: props.keywordSelection }) }, `${props.title}-${idx}`))) })] }) }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQTRCLFdBQVcsMEJBQTBCLFlBQVksc0RBQUksQ0FBQywwREFBRyxJQUFJLE1BQU0sVUFBVSxZQUFZLHNEQUFJLENBQUMseURBQVMsSUFBSSxNQUFNLDZDQUE2QyxRQUFRLHVEQUFrQixFQUFFLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJO0FBQ3ZjO0FBQ0E7QUFDQSxZQUFZLHNEQUFJLENBQUMsaUVBQVUsSUFBSSw0QkFBNEIsc0RBQUksQ0FBQywwREFBRyxJQUFJO0FBQ3ZFO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQVk7QUFDeEMsNEJBQTRCLHdCQUF3QjtBQUNwRCxhQUFhLDRCQUE0QixHQUFHO0FBQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvU3RhY2svU3RhY2suanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9Ib3ZlcmFibGVDYXJkLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jYXJkL01lZGlhQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2hpcC9TdGF0aWNDaGlwLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL01lZGlhU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VQYWdlQWN0aXZlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlVGltZW91dC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL3BhZ2VzL0Fib3V0UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNvbXBvbmVudFwiLCBcImRpcmVjdGlvblwiLCBcInNwYWNpbmdcIiwgXCJkaXZpZGVyXCIsIFwiY2hpbGRyZW5cIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlVW5hcnlTcGFjaW5nLCBnZXRWYWx1ZSwgaGFuZGxlQnJlYWtwb2ludHMsIHVuc3RhYmxlX2V4dGVuZFN4UHJvcCBhcyBleHRlbmRTeFByb3AsIHVuc3RhYmxlX3Jlc29sdmVCcmVha3BvaW50VmFsdWVzIGFzIHJlc29sdmVCcmVha3BvaW50VmFsdWVzIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlcy9zdHlsZWQnO1xuaW1wb3J0IHVzZVRoZW1lUHJvcHMgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lUHJvcHMnO1xuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgd2l0aCB0aGUgc2VwYXJhdG9yIFJlYWN0IGVsZW1lbnQgaW50ZXJzcGVyc2VkIGJldHdlZW5cbiAqIGVhY2ggUmVhY3Qgbm9kZSBvZiB0aGUgaW5wdXQgY2hpbGRyZW4uXG4gKlxuICogPiBqb2luQ2hpbGRyZW4oWzEsMiwzXSwgMClcbiAqIFsxLDAsMiwwLDNdXG4gKi9cblxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcblxuZnVuY3Rpb24gam9pbkNoaWxkcmVuKGNoaWxkcmVuLCBzZXBhcmF0b3IpIHtcbiAgY29uc3QgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTtcbiAgcmV0dXJuIGNoaWxkcmVuQXJyYXkucmVkdWNlKChvdXRwdXQsIGNoaWxkLCBpbmRleCkgPT4ge1xuICAgIG91dHB1dC5wdXNoKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA8IGNoaWxkcmVuQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgb3V0cHV0LnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoc2VwYXJhdG9yLCB7XG4gICAgICAgIGtleTogYHNlcGFyYXRvci0ke2luZGV4fWBcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LCBbXSk7XG59XG5cbmNvbnN0IGdldFNpZGVGcm9tRGlyZWN0aW9uID0gZGlyZWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3c6ICdMZWZ0JyxcbiAgICAncm93LXJldmVyc2UnOiAnUmlnaHQnLFxuICAgIGNvbHVtbjogJ1RvcCcsXG4gICAgJ2NvbHVtbi1yZXZlcnNlJzogJ0JvdHRvbSdcbiAgfVtkaXJlY3Rpb25dO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gKHtcbiAgb3duZXJTdGF0ZSxcbiAgdGhlbWVcbn0pID0+IHtcbiAgbGV0IHN0eWxlcyA9IF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSwgaGFuZGxlQnJlYWtwb2ludHMoe1xuICAgIHRoZW1lXG4gIH0sIHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICB2YWx1ZXM6IG93bmVyU3RhdGUuZGlyZWN0aW9uLFxuICAgIGJyZWFrcG9pbnRzOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNcbiAgfSksIHByb3BWYWx1ZSA9PiAoe1xuICAgIGZsZXhEaXJlY3Rpb246IHByb3BWYWx1ZVxuICB9KSkpO1xuXG4gIGlmIChvd25lclN0YXRlLnNwYWNpbmcpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1lciA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh0aGVtZSk7XG4gICAgY29uc3QgYmFzZSA9IE9iamVjdC5rZXlzKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcykucmVkdWNlKChhY2MsIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGlmIChvd25lclN0YXRlLnNwYWNpbmdbYnJlYWtwb2ludF0gIT0gbnVsbCB8fCBvd25lclN0YXRlLmRpcmVjdGlvblticmVha3BvaW50XSAhPSBudWxsKSB7XG4gICAgICAgIGFjY1ticmVha3BvaW50XSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIGNvbnN0IGRpcmVjdGlvblZhbHVlcyA9IHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICAgIHZhbHVlczogb3duZXJTdGF0ZS5kaXJlY3Rpb24sXG4gICAgICBiYXNlXG4gICAgfSk7XG4gICAgY29uc3Qgc3BhY2luZ1ZhbHVlcyA9IHJlc29sdmVCcmVha3BvaW50VmFsdWVzKHtcbiAgICAgIHZhbHVlczogb3duZXJTdGF0ZS5zcGFjaW5nLFxuICAgICAgYmFzZVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3R5bGVGcm9tUHJvcFZhbHVlID0gKHByb3BWYWx1ZSwgYnJlYWtwb2ludCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJyYgPiA6bm90KHN0eWxlKSArIDpub3Qoc3R5bGUpJzoge1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBbYG1hcmdpbiR7Z2V0U2lkZUZyb21EaXJlY3Rpb24oYnJlYWtwb2ludCA/IGRpcmVjdGlvblZhbHVlc1ticmVha3BvaW50XSA6IG93bmVyU3RhdGUuZGlyZWN0aW9uKX1gXTogZ2V0VmFsdWUodHJhbnNmb3JtZXIsIHByb3BWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgc3R5bGVzID0gZGVlcG1lcmdlKHN0eWxlcywgaGFuZGxlQnJlYWtwb2ludHMoe1xuICAgICAgdGhlbWVcbiAgICB9LCBzcGFjaW5nVmFsdWVzLCBzdHlsZUZyb21Qcm9wVmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuY29uc3QgU3RhY2tSb290ID0gc3R5bGVkKCdkaXYnLCB7XG4gIG5hbWU6ICdNdWlTdGFjaycsXG4gIHNsb3Q6ICdSb290JyxcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiB7XG4gICAgcmV0dXJuIFtzdHlsZXMucm9vdF07XG4gIH1cbn0pKHN0eWxlKTtcbmNvbnN0IFN0YWNrID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3RhY2soaW5Qcm9wcywgcmVmKSB7XG4gIGNvbnN0IHRoZW1lUHJvcHMgPSB1c2VUaGVtZVByb3BzKHtcbiAgICBwcm9wczogaW5Qcm9wcyxcbiAgICBuYW1lOiAnTXVpU3RhY2snXG4gIH0pO1xuICBjb25zdCBwcm9wcyA9IGV4dGVuZFN4UHJvcCh0aGVtZVByb3BzKTtcblxuICBjb25zdCB7XG4gICAgY29tcG9uZW50ID0gJ2RpdicsXG4gICAgZGlyZWN0aW9uID0gJ2NvbHVtbicsXG4gICAgc3BhY2luZyA9IDAsXG4gICAgZGl2aWRlcixcbiAgICBjaGlsZHJlblxuICB9ID0gcHJvcHMsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qgb3duZXJTdGF0ZSA9IHtcbiAgICBkaXJlY3Rpb24sXG4gICAgc3BhY2luZ1xuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goU3RhY2tSb290LCBfZXh0ZW5kcyh7XG4gICAgYXM6IGNvbXBvbmVudCxcbiAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyLCB7XG4gICAgY2hpbGRyZW46IGRpdmlkZXIgPyBqb2luQ2hpbGRyZW4oY2hpbGRyZW4sIGRpdmlkZXIpIDogY2hpbGRyZW5cbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdGFjay5wcm9wVHlwZXNcbi8qIHJlbW92ZS1wcm9wdHlwZXMgKi9cbj0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0IGlzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqIEBkZWZhdWx0ICdjb2x1bW4nXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXSksIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbicsICdyb3ctcmV2ZXJzZScsICdyb3cnXSkpLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqXG4gICAqIEFkZCBhbiBlbGVtZW50IGJldHdlZW4gZWFjaCBjaGlsZC5cbiAgICovXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIGltbWVkaWF0ZSBjaGlsZHJlbi5cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgc3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgc3lzdGVtIHByb3AsIHdoaWNoIGFsbG93cyBkZWZpbmluZyBzeXN0ZW0gb3ZlcnJpZGVzIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBDU1Mgc3R5bGVzLlxuICAgKi9cbiAgc3g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pKSwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFN0YWNrOyIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEhvdmVyYWJsZUNhcmQocHJvcHMpIHtcbiAgICBjb25zdCBbaXNNb3VzZU92ZXIsIHNldE1vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChfanN4KENhcmQsIHsgc3g6IHByb3BzLnN4LCBlbGV2YXRpb246IGlzTW91c2VPdmVyID8gNSA6IDIsIG9uTW91c2VPdmVyOiAoKSA9PiBzZXRNb3VzZU92ZXIodHJ1ZSksIG9uTW91c2VMZWF2ZTogKCkgPT4gc2V0TW91c2VPdmVyKGZhbHNlKSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pKTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgTGF1bmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MYXVuY2hcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRIZWFkZXJcIjtcbmltcG9ydCB7IGdyZXkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpbmtcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2x0aXBcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgRm9udHMgfSBmcm9tIFwiLi4vLi4vZm9udHNcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFN0YXRpY0NoaXAgfSBmcm9tIFwiLi4vY2hpcC9TdGF0aWNDaGlwXCI7XG5pbXBvcnQgeyBIb3ZlcmFibGVDYXJkIH0gZnJvbSBcIi4vSG92ZXJhYmxlQ2FyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhQ2FyZChwcm9wcykge1xuICAgIGNvbnN0IGFwcCA9IHVzZUFwcCgpO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBhY2Nlc3NNZWRpYUJ1dHRvbkxhYmVsID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChbXCJwb3N0XCIsIFwidGhlc2lzXCJdLmluY2x1ZGVzKHByb3BzLml0ZW0ua2luZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDpyZWFkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLmtpbmQgPT09IFwibGl2ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6d2F0Y2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ua2luZCA9PT0gXCJjb25mZXJlbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDpzbGlkZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnZpZXdcIik7XG4gICAgfSwgW3Byb3BzLml0ZW0ua2luZCwgdF0pO1xuICAgIGNvbnN0IGZvcm1hdHRlZE1lZGlhRGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoW1wiY29kZVwiLCBcInRoZXNpc1wiXS5pbmNsdWRlcyhwcm9wcy5pdGVtLmtpbmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHByb3BzLml0ZW0ucmVsZWFzZURhdGUsIFwieXl5eVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0KHByb3BzLml0ZW0ucmVsZWFzZURhdGUsIFwiTU1NIGRkLCB5eXl5XCIpO1xuICAgIH0sIFtwcm9wcy5pdGVtLnJlbGVhc2VEYXRlLCBwcm9wcy5pdGVtLmtpbmRdKTtcbiAgICBjb25zdCBpY29uUm91dGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiS0lFIENvbW11bml0eVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVzLmltYWdlcy5raWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVG93YXJkcyBEYXRhIFNjaWVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5pbWFnZXMudGRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlVOSUNBTVBcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IHJvdXRlcy5pbWFnZXMudW5pY2FtcC5saWdodCA6IHJvdXRlcy5pbWFnZXMudW5pY2FtcC5kYXJrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlRoZSBEZXZlbG9wZXIncyBDb25mZXJlbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXMuaW1hZ2VzLnRkYztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJHaXRIdWJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IHJvdXRlcy5pbWFnZXMuZ2l0aHViLmxpZ2h0IDogcm91dGVzLmltYWdlcy5naXRodWIuZGFyaztcbiAgICAgICAgfVxuICAgIH0sIFthcHAuY29sb3JNb2RlLCBwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0XSk7XG4gICAgcmV0dXJuIChfanN4cyhIb3ZlcmFibGVDYXJkLCB7IGNoaWxkcmVuOiBbX2pzeChDYXJkSGVhZGVyLCB7IHRpdGxlOiBfanN4KFR5cG9ncmFwaHksIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZvbnRzLk9YWUdFTixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjE0cHhcIiwgc206IFwiMTZweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogXCJhdXRvXCIsIGxnOiBcIjUwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LCBjb2xvcjogZ3JleVthcHAuY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA3MDAgOiA1MDBdLCBndXR0ZXJCb3R0b206IHRydWUsIGNoaWxkcmVuOiBwcm9wcy5pdGVtLnRpdGxlIH0pLCBhY3Rpb246IGljb25Sb3V0ZSAmJiAoX2pzeChUb29sdGlwLCB7IHRpdGxlOiBwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0LCBhcnJvdzogdHJ1ZSwgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzdHlsZTogeyBtYXJnaW46IFwiNHB4IDhweCAwcHggMTZweFwiLCB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfSwgc3JjOiBpY29uUm91dGUsIGFsdDogXCJcIiwgbG9hZGluZzogXCJsYXp5XCIgfSkgfSkpIH0pLCBfanN4KENhcmRDb250ZW50LCB7IHN4OiB7IHB0OiAwIH0sIGNoaWxkcmVuOiBfanN4KEdyaWQsIHsgc3g6IHsgaGVpZ2h0OiB7IHhzOiBcImF1dG9cIiwgbGc6IFwiNTBweFwiIH0gfSwgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAxLCBjaGlsZHJlbjogWy4uLnByb3BzLml0ZW0ua2V5d29yZEtleXNdXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGtleXdvcmRLZXkpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgY2hpbGRyZW46IF9qc3goU3RhdGljQ2hpcCwgeyBsYWJlbDogdChgbGl0ZXJhbDoke2tleXdvcmRLZXl9YCksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgdmFyaWFudDogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmRLZXkpID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZWRcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiAoKSA9PiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uLm9uSXRlbVNlbGVjdGVkKGtleXdvcmRLZXkpIH0pIH0sIGBtZWRpYS1rZXl3b3JkLSR7a2V5d29yZEtleX1gKSkpIH0pIH0pLCBfanN4KENhcmRBY3Rpb25zLCB7IHN4OiB7IHB0OiAwLCBweDogXCIxNnB4XCIgfSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyB3aWR0aDogMSB9LCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBzeDogeyBmb250U2l6ZTogMTMsIGZsb2F0OiBcImxlZnRcIiwgbGluZUhlaWdodDogXCIzMHB4XCIgfSwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiwgY29tcG9uZW50OiBcImRpdlwiLCBjaGlsZHJlbjogZm9ybWF0dGVkTWVkaWFEYXRlIH0pLCBwcm9wcy5pdGVtLnVybCAmJiAoX2pzeChMaW5rLCB7IHVuZGVybGluZTogXCJub25lXCIsIHJlbDogXCJub3JlZmVycmVyXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogcHJvcHMuaXRlbS51cmwsIGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgeyBzeDogeyBmbG9hdDogXCJyaWdodFwiIH0sIHNpemU6IFwic21hbGxcIiwgZW5kSWNvbjogX2pzeChMYXVuY2hJY29uLCB7fSksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgY2hpbGRyZW46IGFjY2Vzc01lZGlhQnV0dG9uTGFiZWwgfSkgfSkpXSB9KSB9KV0gfSkpO1xufVxuIiwiZXhwb3J0IHsgSG92ZXJhYmxlQ2FyZCB9IGZyb20gXCIuL0hvdmVyYWJsZUNhcmRcIjtcbmV4cG9ydCB7IE1lZGlhQ2FyZCB9IGZyb20gXCIuL01lZGlhQ2FyZFwiO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL0NoaXBcIjtcbmV4cG9ydCBmdW5jdGlvbiBTdGF0aWNDaGlwKHByb3BzKSB7XG4gICAgcmV0dXJuIF9qc3goQ2hpcCwgeyAuLi5wcm9wcywgc3g6IHsgYm9yZGVyV2lkdGg6IFwiMXB4XCIsIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsIGJvcmRlckNvbG9yOiBgJHtwcm9wcy5jb2xvcn0ubWFpbmAgfSB9KTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRGl2aWRlclwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgTWVkaWFDYXJkIH0gZnJvbSBcIi4uL2NhcmRcIjtcbmV4cG9ydCBmdW5jdGlvbiBNZWRpYVNlY3Rpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goRmFkZSwgeyBpbjogdHJ1ZSwgdGltZW91dDogcHJvcHMuZmFkZVRpbWUsIGNoaWxkcmVuOiBfanN4cyhCb3gsIHsgc3g6IHsgbXQ6IFwiMzBweFwiIH0sIGNoaWxkcmVuOiBbX2pzeChEaXZpZGVyLCB7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHN4OiB7IG1iOiBcIjMwcHhcIiwgXCI6OmJlZm9yZVwiOiB7IHdpZHRoOiBcIjElXCIgfSwgXCI6OmFmdGVyXCI6IHsgd2lkdGg6IFwiOTklXCIgfSB9LCBjaGlsZHJlbjogX2pzeChUeXBvZ3JhcGh5LCB7IGZvbnRXZWlnaHQ6IFwibGlnaHRcIiwgdmFyaWFudDogXCJvdmVybGluZVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGZvbnRTaXplOiBcIjE0cHhcIiwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9LCBjaGlsZHJlbjogcHJvcHMudGl0bGUgfSkgfSksIF9qc3goR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDMsIGNoaWxkcmVuOiBwcm9wcy5tZWRpYUxpc3QubWFwKChpdGVtLCBpZHgpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgc3g6IHsgd2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBsZzogXCI1MCVcIiwgeGw6IFwiMzMlXCIgfSB9LCBjaGlsZHJlbjogX2pzeChNZWRpYUNhcmQsIHsgaXRlbTogaXRlbSwga2V5d29yZFNlbGVjdGlvbjogcHJvcHMua2V5d29yZFNlbGVjdGlvbiB9KSB9LCBgJHtwcm9wcy50aXRsZX0tJHtpZHh9YCkpKSB9KV0gfSkgfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5leHBvcnQgZnVuY3Rpb24gUGFnZShwcm9wcykge1xuICAgIHJldHVybiBfanN4KEJveCwgeyBzeDogeyBwOiBcIjE2cHggMjRweFwiLCBtYjogXCIyNHB4XCIgfSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9GYWRlXCI7XG5leHBvcnQgZnVuY3Rpb24gUGFnZUhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiBwcm9wcy5mYWRlVGltZSwgY2hpbGRyZW46IF9qc3goQm94LCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSB9KSk7XG59XG4iLCJleHBvcnQgeyBNZWRpYVNlY3Rpb24gfSBmcm9tIFwiLi9NZWRpYVNlY3Rpb25cIjtcbmV4cG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5leHBvcnQgeyBQYWdlSGVhZGVyIH0gZnJvbSBcIi4vUGFnZUhlYWRlclwiO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2VUaW1lb3V0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnZUFjdGl2ZSgpIHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZVRpbWVvdXQoKCkgPT4gc2V0QWN0aXZlKHRydWUpLCAwKTtcbiAgICByZXR1cm4gYWN0aXZlO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dChjYWxsYmFjaywgZGVsYXkpIHtcbiAgICBjb25zdCBjYWxsYmFja1JlZiA9IHVzZVJlZihjYWxsYmFjayk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgICB9LCBbY2FsbGJhY2tdKTtcbiAgICBjb25zdCBzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrUmVmLmN1cnJlbnQoKSwgZGVsYXkpO1xuICAgIH0sIFtkZWxheV0pO1xuICAgIGNvbnN0IGNsZWFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgJiYgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXQoKTtcbiAgICAgICAgcmV0dXJuIGNsZWFyO1xuICAgIH0sIFtkZWxheSwgc2V0LCBjbGVhcl0pO1xuICAgIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBzZXQoKTtcbiAgICB9LCBbY2xlYXIsIHNldF0pO1xuICAgIHJldHVybiB7IHJlc2V0LCBjbGVhciB9O1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0ZhZGVcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgSG92ZXJhYmxlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgeyBTb2NpYWxCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxcIjtcbmltcG9ydCB7IHVzZUFwcCB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IEZvbnRzIH0gZnJvbSBcIi4uL2ZvbnRzXCI7XG5pbXBvcnQgeyB1c2VQYWdlQWN0aXZlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVBhZ2VBY3RpdmVcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0UGFnZSgpIHtcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAoKTtcbiAgICBjb25zdCBhY3RpdmUgPSB1c2VQYWdlQWN0aXZlKCk7XG4gICAgcmV0dXJuIChfanN4KFBhZ2UsIHsgY2hpbGRyZW46IGFjdGl2ZSAmJiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiAxMDAwLCBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4cyhIb3ZlcmFibGVDYXJkLCB7IHN4OiB7IHA6IFwiMjhweFwiLCB3aWR0aDogeyB4czogXCIxMDAlXCIsIHhsOiBcIjExNzBweFwiIH0sIG1hcmdpbjogXCIwIGF1dG9cIiB9LCBjaGlsZHJlbjogW19qc3hzKFN0YWNrLCB7IHNwYWNpbmc6IDQsIGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCB7IGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRm9udHMuUEhJTE9TT1BIRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMTZweFwiLCBzbTogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNoaWxkcmVuOiBhcHAuZGF0YS5hYm91dC53ZWxjb21lIH0pLCBhcHAuZGF0YS5hYm91dC5wYXJhZ3JhcGhzLm1hcCgocGFyYWdyYXBoLCBpZHgpID0+IChfanN4KFBhcmFncmFwaCwgeyBjaGlsZHJlbjogcGFyYWdyYXBoIH0sIGBhYm91dC1wYXJhZ3JhcGgtJHtpZHh9YCkpKV0gfSksIF9qc3goQ2FyZEFjdGlvbnMsIHsgZGlzYWJsZVNwYWNpbmc6IHRydWUsIHN4OiB7IGRpc3BsYXk6IHsgeHM6IFwiYXV0b1wiLCBtZDogXCJub25lXCIgfSB9LCBjaGlsZHJlbjogX2pzeChCb3gsIHsgc3g6IHsgd2lkdGg6IDEgfSwgY2hpbGRyZW46IF9qc3goU29jaWFsQmFyLCB7IHN4OiB7IHdpZHRoOiBcIjE1MHB4XCIsIG14OiBcImF1dG9cIiwgZmxvYXQ6IFwiY2VudGVyXCIgfSwgdXJsczogcm91dGVzLnVybHMuc29jaWFsIH0pIH0pIH0pXSB9KSB9KSB9KSkgfSkpO1xufVxuZnVuY3Rpb24gUGFyYWdyYXBoKHByb3BzKSB7XG4gICAgcmV0dXJuIChfanN4KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcImRpdlwiLCBjaGlsZHJlbjogX2pzeChCb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNyxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGb250cy5OVU5JVE8sXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMTNweFwiLCBzbTogXCIxNnB4XCIgfSxcbiAgICAgICAgICAgIH0sIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=