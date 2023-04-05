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
import React from 'react';
var PageTitle = function (_a) {
    var pageTitle = _a.pageTitle;
    return (_jsxs(React.Fragment, { children: [_jsx("div", { children: '' }), _jsx("h2", __assign({ className: 'text-2xl opacity-80 mt-7 mb-5' }, { children: pageTitle }))] }));
};
export default PageTitle;
