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
import { Table, TableBody, TableCell, TableHead, TableRow, } from '@mui/material';
import StyledMuiTable from './styled/StyledMuiTable';
import { MuiTableStyle } from './interface';
import LeftHeaderMuiTable from "./styled/LeftHeaderMuiTable";
import ModalMuiTable from "./styled/ModalMuiTable";
import MultiRowStyle from "./styled/MultiRowStyle";
var CustomColumnTable = function (_a) {
    var header = _a.header, row = _a.row, _b = _a.style, style = _b === void 0 ? MuiTableStyle.DEFAULT : _b;
    function styledTable(styledType) {
        if (styledType === MuiTableStyle.LEFT_HEADER) {
            return LeftHeaderMuiTable;
        }
        else if (styledType === MuiTableStyle.MODAL) {
            return ModalMuiTable;
        }
        else if (styledType === MuiTableStyle.MULTIROW) {
            return MultiRowStyle;
        }
        else {
            return StyledMuiTable;
        }
    }
    return (_jsx("div", __assign({ className: 'flex justify-center' }, { children: _jsxs(Table, __assign({ className: '', sx: styledTable(style), size: 'small' }, { children: [_jsx(TableHead, { children: header && header.map(function (row, index) { return _jsx(TableRow, { children: row.map(function (item, index) {
                            return _jsx(TableCell, __assign({ className: "".concat(item.className), align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan, width: item.widthRatio }, { children: _jsx("div", __assign({ className: 'text-sm h-full font-[550]' }, { children: item.content }), item.className) }), index);
                        }) }, index); }) }), _jsx(TableBody, { children: row.map(function (body, index) { return _jsx(TableRow, { children: body.map(function (item, index) {
                            return _jsx(TableCell, __assign({ className: item.className, align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan }, { children: _jsx("div", __assign({ className: 'text-sm' }, { children: item.content }), item.className) }), index);
                        }) }, index); }) })] })) })));
};
CustomColumnTable.defaultProps = {};
export default CustomColumnTable;
