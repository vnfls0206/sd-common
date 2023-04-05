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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
var CustomStyleTable = function (_a) {
    var header = _a.header, row = _a.row, style = _a.style, className = _a.className;
    return (_jsx("div", __assign({ className: 'flex justify-center' }, { children: _jsxs(Table, __assign({ className: '', sx: style, size: 'small' }, { children: [_jsx(TableHead, { children: header && header.map(function (row, index) { return _jsx(TableRow, { children: row.map(function (item, index) {
                            return _jsx(TableCell, __assign({ className: item.className, align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan, width: item.widthRatio }, { children: _jsx("div", __assign({ className: 'text-sm h-full' }, { children: item.content }), item.className) }), index);
                        }) }, index); }) }), _jsx(TableBody, { children: row.map(function (body, index) { return _jsx(TableRow, { children: body.map(function (item, index) {
                            return _jsx(TableCell, __assign({ className: item.className, align: 'center', valign: 'middle', colSpan: item.colSpan, rowSpan: item.rowSpan }, { children: _jsx("div", __assign({ className: 'text-xs font-[700] h-full min-h-4 ' + className }, { children: item.content }), item.className) }), index);
                        }) }, index); }) })] })) })));
};
export default CustomStyleTable;
