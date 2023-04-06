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
var material_1 = require("@mui/material");
var CustomStyleTable = function (_a) {
    var header = _a.header, row = _a.row, style = _a.style, className = _a.className;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'flex justify-center' }, { children: (0, jsx_runtime_1.jsxs)(material_1.Table, __assign({ className: '', sx: style, size: 'small' }, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: header && header.map(function (row, index) { return (0, jsx_runtime_1.jsx)(material_1.TableRow, { children: row.map(function (item, index) {
                            return (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ className: item.className, align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan, width: item.widthRatio }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'text-sm h-full' }, { children: item.content }), item.className) }), index);
                        }) }, index); }) }), (0, jsx_runtime_1.jsx)(material_1.TableBody, { children: row.map(function (body, index) { return (0, jsx_runtime_1.jsx)(material_1.TableRow, { children: body.map(function (item, index) {
                            return (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ className: item.className, align: 'center', valign: 'middle', colSpan: item.colSpan, rowSpan: item.rowSpan }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'text-xs font-[700] h-full min-h-4 ' + className }, { children: item.content }), item.className) }), index);
                        }) }, index); }) })] })) })));
};
exports.default = CustomStyleTable;
