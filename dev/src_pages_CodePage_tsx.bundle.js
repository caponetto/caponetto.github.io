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
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var _components_chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chip */ "./src/components/chip/index.tsx");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page */ "./src/components/page/index.tsx");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.tsx");
/* harmony import */ var _hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFilteredMedias */ "./src/hooks/useFilteredMedias.tsx");
/* harmony import */ var _hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useKeywordSelection */ "./src/hooks/useKeywordSelection.tsx");
/* harmony import */ var _hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePageActive */ "./src/hooks/usePageActive.tsx");









function CodePage() {
    const app = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp)();
    const active = (0,_hooks_usePageActive__WEBPACK_IMPORTED_MODULE_6__.usePageActive)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const keywordSelection = (0,_hooks_useKeywordSelection__WEBPACK_IMPORTED_MODULE_5__.useKeywordSelection)(app.data.code.repositories);
    const filteredRepositories = (0,_hooks_useFilteredMedias__WEBPACK_IMPORTED_MODULE_4__.useFilteredMedias)(app.data.code.repositories, keywordSelection);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page__WEBPACK_IMPORTED_MODULE_2__.Page, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__.PageHeader, { fadeTime: 500, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { component: "div", sx: { mb: "30px", fontSize: { sm: "16px", lg: "18px" } }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "code:header", children: ["Here you can find some of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "code" })] }) }) }), active && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chip__WEBPACK_IMPORTED_MODULE_1__.KeywordChips, { fadeTime: 500, keywordSelection: keywordSelection }), active && filteredRepositories.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_2__.MediaSection, { title: t("literal:repositories"), fadeTime: 1000, keywordSelection: keywordSelection, mediaList: filteredRepositories }))] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0NvZGVQYWdlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDYjtBQUNJO0FBQ0o7QUFDa0I7QUFDckI7QUFDZ0I7QUFDSTtBQUNaO0FBQ3hDO0FBQ2YsZ0JBQWdCLDJEQUFNO0FBQ3RCLG1CQUFtQixtRUFBYTtBQUNoQyxZQUFZLElBQUksRUFBRSw2REFBYztBQUNoQyw2QkFBNkIsK0VBQW1CO0FBQ2hELGlDQUFpQywyRUFBaUI7QUFDbEQsWUFBWSx1REFBSyxDQUFDLGtEQUFJLElBQUksV0FBVyxzREFBSSxDQUFDLHdEQUFVLElBQUkseUJBQXlCLHNEQUFJLENBQUMsZ0VBQVUsSUFBSSx3QkFBd0Isd0JBQXdCLDBCQUEwQixZQUFZLHVEQUFLLENBQUMsZ0RBQUssSUFBSSxvRUFBb0Usc0RBQUksYUFBYSxrQkFBa0IsSUFBSSxHQUFHLEdBQUcsYUFBYSxzREFBSSxDQUFDLDBEQUFZLElBQUksbURBQW1ELGlEQUFpRCxzREFBSSxDQUFDLDBEQUFZLElBQUksdUhBQXVILEtBQUs7QUFDamxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2ViYXBwLy4vc3JjL3BhZ2VzL0NvZGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IEtleXdvcmRDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoaXBcIjtcbmltcG9ydCB7IE1lZGlhU2VjdGlvbiwgUGFnZSwgUGFnZUhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCB7IHVzZUFwcCB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IHVzZUZpbHRlcmVkTWVkaWFzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUZpbHRlcmVkTWVkaWFzXCI7XG5pbXBvcnQgeyB1c2VLZXl3b3JkU2VsZWN0aW9uIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUtleXdvcmRTZWxlY3Rpb25cIjtcbmltcG9ydCB7IHVzZVBhZ2VBY3RpdmUgfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnZUFjdGl2ZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVBhZ2UoKSB7XG4gICAgY29uc3QgYXBwID0gdXNlQXBwKCk7XG4gICAgY29uc3QgYWN0aXZlID0gdXNlUGFnZUFjdGl2ZSgpO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBrZXl3b3JkU2VsZWN0aW9uID0gdXNlS2V5d29yZFNlbGVjdGlvbihhcHAuZGF0YS5jb2RlLnJlcG9zaXRvcmllcyk7XG4gICAgY29uc3QgZmlsdGVyZWRSZXBvc2l0b3JpZXMgPSB1c2VGaWx0ZXJlZE1lZGlhcyhhcHAuZGF0YS5jb2RlLnJlcG9zaXRvcmllcywga2V5d29yZFNlbGVjdGlvbik7XG4gICAgcmV0dXJuIChfanN4cyhQYWdlLCB7IGNoaWxkcmVuOiBbX2pzeChQYWdlSGVhZGVyLCB7IGZhZGVUaW1lOiA1MDAsIGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcImRpdlwiLCBzeDogeyBtYjogXCIzMHB4XCIsIGZvbnRTaXplOiB7IHNtOiBcIjE2cHhcIiwgbGc6IFwiMThweFwiIH0gfSwgY2hpbGRyZW46IF9qc3hzKFRyYW5zLCB7IGkxOG5LZXk6IFwiY29kZTpoZWFkZXJcIiwgY2hpbGRyZW46IFtcIkhlcmUgeW91IGNhbiBmaW5kIHNvbWUgb2YgbXkgXCIsIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJjb2RlXCIgfSldIH0pIH0pIH0pLCBhY3RpdmUgJiYgX2pzeChLZXl3b3JkQ2hpcHMsIHsgZmFkZVRpbWU6IDUwMCwga2V5d29yZFNlbGVjdGlvbjoga2V5d29yZFNlbGVjdGlvbiB9KSwgYWN0aXZlICYmIGZpbHRlcmVkUmVwb3NpdG9yaWVzLmxlbmd0aCA+IDAgJiYgKF9qc3goTWVkaWFTZWN0aW9uLCB7IHRpdGxlOiB0KFwibGl0ZXJhbDpyZXBvc2l0b3JpZXNcIiksIGZhZGVUaW1lOiAxMDAwLCBrZXl3b3JkU2VsZWN0aW9uOiBrZXl3b3JkU2VsZWN0aW9uLCBtZWRpYUxpc3Q6IGZpbHRlcmVkUmVwb3NpdG9yaWVzIH0pKV0gfSkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9