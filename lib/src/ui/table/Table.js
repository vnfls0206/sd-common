"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.tableContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CustomColumnTable_1 = require("./muitable/CustomColumnTable");
var ReactDataGrid_1 = require("./datagrid/ReactDataGrid");
var CustomPagination_1 = require("./component/shared/CustomPagination");
var RawClickMuiTable_1 = require("./muitable/RawClickMuiTable");
var zustand_1 = require("zustand");
var context_1 = require("zustand/context");
var TableHeader_1 = require("./component/shared/TableHeader");
var TableHeaderContainer_1 = require("./component/shared/TableHeaderContainer");
var TableFooterContainer_1 = require("./component/shared/TableFooterContainer");
exports.tableContext = (0, context_1.default)();
function Table(_a) {
    var children = _a.children, useTable = _a.useTable;
    var store = function () {
        return (0, zustand_1.create)(function (get, set) { return ({
            tableQueryData: useTable.tableQueryData,
            setTableQueryData: useTable.setTableQueryData
        }); });
    };
    return ((0, jsx_runtime_1.jsx)(exports.tableContext.Provider, __assign({ createStore: store }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'flex justify-center w-full' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: useTable.size }, { children: children })) })) })));
}
exports.Table = Table;
;
Table.Header = TableHeader_1.default;
Table.CustomColumnTable = CustomColumnTable_1.default;
Table.RawClickMuiTable = RawClickMuiTable_1.default;
Table.DataGrid = ReactDataGrid_1.default;
Table.HeaderContainer = TableHeaderContainer_1.default;
Table.FooterContainer = TableFooterContainer_1.default;
Table.CustomPagenation = CustomPagination_1.default;
