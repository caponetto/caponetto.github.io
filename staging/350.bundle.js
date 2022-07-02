"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([[350],{

/***/ 7015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ HoverableCard),
  "P": () => (/* reexport */ MediaCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(5295);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/card/HoverableCard.tsx



function HoverableCard(props) {
    const [isMouseOver, setMouseOver] = (0,react.useState)(false);
    return ((0,jsx_runtime.jsx)(Card/* default */.Z, { sx: { ...props.sx }, elevation: isMouseOver ? 5 : 2, onMouseOver: () => setMouseOver(true), onMouseLeave: () => setMouseOver(false), children: props.children }));
}

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(7431);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(9161);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(2643);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(8515);
// EXTERNAL MODULE: ./node_modules/@mui/material/colors/grey.js
var grey = __webpack_require__(7036);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(6634);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 55 modules
var Tooltip = __webpack_require__(6454);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 22 modules
var format = __webpack_require__(3267);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/pt-BR/index.js + 5 modules
var pt_BR = __webpack_require__(8994);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(1695);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 2 modules
var useTranslation = __webpack_require__(4056);
// EXTERNAL MODULE: ./src/context/AppContext.tsx
var AppContext = __webpack_require__(1431);
// EXTERNAL MODULE: ./src/fonts/index.tsx + 5 modules
var fonts = __webpack_require__(390);
// EXTERNAL MODULE: ./src/i18n/index.tsx + 10 modules
var src_i18n = __webpack_require__(9706);
// EXTERNAL MODULE: ./src/routes/index.tsx
var routes = __webpack_require__(4399);
// EXTERNAL MODULE: ./src/components/chip/StaticChip.tsx
var StaticChip = __webpack_require__(549);
;// CONCATENATED MODULE: ./src/components/card/MediaCard.tsx






















function MediaCard(props) {
    const app = (0,AppContext/* useApp */.qD)();
    const { t, i18n } = (0,useTranslation/* useTranslation */.$)();
    const accessMediaButtonLabel = (0,react.useMemo)(() => {
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
    const formattedMediaDate = (0,react.useMemo)(() => {
        if (["code", "thesis"].includes(props.item.kind)) {
            return (0,format/* default */.Z)(props.item.releaseDate, "yyyy");
        }
        return (0,format/* default */.Z)(props.item.releaseDate, "PPP", {
            locale: i18n.resolvedLanguage === src_i18n/* SupportedLanguages.PT */.i.PT ? pt_BR/* default */.Z : en_US/* default */.Z,
        });
    }, [props.item.kind, props.item.releaseDate, i18n.resolvedLanguage]);
    const publicationIcon = (0,react.useMemo)(() => {
        switch (props.item.publication) {
            case "kieCommunity":
                return { name: t("literal:kieCommunity"), route: routes/* routes.images.kie */._.images.kie };
            case "towardsDataScience":
                return { name: t("literal:towardsDataScience"), route: routes/* routes.images.tds */._.images.tds };
            case "unicamp":
                return {
                    name: t("literal:unicamp"),
                    route: app.colorMode === "light" ? routes/* routes.images.unicamp.light */._.images.unicamp.light : routes/* routes.images.unicamp.dark */._.images.unicamp.dark,
                };
            case "theDevelopersConference":
                return { name: t("literal:theDevelopersConference"), route: routes/* routes.images.tdc */._.images.tdc };
            case "gitHub":
                return {
                    name: t("literal:github"),
                    route: app.colorMode === "light" ? routes/* routes.images.github.light */._.images.github.light : routes/* routes.images.github.dark */._.images.github.dark,
                };
            default:
                throw new Error("Unsupported publication type");
        }
    }, [app.colorMode, props.item.publication, t]);
    return ((0,jsx_runtime.jsxs)(HoverableCard, { children: [(0,jsx_runtime.jsx)(CardHeader/* default */.Z, { title: (0,jsx_runtime.jsx)(Typography/* default */.Z, { sx: {
                        fontFamily: fonts/* Fonts.OXYGEN */.F.OXYGEN,
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: "bold",
                        height: { xs: "auto", lg: "50px" },
                    }, color: grey/* default */.Z[app.colorMode === "light" ? 700 : 500], gutterBottom: true, children: props.item.title }), action: publicationIcon && ((0,jsx_runtime.jsx)(Tooltip/* default */.Z, { title: publicationIcon.name, arrow: true, children: (0,jsx_runtime.jsx)("img", { style: { margin: "4px 8px 0px 16px", width: "20px", height: "20px" }, src: publicationIcon.route, alt: "", loading: "lazy" }) })) }), (0,jsx_runtime.jsx)(CardContent/* default */.Z, { sx: { pt: 0 }, children: (0,jsx_runtime.jsx)(Grid/* default */.ZP, { sx: { height: { xs: "auto", lg: "50px" } }, container: true, spacing: 1, children: [...props.item.keywordKeys]
                        .sort((a, b) => b.length - a.length)
                        .map((keywordKey) => ((0,jsx_runtime.jsx)(Grid/* default */.ZP, { item: true, children: (0,jsx_runtime.jsx)(StaticChip/* StaticChip */.m, { label: t(`literal:${keywordKey}`), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: "small", onClick: () => props.keywordSelection.onToggleSelection(keywordKey) }) }, `media-keyword-${keywordKey}`))) }) }), (0,jsx_runtime.jsx)(CardActions/* default */.Z, { sx: { pt: 0, px: "16px" }, children: (0,jsx_runtime.jsxs)(Box/* default */.Z, { sx: { width: 1 }, children: [(0,jsx_runtime.jsx)(Typography/* default */.Z, { sx: { fontSize: 13, float: "left", lineHeight: "30px" }, color: "text.secondary", component: "div", children: formattedMediaDate }), props.item.url && ((0,jsx_runtime.jsx)(Link/* default */.Z, { underline: "none", rel: "noreferrer", target: "_blank", href: props.item.url, children: (0,jsx_runtime.jsx)(Button/* default */.Z, { sx: { float: "right" }, size: "small", endIcon: (0,jsx_runtime.jsx)(Launch/* default */.Z, {}), color: "success", children: accessMediaButtonLabel }) }))] }) })] }));
}

;// CONCATENATED MODULE: ./src/components/card/index.tsx




/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ StaticChip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);


function StaticChip(props) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { ...props, sx: { borderWidth: "1px", borderStyle: "solid", borderColor: `${props.color}.main` } });
}


