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
import { tableQueryDataObj } from '../datagrid/interface';
import PaginationItem from '@mui/material/PaginationItem';
import { Pagination } from '@mui/material';
var CustomPagination = function (_a) {
    var rowCount = _a.rowCount, tableQueryData = _a.tableQueryData, setTableQueryData = _a.setTableQueryData, onChange = _a.onChange;
    return (_jsx("div", __assign({ className: 'w-full flex justify-center' }, { children: _jsx(Pagination, { variant: "outlined", shape: "rounded", page: Number(tableQueryData.page) + 1, count: Math.trunc(rowCount / Number(tableQueryData.size)) + 1, 
            // @ts-expect-error
            renderItem: function (props2) { return _jsx(PaginationItem, __assign({ className: 'bg-transparent border-none' }, props2, { disableRipple: true })); }, onChange: function (event, value) {
                onChange && onChange();
                setTableQueryData(function (pre) { return tableQueryDataObj(__assign(__assign({}, pre), { page: value - 1 })); });
            } }) })));
};
export default CustomPagination;
