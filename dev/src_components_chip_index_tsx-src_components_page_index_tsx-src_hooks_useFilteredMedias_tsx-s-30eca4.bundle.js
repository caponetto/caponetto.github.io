"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([["src_components_chip_index_tsx-src_components_page_index_tsx-src_hooks_useFilteredMedias_tsx-s-30eca4"],{

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
                        .map((keywordKey) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], { item: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_14__["default"], { label: t(`literal:${keywordKey}`), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: "small", onClick: () => props.keywordSelection.onItemSelected(keywordKey) }) }, `media-keyword-${keywordKey}`))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { pt: 0, px: "16px" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], { sx: { width: 1 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], { sx: { fontSize: 13, float: "left", lineHeight: "30px" }, color: "text.secondary", component: "div", children: formattedMediaDate }), props.item.url && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_17__["default"], { underline: "none", rel: "noreferrer", target: "_blank", href: props.item.url, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { float: "right" }, size: "small", endIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_19__["default"], {}), color: "success", children: accessMediaButtonLabel }) }))] }) })] }));
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

/***/ "./src/components/chip/KeywordChips.tsx":
/*!**********************************************!*\
  !*** ./src/components/chip/KeywordChips.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeywordChips": () => (/* binding */ KeywordChips)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");







function KeywordChips(props) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const smallHeight = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["default"])("(max-width:600px)");
    const resolveLiteral = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((key) => t(`literal:${key}`), [t]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], { in: true, timeout: props.fadeTime, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], { container: true, rowSpacing: smallHeight ? 1 : 2, columnSpacing: 1, children: [[...props.keywordSelection.selectionMap.keys()]
                    .sort((a, b) => resolveLiteral(a).localeCompare(resolveLiteral(b)))
                    .map((keywordKey) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], { item: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__["default"], { label: resolveLiteral(keywordKey), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: smallHeight ? "small" : "medium", onClick: () => props.keywordSelection.onItemSelected(keywordKey) }) }, `keyword-chip-${keywordKey}`))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], { in: props.keywordSelection.isAnySelected, timeout: 300, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], { item: true, sx: { display: props.keywordSelection.isAnySelected ? "block" : "none" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__["default"], { label: t("literal:showAll"), color: "secondary", variant: "filled", size: smallHeight ? "small" : "medium", onClick: props.keywordSelection.onClearSelection }) }) })] }) }));
}


/***/ }),

/***/ "./src/components/chip/index.tsx":
/*!***************************************!*\
  !*** ./src/components/chip/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeywordChips": () => (/* reexport safe */ _KeywordChips__WEBPACK_IMPORTED_MODULE_0__.KeywordChips)
/* harmony export */ });
/* harmony import */ var _KeywordChips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeywordChips */ "./src/components/chip/KeywordChips.tsx");



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

/***/ "./src/hooks/useFilteredMedias.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/useFilteredMedias.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilteredMedias": () => (/* binding */ useFilteredMedias)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFilteredMedias(medias, keywordSelection) {
    const [filteredMedias, setFilteredMedias] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setFilteredMedias(medias
            .filter((media) => !keywordSelection.isAnySelected ||
            media.keywordKeys.some((keyword) => keywordSelection.selectionMap.get(keyword)))
            .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime()));
    }, [keywordSelection.isAnySelected, keywordSelection.selectionMap, medias]);
    return filteredMedias;
}


/***/ }),

/***/ "./src/hooks/useKeywordSelection.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useKeywordSelection.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildInitialSelectionMap": () => (/* binding */ buildInitialSelectionMap),
/* harmony export */   "useKeywordSelection": () => (/* binding */ useKeywordSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useQueryParams */ "./src/hooks/useQueryParams.tsx");