/***/ }),

/***/ 2079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wt": () => (/* reexport */ MediaSection),
  "T3": () => (/* reexport */ Page),
  "mr": () => (/* reexport */ PageHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js + 1 modules
var Divider = __webpack_require__(2116);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(6628);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/card/index.tsx + 2 modules
var card = __webpack_require__(7015);
;// CONCATENATED MODULE: ./src/components/page/MediaSection.tsx







function MediaSection(props) {
    return ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: props.fadeTime, children: (0,jsx_runtime.jsxs)(Box/* default */.Z, { sx: { mt: "30px" }, children: [(0,jsx_runtime.jsx)(Divider/* default */.Z, { textAlign: "left", sx: { mb: "30px", "::before": { width: "1%" }, "::after": { width: "99%" } }, children: (0,jsx_runtime.jsx)(Typography/* default */.Z, { fontWeight: "light", variant: "overline", component: "div", sx: { fontSize: "14px", color: "text.secondary" }, children: props.title }) }), (0,jsx_runtime.jsx)(Grid/* default */.ZP, { container: true, spacing: 3, children: props.mediaItems.map((item, idx) => ((0,jsx_runtime.jsx)(Grid/* default */.ZP, { item: true, sx: { width: { xs: "100%", lg: "50%", xl: "33%" } }, children: (0,jsx_runtime.jsx)(card/* MediaCard */.P, { item: item, keywordSelection: props.keywordSelection }) }, `${props.title}-${idx}`))) })] }) }));
}

;// CONCATENATED MODULE: ./src/components/page/Page.tsx


function Page(props) {
    return ((0,jsx_runtime.jsx)(Box/* default */.Z, { "data-testid": `${props.name}-page`, sx: { p: "16px 24px", mb: "24px" }, children: props.children }));
}

;// CONCATENATED MODULE: ./src/components/page/PageHeader.tsx



function PageHeader(props) {
    return ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: props.fadeTime, children: (0,jsx_runtime.jsx)(Box/* default */.Z, { children: props.children }) }));
}

;// CONCATENATED MODULE: ./src/components/page/index.tsx





/***/ }),

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ usePageActive)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/hooks/useTimeout.tsx

