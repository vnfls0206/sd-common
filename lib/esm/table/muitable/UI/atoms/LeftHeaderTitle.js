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
var LeftHeaderTitle = function (_a) {
    var title = _a.title, _b = _a.colSpan, colSpan = _b === void 0 ? 1 : _b, _c = _a.rowSpan, rowSpan = _c === void 0 ? 1 : _c;
    return CustomColumnRow(_jsx("div", __assign({ className: 'text-sm py-2' }, { children: title })), colSpan, rowSpan);
};
export default LeftHeaderTitle;
