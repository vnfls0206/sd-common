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
var jsx_runtime_1 = require("react/jsx-runtime");
var interface_1 = require("../../datagrid/interface");
var PaginationItem_1 = require("@mui/material/PaginationItem");
var material_1 = require("@mui/material");
var CustomPagination = function (_a) {
    var rowCount = _a.rowCount, tableQueryData = _a.tableQueryData, setTableQueryData = _a.setTableQueryData, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'w-full flex justify-center' }, { children: (0, jsx_runtime_1.jsx)(material_1.Pagination, { variant: "outlined", shape: "rounded", page: Number(tableQueryData.page) + 1, count: Math.trunc(rowCount / Number(tableQueryData.size)) + 1, 
            // @ts-expect-error
            renderItem: function (props2) { return (0, jsx_runtime_1.jsx)(PaginationItem_1.default, __assign({ className: 'bg-transparent border-none' }, props2, { disableRipple: true })); }, onChange: function (event, value) {
                onChange && onChange();
                setTableQueryData(function (pre) { return (0, interface_1.tableQueryDataObj)(__assign(__assign({}, pre), { page: value - 1 })); });
            } }) })));
};
exports.default = CustomPagination;