function buildInitialSelectionMap(...arrayOfArrays) {
    const initialSelectionMap = new Map();
    arrayOfArrays.forEach((medias) => {
        medias
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
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const queryParamKeywords = (0,_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParamKeywords)();
    const [selectionMap, setSelectionMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
        const map = buildInitialSelectionMap(...arrayOfArrays);
        queryParamKeywords.forEach((k) => {
            if (map.has(k)) {
                map.set(k, true);
            }
        });
        return map;
    });
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => [...selectionMap.entries()].filter(([, isSelected]) => isSelected).map(([keyword]) => keyword));
    const isAnySelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => selected.length > 0, [selected]);
    const onItemSelected = (keyword) => {
        if (!selectionMap.has(keyword)) {
            return;
        }
        const isSelected = !!selectionMap.get(keyword);
        setSelectionMap((prevState) => new Map([...prevState.entries(), [keyword, !isSelected]]));
        setSelected(isSelected ? selected.filter((k) => k !== keyword) : [...selected, keyword]);
    };
    const onClearSelection = () => {
        setSelectionMap((prevState) => {
            const newMap = new Map(prevState);
            selected.forEach((keyword) => newMap.set(keyword, false));
            return newMap;
        });
        setSelected([]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        navigate({
            search: isAnySelected ? `?${(0,_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.prepareKeywordsQueryParams)(selected)}` : "",
        }, { replace: true });
    }, [navigate, selected, isAnySelected]);
    return {
        selectionMap,
        onItemSelected,
        onClearSelection,
        isAnySelected,
    };
}


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

/***/ "./src/hooks/useQueryParams.tsx":
/*!**************************************!*\
  !*** ./src/hooks/useQueryParams.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryParams": () => (/* binding */ QueryParams),
/* harmony export */   "prepareKeywordsQueryParams": () => (/* binding */ prepareKeywordsQueryParams),
/* harmony export */   "useQueryParamKeywords": () => (/* binding */ useQueryParamKeywords),
/* harmony export */   "useQueryParams": () => (/* binding */ useQueryParams)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");

