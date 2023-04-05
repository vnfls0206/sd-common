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
var react_1 = require("react");
var PageTitle = function (_a) {
    var pageTitle = _a.pageTitle;
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { children: '아리아리ㅁㅁ' }), (0, jsx_runtime_1.jsx)("h2", __assign({ className: 'text-2xl opacity-80 mt-7 mb-5' }, { children: pageTitle }))] }));
};
exports.default = PageTitle;
