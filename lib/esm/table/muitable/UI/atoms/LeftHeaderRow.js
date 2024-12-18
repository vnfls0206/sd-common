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
import { jsx as _jsx } from "react/jsx-runtime";
import { CustomColumnRow } from "../../interface";
var LeftHeaderRow = function (_a) {
    var title = _a.title, children = _a.children;
    return [
        CustomColumnRow(_jsx("div", __assign({ className: 'text-sm py-2' }, { children: title })), 1, 1),
        CustomColumnRow(children, 1, 1)
    ];
};
export default LeftHeaderRow;
