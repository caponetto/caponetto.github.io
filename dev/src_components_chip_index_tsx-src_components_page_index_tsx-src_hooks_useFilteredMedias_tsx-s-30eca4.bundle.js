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
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(props.item.releaseDate, "yyyy");
        }
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(props.item.releaseDate, "MMM dd, yyyy");
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
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _StaticChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaticChip */ "./src/components/chip/StaticChip.tsx");







function KeywordChips(props) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const smallHeight = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])("(max-width:600px)");
    const resolveLiteral = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((key) => t(`literal:${key}`), [t]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_5__["default"], { in: true, timeout: props.fadeTime, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { container: true, rowSpacing: smallHeight ? 1 : 2, columnSpacing: 1, children: [[...props.keywordSelection.selectionMap.keys()]
                    .sort((a, b) => resolveLiteral(a).localeCompare(resolveLiteral(b)))
                    .map((keywordKey) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { item: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StaticChip__WEBPACK_IMPORTED_MODULE_2__.StaticChip, { label: resolveLiteral(keywordKey), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: smallHeight ? "small" : "medium", onClick: () => props.keywordSelection.onItemSelected(keywordKey) }) }, `keyword-chip-${keywordKey}`))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_5__["default"], { in: props.keywordSelection.isAnySelected, timeout: 300, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], { item: true, sx: { display: props.keywordSelection.isAnySelected ? "block" : "none" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StaticChip__WEBPACK_IMPORTED_MODULE_2__.StaticChip, { label: t("literal:showAll"), color: "secondary", variant: "filled", size: smallHeight ? "small" : "medium", onClick: props.keywordSelection.onClearSelection }) }) })] }) }));
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY2hpcF9pbmRleF90c3gtc3JjX2NvbXBvbmVudHNfcGFnZV9pbmRleF90c3gtc3JjX2hvb2tzX3VzZUZpbHRlcmVkTWVkaWFzX3RzeC1zLTMwZWNhNC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDVjtBQUNMO0FBQzFCO0FBQ1Asd0NBQXdDLCtDQUFRO0FBQ2hELFlBQVksc0RBQUksQ0FBQywwREFBSSxJQUFJLHdKQUF3SjtBQUNqTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ1g7QUFDaEI7QUFDTTtBQUNVO0FBQ0E7QUFDRjtBQUNOO0FBQ047QUFDQTtBQUNNO0FBQ007QUFDaEI7QUFDRjtBQUNlO0FBQ0c7QUFDZDtBQUNFO0FBQ1U7QUFDQTtBQUN6QztBQUNQLGdCQUFnQiwyREFBTTtBQUN0QixZQUFZLElBQUksRUFBRSw2REFBYztBQUNoQyxtQ0FBbUMsOENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLDhDQUFPO0FBQ3RDO0FBQ0EsbUJBQW1CLG9EQUFNO0FBQ3pCO0FBQ0EsZUFBZSxvREFBTTtBQUNyQixLQUFLO0FBQ0wsc0JBQXNCLDhDQUFPO0FBQzdCO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLGdFQUEyQixHQUFHLCtEQUEwQjtBQUN2RztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLCtEQUEwQixHQUFHLDhEQUF5QjtBQUNyRztBQUNBLEtBQUs7QUFDTCxZQUFZLHVEQUFLLENBQUMseURBQWEsSUFBSSxXQUFXLHNEQUFJLENBQUMsZ0VBQVUsSUFBSSxPQUFPLHNEQUFJLENBQUMsaUVBQVUsSUFBSTtBQUMzRixvQ0FBb0MsZ0RBQVk7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QUM5Qix1QkFBdUIsNkNBQU07QUFDN0IsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMLGdCQUFnQixrREFBVztBQUMzQjtBQUNBLEtBQUs7QUFDTCxrQkFBa0Isa0RBQVc7QUFDN0I7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLGtEQUFXO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYTtBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9Ib3ZlcmFibGVDYXJkLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jYXJkL01lZGlhQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2hpcC9LZXl3b3JkQ2hpcHMudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NoaXAvU3RhdGljQ2hpcC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2hpcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9NZWRpYVNlY3Rpb24udHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvUGFnZS50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9QYWdlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlRmlsdGVyZWRNZWRpYXMudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VLZXl3b3JkU2VsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlUGFnZUFjdGl2ZS50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlVGltZW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gSG92ZXJhYmxlQ2FyZChwcm9wcykge1xuICAgIGNvbnN0IFtpc01vdXNlT3Zlciwgc2V0TW91c2VPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKF9qc3goQ2FyZCwgeyBzeDogcHJvcHMuc3gsIGVsZXZhdGlvbjogaXNNb3VzZU92ZXIgPyA1IDogMiwgb25Nb3VzZU92ZXI6ICgpID0+IHNldE1vdXNlT3Zlcih0cnVlKSwgb25Nb3VzZUxlYXZlOiAoKSA9PiBzZXRNb3VzZU92ZXIoZmFsc2UpLCBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBMYXVuY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xhdW5jaFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlclwiO1xuaW1wb3J0IHsgZ3JleSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbHRpcFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBGb250cyB9IGZyb20gXCIuLi8uLi9mb250c1wiO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgU3RhdGljQ2hpcCB9IGZyb20gXCIuLi9jaGlwL1N0YXRpY0NoaXBcIjtcbmltcG9ydCB7IEhvdmVyYWJsZUNhcmQgfSBmcm9tIFwiLi9Ib3ZlcmFibGVDYXJkXCI7XG5leHBvcnQgZnVuY3Rpb24gTWVkaWFDYXJkKHByb3BzKSB7XG4gICAgY29uc3QgYXBwID0gdXNlQXBwKCk7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IGFjY2Vzc01lZGlhQnV0dG9uTGFiZWwgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKFtcInBvc3RcIiwgXCJ0aGVzaXNcIl0uaW5jbHVkZXMocHJvcHMuaXRlbS50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnJlYWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0udHlwZSA9PT0gXCJsaXZlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDp3YXRjaFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS50eXBlID09PSBcImNvbmZlcmVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnNsaWRlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6dmlld1wiKTtcbiAgICB9LCBbcHJvcHMuaXRlbS50eXBlLCB0XSk7XG4gICAgY29uc3QgZm9ybWF0dGVkTWVkaWFEYXRlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChbXCJjb2RlXCIsIFwidGhlc2lzXCJdLmluY2x1ZGVzKHByb3BzLml0ZW0udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQocHJvcHMuaXRlbS5yZWxlYXNlRGF0ZSwgXCJ5eXl5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXQocHJvcHMuaXRlbS5yZWxlYXNlRGF0ZSwgXCJNTU0gZGQsIHl5eXlcIik7XG4gICAgfSwgW3Byb3BzLml0ZW0ucmVsZWFzZURhdGUsIHByb3BzLml0ZW0udHlwZV0pO1xuICAgIGNvbnN0IGljb25Sb3V0ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJLSUUgQ29tbXVuaXR5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXMuaW1hZ2VzLmtpZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJUb3dhcmRzIERhdGEgU2NpZW5jZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVzLmltYWdlcy50ZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVU5JQ0FNUFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gcm91dGVzLmltYWdlcy51bmljYW1wLmxpZ2h0IDogcm91dGVzLmltYWdlcy51bmljYW1wLmRhcms7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVGhlIERldmVsb3BlcidzIENvbmZlcmVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5pbWFnZXMudGRjO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIkdpdEh1YlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gcm91dGVzLmltYWdlcy5naXRodWIubGlnaHQgOiByb3V0ZXMuaW1hZ2VzLmdpdGh1Yi5kYXJrO1xuICAgICAgICB9XG4gICAgfSwgW2FwcC5jb2xvck1vZGUsIHByb3BzLml0ZW0ucHVibGlzaGVkQXRdKTtcbiAgICByZXR1cm4gKF9qc3hzKEhvdmVyYWJsZUNhcmQsIHsgY2hpbGRyZW46IFtfanN4KENhcmRIZWFkZXIsIHsgdGl0bGU6IF9qc3goVHlwb2dyYXBoeSwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRm9udHMuT1hZR0VOLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6IFwiMTRweFwiLCBzbTogXCIxNnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiBcImF1dG9cIiwgbGc6IFwiNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbG9yOiBncmV5W2FwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IDcwMCA6IDUwMF0sIGd1dHRlckJvdHRvbTogdHJ1ZSwgY2hpbGRyZW46IHByb3BzLml0ZW0udGl0bGUgfSksIGFjdGlvbjogaWNvblJvdXRlICYmIChfanN4KFRvb2x0aXAsIHsgdGl0bGU6IHByb3BzLml0ZW0ucHVibGlzaGVkQXQsIGFycm93OiB0cnVlLCBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHN0eWxlOiB7IG1hcmdpbjogXCI0cHggOHB4IDBweCAxNnB4XCIsIHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9LCBzcmM6IGljb25Sb3V0ZSwgYWx0OiBcIlwiLCBsb2FkaW5nOiBcImxhenlcIiB9KSB9KSkgfSksIF9qc3goQ2FyZENvbnRlbnQsIHsgc3g6IHsgcHQ6IDAgfSwgY2hpbGRyZW46IF9qc3goR3JpZCwgeyBzeDogeyBoZWlnaHQ6IHsgeHM6IFwiYXV0b1wiLCBsZzogXCI1MHB4XCIgfSB9LCBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDEsIGNoaWxkcmVuOiBbLi4ucHJvcHMuaXRlbS5rZXl3b3JkS2V5c11cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoa2V5d29yZEtleSkgPT4gKF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBjaGlsZHJlbjogX2pzeChTdGF0aWNDaGlwLCB7IGxhYmVsOiB0KGBsaXRlcmFsOiR7a2V5d29yZEtleX1gKSwgY29sb3I6IFwic3VjY2Vzc1wiLCB2YXJpYW50OiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uLnNlbGVjdGlvbk1hcC5nZXQoa2V5d29yZEtleSkgPyBcImZpbGxlZFwiIDogXCJvdXRsaW5lZFwiLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6ICgpID0+IHByb3BzLmtleXdvcmRTZWxlY3Rpb24ub25JdGVtU2VsZWN0ZWQoa2V5d29yZEtleSkgfSkgfSwgYG1lZGlhLWtleXdvcmQtJHtrZXl3b3JkS2V5fWApKSkgfSkgfSksIF9qc3goQ2FyZEFjdGlvbnMsIHsgc3g6IHsgcHQ6IDAsIHB4OiBcIjE2cHhcIiB9LCBjaGlsZHJlbjogX2pzeHMoQm94LCB7IHN4OiB7IHdpZHRoOiAxIH0sIGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCB7IHN4OiB7IGZvbnRTaXplOiAxMywgZmxvYXQ6IFwibGVmdFwiLCBsaW5lSGVpZ2h0OiBcIjMwcHhcIiB9LCBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIGNoaWxkcmVuOiBmb3JtYXR0ZWRNZWRpYURhdGUgfSksIHByb3BzLml0ZW0udXJsICYmIChfanN4KExpbmssIHsgdW5kZXJsaW5lOiBcIm5vbmVcIiwgcmVsOiBcIm5vcmVmZXJyZXJcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCBocmVmOiBwcm9wcy5pdGVtLnVybCwgY2hpbGRyZW46IF9qc3goQnV0dG9uLCB7IHN4OiB7IGZsb2F0OiBcInJpZ2h0XCIgfSwgc2l6ZTogXCJzbWFsbFwiLCBlbmRJY29uOiBfanN4KExhdW5jaEljb24sIHt9KSwgY29sb3I6IFwic3VjY2Vzc1wiLCBjaGlsZHJlbjogYWNjZXNzTWVkaWFCdXR0b25MYWJlbCB9KSB9KSldIH0pIH0pXSB9KSk7XG59XG4iLCJleHBvcnQgeyBIb3ZlcmFibGVDYXJkIH0gZnJvbSBcIi4vSG92ZXJhYmxlQ2FyZFwiO1xuZXhwb3J0IHsgTWVkaWFDYXJkIH0gZnJvbSBcIi4vTWVkaWFDYXJkXCI7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IFN0YXRpY0NoaXAgfSBmcm9tIFwiLi9TdGF0aWNDaGlwXCI7XG5leHBvcnQgZnVuY3Rpb24gS2V5d29yZENoaXBzKHByb3BzKSB7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHNtYWxsSGVpZ2h0ID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6NjAwcHgpXCIpO1xuICAgIGNvbnN0IHJlc29sdmVMaXRlcmFsID0gdXNlQ2FsbGJhY2soKGtleSkgPT4gdChgbGl0ZXJhbDoke2tleX1gKSwgW3RdKTtcbiAgICByZXR1cm4gKF9qc3goRmFkZSwgeyBpbjogdHJ1ZSwgdGltZW91dDogcHJvcHMuZmFkZVRpbWUsIGNoaWxkcmVuOiBfanN4cyhHcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgcm93U3BhY2luZzogc21hbGxIZWlnaHQgPyAxIDogMiwgY29sdW1uU3BhY2luZzogMSwgY2hpbGRyZW46IFtbLi4ucHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAua2V5cygpXVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gcmVzb2x2ZUxpdGVyYWwoYSkubG9jYWxlQ29tcGFyZShyZXNvbHZlTGl0ZXJhbChiKSkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGtleXdvcmRLZXkpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgY2hpbGRyZW46IF9qc3goU3RhdGljQ2hpcCwgeyBsYWJlbDogcmVzb2x2ZUxpdGVyYWwoa2V5d29yZEtleSksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgdmFyaWFudDogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmRLZXkpID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZWRcIiwgc2l6ZTogc21hbGxIZWlnaHQgPyBcInNtYWxsXCIgOiBcIm1lZGl1bVwiLCBvbkNsaWNrOiAoKSA9PiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uLm9uSXRlbVNlbGVjdGVkKGtleXdvcmRLZXkpIH0pIH0sIGBrZXl3b3JkLWNoaXAtJHtrZXl3b3JkS2V5fWApKSksIF9qc3goRmFkZSwgeyBpbjogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5pc0FueVNlbGVjdGVkLCB0aW1lb3V0OiAzMDAsIGNoaWxkcmVuOiBfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgc3g6IHsgZGlzcGxheTogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5pc0FueVNlbGVjdGVkID8gXCJibG9ja1wiIDogXCJub25lXCIgfSwgY2hpbGRyZW46IF9qc3goU3RhdGljQ2hpcCwgeyBsYWJlbDogdChcImxpdGVyYWw6c2hvd0FsbFwiKSwgY29sb3I6IFwic2Vjb25kYXJ5XCIsIHZhcmlhbnQ6IFwiZmlsbGVkXCIsIHNpemU6IHNtYWxsSGVpZ2h0ID8gXCJzbWFsbFwiIDogXCJtZWRpdW1cIiwgb25DbGljazogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5vbkNsZWFyU2VsZWN0aW9uIH0pIH0pIH0pXSB9KSB9KSk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IENoaXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2hpcFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFN0YXRpY0NoaXAocHJvcHMpIHtcbiAgICByZXR1cm4gX2pzeChDaGlwLCB7IC4uLnByb3BzLCBzeDogeyBib3JkZXJXaWR0aDogXCIxcHhcIiwgYm9yZGVyU3R5bGU6IFwic29saWRcIiwgYm9yZGVyQ29sb3I6IGAke3Byb3BzLmNvbG9yfS5tYWluYCB9IH0pO1xufVxuIiwiZXhwb3J0IHsgS2V5d29yZENoaXBzIH0gZnJvbSBcIi4vS2V5d29yZENoaXBzXCI7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0ZhZGVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IE1lZGlhQ2FyZCB9IGZyb20gXCIuLi9jYXJkXCI7XG5leHBvcnQgZnVuY3Rpb24gTWVkaWFTZWN0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChfanN4KEZhZGUsIHsgaW46IHRydWUsIHRpbWVvdXQ6IHByb3BzLmZhZGVUaW1lLCBjaGlsZHJlbjogX2pzeHMoQm94LCB7IHN4OiB7IG10OiBcIjMwcHhcIiB9LCBjaGlsZHJlbjogW19qc3goRGl2aWRlciwgeyB0ZXh0QWxpZ246IFwibGVmdFwiLCBzeDogeyBtYjogXCIzMHB4XCIsIFwiOjpiZWZvcmVcIjogeyB3aWR0aDogXCIxJVwiIH0sIFwiOjphZnRlclwiOiB7IHdpZHRoOiBcIjk5JVwiIH0gfSwgY2hpbGRyZW46IF9qc3goVHlwb2dyYXBoeSwgeyBmb250V2VpZ2h0OiBcImxpZ2h0XCIsIHZhcmlhbnQ6IFwib3ZlcmxpbmVcIiwgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBmb250U2l6ZTogXCIxNHB4XCIsIGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfSwgY2hpbGRyZW46IHByb3BzLnRpdGxlIH0pIH0pLCBfanN4KEdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAzLCBjaGlsZHJlbjogcHJvcHMubWVkaWFMaXN0Lm1hcCgoaXRlbSwgaWR4KSA9PiAoX2pzeChHcmlkLCB7IGl0ZW06IHRydWUsIHN4OiB7IHdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgbGc6IFwiNTAlXCIsIHhsOiBcIjMzJVwiIH0gfSwgY2hpbGRyZW46IF9qc3goTWVkaWFDYXJkLCB7IGl0ZW06IGl0ZW0sIGtleXdvcmRTZWxlY3Rpb246IHByb3BzLmtleXdvcmRTZWxlY3Rpb24gfSkgfSwgYCR7cHJvcHMudGl0bGV9LSR7aWR4fWApKSkgfSldIH0pIH0pKTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcbiAgICByZXR1cm4gX2pzeChCb3gsIHsgc3g6IHsgcDogXCIxNnB4IDI0cHhcIiwgbWI6IFwiMjRweFwiIH0sIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goRmFkZSwgeyBpbjogdHJ1ZSwgdGltZW91dDogcHJvcHMuZmFkZVRpbWUsIGNoaWxkcmVuOiBfanN4KEJveCwgeyBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSkgfSkpO1xufVxuIiwiZXhwb3J0IHsgTWVkaWFTZWN0aW9uIH0gZnJvbSBcIi4vTWVkaWFTZWN0aW9uXCI7XG5leHBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xuZXhwb3J0IHsgUGFnZUhlYWRlciB9IGZyb20gXCIuL1BhZ2VIZWFkZXJcIjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGaWx0ZXJlZE1lZGlhcyhtZWRpYXMsIGtleXdvcmRTZWxlY3Rpb24pIHtcbiAgICBjb25zdCBbZmlsdGVyZWRNZWRpYXMsIHNldEZpbHRlcmVkTWVkaWFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRGaWx0ZXJlZE1lZGlhcyhtZWRpYXNcbiAgICAgICAgICAgIC5maWx0ZXIoKG1lZGlhKSA9PiAha2V5d29yZFNlbGVjdGlvbi5pc0FueVNlbGVjdGVkIHx8XG4gICAgICAgICAgICBtZWRpYS5rZXl3b3JkS2V5cy5zb21lKChrZXl3b3JkKSA9PiBrZXl3b3JkU2VsZWN0aW9uLnNlbGVjdGlvbk1hcC5nZXQoa2V5d29yZCkpKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIucmVsZWFzZURhdGUuZ2V0VGltZSgpIC0gYS5yZWxlYXNlRGF0ZS5nZXRUaW1lKCkpKTtcbiAgICB9LCBba2V5d29yZFNlbGVjdGlvbi5pc0FueVNlbGVjdGVkLCBrZXl3b3JkU2VsZWN0aW9uLnNlbGVjdGlvbk1hcCwgbWVkaWFzXSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkTWVkaWFzO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBwcmVwYXJlS2V5d29yZHNRdWVyeVBhcmFtcywgdXNlUXVlcnlQYXJhbUtleXdvcmRzIH0gZnJvbSBcIi4vdXNlUXVlcnlQYXJhbXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxTZWxlY3Rpb25NYXAoLi4uYXJyYXlPZkFycmF5cykge1xuICAgIGNvbnN0IGluaXRpYWxTZWxlY3Rpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgYXJyYXlPZkFycmF5cy5mb3JFYWNoKChtZWRpYXMpID0+IHtcbiAgICAgICAgbWVkaWFzXG4gICAgICAgICAgICAucmVkdWNlKChrZXl3b3JkQXJyYXksIG0pID0+IGtleXdvcmRBcnJheS5jb25jYXQobS5rZXl3b3JkS2V5cyksIFtdKVxuICAgICAgICAgICAgLmZvckVhY2goKGtleXdvcmQpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5pdGlhbFNlbGVjdGlvbk1hcC5oYXMoa2V5d29yZCkpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsU2VsZWN0aW9uTWFwLnNldChrZXl3b3JkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBpbml0aWFsU2VsZWN0aW9uTWFwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleXdvcmRTZWxlY3Rpb24oLi4uYXJyYXlPZkFycmF5cykge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBxdWVyeVBhcmFtS2V5d29yZHMgPSB1c2VRdWVyeVBhcmFtS2V5d29yZHMoKTtcbiAgICBjb25zdCBbc2VsZWN0aW9uTWFwLCBzZXRTZWxlY3Rpb25NYXBdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXAgPSBidWlsZEluaXRpYWxTZWxlY3Rpb25NYXAoLi4uYXJyYXlPZkFycmF5cyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1LZXl3b3Jkcy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFwLmhhcyhrKSkge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoaywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH0pO1xuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoKCkgPT4gWy4uLnNlbGVjdGlvbk1hcC5lbnRyaWVzKCldLmZpbHRlcigoWywgaXNTZWxlY3RlZF0pID0+IGlzU2VsZWN0ZWQpLm1hcCgoW2tleXdvcmRdKSA9PiBrZXl3b3JkKSk7XG4gICAgY29uc3QgaXNBbnlTZWxlY3RlZCA9IHVzZU1lbW8oKCkgPT4gc2VsZWN0ZWQubGVuZ3RoID4gMCwgW3NlbGVjdGVkXSk7XG4gICAgY29uc3Qgb25JdGVtU2VsZWN0ZWQgPSAoa2V5d29yZCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGlvbk1hcC5oYXMoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gISFzZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmQpO1xuICAgICAgICBzZXRTZWxlY3Rpb25NYXAoKHByZXZTdGF0ZSkgPT4gbmV3IE1hcChbLi4ucHJldlN0YXRlLmVudHJpZXMoKSwgW2tleXdvcmQsICFpc1NlbGVjdGVkXV0pKTtcbiAgICAgICAgc2V0U2VsZWN0ZWQoaXNTZWxlY3RlZCA/IHNlbGVjdGVkLmZpbHRlcigoaykgPT4gayAhPT0ga2V5d29yZCkgOiBbLi4uc2VsZWN0ZWQsIGtleXdvcmRdKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGlvbk1hcCgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdNYXAgPSBuZXcgTWFwKHByZXZTdGF0ZSk7XG4gICAgICAgICAgICBzZWxlY3RlZC5mb3JFYWNoKChrZXl3b3JkKSA9PiBuZXdNYXAuc2V0KGtleXdvcmQsIGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3TWFwO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U2VsZWN0ZWQoW10pO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmF2aWdhdGUoe1xuICAgICAgICAgICAgc2VhcmNoOiBpc0FueVNlbGVjdGVkID8gYD8ke3ByZXBhcmVLZXl3b3Jkc1F1ZXJ5UGFyYW1zKHNlbGVjdGVkKX1gIDogXCJcIixcbiAgICAgICAgfSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH0sIFtuYXZpZ2F0ZSwgc2VsZWN0ZWQsIGlzQW55U2VsZWN0ZWRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3Rpb25NYXAsXG4gICAgICAgIG9uSXRlbVNlbGVjdGVkLFxuICAgICAgICBvbkNsZWFyU2VsZWN0aW9uLFxuICAgICAgICBpc0FueVNlbGVjdGVkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZVRpbWVvdXRcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdlQWN0aXZlKCkge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlVGltZW91dCgoKSA9PiBzZXRBY3RpdmUodHJ1ZSksIDApO1xuICAgIHJldHVybiBhY3RpdmU7XG59XG4iLCJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmV4cG9ydCB2YXIgUXVlcnlQYXJhbXM7XG4oZnVuY3Rpb24gKFF1ZXJ5UGFyYW1zKSB7XG4gICAgUXVlcnlQYXJhbXNbXCJLRVlXT1JEU1wiXSA9IFwia1wiO1xufSkoUXVlcnlQYXJhbXMgfHwgKFF1ZXJ5UGFyYW1zID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyeVBhcmFtcyhuYW1lKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICBpZiAoIXVybFNlYXJjaFBhcmFtcy5oYXMobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHVybFNlYXJjaFBhcmFtcy5nZXQobmFtZSk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJ5UGFyYW1LZXl3b3JkcygpIHtcbiAgICByZXR1cm4gdXNlUXVlcnlQYXJhbXMoUXVlcnlQYXJhbXMuS0VZV09SRFMpPy5zcGxpdChcIixcIikgPz8gW107XG59XG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUtleXdvcmRzUXVlcnlQYXJhbXMoa2V5d29yZHMpIHtcbiAgICByZXR1cm4gYCR7UXVlcnlQYXJhbXMuS0VZV09SRFN9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleXdvcmRzLmpvaW4oXCIsXCIpKX1gO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dChjYWxsYmFjaywgZGVsYXkpIHtcbiAgICBjb25zdCBjYWxsYmFja1JlZiA9IHVzZVJlZihjYWxsYmFjayk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgICB9LCBbY2FsbGJhY2tdKTtcbiAgICBjb25zdCBzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrUmVmLmN1cnJlbnQoKSwgZGVsYXkpO1xuICAgIH0sIFtkZWxheV0pO1xuICAgIGNvbnN0IGNsZWFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgJiYgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXQoKTtcbiAgICAgICAgcmV0dXJuIGNsZWFyO1xuICAgIH0sIFtkZWxheSwgc2V0LCBjbGVhcl0pO1xuICAgIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBzZXQoKTtcbiAgICB9LCBbY2xlYXIsIHNldF0pO1xuICAgIHJldHVybiB7IHJlc2V0LCBjbGVhciB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9