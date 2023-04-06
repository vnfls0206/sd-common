"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var x_data_grid_1 = require("@mui/x-data-grid");
var CustomCheckBox_1 = require("../component/CustomCheckBox");
var Table_1 = require("../Table");
var DataGridComponents = function (_a) {
    var isCustomPagination = _a.isCustomPagination, header = _a.header, footer = _a.footer, noRowText = _a.noRowText, props = __rest(_a, ["isCustomPagination", "header", "footer", "noRowText"]);
    var useStore = Table_1.tableContext.useStore;
    var setTableQueryData = useStore().setTableQueryData;
    return {
        Header: header ? function () { return (0, jsx_runtime_1.jsx)(x_data_grid_1.GridFooterContainer, { children: header }); } : undefined,
        Footer: footer ? function () { return (0, jsx_runtime_1.jsx)(x_data_grid_1.GridFooterContainer, { children: footer }); } : undefined,
        BaseCheckbox: CustomCheckBox_1.default,
        NoRowsOverlay: noRowText ? function () {
            return (0, jsx_runtime_1.jsx)(x_data_grid_1.GridOverlay, { children: (0, jsx_runtime_1.jsx)("div", { children: noRowText }) });
        } : undefined
    };
};
DataGridComponents.defaultProps = {
    isCustomPagination: false,
};
exports.default = DataGridComponents;
