"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([["src_components_chip_index_tsx-src_components_page_index_tsx-src_data_index_tsx-src_hooks_useF-40036f"],{

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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], { in: true, timeout: props.fadeTime, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], { container: true, rowSpacing: smallHeight ? 1 : 2, columnSpacing: 1, children: [[...props.keywords]
                    .sort((a, b) => resolveLiteral(a).localeCompare(resolveLiteral(b)))
                    .map((keywordKey) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], { item: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__["default"], { label: resolveLiteral(keywordKey), color: "success", variant: props.selectedKeywords.includes(keywordKey) ? "filled" : "outlined", size: smallHeight ? "small" : "medium", onClick: () => props.onKeywordClicked(keywordKey) }) }, `keyword-chip-${keywordKey}`))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], { in: props.selectedKeywords.length > 0, timeout: 300, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], { item: true, sx: { display: props.selectedKeywords.length > 0 ? "block" : "none" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__["default"], { label: t("literal:showAll"), color: "secondary", variant: "filled", size: smallHeight ? "small" : "medium", onClick: props.onClearSelection }) }) })] }) }));
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

/***/ "./src/data/index.tsx":
/*!****************************!*\
  !*** ./src/data/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUniqueKeywords": () => (/* binding */ buildUniqueKeywords)
/* harmony export */ });
function buildUniqueKeywords(...mediasArray) {
    let keywords = [];
    mediasArray.forEach((medias) => {
        const mediaKeywords = medias.reduce((acc, m) => acc.concat(m.keywordKeys), []);
        keywords = keywords.concat(mediaKeywords);
    });
    return [...new Set(keywords)];
}


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

function useFilteredMedias(medias, keywords) {
    const [filteredMedias, setFilteredMedias] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setFilteredMedias(medias
            .filter((media) => keywords.length === 0 || media.keywordKeys.some((keyword) => keywords.includes(keyword)))
            .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime()));
    }, [keywords, medias]);
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
/* harmony export */   "useKeywordSelection": () => (/* binding */ useKeywordSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useQueryParams */ "./src/hooks/useQueryParams.tsx");



