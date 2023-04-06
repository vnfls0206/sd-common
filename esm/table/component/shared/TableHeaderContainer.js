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
var TableHeaderContainer = function (_a) {
    var children = _a.children, startComponent = _a.startComponent, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.sort, sort = _c === void 0 ? 'justify-end' : _c;
    return (_jsxs("div", __assign({ className: sort + ' gap-x-2 flex border border-solid border-[#C1C1C4] border-b-0 py-2 px-2 mt-2 ' + className }, { children: [startComponent, _jsx("div", __assign({ className: 'flex gap-x-2' }, { children: children }))] })));
};
export default TableHeaderContainer;
