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
exports.SortType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
exports.SortType = {
    START: 'justify-start',
    END: 'justify-end',
    BETWEEN: 'justify-between',
    CENTER: 'justify-center'
};
var TableFooterContainer = function (_a) {
    var children = _a.children, startComponent = _a.startComponent, _b = _a.sort, sort = _b === void 0 ? 'justify-end' : _b;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'gap-x-2 flex border border-solid border-[#C1C1C4] border-t-0 py-4 px-2 ' + sort }, { children: [startComponent, (0, jsx_runtime_1.jsx)("div", __assign({ className: 'flex gap-x-2' }, { children: children }))] })));
};
exports.default = TableFooterContainer;
