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
var material_1 = require("@mui/material");
var DefaultStyledDataGrid_1 = require("./styled/DefaultStyledDataGrid");
var TestStyledDataGrid_1 = require("./styled/TestStyledDataGrid");
var interface_1 = require("./interface");
var QuestionStyledDataGrid_1 = require("./styled/QuestionStyledDataGrid");
var StyledDataGrid = function (_a) {
    var styledType = _a.styledType, props = __rest(_a, ["styledType"]);
    var styledDataGrid = function (styledType) {
        if (styledType === interface_1.StyledType.TEST) {
            return (0, jsx_runtime_1.jsx)(TestStyledDataGrid_1.default, __assign({}, props));
        }
        else if (styledType === interface_1.StyledType.QUESTION) {
            return (0, jsx_runtime_1.jsx)(QuestionStyledDataGrid_1.default, __assign({}, props));
        }
        else {
            return (0, jsx_runtime_1.jsx)(DefaultStyledDataGrid_1.default, __assign({}, props));
        }
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { children: styledDataGrid(styledType) }));
};
StyledDataGrid.defaultProps = {
    styledType: interface_1.StyledType.DEFAULT
};
exports.default = StyledDataGrid;
