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
var StyledMuiTable_1 = require("./styled/StyledMuiTable");
var interface_1 = require("./interface");
var LeftHeaderMuiTable_1 = require("./styled/LeftHeaderMuiTable");
var ModalMuiTable_1 = require("./styled/ModalMuiTable");
var MultiRowStyle_1 = require("./styled/MultiRowStyle");
var CustomColumnTable = function (_a) {
    var header = _a.header, row = _a.row, _b = _a.style, style = _b === void 0 ? interface_1.MuiTableStyle.DEFAULT : _b;
    function styledTable(styledType) {
        if (styledType === interface_1.MuiTableStyle.LEFT_HEADER) {
            return LeftHeaderMuiTable_1.default;
        }
        else if (styledType === interface_1.MuiTableStyle.MODAL) {
            return ModalMuiTable_1.default;
        }
        else if (styledType === interface_1.MuiTableStyle.MULTIROW) {
            return MultiRowStyle_1.default;
        }
        else {
            return StyledMuiTable_1.default;
        }
    }
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'flex justify-center' }, { children: (0, jsx_runtime_1.jsxs)(material_1.Table, __assign({ className: '', sx: styledTable(style), size: 'small' }, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: header && header.map(function (row, index) { return (0, jsx_runtime_1.jsx)(material_1.TableRow, { children: row.map(function (item, index) {
                            return (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ className: "".concat(item.className), align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan, width: item.widthRatio }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'text-sm h-full font-[550]' }, { children: item.content }), item.className) }), index);
                        }) }, index); }) }), (0, jsx_runtime_1.jsx)(material_1.TableBody, { children: row.map(function (body, index) { return (0, jsx_runtime_1.jsx)(material_1.TableRow, { children: body.map(function (item, index) {
                            return (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ className: item.className, align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'text-sm' }, { children: item.content }), item.className) }), index);
                        }) }, index); }) })] })) })));
};
CustomColumnTable.defaultProps = {};
exports.default = CustomColumnTable;
