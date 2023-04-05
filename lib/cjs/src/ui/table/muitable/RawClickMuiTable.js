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
var RawClickMuiTalbeStyle_1 = require("./styled/RawClickMuiTalbeStyle");
var RawClickMuiTable = function (_a) {
    //const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);
    var header = _a.header, row = _a.row;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'flex justify-center text-start' }, { children: (0, jsx_runtime_1.jsxs)(material_1.Table, __assign({ className: '', sx: RawClickMuiTalbeStyle_1.default, size: 'small' }, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: header && header.map(function (row) { return (0, jsx_runtime_1.jsx)(material_1.TableRow, { children: row.map(function (item) {
                            return (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ className: "font-[550] ".concat(item.className), align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan, width: item.widthRatio }, { children: item.content }));
                        }) }); }) }), (0, jsx_runtime_1.jsx)(material_1.TableBody, { children: row.map(function (index, count) { return (0, jsx_runtime_1.jsx)(material_1.TableRow
                    //onClick={setSelectedRow.bind(this, count)}
                    , __assign({ 
                        //onClick={setSelectedRow.bind(this, count)}
                        onDoubleClick: index.rawClickEvent }, { children: index.data.map(function (item, index) {
                            return (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ className: "".concat(item.className), align: 'center', size: 'small', colSpan: item.colSpan, rowSpan: item.rowSpan }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'py-2' }, { children: item.content })) }));
                        }) })); }) })] })) })));
};
RawClickMuiTable.defaultProps = {};
exports.default = RawClickMuiTable;