function useTimeout(callback, delay) {
    const callbackRef = (0,react.useRef)(callback);
    const timeoutRef = (0,react.useRef)();
    (0,react.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    const set = (0,react.useCallback)(() => {
        timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
    }, [delay]);
    const clear = (0,react.useCallback)(() => {
        timeoutRef.current && window.clearTimeout(timeoutRef.current);
    }, []);
    (0,react.useEffect)(() => {
        set();
        return clear;
    }, [delay, set, clear]);
    const reset = (0,react.useCallback)(() => {
        clear();
        set();
    }, [clear, set]);
    return { reset, clear };
}

;// CONCATENATED MODULE: ./src/hooks/usePageActive.tsx


function usePageActive(delay) {
    const [active, setActive] = (0,react.useState)(false);
    useTimeout(() => setActive(true), delay);
    return active;
}


/***/ }),

/***/ 2350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(9161);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(6628);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(5245);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(5408);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(9707);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__(9766);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(9602);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(1657);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Stack/Stack.js


const _excluded = ["component", "direction", "spacing", "divider", "children"];






/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */



function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react.cloneElement(separator, {
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
  let styles = (0,esm_extends/* default */.Z)({
    display: 'flex'
  }, (0,breakpoints/* handleBreakpoints */.k9)({
    theme
  }, (0,breakpoints/* resolveBreakpointValues */.P$)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.hB)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.P$)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.P$)({
      values: ownerState.spacing,
      base
    });

    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */.NA)(transformer, propValue)
        }
      };
    };

    styles = (0,deepmerge/* default */.Z)(styles, (0,breakpoints/* handleBreakpoints */.k9)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  return styles;
};
const StackRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/react.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0,extendSxProp/* default */.Z)(themeProps);

  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Stack_Stack = (Stack);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/card/index.tsx + 2 modules
var card = __webpack_require__(7015);
// EXTERNAL MODULE: ./src/components/page/index.tsx + 3 modules
var page = __webpack_require__(2079);
// EXTERNAL MODULE: ./src/components/social/index.tsx + 6 modules
var social = __webpack_require__(2004);
// EXTERNAL MODULE: ./src/context/AppContext.tsx
var AppContext = __webpack_require__(1431);
// EXTERNAL MODULE: ./src/fonts/index.tsx + 5 modules
var fonts = __webpack_require__(390);
// EXTERNAL MODULE: ./src/hooks/usePageActive.tsx + 1 modules
var usePageActive = __webpack_require__(7514);
// EXTERNAL MODULE: ./src/routes/index.tsx
var routes = __webpack_require__(4399);
;// CONCATENATED MODULE: ./src/pages/AboutPage.tsx













const PAGE_FADE_TIME = {
    content: 1000,
};
function AboutPage() {
    const app = (0,AppContext/* useApp */.qD)();
    const active = (0,usePageActive/* usePageActive */.t)(0);
    return ((0,jsx_runtime.jsx)(page/* Page */.T3, { name: "about", children: active && ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: PAGE_FADE_TIME.content, children: (0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsxs)(card/* HoverableCard */.s, { sx: { p: "28px", width: { xs: "100%", xl: "1170px" }, margin: "0 auto" }, children: [(0,jsx_runtime.jsxs)(Stack_Stack, { spacing: 4, children: [(0,jsx_runtime.jsx)(Typography/* default */.Z, { component: "div", sx: {
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontFamily: fonts/* Fonts.PHILOSOPHER */.F.PHILOSOPHER,
                                        fontSize: { xs: "16px", sm: "20px" },
                                    }, children: app.schema.about.welcome }), app.schema.about.paragraphs.map((paragraph, idx) => ((0,jsx_runtime.jsx)(Paragraph, { children: paragraph }, `about-paragraph-${idx}`)))] }), (0,jsx_runtime.jsx)(CardActions/* default */.Z, { disableSpacing: true, sx: { display: { xs: "auto", md: "none" } }, children: (0,jsx_runtime.jsx)(Box/* default */.Z, { sx: { width: 1 }, children: (0,jsx_runtime.jsx)(social/* SocialBar */.Y, { sx: { width: "150px", mx: "auto", float: "center" }, urls: routes/* routes.urls.social */._.urls.social }) }) })] }) }) })) }));
}
function Paragraph(props) {
    return ((0,jsx_runtime.jsx)(Typography/* default */.Z, { component: "div", children: (0,jsx_runtime.jsx)(Box/* default */.Z, { sx: {
                textAlign: "justify",
                lineHeight: 1.7,
                fontFamily: fonts/* Fonts.NUNITO */.F.NUNITO,
                fontSize: { xs: "13px", sm: "16px" },
            }, children: props.children }) }));
}


/***/ })

}]);