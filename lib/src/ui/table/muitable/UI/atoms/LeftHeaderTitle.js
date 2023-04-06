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
var interface_1 = require("../../interface");
var LeftHeaderTitle = function (_a) {
    var title = _a.title, _b = _a.colSpan, colSpan = _b === void 0 ? 1 : _b, _c = _a.rowSpan, rowSpan = _c === void 0 ? 1 : _c;
    return (0, interface_1.CustomColumnRow)((0, jsx_runtime_1.jsx)("div", __assign({ className: 'text-sm py-2' }, { children: title })), colSpan, rowSpan);
};
exports.default = LeftHeaderTitle;
