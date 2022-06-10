"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([["src_pages_TalkPage_tsx"],{

/***/ "./src/pages/TalkPage.tsx":
/*!********************************!*\
  !*** ./src/pages/TalkPage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TalkPage)
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











function TalkPage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useApp)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_8__.usePageActive)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const talkKeywords = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_data__WEBPACK_IMPORTED_MODULE_5__.buildUniqueKeywords)(app.data.talk.lives, app.data.talk.conferences), [app.data.talk.conferences, app.data.talk.lives]);
    const keywordSelection = (0,_hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_7__.useKeywordSelection)(talkKeywords);
    const deferredKeywordSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useDeferredValue)(keywordSelection.selected);
    const filteredLives = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_6__.useFilteredMedias)(app.data.talk.lives, deferredKeywordSelected);
    const filteredConferences = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_6__.useFilteredMedias)(app.data.talk.conferences, deferredKeywordSelected);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page__WEBPACK_IMPORTED_MODULE_3__.Page, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.PageHeader, { fadeTime: 500, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { component: "div", sx: { mb: "30px", fontSize: { sm: "16px", lg: "18px" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_11__.Trans, { i18nKey: "talk:header", children: ["Here you can find some of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "talks" })] }) }) }), active && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chip__WEBPACK_IMPORTED_MODULE_2__.KeywordChips, { keywords: talkKeywords, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, onClearSelection: keywordSelection.onClear, fadeTime: 500 })), active && filteredLives.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.MediaSection, { title: t("literal:lives"), fadeTime: 1000, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, mediaList: filteredLives })), active && filteredConferences.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.MediaSection, { title: t("literal:conferences"), fadeTime: 1500, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, mediaList: filteredConferences }))] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1RhbGtQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDYjtBQUNBO0FBQ0k7QUFDSjtBQUNrQjtBQUNyQjtBQUNEO0FBQ2lCO0FBQ0k7QUFDWjtBQUN4QztBQUNmLGdCQUFnQiwyREFBTTtBQUN0QixtQkFBbUIsbUVBQWE7QUFDaEMsWUFBWSxJQUFJLEVBQUUsNkRBQWM7QUFDaEMseUJBQXlCLDhDQUFPLE9BQU8sMERBQW1CO0FBQzFELDZCQUE2QiwrRUFBbUI7QUFDaEQsb0NBQW9DLHVEQUFnQjtBQUNwRCwwQkFBMEIsMkVBQWlCO0FBQzNDLGdDQUFnQywyRUFBaUI7QUFDakQsWUFBWSx1REFBSyxDQUFDLGtEQUFJLElBQUksV0FBVyxzREFBSSxDQUFDLHdEQUFVLElBQUkseUJBQXlCLHNEQUFJLENBQUMsaUVBQVUsSUFBSSx3QkFBd0Isd0JBQXdCLDBCQUEwQixZQUFZLHVEQUFLLENBQUMsaURBQUssSUFBSSxvRUFBb0Usc0RBQUksYUFBYSxtQkFBbUIsSUFBSSxHQUFHLEdBQUcsY0FBYyxzREFBSSxDQUFDLDBEQUFZLElBQUksZ0xBQWdMLDJDQUEyQyxzREFBSSxDQUFDLDBEQUFZLElBQUksa0tBQWtLLGlEQUFpRCxzREFBSSxDQUFDLDBEQUFZLElBQUksOEtBQThLLEtBQUs7QUFDeitCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL3BhZ2VzL1RhbGtQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgdXNlRGVmZXJyZWRWYWx1ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IEtleXdvcmRDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoaXBcIjtcbmltcG9ydCB7IE1lZGlhU2VjdGlvbiwgUGFnZSwgUGFnZUhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCB7IHVzZUFwcCB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IGJ1aWxkVW5pcXVlS2V5d29yZHMgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRNZWRpYXMgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmlsdGVyZWRNZWRpYXNcIjtcbmltcG9ydCB7IHVzZUtleXdvcmRTZWxlY3Rpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlS2V5d29yZFNlbGVjdGlvblwiO1xuaW1wb3J0IHsgdXNlUGFnZUFjdGl2ZSB9IGZyb20gXCIuLi9ob29rcy91c2VQYWdlQWN0aXZlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWxrUGFnZSgpIHtcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAoKTtcbiAgICBjb25zdCBhY3RpdmUgPSB1c2VQYWdlQWN0aXZlKCk7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHRhbGtLZXl3b3JkcyA9IHVzZU1lbW8oKCkgPT4gYnVpbGRVbmlxdWVLZXl3b3JkcyhhcHAuZGF0YS50YWxrLmxpdmVzLCBhcHAuZGF0YS50YWxrLmNvbmZlcmVuY2VzKSwgW2FwcC5kYXRhLnRhbGsuY29uZmVyZW5jZXMsIGFwcC5kYXRhLnRhbGsubGl2ZXNdKTtcbiAgICBjb25zdCBrZXl3b3JkU2VsZWN0aW9uID0gdXNlS2V5d29yZFNlbGVjdGlvbih0YWxrS2V5d29yZHMpO1xuICAgIGNvbnN0IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkID0gdXNlRGVmZXJyZWRWYWx1ZShrZXl3b3JkU2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICBjb25zdCBmaWx0ZXJlZExpdmVzID0gdXNlRmlsdGVyZWRNZWRpYXMoYXBwLmRhdGEudGFsay5saXZlcywgZGVmZXJyZWRLZXl3b3JkU2VsZWN0ZWQpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ29uZmVyZW5jZXMgPSB1c2VGaWx0ZXJlZE1lZGlhcyhhcHAuZGF0YS50YWxrLmNvbmZlcmVuY2VzLCBkZWZlcnJlZEtleXdvcmRTZWxlY3RlZCk7XG4gICAgcmV0dXJuIChfanN4cyhQYWdlLCB7IGNoaWxkcmVuOiBbX2pzeChQYWdlSGVhZGVyLCB7IGZhZGVUaW1lOiA1MDAsIGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBtYjogXCIzMHB4XCIsIGZvbnRTaXplOiB7IHNtOiBcIjE2cHhcIiwgbGc6IFwiMThweFwiIH0gfSwgY2hpbGRyZW46IF9qc3hzKFRyYW5zLCB7IGkxOG5LZXk6IFwidGFsazpoZWFkZXJcIiwgY2hpbGRyZW46IFtcIkhlcmUgeW91IGNhbiBmaW5kIHNvbWUgb2YgbXkgXCIsIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJ0YWxrc1wiIH0pXSB9KSB9KSB9KSwgYWN0aXZlICYmIChfanN4KEtleXdvcmRDaGlwcywgeyBrZXl3b3JkczogdGFsa0tleXdvcmRzLCBzZWxlY3RlZEtleXdvcmRzOiBkZWZlcnJlZEtleXdvcmRTZWxlY3RlZCwgb25LZXl3b3JkQ2xpY2tlZDoga2V5d29yZFNlbGVjdGlvbi5vbkl0ZW1DbGlja2VkLCBvbkNsZWFyU2VsZWN0aW9uOiBrZXl3b3JkU2VsZWN0aW9uLm9uQ2xlYXIsIGZhZGVUaW1lOiA1MDAgfSkpLCBhY3RpdmUgJiYgZmlsdGVyZWRMaXZlcy5sZW5ndGggPiAwICYmIChfanN4KE1lZGlhU2VjdGlvbiwgeyB0aXRsZTogdChcImxpdGVyYWw6bGl2ZXNcIiksIGZhZGVUaW1lOiAxMDAwLCBzZWxlY3RlZEtleXdvcmRzOiBkZWZlcnJlZEtleXdvcmRTZWxlY3RlZCwgb25LZXl3b3JkQ2xpY2tlZDoga2V5d29yZFNlbGVjdGlvbi5vbkl0ZW1DbGlja2VkLCBtZWRpYUxpc3Q6IGZpbHRlcmVkTGl2ZXMgfSkpLCBhY3RpdmUgJiYgZmlsdGVyZWRDb25mZXJlbmNlcy5sZW5ndGggPiAwICYmIChfanN4KE1lZGlhU2VjdGlvbiwgeyB0aXRsZTogdChcImxpdGVyYWw6Y29uZmVyZW5jZXNcIiksIGZhZGVUaW1lOiAxNTAwLCBzZWxlY3RlZEtleXdvcmRzOiBkZWZlcnJlZEtleXdvcmRTZWxlY3RlZCwgb25LZXl3b3JkQ2xpY2tlZDoga2V5d29yZFNlbGVjdGlvbi5vbkl0ZW1DbGlja2VkLCBtZWRpYUxpc3Q6IGZpbHRlcmVkQ29uZmVyZW5jZXMgfSkpXSB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=