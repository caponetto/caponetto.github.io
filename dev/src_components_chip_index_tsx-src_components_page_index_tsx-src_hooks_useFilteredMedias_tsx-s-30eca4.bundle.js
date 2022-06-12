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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const filteredMedias = keywordSelection.isAnySelected
            ? medias.filter((media) => media.keywordKeys.some((keyword) => keywordSelection.selectionMap.get(keyword)))
            : medias;
        return filteredMedias.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime());
    }, [keywordSelection.isAnySelected, keywordSelection.selectionMap, medias]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY2hpcF9pbmRleF90c3gtc3JjX2NvbXBvbmVudHNfcGFnZV9pbmRleF90c3gtc3JjX2hvb2tzX3VzZUZpbHRlcmVkTWVkaWFzX3RzeC1zLTMwZWNhNC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDVjtBQUNMO0FBQzFCO0FBQ1Asd0NBQXdDLCtDQUFRO0FBQ2hELFlBQVksc0RBQUksQ0FBQywwREFBSSxJQUFJLHdKQUF3SjtBQUNqTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ1g7QUFDaEI7QUFDTTtBQUNVO0FBQ0E7QUFDRjtBQUNOO0FBQ047QUFDQTtBQUNNO0FBQ007QUFDaEI7QUFDRjtBQUNlO0FBQ0c7QUFDZDtBQUNFO0FBQ1U7QUFDQTtBQUN6QztBQUNQLGdCQUFnQiwyREFBTTtBQUN0QixZQUFZLElBQUksRUFBRSw2REFBYztBQUNoQyxtQ0FBbUMsOENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLDhDQUFPO0FBQ3RDO0FBQ0EsbUJBQW1CLG9EQUFNO0FBQ3pCO0FBQ0EsZUFBZSxvREFBTTtBQUNyQixLQUFLO0FBQ0wsc0JBQXNCLDhDQUFPO0FBQzdCO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLGdFQUEyQixHQUFHLCtEQUEwQjtBQUN2RztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLCtEQUEwQixHQUFHLDhEQUF5QjtBQUNyRztBQUNBLEtBQUs7QUFDTCxZQUFZLHVEQUFLLENBQUMseURBQWEsSUFBSSxXQUFXLHNEQUFJLENBQUMsZ0VBQVUsSUFBSSxPQUFPLHNEQUFJLENBQUMsaUVBQVUsSUFBSTtBQUMzRixvQ0FBb0MsZ0RBQVk7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LElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTCxnQkFBZ0Isa0RBQVc7QUFDM0I7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLGtEQUFXO0FBQzdCO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixrREFBVztBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWE7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvSG92ZXJhYmxlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9NZWRpYUNhcmQudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NoaXAvS2V5d29yZENoaXBzLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jaGlwL1N0YXRpY0NoaXAudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NoaXAvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvTWVkaWFTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL1BhZ2UudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvUGFnZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2hvb2tzL3VzZUZpbHRlcmVkTWVkaWFzLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlS2V5d29yZFNlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2hvb2tzL3VzZVBhZ2VBY3RpdmUudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VRdWVyeVBhcmFtcy50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2hvb2tzL3VzZVRpbWVvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEhvdmVyYWJsZUNhcmQocHJvcHMpIHtcbiAgICBjb25zdCBbaXNNb3VzZU92ZXIsIHNldE1vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChfanN4KENhcmQsIHsgc3g6IHByb3BzLnN4LCBlbGV2YXRpb246IGlzTW91c2VPdmVyID8gNSA6IDIsIG9uTW91c2VPdmVyOiAoKSA9PiBzZXRNb3VzZU92ZXIodHJ1ZSksIG9uTW91c2VMZWF2ZTogKCkgPT4gc2V0TW91c2VPdmVyKGZhbHNlKSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pKTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgTGF1bmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9MYXVuY2hcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRIZWFkZXJcIjtcbmltcG9ydCB7IGdyZXkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpbmtcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2x0aXBcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgRm9udHMgfSBmcm9tIFwiLi4vLi4vZm9udHNcIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCB7IFN0YXRpY0NoaXAgfSBmcm9tIFwiLi4vY2hpcC9TdGF0aWNDaGlwXCI7XG5pbXBvcnQgeyBIb3ZlcmFibGVDYXJkIH0gZnJvbSBcIi4vSG92ZXJhYmxlQ2FyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhQ2FyZChwcm9wcykge1xuICAgIGNvbnN0IGFwcCA9IHVzZUFwcCgpO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBhY2Nlc3NNZWRpYUJ1dHRvbkxhYmVsID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChbXCJwb3N0XCIsIFwidGhlc2lzXCJdLmluY2x1ZGVzKHByb3BzLml0ZW0ua2luZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDpyZWFkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLmtpbmQgPT09IFwibGl2ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6d2F0Y2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ua2luZCA9PT0gXCJjb25mZXJlbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDpzbGlkZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOnZpZXdcIik7XG4gICAgfSwgW3Byb3BzLml0ZW0ua2luZCwgdF0pO1xuICAgIGNvbnN0IGZvcm1hdHRlZE1lZGlhRGF0ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoW1wiY29kZVwiLCBcInRoZXNpc1wiXS5pbmNsdWRlcyhwcm9wcy5pdGVtLmtpbmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHByb3BzLml0ZW0ucmVsZWFzZURhdGUsIFwieXl5eVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0KHByb3BzLml0ZW0ucmVsZWFzZURhdGUsIFwiTU1NIGRkLCB5eXl5XCIpO1xuICAgIH0sIFtwcm9wcy5pdGVtLnJlbGVhc2VEYXRlLCBwcm9wcy5pdGVtLmtpbmRdKTtcbiAgICBjb25zdCBpY29uUm91dGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiS0lFIENvbW11bml0eVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVzLmltYWdlcy5raWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiVG93YXJkcyBEYXRhIFNjaWVuY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5pbWFnZXMudGRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlVOSUNBTVBcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IHJvdXRlcy5pbWFnZXMudW5pY2FtcC5saWdodCA6IHJvdXRlcy5pbWFnZXMudW5pY2FtcC5kYXJrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlRoZSBEZXZlbG9wZXIncyBDb25mZXJlbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXMuaW1hZ2VzLnRkYztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJHaXRIdWJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5jb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IHJvdXRlcy5pbWFnZXMuZ2l0aHViLmxpZ2h0IDogcm91dGVzLmltYWdlcy5naXRodWIuZGFyaztcbiAgICAgICAgfVxuICAgIH0sIFthcHAuY29sb3JNb2RlLCBwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0XSk7XG4gICAgcmV0dXJuIChfanN4cyhIb3ZlcmFibGVDYXJkLCB7IGNoaWxkcmVuOiBbX2pzeChDYXJkSGVhZGVyLCB7IHRpdGxlOiBfanN4KFR5cG9ncmFwaHksIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZvbnRzLk9YWUdFTixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB7IHhzOiBcIjE0cHhcIiwgc206IFwiMTZweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyB4czogXCJhdXRvXCIsIGxnOiBcIjUwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LCBjb2xvcjogZ3JleVthcHAuY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA3MDAgOiA1MDBdLCBndXR0ZXJCb3R0b206IHRydWUsIGNoaWxkcmVuOiBwcm9wcy5pdGVtLnRpdGxlIH0pLCBhY3Rpb246IGljb25Sb3V0ZSAmJiAoX2pzeChUb29sdGlwLCB7IHRpdGxlOiBwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0LCBhcnJvdzogdHJ1ZSwgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzdHlsZTogeyBtYXJnaW46IFwiNHB4IDhweCAwcHggMTZweFwiLCB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfSwgc3JjOiBpY29uUm91dGUsIGFsdDogXCJcIiwgbG9hZGluZzogXCJsYXp5XCIgfSkgfSkpIH0pLCBfanN4KENhcmRDb250ZW50LCB7IHN4OiB7IHB0OiAwIH0sIGNoaWxkcmVuOiBfanN4KEdyaWQsIHsgc3g6IHsgaGVpZ2h0OiB7IHhzOiBcImF1dG9cIiwgbGc6IFwiNTBweFwiIH0gfSwgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAxLCBjaGlsZHJlbjogWy4uLnByb3BzLml0ZW0ua2V5d29yZEtleXNdXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGtleXdvcmRLZXkpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgY2hpbGRyZW46IF9qc3goU3RhdGljQ2hpcCwgeyBsYWJlbDogdChgbGl0ZXJhbDoke2tleXdvcmRLZXl9YCksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgdmFyaWFudDogcHJvcHMua2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmRLZXkpID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZWRcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiAoKSA9PiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uLm9uSXRlbVNlbGVjdGVkKGtleXdvcmRLZXkpIH0pIH0sIGBtZWRpYS1rZXl3b3JkLSR7a2V5d29yZEtleX1gKSkpIH0pIH0pLCBfanN4KENhcmRBY3Rpb25zLCB7IHN4OiB7IHB0OiAwLCBweDogXCIxNnB4XCIgfSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyB3aWR0aDogMSB9LCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBzeDogeyBmb250U2l6ZTogMTMsIGZsb2F0OiBcImxlZnRcIiwgbGluZUhlaWdodDogXCIzMHB4XCIgfSwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiwgY29tcG9uZW50OiBcImRpdlwiLCBjaGlsZHJlbjogZm9ybWF0dGVkTWVkaWFEYXRlIH0pLCBwcm9wcy5pdGVtLnVybCAmJiAoX2pzeChMaW5rLCB7IHVuZGVybGluZTogXCJub25lXCIsIHJlbDogXCJub3JlZmVycmVyXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogcHJvcHMuaXRlbS51cmwsIGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgeyBzeDogeyBmbG9hdDogXCJyaWdodFwiIH0sIHNpemU6IFwic21hbGxcIiwgZW5kSWNvbjogX2pzeChMYXVuY2hJY29uLCB7fSksIGNvbG9yOiBcInN1Y2Nlc3NcIiwgY2hpbGRyZW46IGFjY2Vzc01lZGlhQnV0dG9uTGFiZWwgfSkgfSkpXSB9KSB9KV0gfSkpO1xufVxuIiwiZXhwb3J0IHsgSG92ZXJhYmxlQ2FyZCB9IGZyb20gXCIuL0hvdmVyYWJsZUNhcmRcIjtcbmV4cG9ydCB7IE1lZGlhQ2FyZCB9IGZyb20gXCIuL01lZGlhQ2FyZFwiO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0ZhZGVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnlcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBTdGF0aWNDaGlwIH0gZnJvbSBcIi4vU3RhdGljQ2hpcFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEtleXdvcmRDaGlwcyhwcm9wcykge1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBzbWFsbEhlaWdodCA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOjYwMHB4KVwiKTtcbiAgICBjb25zdCByZXNvbHZlTGl0ZXJhbCA9IHVzZUNhbGxiYWNrKChrZXkpID0+IHQoYGxpdGVyYWw6JHtrZXl9YCksIFt0XSk7XG4gICAgcmV0dXJuIChfanN4KEZhZGUsIHsgaW46IHRydWUsIHRpbWVvdXQ6IHByb3BzLmZhZGVUaW1lLCBjaGlsZHJlbjogX2pzeHMoR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHJvd1NwYWNpbmc6IHNtYWxsSGVpZ2h0ID8gMSA6IDIsIGNvbHVtblNwYWNpbmc6IDEsIGNoaWxkcmVuOiBbWy4uLnByb3BzLmtleXdvcmRTZWxlY3Rpb24uc2VsZWN0aW9uTWFwLmtleXMoKV1cbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHJlc29sdmVMaXRlcmFsKGEpLmxvY2FsZUNvbXBhcmUocmVzb2x2ZUxpdGVyYWwoYikpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChrZXl3b3JkS2V5KSA9PiAoX2pzeChHcmlkLCB7IGl0ZW06IHRydWUsIGNoaWxkcmVuOiBfanN4KFN0YXRpY0NoaXAsIHsgbGFiZWw6IHJlc29sdmVMaXRlcmFsKGtleXdvcmRLZXkpLCBjb2xvcjogXCJzdWNjZXNzXCIsIHZhcmlhbnQ6IHByb3BzLmtleXdvcmRTZWxlY3Rpb24uc2VsZWN0aW9uTWFwLmdldChrZXl3b3JkS2V5KSA/IFwiZmlsbGVkXCIgOiBcIm91dGxpbmVkXCIsIHNpemU6IHNtYWxsSGVpZ2h0ID8gXCJzbWFsbFwiIDogXCJtZWRpdW1cIiwgb25DbGljazogKCkgPT4gcHJvcHMua2V5d29yZFNlbGVjdGlvbi5vbkl0ZW1TZWxlY3RlZChrZXl3b3JkS2V5KSB9KSB9LCBga2V5d29yZC1jaGlwLSR7a2V5d29yZEtleX1gKSkpLCBfanN4KEZhZGUsIHsgaW46IHByb3BzLmtleXdvcmRTZWxlY3Rpb24uaXNBbnlTZWxlY3RlZCwgdGltZW91dDogMzAwLCBjaGlsZHJlbjogX2pzeChHcmlkLCB7IGl0ZW06IHRydWUsIHN4OiB7IGRpc3BsYXk6IHByb3BzLmtleXdvcmRTZWxlY3Rpb24uaXNBbnlTZWxlY3RlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH0sIGNoaWxkcmVuOiBfanN4KFN0YXRpY0NoaXAsIHsgbGFiZWw6IHQoXCJsaXRlcmFsOnNob3dBbGxcIiksIGNvbG9yOiBcInNlY29uZGFyeVwiLCB2YXJpYW50OiBcImZpbGxlZFwiLCBzaXplOiBzbWFsbEhlaWdodCA/IFwic21hbGxcIiA6IFwibWVkaXVtXCIsIG9uQ2xpY2s6IHByb3BzLmtleXdvcmRTZWxlY3Rpb24ub25DbGVhclNlbGVjdGlvbiB9KSB9KSB9KV0gfSkgfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL0NoaXBcIjtcbmV4cG9ydCBmdW5jdGlvbiBTdGF0aWNDaGlwKHByb3BzKSB7XG4gICAgcmV0dXJuIF9qc3goQ2hpcCwgeyAuLi5wcm9wcywgc3g6IHsgYm9yZGVyV2lkdGg6IFwiMXB4XCIsIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsIGJvcmRlckNvbG9yOiBgJHtwcm9wcy5jb2xvcn0ubWFpbmAgfSB9KTtcbn1cbiIsImV4cG9ydCB7IEtleXdvcmRDaGlwcyB9IGZyb20gXCIuL0tleXdvcmRDaGlwc1wiO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaXZpZGVyXCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9GYWRlXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBNZWRpYUNhcmQgfSBmcm9tIFwiLi4vY2FyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhU2VjdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiBwcm9wcy5mYWRlVGltZSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyBtdDogXCIzMHB4XCIgfSwgY2hpbGRyZW46IFtfanN4KERpdmlkZXIsIHsgdGV4dEFsaWduOiBcImxlZnRcIiwgc3g6IHsgbWI6IFwiMzBweFwiLCBcIjo6YmVmb3JlXCI6IHsgd2lkdGg6IFwiMSVcIiB9LCBcIjo6YWZ0ZXJcIjogeyB3aWR0aDogXCI5OSVcIiB9IH0sIGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIHsgZm9udFdlaWdodDogXCJsaWdodFwiLCB2YXJpYW50OiBcIm92ZXJsaW5lXCIsIGNvbXBvbmVudDogXCJkaXZcIiwgc3g6IHsgZm9udFNpemU6IFwiMTRweFwiLCBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH0sIGNoaWxkcmVuOiBwcm9wcy50aXRsZSB9KSB9KSwgX2pzeChHcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMywgY2hpbGRyZW46IHByb3BzLm1lZGlhTGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4gKF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBzeDogeyB3aWR0aDogeyB4czogXCIxMDAlXCIsIGxnOiBcIjUwJVwiLCB4bDogXCIzMyVcIiB9IH0sIGNoaWxkcmVuOiBfanN4KE1lZGlhQ2FyZCwgeyBpdGVtOiBpdGVtLCBrZXl3b3JkU2VsZWN0aW9uOiBwcm9wcy5rZXl3b3JkU2VsZWN0aW9uIH0pIH0sIGAke3Byb3BzLnRpdGxlfS0ke2lkeH1gKSkpIH0pXSB9KSB9KSk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmV4cG9ydCBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9qc3goQm94LCB7IHN4OiB7IHA6IFwiMTZweCAyNHB4XCIsIG1iOiBcIjI0cHhcIiB9LCBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0ZhZGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBQYWdlSGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChfanN4KEZhZGUsIHsgaW46IHRydWUsIHRpbWVvdXQ6IHByb3BzLmZhZGVUaW1lLCBjaGlsZHJlbjogX2pzeChCb3gsIHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pIH0pKTtcbn1cbiIsImV4cG9ydCB7IE1lZGlhU2VjdGlvbiB9IGZyb20gXCIuL01lZGlhU2VjdGlvblwiO1xuZXhwb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcbmV4cG9ydCB7IFBhZ2VIZWFkZXIgfSBmcm9tIFwiLi9QYWdlSGVhZGVyXCI7XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlRmlsdGVyZWRNZWRpYXMobWVkaWFzLCBrZXl3b3JkU2VsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZE1lZGlhcyA9IGtleXdvcmRTZWxlY3Rpb24uaXNBbnlTZWxlY3RlZFxuICAgICAgICAgICAgPyBtZWRpYXMuZmlsdGVyKChtZWRpYSkgPT4gbWVkaWEua2V5d29yZEtleXMuc29tZSgoa2V5d29yZCkgPT4ga2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmQpKSlcbiAgICAgICAgICAgIDogbWVkaWFzO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRNZWRpYXMuc29ydCgoYSwgYikgPT4gYi5yZWxlYXNlRGF0ZS5nZXRUaW1lKCkgLSBhLnJlbGVhc2VEYXRlLmdldFRpbWUoKSk7XG4gICAgfSwgW2tleXdvcmRTZWxlY3Rpb24uaXNBbnlTZWxlY3RlZCwga2V5d29yZFNlbGVjdGlvbi5zZWxlY3Rpb25NYXAsIG1lZGlhc10pO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBwcmVwYXJlS2V5d29yZHNRdWVyeVBhcmFtcywgdXNlUXVlcnlQYXJhbUtleXdvcmRzIH0gZnJvbSBcIi4vdXNlUXVlcnlQYXJhbXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEluaXRpYWxTZWxlY3Rpb25NYXAoLi4uYXJyYXlPZkFycmF5cykge1xuICAgIGNvbnN0IGluaXRpYWxTZWxlY3Rpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgYXJyYXlPZkFycmF5cy5mb3JFYWNoKChtZWRpYXMpID0+IHtcbiAgICAgICAgbWVkaWFzXG4gICAgICAgICAgICAucmVkdWNlKChrZXl3b3JkQXJyYXksIG0pID0+IGtleXdvcmRBcnJheS5jb25jYXQobS5rZXl3b3JkS2V5cyksIFtdKVxuICAgICAgICAgICAgLmZvckVhY2goKGtleXdvcmQpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5pdGlhbFNlbGVjdGlvbk1hcC5oYXMoa2V5d29yZCkpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsU2VsZWN0aW9uTWFwLnNldChrZXl3b3JkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBpbml0aWFsU2VsZWN0aW9uTWFwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleXdvcmRTZWxlY3Rpb24oLi4uYXJyYXlPZkFycmF5cykge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBxdWVyeVBhcmFtS2V5d29yZHMgPSB1c2VRdWVyeVBhcmFtS2V5d29yZHMoKTtcbiAgICBjb25zdCBbc2VsZWN0aW9uTWFwLCBzZXRTZWxlY3Rpb25NYXBdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXAgPSBidWlsZEluaXRpYWxTZWxlY3Rpb25NYXAoLi4uYXJyYXlPZkFycmF5cyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1LZXl3b3Jkcy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFwLmhhcyhrKSkge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoaywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH0pO1xuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoKCkgPT4gWy4uLnNlbGVjdGlvbk1hcC5lbnRyaWVzKCldLmZpbHRlcigoWywgaXNTZWxlY3RlZF0pID0+IGlzU2VsZWN0ZWQpLm1hcCgoW2tleXdvcmRdKSA9PiBrZXl3b3JkKSk7XG4gICAgY29uc3QgaXNBbnlTZWxlY3RlZCA9IHVzZU1lbW8oKCkgPT4gc2VsZWN0ZWQubGVuZ3RoID4gMCwgW3NlbGVjdGVkXSk7XG4gICAgY29uc3Qgb25JdGVtU2VsZWN0ZWQgPSAoa2V5d29yZCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGlvbk1hcC5oYXMoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gISFzZWxlY3Rpb25NYXAuZ2V0KGtleXdvcmQpO1xuICAgICAgICBzZXRTZWxlY3Rpb25NYXAoKHByZXZTdGF0ZSkgPT4gbmV3IE1hcChbLi4ucHJldlN0YXRlLmVudHJpZXMoKSwgW2tleXdvcmQsICFpc1NlbGVjdGVkXV0pKTtcbiAgICAgICAgc2V0U2VsZWN0ZWQoaXNTZWxlY3RlZCA/IHNlbGVjdGVkLmZpbHRlcigoaykgPT4gayAhPT0ga2V5d29yZCkgOiBbLi4uc2VsZWN0ZWQsIGtleXdvcmRdKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGlvbk1hcCgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdNYXAgPSBuZXcgTWFwKHByZXZTdGF0ZSk7XG4gICAgICAgICAgICBzZWxlY3RlZC5mb3JFYWNoKChrZXl3b3JkKSA9PiBuZXdNYXAuc2V0KGtleXdvcmQsIGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3TWFwO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U2VsZWN0ZWQoW10pO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmF2aWdhdGUoe1xuICAgICAgICAgICAgc2VhcmNoOiBpc0FueVNlbGVjdGVkID8gYD8ke3ByZXBhcmVLZXl3b3Jkc1F1ZXJ5UGFyYW1zKHNlbGVjdGVkKX1gIDogXCJcIixcbiAgICAgICAgfSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH0sIFtuYXZpZ2F0ZSwgc2VsZWN0ZWQsIGlzQW55U2VsZWN0ZWRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3Rpb25NYXAsXG4gICAgICAgIG9uSXRlbVNlbGVjdGVkLFxuICAgICAgICBvbkNsZWFyU2VsZWN0aW9uLFxuICAgICAgICBpc0FueVNlbGVjdGVkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZVRpbWVvdXRcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdlQWN0aXZlKCkge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlVGltZW91dCgoKSA9PiBzZXRBY3RpdmUodHJ1ZSksIDApO1xuICAgIHJldHVybiBhY3RpdmU7XG59XG4iLCJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmV4cG9ydCB2YXIgUXVlcnlQYXJhbXM7XG4oZnVuY3Rpb24gKFF1ZXJ5UGFyYW1zKSB7XG4gICAgUXVlcnlQYXJhbXNbXCJLRVlXT1JEU1wiXSA9IFwia1wiO1xufSkoUXVlcnlQYXJhbXMgfHwgKFF1ZXJ5UGFyYW1zID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyeVBhcmFtcyhuYW1lKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICBpZiAoIXVybFNlYXJjaFBhcmFtcy5oYXMobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHVybFNlYXJjaFBhcmFtcy5nZXQobmFtZSk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJ5UGFyYW1LZXl3b3JkcygpIHtcbiAgICByZXR1cm4gdXNlUXVlcnlQYXJhbXMoUXVlcnlQYXJhbXMuS0VZV09SRFMpPy5zcGxpdChcIixcIikgPz8gW107XG59XG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUtleXdvcmRzUXVlcnlQYXJhbXMoa2V5d29yZHMpIHtcbiAgICByZXR1cm4gYCR7UXVlcnlQYXJhbXMuS0VZV09SRFN9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleXdvcmRzLmpvaW4oXCIsXCIpKX1gO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dChjYWxsYmFjaywgZGVsYXkpIHtcbiAgICBjb25zdCBjYWxsYmFja1JlZiA9IHVzZVJlZihjYWxsYmFjayk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgICB9LCBbY2FsbGJhY2tdKTtcbiAgICBjb25zdCBzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrUmVmLmN1cnJlbnQoKSwgZGVsYXkpO1xuICAgIH0sIFtkZWxheV0pO1xuICAgIGNvbnN0IGNsZWFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgJiYgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXQoKTtcbiAgICAgICAgcmV0dXJuIGNsZWFyO1xuICAgIH0sIFtkZWxheSwgc2V0LCBjbGVhcl0pO1xuICAgIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBzZXQoKTtcbiAgICB9LCBbY2xlYXIsIHNldF0pO1xuICAgIHJldHVybiB7IHJlc2V0LCBjbGVhciB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9