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
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var _components_chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chip */ "./src/components/chip/index.tsx");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./src/components/page/index.tsx");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFilteredMedias */ "./src/hooks/useFilteredMedias.tsx");
/* harmony import */ var _hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useKeywordSelection */ "./src/hooks/useKeywordSelection.tsx");
/* harmony import */ var _hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePageActive */ "./src/hooks/usePageActive.tsx");









function TalkPage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__.usePageActive)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const keywordSelection = (0,_hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_5__.useKeywordSelection)(app.data.talk.lives, app.data.talk.conferences);
    const filteredLives = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__.useFilteredMedias)(app.data.talk.lives, keywordSelection);
    const filteredConferences = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__.useFilteredMedias)(app.data.talk.conferences, keywordSelection);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page__WEBPACK_IMPORTED_MODULE_2__.Page, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__.PageHeader, { fadeTime: 500, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { component: "div", sx: { mb: "30px", fontSize: { sm: "16px", lg: "18px" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "talk:header", children: ["Here you can find some of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "talks" })] }) }) }), active && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chip__WEBPACK_IMPORTED_MODULE_1__.KeywordChips, { fadeTime: 500, keywordSelection: keywordSelection }), active && filteredLives.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__.MediaSection, { title: t("literal:lives"), fadeTime: 1000, keywordSelection: keywordSelection, mediaList: filteredLives })), active && filteredConferences.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__.MediaSection, { title: t("literal:conferences"), fadeTime: 1500, keywordSelection: keywordSelection, mediaList: filteredConferences }))] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1RhbGtQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDYjtBQUNJO0FBQ0o7QUFDa0I7QUFDckI7QUFDZ0I7QUFDSTtBQUNaO0FBQ3hDO0FBQ2YsZ0JBQWdCLDJEQUFNO0FBQ3RCLG1CQUFtQixtRUFBYTtBQUNoQyxZQUFZLElBQUksRUFBRSw2REFBYztBQUNoQyw2QkFBNkIsK0VBQW1CO0FBQ2hELDBCQUEwQiwyRUFBaUI7QUFDM0MsZ0NBQWdDLDJFQUFpQjtBQUNqRCxZQUFZLHVEQUFLLENBQUMsa0RBQUksSUFBSSxXQUFXLHNEQUFJLENBQUMsd0RBQVUsSUFBSSx5QkFBeUIsc0RBQUksQ0FBQyxnRUFBVSxJQUFJLHdCQUF3Qix3QkFBd0IsMEJBQTBCLFlBQVksdURBQUssQ0FBQyxnREFBSyxJQUFJLG9FQUFvRSxzREFBSSxhQUFhLG1CQUFtQixJQUFJLEdBQUcsR0FBRyxhQUFhLHNEQUFJLENBQUMsMERBQVksSUFBSSxtREFBbUQsMENBQTBDLHNEQUFJLENBQUMsMERBQVksSUFBSSx5R0FBeUcsaURBQWlELHNEQUFJLENBQUMsMERBQVksSUFBSSxxSEFBcUgsS0FBSztBQUN4dkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJhcHAvLi9zcmMvcGFnZXMvVGFsa1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBUcmFucywgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgS2V5d29yZENoaXBzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hpcFwiO1xuaW1wb3J0IHsgTWVkaWFTZWN0aW9uLCBQYWdlLCBQYWdlSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSBcIi4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRNZWRpYXMgfSBmcm9tIFwiLi4vaG9va3MvdXNlRmlsdGVyZWRNZWRpYXNcIjtcbmltcG9ydCB7IHVzZUtleXdvcmRTZWxlY3Rpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlS2V5d29yZFNlbGVjdGlvblwiO1xuaW1wb3J0IHsgdXNlUGFnZUFjdGl2ZSB9IGZyb20gXCIuLi9ob29rcy91c2VQYWdlQWN0aXZlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWxrUGFnZSgpIHtcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAoKTtcbiAgICBjb25zdCBhY3RpdmUgPSB1c2VQYWdlQWN0aXZlKCk7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IGtleXdvcmRTZWxlY3Rpb24gPSB1c2VLZXl3b3JkU2VsZWN0aW9uKGFwcC5kYXRhLnRhbGsubGl2ZXMsIGFwcC5kYXRhLnRhbGsuY29uZmVyZW5jZXMpO1xuICAgIGNvbnN0IGZpbHRlcmVkTGl2ZXMgPSB1c2VGaWx0ZXJlZE1lZGlhcyhhcHAuZGF0YS50YWxrLmxpdmVzLCBrZXl3b3JkU2VsZWN0aW9uKTtcbiAgICBjb25zdCBmaWx0ZXJlZENvbmZlcmVuY2VzID0gdXNlRmlsdGVyZWRNZWRpYXMoYXBwLmRhdGEudGFsay5jb25mZXJlbmNlcywga2V5d29yZFNlbGVjdGlvbik7XG4gICAgcmV0dXJuIChfanN4cyhQYWdlLCB7IGNoaWxkcmVuOiBbX2pzeChQYWdlSGVhZGVyLCB7IGZhZGVUaW1lOiA1MDAsIGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBtYjogXCIzMHB4XCIsIGZvbnRTaXplOiB7IHNtOiBcIjE2cHhcIiwgbGc6IFwiMThweFwiIH0gfSwgY2hpbGRyZW46IF9qc3hzKFRyYW5zLCB7IGkxOG5LZXk6IFwidGFsazpoZWFkZXJcIiwgY2hpbGRyZW46IFtcIkhlcmUgeW91IGNhbiBmaW5kIHNvbWUgb2YgbXkgXCIsIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJ0YWxrc1wiIH0pXSB9KSB9KSB9KSwgYWN0aXZlICYmIF9qc3goS2V5d29yZENoaXBzLCB7IGZhZGVUaW1lOiA1MDAsIGtleXdvcmRTZWxlY3Rpb246IGtleXdvcmRTZWxlY3Rpb24gfSksIGFjdGl2ZSAmJiBmaWx0ZXJlZExpdmVzLmxlbmd0aCA+IDAgJiYgKF9qc3goTWVkaWFTZWN0aW9uLCB7IHRpdGxlOiB0KFwibGl0ZXJhbDpsaXZlc1wiKSwgZmFkZVRpbWU6IDEwMDAsIGtleXdvcmRTZWxlY3Rpb246IGtleXdvcmRTZWxlY3Rpb24sIG1lZGlhTGlzdDogZmlsdGVyZWRMaXZlcyB9KSksIGFjdGl2ZSAmJiBmaWx0ZXJlZENvbmZlcmVuY2VzLmxlbmd0aCA+IDAgJiYgKF9qc3goTWVkaWFTZWN0aW9uLCB7IHRpdGxlOiB0KFwibGl0ZXJhbDpjb25mZXJlbmNlc1wiKSwgZmFkZVRpbWU6IDE1MDAsIGtleXdvcmRTZWxlY3Rpb246IGtleXdvcmRTZWxlY3Rpb24sIG1lZGlhTGlzdDogZmlsdGVyZWRDb25mZXJlbmNlcyB9KSldIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==