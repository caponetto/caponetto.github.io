"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([["src_pages_CodePage_tsx"],{

/***/ "./src/pages/CodePage.tsx":
/*!********************************!*\
  !*** ./src/pages/CodePage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var _components_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chip */ "./src/components/chip/index.tsx");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./src/components/page/index.tsx");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/data/index.tsx");
/* harmony import */ var _hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useFilteredMedias */ "./src/hooks/useFilteredMedias.tsx");
/* harmony import */ var _hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useKeywordSelection */ "./src/hooks/useKeywordSelection.tsx");
/* harmony import */ var _hooks_usePageActive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/usePageActive */ "./src/hooks/usePageActive.tsx");











function CodePage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useApp)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_8__.usePageActive)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const codeKeywords = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_data__WEBPACK_IMPORTED_MODULE_5__.buildUniqueKeywords)(app.data.code.repositories), [app.data.code.repositories]);
    const keywordSelection = (0,_hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_7__.useKeywordSelection)(codeKeywords);
    const deferredKeywordSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useDeferredValue)(keywordSelection.selected);
    const filteredRepositories = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_6__.useFilteredMedias)(app.data.code.repositories, deferredKeywordSelected);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page__WEBPACK_IMPORTED_MODULE_3__.Page, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.PageHeader, { fadeTime: 500, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { component: "div", sx: { mb: "30px", fontSize: { sm: "16px", lg: "18px" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_11__.Trans, { i18nKey: "code:header", children: ["Here you can find some of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "code" })] }) }) }), active && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chip__WEBPACK_IMPORTED_MODULE_2__.KeywordChips, { keywords: codeKeywords, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, onClearSelection: keywordSelection.onClear, fadeTime: 500 })), active && filteredRepositories.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.MediaSection, { title: t("literal:repositories"), fadeTime: 1000, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, mediaList: filteredRepositories }))] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0NvZGVQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDYjtBQUNBO0FBQ0k7QUFDSjtBQUNrQjtBQUNyQjtBQUNEO0FBQ2lCO0FBQ0k7QUFDWjtBQUN4QztBQUNmLGdCQUFnQiwyREFBTTtBQUN0QixtQkFBbUIsbUVBQWE7QUFDaEMsWUFBWSxJQUFJLEVBQUUsNkRBQWM7QUFDaEMseUJBQXlCLDhDQUFPLE9BQU8sMERBQW1CO0FBQzFELDZCQUE2QiwrRUFBbUI7QUFDaEQsb0NBQW9DLHVEQUFnQjtBQUNwRCxpQ0FBaUMsMkVBQWlCO0FBQ2xELFlBQVksdURBQUssQ0FBQyxrREFBSSxJQUFJLFdBQVcsc0RBQUksQ0FBQyx3REFBVSxJQUFJLHlCQUF5QixzREFBSSxDQUFDLGlFQUFVLElBQUksd0JBQXdCLHdCQUF3QiwwQkFBMEIsWUFBWSx1REFBSyxDQUFDLGlEQUFLLElBQUksb0VBQW9FLHNEQUFJLGFBQWEsa0JBQWtCLElBQUksR0FBRyxHQUFHLGNBQWMsc0RBQUksQ0FBQywwREFBWSxJQUFJLGdMQUFnTCxrREFBa0Qsc0RBQUksQ0FBQywwREFBWSxJQUFJLGdMQUFnTCxLQUFLO0FBQ3p3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYmFwcC8uL3NyYy9wYWdlcy9Db2RlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IHVzZURlZmVycmVkVmFsdWUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBLZXl3b3JkQ2hpcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGlwXCI7XG5pbXBvcnQgeyBNZWRpYVNlY3Rpb24sIFBhZ2UsIFBhZ2VIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tIFwiLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBidWlsZFVuaXF1ZUtleXdvcmRzIH0gZnJvbSBcIi4uL2RhdGFcIjtcbmltcG9ydCB7IHVzZUZpbHRlcmVkTWVkaWFzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUZpbHRlcmVkTWVkaWFzXCI7XG5pbXBvcnQgeyB1c2VLZXl3b3JkU2VsZWN0aW9uIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUtleXdvcmRTZWxlY3Rpb25cIjtcbmltcG9ydCB7IHVzZVBhZ2VBY3RpdmUgfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnZUFjdGl2ZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVBhZ2UoKSB7XG4gICAgY29uc3QgYXBwID0gdXNlQXBwKCk7XG4gICAgY29uc3QgYWN0aXZlID0gdXNlUGFnZUFjdGl2ZSgpO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBjb2RlS2V5d29yZHMgPSB1c2VNZW1vKCgpID0+IGJ1aWxkVW5pcXVlS2V5d29yZHMoYXBwLmRhdGEuY29kZS5yZXBvc2l0b3JpZXMpLCBbYXBwLmRhdGEuY29kZS5yZXBvc2l0b3JpZXNdKTtcbiAgICBjb25zdCBrZXl3b3JkU2VsZWN0aW9uID0gdXNlS2V5d29yZFNlbGVjdGlvbihjb2RlS2V5d29yZHMpO1xuICAgIGNvbnN0IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkID0gdXNlRGVmZXJyZWRWYWx1ZShrZXl3b3JkU2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICBjb25zdCBmaWx0ZXJlZFJlcG9zaXRvcmllcyA9IHVzZUZpbHRlcmVkTWVkaWFzKGFwcC5kYXRhLmNvZGUucmVwb3NpdG9yaWVzLCBkZWZlcnJlZEtleXdvcmRTZWxlY3RlZCk7XG4gICAgcmV0dXJuIChfanN4cyhQYWdlLCB7IGNoaWxkcmVuOiBbX2pzeChQYWdlSGVhZGVyLCB7IGZhZGVUaW1lOiA1MDAsIGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBtYjogXCIzMHB4XCIsIGZvbnRTaXplOiB7IHNtOiBcIjE2cHhcIiwgbGc6IFwiMThweFwiIH0gfSwgY2hpbGRyZW46IF9qc3hzKFRyYW5zLCB7IGkxOG5LZXk6IFwiY29kZTpoZWFkZXJcIiwgY2hpbGRyZW46IFtcIkhlcmUgeW91IGNhbiBmaW5kIHNvbWUgb2YgbXkgXCIsIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJjb2RlXCIgfSldIH0pIH0pIH0pLCBhY3RpdmUgJiYgKF9qc3goS2V5d29yZENoaXBzLCB7IGtleXdvcmRzOiBjb2RlS2V5d29yZHMsIHNlbGVjdGVkS2V5d29yZHM6IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkLCBvbktleXdvcmRDbGlja2VkOiBrZXl3b3JkU2VsZWN0aW9uLm9uSXRlbUNsaWNrZWQsIG9uQ2xlYXJTZWxlY3Rpb246IGtleXdvcmRTZWxlY3Rpb24ub25DbGVhciwgZmFkZVRpbWU6IDUwMCB9KSksIGFjdGl2ZSAmJiBmaWx0ZXJlZFJlcG9zaXRvcmllcy5sZW5ndGggPiAwICYmIChfanN4KE1lZGlhU2VjdGlvbiwgeyB0aXRsZTogdChcImxpdGVyYWw6cmVwb3NpdG9yaWVzXCIpLCBmYWRlVGltZTogMTAwMCwgc2VsZWN0ZWRLZXl3b3JkczogZGVmZXJyZWRLZXl3b3JkU2VsZWN0ZWQsIG9uS2V5d29yZENsaWNrZWQ6IGtleXdvcmRTZWxlY3Rpb24ub25JdGVtQ2xpY2tlZCwgbWVkaWFMaXN0OiBmaWx0ZXJlZFJlcG9zaXRvcmllcyB9KSldIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==