function useKeywordSelection(availableKeywords) {
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const initialKeywords = (0,_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParamKeywords)(availableKeywords);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialKeywords ?? []);
    const onItemClicked = (keyword) => {
        if (!availableKeywords.includes(keyword)) {
            return;
        }
        const updatedSelection = selected.includes(keyword)
            ? selected.filter((k) => k !== keyword)
            : [...selected, keyword];
        setSelected(updatedSelection);
    };
    const onClear = () => {
        setSelected([]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        navigate({
            search: selected.length > 0 ? `?${_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.QueryParams.KEYWORDS}=${selected.join(",")}` : "",
        }, { replace: true });
    }, [navigate, selected]);
    return {
        selected,
        onItemClicked,
        onClear,
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
function useQueryParamKeywords(availableKeywords) {
    const keywords = useQueryParams(QueryParams.KEYWORDS);
    return keywords?.split(",").filter((k) => availableKeywords.includes(k));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY2hpcF9pbmRleF90c3gtc3JjX2NvbXBvbmVudHNfcGFnZV9pbmRleF90c3gtc3JjX2RhdGFfaW5kZXhfdHN4LXNyY19ob29rc191c2VGLTQwMDM2Zi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDVjtBQUNMO0FBQzFCO0FBQ1Asd0NBQXdDLCtDQUFRO0FBQ2hELFlBQVksc0RBQUksQ0FBQywwREFBSSxJQUFJLHdKQUF3SjtBQUNqTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ1g7QUFDaEI7QUFDTTtBQUNVO0FBQ0E7QUFDRjtBQUNaO0FBQ007QUFDTjtBQUNBO0FBQ007QUFDTTtBQUNoQjtBQUNGO0FBQ2U7QUFDRztBQUNkO0FBQ0U7QUFDVTtBQUN6QztBQUNQLGdCQUFnQiwyREFBTTtBQUN0QixZQUFZLElBQUksRUFBRSw2REFBYztBQUNoQyxtQ0FBbUMsOENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLDhDQUFPO0FBQ3RDO0FBQ0EsbUJBQW1CLG9EQUFNO0FBQ3pCO0FBQ0EsZUFBZSxvREFBTTtBQUNyQixLQUFLO0FBQ0wsc0JBQXNCLDhDQUFPO0FBQzdCO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLGdFQUEyQixHQUFHLCtEQUEwQjtBQUN2RztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFpQjtBQUNwQztBQUNBO0FBQ0EsK0NBQStDLCtEQUEwQixHQUFHLDhEQUF5QjtBQUNyRztBQUNBLEtBQUs7QUFDTCxZQUFZLHVEQUFLLENBQUMseURBQWEsSUFBSSxXQUFXLHNEQUFJLENBQUMsZ0VBQVUsSUFBSSxPQUFPLHNEQUFJLENBQUMsZ0VBQVUsSUFBSTtBQUMzRixvQ0FBb0MsZ0RBQVk7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b25lbnRzL2NhcmQvSG92ZXJhYmxlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9NZWRpYUNhcmQudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL2NoaXAvS2V5d29yZENoaXBzLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9jaGlwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL01lZGlhU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9QYWdlLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9wYWdlL1BhZ2VIZWFkZXIudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL3BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9kYXRhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlRmlsdGVyZWRNZWRpYXMudHN4Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9ob29rcy91c2VLZXl3b3JkU2VsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlUGFnZUFjdGl2ZS50c3giLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zLnRzeCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvaG9va3MvdXNlVGltZW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gSG92ZXJhYmxlQ2FyZChwcm9wcykge1xuICAgIGNvbnN0IFtpc01vdXNlT3Zlciwgc2V0TW91c2VPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKF9qc3goQ2FyZCwgeyBzeDogcHJvcHMuc3gsIGVsZXZhdGlvbjogaXNNb3VzZU92ZXIgPyA1IDogMiwgb25Nb3VzZU92ZXI6ICgpID0+IHNldE1vdXNlT3Zlcih0cnVlKSwgb25Nb3VzZUxlYXZlOiAoKSA9PiBzZXRNb3VzZU92ZXIoZmFsc2UpLCBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBMYXVuY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xhdW5jaFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlclwiO1xuaW1wb3J0IENoaXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2hpcFwiO1xuaW1wb3J0IHsgZ3JleSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbHRpcFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBGb250cyB9IGZyb20gXCIuLi8uLi9mb250c1wiO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHsgSG92ZXJhYmxlQ2FyZCB9IGZyb20gXCIuL0hvdmVyYWJsZUNhcmRcIjtcbmV4cG9ydCBmdW5jdGlvbiBNZWRpYUNhcmQocHJvcHMpIHtcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAoKTtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgYWNjZXNzTWVkaWFCdXR0b25MYWJlbCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoW1wicG9zdFwiLCBcInRoZXNpc1wiXS5pbmNsdWRlcyhwcm9wcy5pdGVtLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6cmVhZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS50eXBlID09PSBcImxpdmVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHQoXCJsaXRlcmFsOndhdGNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnR5cGUgPT09IFwiY29uZmVyZW5jZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdChcImxpdGVyYWw6c2xpZGVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0KFwibGl0ZXJhbDp2aWV3XCIpO1xuICAgIH0sIFtwcm9wcy5pdGVtLnR5cGUsIHRdKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRNZWRpYURhdGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKFtcImNvZGVcIiwgXCJ0aGVzaXNcIl0uaW5jbHVkZXMocHJvcHMuaXRlbS50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChwcm9wcy5pdGVtLnJlbGVhc2VEYXRlLCBcInl5eXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdChwcm9wcy5pdGVtLnJlbGVhc2VEYXRlLCBcIk1NTSBkZCwgeXl5eVwiKTtcbiAgICB9LCBbcHJvcHMuaXRlbS5yZWxlYXNlRGF0ZSwgcHJvcHMuaXRlbS50eXBlXSk7XG4gICAgY29uc3QgaWNvblJvdXRlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIktJRSBDb21tdW5pdHlcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5pbWFnZXMua2llO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pdGVtLnB1Ymxpc2hlZEF0ID09PSBcIlRvd2FyZHMgRGF0YSBTY2llbmNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXMuaW1hZ2VzLnRkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJVTklDQU1QXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHAuY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyByb3V0ZXMuaW1hZ2VzLnVuaWNhbXAubGlnaHQgOiByb3V0ZXMuaW1hZ2VzLnVuaWNhbXAuZGFyaztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuaXRlbS5wdWJsaXNoZWRBdCA9PT0gXCJUaGUgRGV2ZWxvcGVyJ3MgQ29uZmVyZW5jZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVzLmltYWdlcy50ZGM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLml0ZW0ucHVibGlzaGVkQXQgPT09IFwiR2l0SHViXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHAuY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyByb3V0ZXMuaW1hZ2VzLmdpdGh1Yi5saWdodCA6IHJvdXRlcy5pbWFnZXMuZ2l0aHViLmRhcms7XG4gICAgICAgIH1cbiAgICB9LCBbYXBwLmNvbG9yTW9kZSwgcHJvcHMuaXRlbS5wdWJsaXNoZWRBdF0pO1xuICAgIHJldHVybiAoX2pzeHMoSG92ZXJhYmxlQ2FyZCwgeyBjaGlsZHJlbjogW19qc3goQ2FyZEhlYWRlciwgeyB0aXRsZTogX2pzeChUeXBvZ3JhcGh5LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGb250cy5PWFlHRU4sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogXCIxNHB4XCIsIHNtOiBcIjE2cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHsgeHM6IFwiYXV0b1wiLCBsZzogXCI1MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSwgY29sb3I6IGdyZXlbYXBwLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gNzAwIDogNTAwXSwgZ3V0dGVyQm90dG9tOiB0cnVlLCBjaGlsZHJlbjogcHJvcHMuaXRlbS50aXRsZSB9KSwgYWN0aW9uOiBpY29uUm91dGUgJiYgKF9qc3goVG9vbHRpcCwgeyB0aXRsZTogcHJvcHMuaXRlbS5wdWJsaXNoZWRBdCwgYXJyb3c6IHRydWUsIGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiBcIjRweCA4cHggMHB4IDE2cHhcIiwgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH0sIHNyYzogaWNvblJvdXRlLCBhbHQ6IFwiXCIsIGxvYWRpbmc6IFwibGF6eVwiIH0pIH0pKSB9KSwgX2pzeChDYXJkQ29udGVudCwgeyBzeDogeyBwdDogMCB9LCBjaGlsZHJlbjogX2pzeChHcmlkLCB7IHN4OiB7IGhlaWdodDogeyB4czogXCJhdXRvXCIsIGxnOiBcIjUwcHhcIiB9IH0sIGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMSwgY2hpbGRyZW46IFsuLi5wcm9wcy5pdGVtLmtleXdvcmRLZXlzXVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChrZXl3b3JkS2V5KSA9PiAoX2pzeChHcmlkLCB7IGl0ZW06IHRydWUsIGNoaWxkcmVuOiBfanN4KENoaXAsIHsgbGFiZWw6IHQoYGxpdGVyYWw6JHtrZXl3b3JkS2V5fWApLCBjb2xvcjogXCJzdWNjZXNzXCIsIHZhcmlhbnQ6IHByb3BzLnNlbGVjdGVkS2V5d29yZHMuaW5jbHVkZXMoa2V5d29yZEtleSkgPyBcImZpbGxlZFwiIDogXCJvdXRsaW5lZFwiLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6ICgpID0+IHByb3BzLm9uS2V5d29yZENsaWNrZWQoa2V5d29yZEtleSkgfSkgfSwgYG1lZGlhLWtleXdvcmQtJHtrZXl3b3JkS2V5fWApKSkgfSkgfSksIF9qc3goQ2FyZEFjdGlvbnMsIHsgc3g6IHsgcHQ6IDAsIHB4OiBcIjE2cHhcIiB9LCBjaGlsZHJlbjogX2pzeHMoQm94LCB7IHN4OiB7IHdpZHRoOiAxIH0sIGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCB7IHN4OiB7IGZvbnRTaXplOiAxMywgZmxvYXQ6IFwibGVmdFwiLCBsaW5lSGVpZ2h0OiBcIjMwcHhcIiB9LCBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIGNoaWxkcmVuOiBmb3JtYXR0ZWRNZWRpYURhdGUgfSksIHByb3BzLml0ZW0udXJsICYmIChfanN4KExpbmssIHsgdW5kZXJsaW5lOiBcIm5vbmVcIiwgcmVsOiBcIm5vcmVmZXJyZXJcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCBocmVmOiBwcm9wcy5pdGVtLnVybCwgY2hpbGRyZW46IF9qc3goQnV0dG9uLCB7IHN4OiB7IGZsb2F0OiBcInJpZ2h0XCIgfSwgc2l6ZTogXCJzbWFsbFwiLCBlbmRJY29uOiBfanN4KExhdW5jaEljb24sIHt9KSwgY29sb3I6IFwic3VjY2Vzc1wiLCBjaGlsZHJlbjogYWNjZXNzTWVkaWFCdXR0b25MYWJlbCB9KSB9KSldIH0pIH0pXSB9KSk7XG59XG4iLCJleHBvcnQgeyBIb3ZlcmFibGVDYXJkIH0gZnJvbSBcIi4vSG92ZXJhYmxlQ2FyZFwiO1xuZXhwb3J0IHsgTWVkaWFDYXJkIH0gZnJvbSBcIi4vTWVkaWFDYXJkXCI7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IENoaXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2hpcFwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmV4cG9ydCBmdW5jdGlvbiBLZXl3b3JkQ2hpcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3Qgc21hbGxIZWlnaHQgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDo2MDBweClcIik7XG4gICAgY29uc3QgcmVzb2x2ZUxpdGVyYWwgPSB1c2VDYWxsYmFjaygoa2V5KSA9PiB0KGBsaXRlcmFsOiR7a2V5fWApLCBbdF0pO1xuICAgIHJldHVybiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiBwcm9wcy5mYWRlVGltZSwgY2hpbGRyZW46IF9qc3hzKEdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCByb3dTcGFjaW5nOiBzbWFsbEhlaWdodCA/IDEgOiAyLCBjb2x1bW5TcGFjaW5nOiAxLCBjaGlsZHJlbjogW1suLi5wcm9wcy5rZXl3b3Jkc11cbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHJlc29sdmVMaXRlcmFsKGEpLmxvY2FsZUNvbXBhcmUocmVzb2x2ZUxpdGVyYWwoYikpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChrZXl3b3JkS2V5KSA9PiAoX2pzeChHcmlkLCB7IGl0ZW06IHRydWUsIGNoaWxkcmVuOiBfanN4KENoaXAsIHsgbGFiZWw6IHJlc29sdmVMaXRlcmFsKGtleXdvcmRLZXkpLCBjb2xvcjogXCJzdWNjZXNzXCIsIHZhcmlhbnQ6IHByb3BzLnNlbGVjdGVkS2V5d29yZHMuaW5jbHVkZXMoa2V5d29yZEtleSkgPyBcImZpbGxlZFwiIDogXCJvdXRsaW5lZFwiLCBzaXplOiBzbWFsbEhlaWdodCA/IFwic21hbGxcIiA6IFwibWVkaXVtXCIsIG9uQ2xpY2s6ICgpID0+IHByb3BzLm9uS2V5d29yZENsaWNrZWQoa2V5d29yZEtleSkgfSkgfSwgYGtleXdvcmQtY2hpcC0ke2tleXdvcmRLZXl9YCkpKSwgX2pzeChGYWRlLCB7IGluOiBwcm9wcy5zZWxlY3RlZEtleXdvcmRzLmxlbmd0aCA+IDAsIHRpbWVvdXQ6IDMwMCwgY2hpbGRyZW46IF9qc3goR3JpZCwgeyBpdGVtOiB0cnVlLCBzeDogeyBkaXNwbGF5OiBwcm9wcy5zZWxlY3RlZEtleXdvcmRzLmxlbmd0aCA+IDAgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9LCBjaGlsZHJlbjogX2pzeChDaGlwLCB7IGxhYmVsOiB0KFwibGl0ZXJhbDpzaG93QWxsXCIpLCBjb2xvcjogXCJzZWNvbmRhcnlcIiwgdmFyaWFudDogXCJmaWxsZWRcIiwgc2l6ZTogc21hbGxIZWlnaHQgPyBcInNtYWxsXCIgOiBcIm1lZGl1bVwiLCBvbkNsaWNrOiBwcm9wcy5vbkNsZWFyU2VsZWN0aW9uIH0pIH0pIH0pXSB9KSB9KSk7XG59XG4iLCJleHBvcnQgeyBLZXl3b3JkQ2hpcHMgfSBmcm9tIFwiLi9LZXl3b3JkQ2hpcHNcIjtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRGl2aWRlclwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRmFkZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgTWVkaWFDYXJkIH0gZnJvbSBcIi4uL2NhcmRcIjtcbmV4cG9ydCBmdW5jdGlvbiBNZWRpYVNlY3Rpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goRmFkZSwgeyBpbjogdHJ1ZSwgdGltZW91dDogcHJvcHMuZmFkZVRpbWUsIGNoaWxkcmVuOiBfanN4cyhCb3gsIHsgc3g6IHsgbXQ6IFwiMzBweFwiIH0sIGNoaWxkcmVuOiBbX2pzeChEaXZpZGVyLCB7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHN4OiB7IG1iOiBcIjMwcHhcIiwgXCI6OmJlZm9yZVwiOiB7IHdpZHRoOiBcIjElXCIgfSwgXCI6OmFmdGVyXCI6IHsgd2lkdGg6IFwiOTklXCIgfSB9LCBjaGlsZHJlbjogX2pzeChUeXBvZ3JhcGh5LCB7IGZvbnRXZWlnaHQ6IFwibGlnaHRcIiwgdmFyaWFudDogXCJvdmVybGluZVwiLCBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IGZvbnRTaXplOiBcIjE0cHhcIiwgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9LCBjaGlsZHJlbjogcHJvcHMudGl0bGUgfSkgfSksIF9qc3goR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDMsIGNoaWxkcmVuOiBwcm9wcy5tZWRpYUxpc3QubWFwKChpdGVtLCBpZHgpID0+IChfanN4KEdyaWQsIHsgaXRlbTogdHJ1ZSwgc3g6IHsgd2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBsZzogXCI1MCVcIiwgeGw6IFwiMzMlXCIgfSB9LCBjaGlsZHJlbjogX2pzeChNZWRpYUNhcmQsIHsgaXRlbTogaXRlbSwgc2VsZWN0ZWRLZXl3b3JkczogcHJvcHMuc2VsZWN0ZWRLZXl3b3Jkcywgb25LZXl3b3JkQ2xpY2tlZDogcHJvcHMub25LZXl3b3JkQ2xpY2tlZCB9KSB9LCBgJHtwcm9wcy50aXRsZX0tJHtpZHh9YCkpKSB9KV0gfSkgfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5leHBvcnQgZnVuY3Rpb24gUGFnZShwcm9wcykge1xuICAgIHJldHVybiBfanN4KEJveCwgeyBzeDogeyBwOiBcIjE2cHggMjRweFwiLCBtYjogXCIyNHB4XCIgfSwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9GYWRlXCI7XG5leHBvcnQgZnVuY3Rpb24gUGFnZUhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiAoX2pzeChGYWRlLCB7IGluOiB0cnVlLCB0aW1lb3V0OiBwcm9wcy5mYWRlVGltZSwgY2hpbGRyZW46IF9qc3goQm94LCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSB9KSk7XG59XG4iLCJleHBvcnQgeyBNZWRpYVNlY3Rpb24gfSBmcm9tIFwiLi9NZWRpYVNlY3Rpb25cIjtcbmV4cG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5leHBvcnQgeyBQYWdlSGVhZGVyIH0gZnJvbSBcIi4vUGFnZUhlYWRlclwiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVW5pcXVlS2V5d29yZHMoLi4ubWVkaWFzQXJyYXkpIHtcbiAgICBsZXQga2V5d29yZHMgPSBbXTtcbiAgICBtZWRpYXNBcnJheS5mb3JFYWNoKChtZWRpYXMpID0+IHtcbiAgICAgICAgY29uc3QgbWVkaWFLZXl3b3JkcyA9IG1lZGlhcy5yZWR1Y2UoKGFjYywgbSkgPT4gYWNjLmNvbmNhdChtLmtleXdvcmRLZXlzKSwgW10pO1xuICAgICAgICBrZXl3b3JkcyA9IGtleXdvcmRzLmNvbmNhdChtZWRpYUtleXdvcmRzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQoa2V5d29yZHMpXTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGaWx0ZXJlZE1lZGlhcyhtZWRpYXMsIGtleXdvcmRzKSB7XG4gICAgY29uc3QgW2ZpbHRlcmVkTWVkaWFzLCBzZXRGaWx0ZXJlZE1lZGlhc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RmlsdGVyZWRNZWRpYXMobWVkaWFzXG4gICAgICAgICAgICAuZmlsdGVyKChtZWRpYSkgPT4ga2V5d29yZHMubGVuZ3RoID09PSAwIHx8IG1lZGlhLmtleXdvcmRLZXlzLnNvbWUoKGtleXdvcmQpID0+IGtleXdvcmRzLmluY2x1ZGVzKGtleXdvcmQpKSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnJlbGVhc2VEYXRlLmdldFRpbWUoKSAtIGEucmVsZWFzZURhdGUuZ2V0VGltZSgpKSk7XG4gICAgfSwgW2tleXdvcmRzLCBtZWRpYXNdKTtcbiAgICByZXR1cm4gZmlsdGVyZWRNZWRpYXM7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zLCB1c2VRdWVyeVBhcmFtS2V5d29yZHMgfSBmcm9tIFwiLi91c2VRdWVyeVBhcmFtc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleXdvcmRTZWxlY3Rpb24oYXZhaWxhYmxlS2V5d29yZHMpIHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgaW5pdGlhbEtleXdvcmRzID0gdXNlUXVlcnlQYXJhbUtleXdvcmRzKGF2YWlsYWJsZUtleXdvcmRzKTtcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGluaXRpYWxLZXl3b3JkcyA/PyBbXSk7XG4gICAgY29uc3Qgb25JdGVtQ2xpY2tlZCA9IChrZXl3b3JkKSA9PiB7XG4gICAgICAgIGlmICghYXZhaWxhYmxlS2V5d29yZHMuaW5jbHVkZXMoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cGRhdGVkU2VsZWN0aW9uID0gc2VsZWN0ZWQuaW5jbHVkZXMoa2V5d29yZClcbiAgICAgICAgICAgID8gc2VsZWN0ZWQuZmlsdGVyKChrKSA9PiBrICE9PSBrZXl3b3JkKVxuICAgICAgICAgICAgOiBbLi4uc2VsZWN0ZWQsIGtleXdvcmRdO1xuICAgICAgICBzZXRTZWxlY3RlZCh1cGRhdGVkU2VsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRlKHtcbiAgICAgICAgICAgIHNlYXJjaDogc2VsZWN0ZWQubGVuZ3RoID4gMCA/IGA/JHtRdWVyeVBhcmFtcy5LRVlXT1JEU309JHtzZWxlY3RlZC5qb2luKFwiLFwiKX1gIDogXCJcIixcbiAgICAgICAgfSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH0sIFtuYXZpZ2F0ZSwgc2VsZWN0ZWRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgb25JdGVtQ2xpY2tlZCxcbiAgICAgICAgb25DbGVhcixcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2VUaW1lb3V0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnZUFjdGl2ZSgpIHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZVRpbWVvdXQoKCkgPT4gc2V0QWN0aXZlKHRydWUpLCAwKTtcbiAgICByZXR1cm4gYWN0aXZlO1xufVxuIiwiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5leHBvcnQgdmFyIFF1ZXJ5UGFyYW1zO1xuKGZ1bmN0aW9uIChRdWVyeVBhcmFtcykge1xuICAgIFF1ZXJ5UGFyYW1zW1wiS0VZV09SRFNcIl0gPSBcImtcIjtcbn0pKFF1ZXJ5UGFyYW1zIHx8IChRdWVyeVBhcmFtcyA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlcnlQYXJhbXMobmFtZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgaWYgKCF1cmxTZWFyY2hQYXJhbXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB1cmxTZWFyY2hQYXJhbXMuZ2V0KG5hbWUpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyeVBhcmFtS2V5d29yZHMoYXZhaWxhYmxlS2V5d29yZHMpIHtcbiAgICBjb25zdCBrZXl3b3JkcyA9IHVzZVF1ZXJ5UGFyYW1zKFF1ZXJ5UGFyYW1zLktFWVdPUkRTKTtcbiAgICByZXR1cm4ga2V5d29yZHM/LnNwbGl0KFwiLFwiKS5maWx0ZXIoKGspID0+IGF2YWlsYWJsZUtleXdvcmRzLmluY2x1ZGVzKGspKTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgY29uc3QgY2FsbGJhY2tSZWYgPSB1c2VSZWYoY2FsbGJhY2spO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjYWxsYmFja1JlZi5jdXJyZW50ID0gY2FsbGJhY2s7XG4gICAgfSwgW2NhbGxiYWNrXSk7XG4gICAgY29uc3Qgc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjYWxsYmFja1JlZi5jdXJyZW50KCksIGRlbGF5KTtcbiAgICB9LCBbZGVsYXldKTtcbiAgICBjb25zdCBjbGVhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ICYmIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0KCk7XG4gICAgICAgIHJldHVybiBjbGVhcjtcbiAgICB9LCBbZGVsYXksIHNldCwgY2xlYXJdKTtcbiAgICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgc2V0KCk7XG4gICAgfSwgW2NsZWFyLCBzZXRdKTtcbiAgICByZXR1cm4geyByZXNldCwgY2xlYXIgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==