var QueryParams;
(function (QueryParams) {
    QueryParams["KEYWORDS"] = "k";
})(QueryParams || (QueryParams = {}));
function useQueryParams(name) {
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
    const urlSearchParams = new URLSearchParams(location.search);
    if (!urlSearchParams.has(name)) {
        return;
    }
    const value = urlSearchParams.get(name);
    if (!value) {
        return;
    }
    return decodeURIComponent(value);
}
function useQueryParamKeywords() {
    return useQueryParams(QueryParams.KEYWORDS)?.split(",") ?? [];
}
function prepareKeywordsQueryParams(keywords) {
    return `${QueryParams.KEYWORDS}=${encodeURIComponent(keywords.join(","))}`;
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY2hpcF9pbmRleF90c3gtc3JjX2NvbXBvbmVudHNfcGFnZV9pbmRleF90c3gtc3JjX2hvb2tzX3VzZUZpbHRlcmVkTWVkaWFzX3RzeC1zLTMwZWNhNC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDVjtBQUNMO0FBQzFCO0FBQ1Asd0NBQXdDLCtDQUFRO0FBQ2hELFlBQVksc0RBQUksQ0FBQywwREFBSSxJQUFJLHdKQUF3SjtBQUNqTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ1g7QUFDaEI7QUFDTTtBQUNVO0FBQ0E7QUFDRjtBQUNaO0FBQ007QUFDTjtBQUNBO0FBQ007QUFDTTtBQUNoQjtBQUNGO0FBQ2U7QUFDRztBQUNkO0FBQ0U7QUFDVTtBQUN6QztBQUNQLGdCQUFnQiwyREFBTTtBQUN0QixZQUFZLElBQUksRUFBRSw2REFBYztBQUNoQyxtQ0FBbUMsOENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLDhDQUFPO0FBQ3RDO0FBQ0EsbUJBQW1CLG9EQUFNO0FBQ3pCO0FBQ0EsZUFBZSxvREFBTTtBQUNyQixLQUFLO0FBQ0wsc0JBQXNCLDhDQUFPO0FBQzdCO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLGdFQUEyQixHQUFHLCtEQUEwQjtBQUN2RztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLCtEQUEwQixHQUFHLDhEQUF5QjtBQUNyRztBQUNBLEtBQUs7QUFDTCxZQUFZLHVEQUFLLENBQUMseURBQWEsSUFBSSxXQUFXLHNEQUFJLENBQUMsZ0VBQVUsSUFBSSxPQUFPLHNEQUFJLENBQUMsZ0VBQVUsSUFBSTtBQUMzRixvQ0FBb0MsZ0RBQVk7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LGtEQUFXO0FBQzdCO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixrREFBVztBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWE7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvSG92ZXJhYmxlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9NZWRpYUNhcmQudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NoaXAvS2V5d29yZENoaXBzLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jaGlwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL01lZGlhU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VGaWx0ZXJlZE1lZGlhcy50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2hvb2tzL3VzZUtleXdvcmRTZWxlY3Rpb24udHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VQYWdlQWN0aXZlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlUXVlcnlQYXJhbXMudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VUaW1lb3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBIb3ZlcmFibGVDYXJkKHByb3BzKSB7XG4gICAgY29uc3QgW2lzTW91c2VPdmVyLCBzZXRNb3VzZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoX2pzeChDYXJkLCB7IHN4OiBwcm9wcy5zeCwgZWxldmF0aW9uOiBpc01vdXNlT3ZlciA/IDUgOiAyLCBvbk1vdXNlT3ZlcjogKCkgPT4gc2V0TW91c2VPdmVyKHRydWUpLCBvbk1vdXNlTGVhdmU6ICgpID0+IHNldE1vdXNlT3ZlcihmYWxzZSksIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IExhdW5jaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGF1bmNoXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkSGVhZGVyXCI7XG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGlwXCI7XG5pbXBvcnQgeyBncmV5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaW5rXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sdGlwXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IHVzZUFwcCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IEZvbnRzIH0gZnJvbSBcIi4uLy4uL2ZvbnRzXCI7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBIb3ZlcmFibGVDYXJkIH0gZnJvbSBcIi4vSG92ZXJhYmxlQ2FyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhQ2FyZChwcm9wcykge1xuICAgIGNvbnN0IGFwcCA9IHVzZUFwcCgpO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBhY2Nlc3NNZWRpYUJ1dHRvbkxhYmVsID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChbXCJwb3N0XCIsIFwidGhlc2lzXCJdLmluY2x1ZGVzKHByb3BzLml0ZW0udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDpyZWFkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnR5cGUgPT09IFwibGl2ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6d2F0Y2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0udHlwZSA9PT0gXCJjb25mZXJlbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDpzbGlkZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnZpZXdcIik7XG4gICAgfSwgW3Byb3BzLml0ZW0udHlwZSwgdF0pO1xuICAgIGNvbnN0IGZvcm1hdHRlZE1lZGlhRGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoW1wiY29kZVwiLCBcInRoZXNpc1wiXS5pbmNsdWRlcyhwcm9wcy5pdGVtLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHByb3BzLml0ZW0ucmVsZWFzZURhdGUsIFwieXl5eVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0KHByb3BzLml0ZW0ucmVsZWFzZURhdGUsIFwiTU1NIGRkLCB5eXl5XCIpO1xuICAgIH0sIFtwcm9wcy5pdGVtLnJlbGVhc2VEYXRlLCBwcm9wcy5pdGVtLnR5cGVdKTtcbiAgICBjb25zdCBpY29uUm91dGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiS0lFIENvbW11bml0eVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVzLmltYWdlcy5raWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVG93YXJkcyBEYXRhIFNjaWVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5pbWFnZXMudGRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlVOSUNBTVBcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IHJvdXRlcy5pbWFnZXMudW5pY2FtcC5saWdodCA6IHJvdXRlcy5pbWFnZXMudW5pY2FtcC5kYXJrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlRoZSBEZXZlbG9wZXIncyBDb25mZXJlbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXMuaW1hZ2VzLnRkYztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJHaXRIdWJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IHJvdXRlcy5pbWFnZXMuZ2l0aHViLmxpZ2h0IDogcm91dGVzLmltYWdlcy5naXRodWIuZGFyaztcbiAgICAgICAgfVxuICAgIH0sIFthcHAuY29sb3JNb2RlLCBwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0XSk7XG4gICAgcmV0dXJuIChfanN4cyhIb3ZlcmFibGVDYXJkLCB7IGNoaWxkcmVuOiBbX2pzeChDYXJkSGVhZGVyLCB7IHRpdGxlOiBfanN4KFR5cG9ncmFwaHksIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZvbnRzLk9YWUdFTixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjE0cHhcIiwgc206IFwiMTZweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogXCJhdXRvXCIsIGxnOiBcIjUwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LCBjb2xvcjogZ3JleVthcHAuY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA3MDAgOiA1MDBdLCBndXR0ZXJCb3R0b206IHRydWUsIGNoaWxkcmVuOiBwcm9wcy5pdGVtLnRpdGxlIH0pLCBhY3Rpb246IGljb25Sb3V0ZSAmJiAoX2pzeChUb29sdGlwLCB7IHRpdGxlOiBwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0LCBhcnJvdzogdHJ1ZSwgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzdHlsZTogeyBtYXJnaW46IFwiNHB4IDhweCAwcHggMTZweFwiLCB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfSwgc3JjOiBpY29uUm91dGUsIGFsdDogXCJcIiwgbG9hZGluZzogXCJsYXp5XCIgfSkgfSkpIH0pLCBfanN4KENhcmRDb250ZW50LCB7IHN4OiB7IHB0OiAwIH0sIGNoaWxkcmVuOiBfanN4KEdyaWQsIHsgc3g6IHsgaGVpZ2h0OiB7IHhzOiBcImF1dG9cIiwgbGc6IFwiNTBweFwiIH0gfSwgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAxLCBjaGlsZHJlbjogWy4uLnByb3BzLml0ZW0ua2V5d29yZEtleXNdXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGtleXdvcmRLZXkpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgY2hpbGRyZW46IF9qc3goQ2hpcCwgeyBsYWJlbDogdChgbGl0ZXJhbDoke2tleXdvcmRLZXl9YCksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgdmFyaWFudDogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmRLZXkpID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZWRcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiAoKSA9PiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uLm9uSXRlbVNlbGVjdGVkKGtleXdvcmRLZXkpIH0pIH0sIGBtZWRpYS1rZXl3b3JkLSR7a2V5d29yZEtleX1gKSkpIH0pIH0pLCBfanN4KENhcmRBY3Rpb25zLCB7IHN4OiB7IHB0OiAwLCBweDogXCIxNnB4XCIgfSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyB3aWR0aDogMSB9LCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBzeDogeyBmb250U2l6ZTogMTMsIGZsb2F0OiBcImxlZnRcIiwgbGluZUhlaWdodDogXCIzMHB4XCIgfSwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiwgY29tcG9uZW50OiBcImRpdlwiLCBjaGlsZHJlbjogZm9ybWF0dGVkTWVkaWFEYXRlIH0pLCBwcm9wcy5pdGVtLnVybCAmJiAoX2pzeChMaW5rLCB7IHVuZGVybGluZTogXCJub25lXCIsIHJlbDogXCJub3JlZmVycmVyXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogcHJvcHMuaXRlbS51cmwsIGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgeyBzeDogeyBmbG9hdDogXCJyaWdodFwiIH0sIHNpemU6IFwic21hbGxcIiwgZW5kSWNvbjogX2pzeChMYXVuY2hJY29uLCB7fSksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgY2hpbGRyZW46IGFjY2Vzc01lZGlhQnV0dG9uTGFiZWwgfSkgfSkpXSB9KSB9KV0gfSkpO1xufVxuIiwiZXhwb3J0IHsgSG92ZXJhYmxlQ2FyZCB9IGZyb20gXCIuL0hvdmVyYWJsZUNhcmRcIjtcbmV4cG9ydCB7IE1lZGlhQ2FyZCB9IGZyb20gXCIuL01lZGlhQ2FyZFwiO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL0NoaXBcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0ZhZGVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnlcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5leHBvcnQgZnVuY3Rpb24gS2V5d29yZENoaXBzKHByb3BzKSB7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHNtYWxsSGVpZ2h0ID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6NjAwcHgpXCIpO1xuICAgIGNvbnN0IHJlc29sdmVMaXRlcmFsID0gdXNlQ2FsbGJhY2soKGtleSkgPT4gdChgbGl0ZXJhbDoke2tleX1gKSwgW3RdKTtcbiAgICByZXR1cm4gKF9qc3goRmFkZSwgeyBpbjogdHJ1ZSwgdGltZW91dDogcHJvcHMuZmFkZVRpbWUsIGNoaWxkcmVuOiBfanN4cyhHcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgcm93U3BhY2luZzogc21hbGxIZWlnaHQgPyAxIDogMiwgY29sdW1uU3BhY2luZzogMSwgY2hpbGRyZW46IFtbLi4ucHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAua2V5cygpXVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gcmVzb2x2ZUxpdGVyYWwoYSkubG9jYWxlQ29tcGFyZShyZXNvbHZlTGl0ZXJhbChiKSkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGtleXdvcmRLZXkpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgY2hpbGRyZW46IF9qc3goQ2hpcCwgeyBsYWJlbDogcmVzb2x2ZUxpdGVyYWwoa2V5d29yZEtleSksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgdmFyaWFudDogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmRLZXkpID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZWRcIiwgc2l6ZTogc21hbGxIZWlnaHQgPyBcInNtYWxsXCIgOiBcIm1lZGl1bVwiLCBvbkNsaWNrOiAoKSA9PiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uLm9uSXRlbVNlbGVjdGVkKGtleXdvcmRLZXkpIH0pIH0sIGBrZXl3b3JkLWNoaXAtJHtrZXl3b3JkS2V5fWApKSksIF9qc3goRmFkZSwgeyBpbjogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5pc0FueVNlbGVjdGVkLCB0aW1lb3V0OiAzMDAsIGNoaWxkcmVuOiBfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgc3g6IHsgZGlzcGxheTogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5pc0FueVNlbGVjdGVkID8gXCJibG9ja1wiIDogXCJub25lXCIgfSwgY2hpbGRyZW46IF9qc3goQ2hpcCwgeyBsYWJlbDogdChcImxpdGVyYWw6c2hvd0FsbFwiKSwgY29sb3I6IFwic2Vjb25kYXJ5XCIsIHZhcmlhbnQ6IFwiZmlsbGVkXCIsIHNpemU6IHNtYWxsSGVpZ2h0ID8gXCJzbWFsbFwiIDogXCJtZWRpdW1cIiwgb25DbGljazogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5vbkNsZWFyU2VsZWN0aW9uIH0pIH0pIH0pXSB9KSB9KSk7XG59XG4iLCJleHBvcnQgeyBLZXl3b3JkQ2hpcHMgfSBmcm9tIFwiLi9LZXl3b3JkQ2hpcHNcIjtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRGl2aWRlclwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgTWVkaWFDYXJkIH0gZnJvbSBcIi4uL2NhcmRcIjtcbmV4cG9ydCBmdW5jdGlvbiBNZWRpYVNlY3Rpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goRmFkZSwgeyBpbjogdHJ1ZSwgdGltZW91dDogcHJvcHMuZmFkZVRpbWUsIGNoaWxkcmVuOiBfanN4cyhCb3gsIHsgc3g6IHsgbXQ6IFwiMzBweFwiIH0sIGNoaWxkcmVuOiBbX2pzeChEaXZpZGVyLCB7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHN4OiB7IG1iOiBcIjMwcHhcIiwgXCI6OmJlZm9yZVwiOiB7IHdpZHRoOiBcIjElXCIgfSwgXCI6OmFmdGVyXCI6IHsgd2lkdGg6IFwiOTklXCIgfSB9LCBjaGlsZHJlbjogX2pzeChUeXBvZ3JhcGh5LCB7IGZvbnRXZWlnaHQ6IFwibGlnaHRcIiwgdmFyaWFudDogXCJvdmVybGluZVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGZvbnRTaXplOiBcIjE0cHhcIiwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9LCBjaGlsZHJlbjogcHJvcHMudGl0bGUgfSkgfSksIF9qc3goR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDMsIGNoaWxkcmVuOiBwcm9wcy5tZWRpYUxpc3QubWFwKChpdGVtLCBpZHgpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgc3g6IHsgd2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBsZzogXCI1MCVcIiwgeGw6IFwiMzMlXCIgfSB9LCBjaGlsZHJlbjogX2pzeChNZWRpYUNhcmQsIHsgaXRlbTogaXRlbSwga2V5d29yZFNlbGVjdGlvbjogcHJvcHMua2V5d29yZFNlbGVjdGlvbiB9KSB9LCBgJHtwcm9wcy50aXRsZX0tJHtpZHh9YCkpKSB9KV0gfSkgfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5leHBvcnQgZnVuY3Rpb24gUGFnZShwcm9wcykge1xuICAgIHJldHVybiBfanN4KEJveCwgeyBzeDogeyBwOiBcIjE2cHggMjRweFwiLCBtYjogXCIyNHB4XCIgfSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9GYWRlXCI7XG5leHBvcnQgZnVuY3Rpb24gUGFnZUhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiBwcm9wcy5mYWRlVGltZSwgY2hpbGRyZW46IF9qc3goQm94LCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSB9KSk7XG59XG4iLCJleHBvcnQgeyBNZWRpYVNlY3Rpb24gfSBmcm9tIFwiLi9NZWRpYVNlY3Rpb25cIjtcbmV4cG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5leHBvcnQgeyBQYWdlSGVhZGVyIH0gZnJvbSBcIi4vUGFnZUhlYWRlclwiO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZpbHRlcmVkTWVkaWFzKG1lZGlhcywga2V5d29yZFNlbGVjdGlvbikge1xuICAgIGNvbnN0IFtmaWx0ZXJlZE1lZGlhcywgc2V0RmlsdGVyZWRNZWRpYXNdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZpbHRlcmVkTWVkaWFzKG1lZGlhc1xuICAgICAgICAgICAgLmZpbHRlcigobWVkaWEpID0+ICFrZXl3b3JkU2VsZWN0aW9uLmlzQW55U2VsZWN0ZWQgfHxcbiAgICAgICAgICAgIG1lZGlhLmtleXdvcmRLZXlzLnNvbWUoKGtleXdvcmQpID0+IGtleXdvcmRTZWxlY3Rpb24uc2VsZWN0aW9uTWFwLmdldChrZXl3b3JkKSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5yZWxlYXNlRGF0ZS5nZXRUaW1lKCkgLSBhLnJlbGVhc2VEYXRlLmdldFRpbWUoKSkpO1xuICAgIH0sIFtrZXl3b3JkU2VsZWN0aW9uLmlzQW55U2VsZWN0ZWQsIGtleXdvcmRTZWxlY3Rpb24uc2VsZWN0aW9uTWFwLCBtZWRpYXNdKTtcbiAgICByZXR1cm4gZmlsdGVyZWRNZWRpYXM7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IHByZXBhcmVLZXl3b3Jkc1F1ZXJ5UGFyYW1zLCB1c2VRdWVyeVBhcmFtS2V5d29yZHMgfSBmcm9tIFwiLi91c2VRdWVyeVBhcmFtc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5pdGlhbFNlbGVjdGlvbk1hcCguLi5hcnJheU9mQXJyYXlzKSB7XG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGlvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICBhcnJheU9mQXJyYXlzLmZvckVhY2goKG1lZGlhcykgPT4ge1xuICAgICAgICBtZWRpYXNcbiAgICAgICAgICAgIC5yZWR1Y2UoKGtleXdvcmRBcnJheSwgbSkgPT4ga2V5d29yZEFycmF5LmNvbmNhdChtLmtleXdvcmRLZXlzKSwgW10pXG4gICAgICAgICAgICAuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbml0aWFsU2VsZWN0aW9uTWFwLmhhcyhrZXl3b3JkKSkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxTZWxlY3Rpb25NYXAuc2V0KGtleXdvcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGluaXRpYWxTZWxlY3Rpb25NYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlS2V5d29yZFNlbGVjdGlvbiguLi5hcnJheU9mQXJyYXlzKSB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1LZXl3b3JkcyA9IHVzZVF1ZXJ5UGFyYW1LZXl3b3JkcygpO1xuICAgIGNvbnN0IFtzZWxlY3Rpb25NYXAsIHNldFNlbGVjdGlvbk1hcF0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IGJ1aWxkSW5pdGlhbFNlbGVjdGlvbk1hcCguLi5hcnJheU9mQXJyYXlzKTtcbiAgICAgICAgcXVlcnlQYXJhbUtleXdvcmRzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIGlmIChtYXAuaGFzKGspKSB7XG4gICAgICAgICAgICAgICAgbWFwLnNldChrLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfSk7XG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgoKSA9PiBbLi4uc2VsZWN0aW9uTWFwLmVudHJpZXMoKV0uZmlsdGVyKChbLCBpc1NlbGVjdGVkXSkgPT4gaXNTZWxlY3RlZCkubWFwKChba2V5d29yZF0pID0+IGtleXdvcmQpKTtcbiAgICBjb25zdCBpc0FueVNlbGVjdGVkID0gdXNlTWVtbygoKSA9PiBzZWxlY3RlZC5sZW5ndGggPiAwLCBbc2VsZWN0ZWRdKTtcbiAgICBjb25zdCBvbkl0ZW1TZWxlY3RlZCA9IChrZXl3b3JkKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0aW9uTWFwLmhhcyhrZXl3b3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGlvbk1hcC5nZXQoa2V5d29yZCk7XG4gICAgICAgIHNldFNlbGVjdGlvbk1hcCgocHJldlN0YXRlKSA9PiBuZXcgTWFwKFsuLi5wcmV2U3RhdGUuZW50cmllcygpLCBba2V5d29yZCwgIWlzU2VsZWN0ZWRdXSkpO1xuICAgICAgICBzZXRTZWxlY3RlZChpc1NlbGVjdGVkID8gc2VsZWN0ZWQuZmlsdGVyKChrKSA9PiBrICE9PSBrZXl3b3JkKSA6IFsuLi5zZWxlY3RlZCwga2V5d29yZF0pO1xuICAgIH07XG4gICAgY29uc3Qgb25DbGVhclNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0aW9uTWFwKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcCA9IG5ldyBNYXAocHJldlN0YXRlKTtcbiAgICAgICAgICAgIHNlbGVjdGVkLmZvckVhY2goKGtleXdvcmQpID0+IG5ld01hcC5zZXQoa2V5d29yZCwgZmFsc2UpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdNYXA7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZWxlY3RlZChbXSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZSh7XG4gICAgICAgICAgICBzZWFyY2g6IGlzQW55U2VsZWN0ZWQgPyBgPyR7cHJlcGFyZUtleXdvcmRzUXVlcnlQYXJhbXMoc2VsZWN0ZWQpfWAgOiBcIlwiLFxuICAgICAgICB9LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgfSwgW25hdmlnYXRlLCBzZWxlY3RlZCwgaXNBbnlTZWxlY3RlZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGlvbk1hcCxcbiAgICAgICAgb25JdGVtU2VsZWN0ZWQsXG4gICAgICAgIG9uQ2xlYXJTZWxlY3Rpb24sXG4gICAgICAgIGlzQW55U2VsZWN0ZWQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlVGltZW91dFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VBY3RpdmUoKSB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VUaW1lb3V0KCgpID0+IHNldEFjdGl2ZSh0cnVlKSwgMCk7XG4gICAgcmV0dXJuIGFjdGl2ZTtcbn1cbiIsImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuZXhwb3J0IHZhciBRdWVyeVBhcmFtcztcbihmdW5jdGlvbiAoUXVlcnlQYXJhbXMpIHtcbiAgICBRdWVyeVBhcmFtc1tcIktFWVdPUkRTXCJdID0gXCJrXCI7XG59KShRdWVyeVBhcmFtcyB8fCAoUXVlcnlQYXJhbXMgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJ5UGFyYW1zKG5hbWUpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gICAgY29uc3QgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgIGlmICghdXJsU2VhcmNoUGFyYW1zLmhhcyhuYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdXJsU2VhcmNoUGFyYW1zLmdldChuYW1lKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlcnlQYXJhbUtleXdvcmRzKCkge1xuICAgIHJldHVybiB1c2VRdWVyeVBhcmFtcyhRdWVyeVBhcmFtcy5LRVlXT1JEUyk/LnNwbGl0KFwiLFwiKSA/PyBbXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlS2V5d29yZHNRdWVyeVBhcmFtcyhrZXl3b3Jkcykge1xuICAgIHJldHVybiBgJHtRdWVyeVBhcmFtcy5LRVlXT1JEU309JHtlbmNvZGVVUklDb21wb25lbnQoa2V5d29yZHMuam9pbihcIixcIikpfWA7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSkge1xuICAgIGNvbnN0IGNhbGxiYWNrUmVmID0gdXNlUmVmKGNhbGxiYWNrKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrO1xuICAgIH0sIFtjYWxsYmFja10pO1xuICAgIGNvbnN0IHNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2tSZWYuY3VycmVudCgpLCBkZWxheSk7XG4gICAgfSwgW2RlbGF5XSk7XG4gICAgY29uc3QgY2xlYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCAmJiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldCgpO1xuICAgICAgICByZXR1cm4gY2xlYXI7XG4gICAgfSwgW2RlbGF5LCBzZXQsIGNsZWFyXSk7XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIHNldCgpO1xuICAgIH0sIFtjbGVhciwgc2V0XSk7XG4gICAgcmV0dXJuIHsgcmVzZXQsIGNsZWFyIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=