"use strict";
(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([["src_pages_TextPage_tsx"],{

/***/ "./src/pages/TextPage.tsx":
/*!********************************!*\
  !*** ./src/pages/TextPage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextPage)
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











function TextPage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useApp)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_8__.usePageActive)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const textKeywords = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_data__WEBPACK_IMPORTED_MODULE_5__.buildUniqueKeywords)(app.data.text.mastersThesis, app.data.text.blogPosts), [app.data.text.mastersThesis, app.data.text.blogPosts]);
    const keywordSelection = (0,_hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_7__.useKeywordSelection)(textKeywords);
    const deferredKeywordSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useDeferredValue)(keywordSelection.selected);
    const filteredMasterThesis = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_6__.useFilteredMedias)(app.data.text.mastersThesis, deferredKeywordSelected);
    const filteredBlogPosts = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_6__.useFilteredMedias)(app.data.text.blogPosts, deferredKeywordSelected);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page__WEBPACK_IMPORTED_MODULE_3__.Page, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.PageHeader, { fadeTime: 500, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { component: "div", sx: { mb: "30px", fontSize: { sm: "16px", lg: "18px" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_11__.Trans, { i18nKey: "text:header", children: ["Here you can find some of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "texts" })] }) }) }), active && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chip__WEBPACK_IMPORTED_MODULE_2__.KeywordChips, { keywords: textKeywords, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, onClearSelection: keywordSelection.onClear, fadeTime: 500 })), active && filteredMasterThesis.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.MediaSection, { title: t("literal:mastersThesis"), fadeTime: 1000, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, mediaList: filteredMasterThesis })), active && filteredBlogPosts.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_3__.MediaSection, { title: t("literal:blogPosts"), fadeTime: 1500, selectedKeywords: deferredKeywordSelected, onKeywordClicked: keywordSelection.onItemClicked, mediaList: filteredBlogPosts }))] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1RleHRQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDYjtBQUNBO0FBQ0k7QUFDSjtBQUNrQjtBQUNyQjtBQUNEO0FBQ2lCO0FBQ0k7QUFDWjtBQUN4QztBQUNmLGdCQUFnQiwyREFBTTtBQUN0QixtQkFBbUIsbUVBQWE7QUFDaEMsWUFBWSxJQUFJLEVBQUUsNkRBQWM7QUFDaEMseUJBQXlCLDhDQUFPLE9BQU8sMERBQW1CO0FBQzFELDZCQUE2QiwrRUFBbUI7QUFDaEQsb0NBQW9DLHVEQUFnQjtBQUNwRCxpQ0FBaUMsMkVBQWlCO0FBQ2xELDhCQUE4QiwyRUFBaUI7QUFDL0MsWUFBWSx1REFBSyxDQUFDLGtEQUFJLElBQUksV0FBVyxzREFBSSxDQUFDLHdEQUFVLElBQUkseUJBQXlCLHNEQUFJLENBQUMsaUVBQVUsSUFBSSx3QkFBd0Isd0JBQXdCLDBCQUEwQixZQUFZLHVEQUFLLENBQUMsaURBQUssSUFBSSxvRUFBb0Usc0RBQUksYUFBYSxtQkFBbUIsSUFBSSxHQUFHLEdBQUcsY0FBYyxzREFBSSxDQUFDLDBEQUFZLElBQUksZ0xBQWdMLGtEQUFrRCxzREFBSSxDQUFDLDBEQUFZLElBQUksaUxBQWlMLCtDQUErQyxzREFBSSxDQUFDLDBEQUFZLElBQUksMEtBQTBLLEtBQUs7QUFDei9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL3BhZ2VzL1RleHRQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgdXNlRGVmZXJyZWRWYWx1ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IEtleXdvcmRDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoaXBcIjtcbmltcG9ydCB7IE1lZGlhU2VjdGlvbiwgUGFnZSwgUGFnZUhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCB7IHVzZUFwcCB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IGJ1aWxkVW5pcXVlS2V5d29yZHMgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRNZWRpYXMgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmlsdGVyZWRNZWRpYXNcIjtcbmltcG9ydCB7IHVzZUtleXdvcmRTZWxlY3Rpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlS2V5d29yZFNlbGVjdGlvblwiO1xuaW1wb3J0IHsgdXNlUGFnZUFjdGl2ZSB9IGZyb20gXCIuLi9ob29rcy91c2VQYWdlQWN0aXZlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0UGFnZSgpIHtcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAoKTtcbiAgICBjb25zdCBhY3RpdmUgPSB1c2VQYWdlQWN0aXZlKCk7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHRleHRLZXl3b3JkcyA9IHVzZU1lbW8oKCkgPT4gYnVpbGRVbmlxdWVLZXl3b3JkcyhhcHAuZGF0YS50ZXh0Lm1hc3RlcnNUaGVzaXMsIGFwcC5kYXRhLnRleHQuYmxvZ1Bvc3RzKSwgW2FwcC5kYXRhLnRleHQubWFzdGVyc1RoZXNpcywgYXBwLmRhdGEudGV4dC5ibG9nUG9zdHNdKTtcbiAgICBjb25zdCBrZXl3b3JkU2VsZWN0aW9uID0gdXNlS2V5d29yZFNlbGVjdGlvbih0ZXh0S2V5d29yZHMpO1xuICAgIGNvbnN0IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkID0gdXNlRGVmZXJyZWRWYWx1ZShrZXl3b3JkU2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICBjb25zdCBmaWx0ZXJlZE1hc3RlclRoZXNpcyA9IHVzZUZpbHRlcmVkTWVkaWFzKGFwcC5kYXRhLnRleHQubWFzdGVyc1RoZXNpcywgZGVmZXJyZWRLZXl3b3JkU2VsZWN0ZWQpO1xuICAgIGNvbnN0IGZpbHRlcmVkQmxvZ1Bvc3RzID0gdXNlRmlsdGVyZWRNZWRpYXMoYXBwLmRhdGEudGV4dC5ibG9nUG9zdHMsIGRlZmVycmVkS2V5d29yZFNlbGVjdGVkKTtcbiAgICByZXR1cm4gKF9qc3hzKFBhZ2UsIHsgY2hpbGRyZW46IFtfanN4KFBhZ2VIZWFkZXIsIHsgZmFkZVRpbWU6IDUwMCwgY2hpbGRyZW46IF9qc3goVHlwb2dyYXBoeSwgeyBjb21wb25lbnQ6IFwiZGl2XCIsIHN4OiB7IG1iOiBcIjMwcHhcIiwgZm9udFNpemU6IHsgc206IFwiMTZweFwiLCBsZzogXCIxOHB4XCIgfSB9LCBjaGlsZHJlbjogX2pzeHMoVHJhbnMsIHsgaTE4bktleTogXCJ0ZXh0OmhlYWRlclwiLCBjaGlsZHJlbjogW1wiSGVyZSB5b3UgY2FuIGZpbmQgc29tZSBvZiBteSBcIiwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcInRleHRzXCIgfSldIH0pIH0pIH0pLCBhY3RpdmUgJiYgKF9qc3goS2V5d29yZENoaXBzLCB7IGtleXdvcmRzOiB0ZXh0S2V5d29yZHMsIHNlbGVjdGVkS2V5d29yZHM6IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkLCBvbktleXdvcmRDbGlja2VkOiBrZXl3b3JkU2VsZWN0aW9uLm9uSXRlbUNsaWNrZWQsIG9uQ2xlYXJTZWxlY3Rpb246IGtleXdvcmRTZWxlY3Rpb24ub25DbGVhciwgZmFkZVRpbWU6IDUwMCB9KSksIGFjdGl2ZSAmJiBmaWx0ZXJlZE1hc3RlclRoZXNpcy5sZW5ndGggPiAwICYmIChfanN4KE1lZGlhU2VjdGlvbiwgeyB0aXRsZTogdChcImxpdGVyYWw6bWFzdGVyc1RoZXNpc1wiKSwgZmFkZVRpbWU6IDEwMDAsIHNlbGVjdGVkS2V5d29yZHM6IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkLCBvbktleXdvcmRDbGlja2VkOiBrZXl3b3JkU2VsZWN0aW9uLm9uSXRlbUNsaWNrZWQsIG1lZGlhTGlzdDogZmlsdGVyZWRNYXN0ZXJUaGVzaXMgfSkpLCBhY3RpdmUgJiYgZmlsdGVyZWRCbG9nUG9zdHMubGVuZ3RoID4gMCAmJiAoX2pzeChNZWRpYVNlY3Rpb24sIHsgdGl0bGU6IHQoXCJsaXRlcmFsOmJsb2dQb3N0c1wiKSwgZmFkZVRpbWU6IDE1MDAsIHNlbGVjdGVkS2V5d29yZHM6IGRlZmVycmVkS2V5d29yZFNlbGVjdGVkLCBvbktleXdvcmRDbGlja2VkOiBrZXl3b3JkU2VsZWN0aW9uLm9uSXRlbUNsaWNrZWQsIG1lZGlhTGlzdDogZmlsdGVyZWRCbG9nUG9zdHMgfSkpXSB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=