"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([[76],{

/***/ 5179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ KeywordChips)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(6628);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(8396);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 2 modules
var useTranslation = __webpack_require__(4056);
// EXTERNAL MODULE: ./src/components/chip/StaticChip.tsx
var StaticChip = __webpack_require__(549);
;// CONCATENATED MODULE: ./src/components/chip/KeywordChips.tsx







const DEFAULT_FADE_TIME = 500;
function KeywordChips(props) {
    const { t } = (0,useTranslation/* useTranslation */.$)();
    const isSmall = (0,useMediaQuery/* default */.Z)((theme) => theme.breakpoints.down("sm"));
    const resolveLiteral = (0,react.useCallback)((key) => t(`literal:${key}`), [t]);
    return ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: props.fadeTime ?? DEFAULT_FADE_TIME, children: (0,jsx_runtime.jsxs)(Grid/* default */.ZP, { container: true, rowSpacing: isSmall ? 1 : 2, columnSpacing: 1, children: [[...props.keywordSelection.selectionMap.keys()]
                    .sort((a, b) => resolveLiteral(a).localeCompare(resolveLiteral(b)))
                    .map((keywordKey) => ((0,jsx_runtime.jsx)(Grid/* default */.ZP, { item: true, children: (0,jsx_runtime.jsx)(StaticChip/* StaticChip */.m, { label: resolveLiteral(keywordKey), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: isSmall ? "small" : "medium", onClick: () => props.keywordSelection.onToggleSelection(keywordKey) }) }, `keyword-chip-${keywordKey}`))), (0,jsx_runtime.jsx)(Fade/* default */.Z, { in: props.keywordSelection.isAnySelected, timeout: 300, children: (0,jsx_runtime.jsx)(Grid/* default */.ZP, { item: true, sx: { display: props.keywordSelection.isAnySelected ? "block" : "none" }, children: (0,jsx_runtime.jsx)(StaticChip/* StaticChip */.m, { label: t("literal:showAll"), color: "secondary", variant: "filled", size: isSmall ? "small" : "medium", onClick: props.keywordSelection.onClearSelection }) }) })] }) }));
}

;// CONCATENATED MODULE: ./src/components/chip/index.tsx



/***/ }),

/***/ 3355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useFilteredMedias)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

function useFilteredMedias(items, keywordSelection) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const filteredItems = keywordSelection.isAnySelected
            ? items.filter((item) => item.keywordKeys.some((keyword) => keywordSelection.selectionMap.get(keyword)))
            : items;
        return filteredItems.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime());
    }, [keywordSelection.isAnySelected, keywordSelection.selectionMap, items]);
}


/***/ }),

/***/ 2391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ useKeywordSelection)
});

// UNUSED EXPORTS: buildInitialSelectionMap

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/hooks/useQueryParam.tsx

var QueryParams;
(function (QueryParams) {
    QueryParams["KEYWORDS"] = "k";
})(QueryParams || (QueryParams = {}));
function useQueryParam(name) {
    const location = (0,react_router/* useLocation */.TH)();
    const urlSearchParams = new URLSearchParams(location.search);
    const value = urlSearchParams.get(name);
    if (!value) {
        return;
    }
    return decodeURIComponent(value);
}
function useQueryParamKeywords() {
    return useQueryParam(QueryParams.KEYWORDS)?.split(",") ?? [];
}
function prepareKeywordsQueryParam(keywords) {
    return `${QueryParams.KEYWORDS}=${encodeURIComponent(keywords.join(","))}`;
}

;// CONCATENATED MODULE: ./src/hooks/useKeywordSelection.tsx



function buildInitialSelectionMap(...arrayOfArrays) {
    const initialSelectionMap = new Map();
    arrayOfArrays.forEach((items) => {
        items
            .reduce((keywordArray, m) => keywordArray.concat(m.keywordKeys), [])
            .forEach((keyword) => {
            if (!initialSelectionMap.has(keyword)) {
                initialSelectionMap.set(keyword, false);
            }
        });
    });
    return initialSelectionMap;
}
function useKeywordSelection(...arrayOfArrays) {
    const navigate = (0,react_router/* useNavigate */.s0)();
    const queryParamKeywords = useQueryParamKeywords();
    const [selectionMap, setSelectionMap] = (0,react.useState)(() => {
        const map = buildInitialSelectionMap(...arrayOfArrays);
        queryParamKeywords.forEach((k) => {
            if (map.has(k)) {
                map.set(k, true);
            }
        });
        return map;
    });
    const [selected, setSelected] = (0,react.useState)(() => [...selectionMap.entries()].filter(([, isSelected]) => isSelected).map(([keyword]) => keyword));
    const isAnySelected = (0,react.useMemo)(() => selected.length > 0, [selected]);
    const onToggleSelection = (keyword) => {
        if (!selectionMap.has(keyword)) {
            return;
        }
        const isSelected = !!selectionMap.get(keyword);
        setSelectionMap((prevState) => new Map([...prevState.entries(), [keyword, !isSelected]]));
        setSelected((prevState) => (isSelected ? prevState.filter((k) => k !== keyword) : [...prevState, keyword]));
    };
    const onClearSelection = () => {
        setSelectionMap((prevState) => {
            const newMap = new Map(prevState);
            selected.forEach((keyword) => newMap.set(keyword, false));
            return newMap;
        });
        setSelected([]);
    };
    (0,react.useEffect)(() => {
        navigate({
            search: isAnySelected ? `?${prepareKeywordsQueryParam(selected)}` : "",
        }, { replace: true });
    }, [navigate, selected, isAnySelected]);
    return {
        selectionMap,
        onToggleSelection,
        onClearSelection,
        isAnySelected,
    };
}


/***/ }),

/***/ 7076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2658);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4056);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8616);
/* harmony import */ var _components_chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5179);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2079);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1431);
/* harmony import */ var _hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3355);
/* harmony import */ var _hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2391);
/* harmony import */ var _hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7514);









function TextPage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .useApp */ .qD)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__/* .usePageActive */ .t)(0);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .$)();
    const keywordSelection = (0,_hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_5__/* .useKeywordSelection */ .C)(app.schema.text.mastersTheses, app.schema.text.blogPosts);
    const filteredMasterThesis = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__/* .useFilteredMedias */ .T)(app.schema.text.mastersTheses, keywordSelection);
    const filteredBlogPosts = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__/* .useFilteredMedias */ .T)(app.schema.text.blogPosts, keywordSelection);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page__WEBPACK_IMPORTED_MODULE_2__/* .Page */ .T3, { name: "text", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__/* .PageHeader */ .mr, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, { component: "div", sx: { mb: "30px", fontSize: { sm: "16px", lg: "18px" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_9__/* .Trans */ .c, { i18nKey: "text:header", children: ["Here you can find some of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "texts" })] }) }) }), active && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chip__WEBPACK_IMPORTED_MODULE_1__/* .KeywordChips */ .x, { keywordSelection: keywordSelection }), filteredMasterThesis.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__/* .MediaSection */ .Wt, { title: t("literal:mastersThesis"), keywordSelection: keywordSelection, mediaItems: filteredMasterThesis })), filteredBlogPosts.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__/* .MediaSection */ .Wt, { title: t("literal:blogPosts"), keywordSelection: keywordSelection, mediaItems: filteredBlogPosts }))] }))] }));
}


/***/ })

}]);