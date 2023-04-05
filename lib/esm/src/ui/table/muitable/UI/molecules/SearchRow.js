var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import SearchForm from "../../../../../../UI/molecules/SearchForm";
import LeftHeaderTableColumn from "../atoms/LeftHeaderRow";
var SearchRow = function (_a) {
    var columns = _a.columns, onChange = _a.onChange, resetOnClick = _a.resetOnClick, register = _a.register;
    return LeftHeaderTableColumn({
        title: '검색',
        children: _jsx(SearchForm, { className: 'pl-2', resetOnClick: resetOnClick, register: register, onChange: onChange, columns: columns, array: __spreadArray(['통합검색'], columns.filter(function (value) { return value.filterable; }).map(function (value) { return value.headerName ? value.headerName : ''; }), true) })
    });
};
export default SearchRow;
