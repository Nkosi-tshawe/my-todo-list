function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-todo-index-module"], {
  /***/
  "./src/app/modules/todo-index-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/todo-index-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: TodoIndexRoutingModule */

  /***/
  function srcAppModulesTodoIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoIndexRoutingModule", function () {
      return TodoIndexRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components */
    "./src/app/components/index.ts");

    var routes = [{
      path: '',
      component: _components__WEBPACK_IMPORTED_MODULE_2__["TodoIndexRouteComponent"]
    }];

    var TodoIndexRoutingModule = function TodoIndexRoutingModule() {
      _classCallCheck(this, TodoIndexRoutingModule);
    };

    TodoIndexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TodoIndexRoutingModule
    });
    TodoIndexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TodoIndexRoutingModule_Factory(t) {
        return new (t || TodoIndexRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoIndexRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoIndexRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/todo-index.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/modules/todo-index.module.ts ***!
    \**********************************************/

  /*! exports provided: TodoIndexModule */

  /***/
  function srcAppModulesTodoIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoIndexModule", function () {
      return TodoIndexModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _todo_index_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo-index-routing.module */
    "./src/app/modules/todo-index-routing.module.ts");
    /* harmony import */


    var _service_todo_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/todo-service.service */
    "./src/app/service/todo-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TodoIndexModule = function TodoIndexModule() {
      _classCallCheck(this, TodoIndexModule);
    };

    TodoIndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TodoIndexModule
    });
    TodoIndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TodoIndexModule_Factory(t) {
        return new (t || TodoIndexModule)();
      },
      providers: [_service_todo_service_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _todo_index_routing_module__WEBPACK_IMPORTED_MODULE_3__["TodoIndexRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoIndexModule, {
        declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["TodoIndexRouteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _todo_index_routing_module__WEBPACK_IMPORTED_MODULE_3__["TodoIndexRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoIndexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["TodoIndexRouteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"]],
          providers: [_service_todo_service_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _todo_index_routing_module__WEBPACK_IMPORTED_MODULE_3__["TodoIndexRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-todo-index-module-es5.js.map