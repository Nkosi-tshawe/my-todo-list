(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-todo-index-module~modules-todo-module"],{

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: TodoIndexRouteComponent, TodoRouteComponent, TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_index_route_todo_index_route_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-index-route/todo-index-route.component */ "./src/app/components/todo-index-route/todo-index-route.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoIndexRouteComponent", function() { return _todo_index_route_todo_index_route_component__WEBPACK_IMPORTED_MODULE_0__["TodoIndexRouteComponent"]; });

/* harmony import */ var _todo_route_todo_route_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-route/todo-route.component */ "./src/app/components/todo-route/todo-route.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoRouteComponent", function() { return _todo_route_todo_route_component__WEBPACK_IMPORTED_MODULE_1__["TodoRouteComponent"]; });

/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"]; });






/***/ }),

/***/ "./src/app/components/todo-index-route/todo-index-route.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/todo-index-route/todo-index-route.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodoIndexRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoIndexRouteComponent", function() { return TodoIndexRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_todo_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/todo-service.service */ "./src/app/service/todo-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo/todo.component */ "./src/app/components/todo/todo.component.ts");






function TodoIndexRouteComponent_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-todo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateStatus", function TodoIndexRouteComponent_div_1_div_4_div_1_Template_app_todo_updateStatus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r6);
} }
function TodoIndexRouteComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoIndexRouteComponent_div_1_div_4_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todos_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", todos_r4);
} }
function TodoIndexRouteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VIEW ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoIndexRouteComponent_div_1_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r0.todos$))("ngIfElse", _r1);
} }
function TodoIndexRouteComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TodoIndexRouteComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ;
    ngOnInit() {
        this.fetchData$ = this.todoService.getTodos(5);
        this.todos$ = this.todoService.todos$;
    }
    onChange(id) {
        this.todoService.updateStatus(id);
    }
}
TodoIndexRouteComponent.ɵfac = function TodoIndexRouteComponent_Factory(t) { return new (t || TodoIndexRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_todo_service_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"])); };
TodoIndexRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoIndexRouteComponent, selectors: [["app-todo-index-route"]], decls: 6, vars: 4, consts: [[1, "todo-list", "bg-white", "rounded-md", "shadow-lg"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "p-2", "pl-4", "pr-4", "header", "bg-gray-200"], [1, "text-uppercase"], ["class", "divide-y divide-gray-300", 4, "ngIf", "ngIfElse"], [1, "divide-y", "divide-gray-300"], ["class", "text-left todo-list-item p-2 pl-4 pr-4 ", 4, "ngFor", "ngForOf"], [1, "text-left", "todo-list-item", "p-2", "pl-4", "pr-4"], [3, "todo", "updateStatus"], [1, "p-2", "pl-4", "pr-4"]], template: function TodoIndexRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoIndexRouteComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoIndexRouteComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.fetchData$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     .todo-list {\n  min-width: 600px;\n}\n[_nghost-%COMP%]     .todo-list .todo-list-item {\n  position: relative;\n}\n[_nghost-%COMP%]     .todo-list .todo-list-item .title {\n  color: red;\n  font-size: 1.125rem;\n  display: inline-block;\n  width: 450px;\n}\n[_nghost-%COMP%]     .todo-list .todo-list-item .switch {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]     .todo-list .todo-list-item .date {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZy9kZXZlbG9wbWVudC9hbmd1bGFyLXByb2plY3RzL3Nob3ByaXRlLWFzc2Vzc21lbnQvc3JjL2FwcC9jb21wb25lbnRzL3RvZG8taW5kZXgtcm91dGUvdG9kby1pbmRleC1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWluZGV4LXJvdXRlL3RvZG8taW5kZXgtcm91dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FEQU07RUFBUyxVQUFBO0VBQ1AsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNHUjtBRERNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNHUjtBRERNO0VBQVEsZUFBQTtBQ0lkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWluZGV4LXJvdXRlL3RvZG8taW5kZXgtcm91dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAudG9kby1saXN0ICB7XG4gICAgbWluLXdpZHRoOjYwMHB4O1xuICAgIC50b2RvLWxpc3QtaXRlbSB7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIC50aXRsZSB7IGNvbG9yOiByZWQ7XG4gICAgICAgIGZvbnQtc2l6ZToxLjEyNXJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDo0NTBweDtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2ggIHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuICAgICAgLmRhdGUgeyBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiOmhvc3QgOjpuZy1kZWVwIC50b2RvLWxpc3Qge1xuICBtaW4td2lkdGg6IDYwMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2RvLWxpc3QgLnRvZG8tbGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2RvLWxpc3QgLnRvZG8tbGlzdC1pdGVtIC50aXRsZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ1MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2RvLWxpc3QgLnRvZG8tbGlzdC1pdGVtIC5zd2l0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tbGlzdCAudG9kby1saXN0LWl0ZW0gLmRhdGUge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoIndexRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-index-route',
                templateUrl: './todo-index-route.component.html',
                styleUrls: ['./todo-index-route.component.scss']
            }]
    }], function () { return [{ type: _service_todo_service_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/todo-route/todo-route.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-route/todo-route.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRouteComponent", function() { return TodoRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_todo_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/todo-service.service */ "./src/app/service/todo-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function TodoRouteComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "07");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.todo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status ", ctx_r0.todo.completed ? "done" : "pending", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx_r0.todo.dueDate, "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 9, ctx_r0.todo.dueDate, "LLLL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 12, ctx_r0.todo.dueDate, "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 15, ctx_r0.todo.dueDate, "shortTime"));
} }
class TodoRouteComponent {
    constructor(_location, todoService, router, activatedRoute) {
        this._location = _location;
        this.todoService = todoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        // get activated route params
        this.todoId = this.activatedRoute.snapshot.paramMap.get('id');
        //  // Fetch todo data
        this.fetchData$ = this.todoService.getTodo(this.todoId);
        // Subscribe and assign data 
        this.fetchData$.subscribe((data) => {
            1;
            this.todo = data;
        });
    }
    /**
     * Go Back to /todos page
     */
    goBack() {
        this.router.navigateByUrl('/todos');
    }
}
TodoRouteComponent.ɵfac = function TodoRouteComponent_Factory(t) { return new (t || TodoRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_todo_service_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TodoRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoRouteComponent, selectors: [["app-todo-route"]], decls: 7, vars: 2, consts: [[1, "todo-item"], [1, "p-2", "pl-4", "pr-4", "header", "bg-gray-200", "inline-flex", "w-full"], [1, "text-uppercase", "flex-grow", "self-center"], [1, "self-end", "bg-gray-300", "hover:bg-gray-400", "text-gray-800", "font-bold", "py-2", "px-4", "rounded", "inline-flex", "items-center", 3, "click"], ["class", "body p-2 pl-4 pr-4 inline-flex w-full", 4, "ngIf"], [1, "body", "p-2", "pl-4", "pr-4", "inline-flex", "w-full"], [1, "title", "flex-grow"], [1, "text-2xl"], [1, "due-date"], [1, "date-as-calendar", "position-pixels"], [1, "weekday"], [1, "day"], [1, "month"], [1, "year"], [1, "time"]], template: function TodoRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoRouteComponent_Template_button_click_4_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoRouteComponent_div_6_Template, 22, 18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("VIEW TODO: ", ctx.todoId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%]     .todo-item {\n  min-width: 600px;\n}\n\n.date-as-calendar[_ngcontent-%COMP%] {\n  font-variant: normal;\n  font-style: normal;\n  font-weight: normal;\n  font-family: Arial;\n  vertical-align: top;\n  color: #303030;\n  background: #E0E0E0;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 2px -2px black;\n}\n\n.date-as-calendar[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%], .date-as-calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .date-as-calendar[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%], .date-as-calendar[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%], .date-as-calendar[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 1;\n}\n\n.date-as-calendar[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-family: Arial;\n  text-transform: uppercase;\n  background: #F03020;\n  color: #F0F0F0;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 64px;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%], .position-pixels.date-as-calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%], .position-pixels.date-as-calendar[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%], .position-pixels.date-as-calendar[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%], .position-pixels.date-as-calendar[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 1em;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  top: 0px;\n  font-size: 10px;\n  padding: 2px 0;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%] {\n  top: 16px;\n  font-size: 10px;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  top: 26px;\n  font-size: 24px;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  top: 50px;\n  font-size: 14px;\n}\n\n.position-pixels.date-as-calendar[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  float: left;\n  padding: 3px;\n  width: 40px;\n  height: 28px;\n  margin-top: 15px;\n  margin-left: -3px;\n  font-variant: normal;\n  font-style: normal;\n  font-weight: normal;\n  font-family: Arial;\n  vertical-align: top;\n  font-size: 12px;\n  text-align: center;\n  background: #C0C0C0;\n  border: 1px solid #ccc;\n  border-top-right-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 2px -2px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZy9kZXZlbG9wbWVudC9hbmd1bGFyLXByb2plY3RzL3Nob3ByaXRlLWFzc2Vzc21lbnQvc3JjL2FwcC9jb21wb25lbnRzL3RvZG8tcm91dGUvdG9kby1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b2RvLXJvdXRlL3RvZG8tcm91dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKOztBRElBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FDREY7O0FESUE7Ozs7O0VBS0Usa0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERjs7QURNSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNITjs7QURLSTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hOOztBREtJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNITjs7QURLSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDSE47O0FES0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0hOOztBREtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLXJvdXRlL3RvZG8tcm91dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAudG9kby1pdGVtICB7XG4gICAgbWluLXdpZHRoOjYwMHB4O1xuICB9XG59XG5cbi5kYXRlLWFzLWNhbGVuZGFyIHtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAtMnB4IGJsYWNrO1xufVxuXG4uZGF0ZS1hcy1jYWxlbmRhciAud2Vla2RheSxcbiAgLmRhdGUtYXMtY2FsZW5kYXIgLmRheSxcbiAgLmRhdGUtYXMtY2FsZW5kYXIgLm1vbnRoLFxuICAuZGF0ZS1hcy1jYWxlbmRhciAueWVhcixcbiAgLmRhdGUtYXMtY2FsZW5kYXIgLnRpbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjA7XG59XG5cbi5kYXRlLWFzLWNhbGVuZGFyIC5tb250aCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogI0YwMzAyMDtcbiAgY29sb3I6ICNGMEYwRjA7XG59XG5cbi5wb3NpdGlvbi1waXhlbHMuZGF0ZS1hcy1jYWxlbmRhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4ucG9zaXRpb24tcGl4ZWxzIHtcbiAgJi5kYXRlLWFzLWNhbGVuZGFyIHtcbiAgICAud2Vla2RheSwuZGF5LC5tb250aCwueWVhciwudGltZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxuICAgIC5tb250aCB7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHBhZGRpbmc6IDJweCAwO1xuICAgIH1cbiAgICAud2Vla2RheSB7XG4gICAgICB0b3A6IDE2cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIC5kYXkge1xuICAgICAgdG9wOiAyNnB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAueWVhciB7XG4gICAgICB0b3A6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC50aW1lIHtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICBwYWRkaW5nOjNweDtcbiAgICAgIHdpZHRoOjQwcHg7XG4gICAgICBoZWlnaHQ6MjhweDtcbiAgICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICAgIG1hcmdpbi1sZWZ0Oi0zcHg7XG4gICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNDMEMwQzA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAtMnB4IGJsYWNrO1xuICAgIH1cbiAgfVxufSIsIjpob3N0IDo6bmctZGVlcCAudG9kby1pdGVtIHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuLmRhdGUtYXMtY2FsZW5kYXIge1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IC0ycHggYmxhY2s7XG59XG5cbi5kYXRlLWFzLWNhbGVuZGFyIC53ZWVrZGF5LFxuLmRhdGUtYXMtY2FsZW5kYXIgLmRheSxcbi5kYXRlLWFzLWNhbGVuZGFyIC5tb250aCxcbi5kYXRlLWFzLWNhbGVuZGFyIC55ZWFyLFxuLmRhdGUtYXMtY2FsZW5kYXIgLnRpbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uZGF0ZS1hcy1jYWxlbmRhciAubW9udGgge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6ICNGMDMwMjA7XG4gIGNvbG9yOiAjRjBGMEYwO1xufVxuXG4ucG9zaXRpb24tcGl4ZWxzLmRhdGUtYXMtY2FsZW5kYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnBvc2l0aW9uLXBpeGVscy5kYXRlLWFzLWNhbGVuZGFyIC53ZWVrZGF5LCAucG9zaXRpb24tcGl4ZWxzLmRhdGUtYXMtY2FsZW5kYXIgLmRheSwgLnBvc2l0aW9uLXBpeGVscy5kYXRlLWFzLWNhbGVuZGFyIC5tb250aCwgLnBvc2l0aW9uLXBpeGVscy5kYXRlLWFzLWNhbGVuZGFyIC55ZWFyLCAucG9zaXRpb24tcGl4ZWxzLmRhdGUtYXMtY2FsZW5kYXIgLnRpbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMWVtO1xufVxuLnBvc2l0aW9uLXBpeGVscy5kYXRlLWFzLWNhbGVuZGFyIC5tb250aCB7XG4gIHRvcDogMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuLnBvc2l0aW9uLXBpeGVscy5kYXRlLWFzLWNhbGVuZGFyIC53ZWVrZGF5IHtcbiAgdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucG9zaXRpb24tcGl4ZWxzLmRhdGUtYXMtY2FsZW5kYXIgLmRheSB7XG4gIHRvcDogMjZweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnBvc2l0aW9uLXBpeGVscy5kYXRlLWFzLWNhbGVuZGFyIC55ZWFyIHtcbiAgdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucG9zaXRpb24tcGl4ZWxzLmRhdGUtYXMtY2FsZW5kYXIgLnRpbWUge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0MwQzBDMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggLTJweCBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-route',
                templateUrl: './todo-route.component.html',
                styleUrls: ['./todo-route.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _service_todo_service_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return [a0]; };
class TodoComponent {
    constructor() {
        this.updateStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.status = this.todo.completed;
    }
    onChange() {
        this.status = this.todo.completed = !this.todo.completed;
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], inputs: { todo: "todo" }, outputs: { updateStatus: "updateStatus" }, decls: 10, vars: 10, consts: [[1, "title", 3, "routerLink"], [1, "switch"], ["type", "checkbox", "id", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "slider", "round"], [1, "date", "text-gray-500"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoComponent_Template_input_ngModelChange_3_listener($event) { return ctx.status = $event; })("change", function TodoComponent_Template_input_change_3_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "/todos/" + ctx.todo.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx.todo.dueDate, "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx.todo.completed ? "done" : "pending", "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".switch[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 34px;\n  position: relative;\n  width: 60px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.slider[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  bottom: 0;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.2s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  background-color: #fff;\n  bottom: 4px;\n  content: \"\";\n  height: 26px;\n  left: 4px;\n  position: absolute;\n  transition: 0.2s;\n  width: 26px;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #66bb6a;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZy9kZXZlbG9wbWVudC9hbmd1bGFyLXByb2plY3RzL3Nob3ByaXRlLWFzc2Vzc21lbnQvc3JjL2FwcC9jb21wb25lbnRzL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTpub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvdHRvbTogNHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAuMnM7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSIsIi5zd2l0Y2gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjBweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvdHRvbTogNHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB3aWR0aDogMjZweDtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.scss']
            }]
    }], function () { return []; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~modules-todo-index-module~modules-todo-module-es2015.js.map