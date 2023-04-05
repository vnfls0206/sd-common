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
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import RawClickMuiTableStyle from './styled/RawClickMuiTalbeStyle';
var RawClickMuiTable = function (_a) {
    //const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);
    var header = _a.header, row = _a.row;
    return (_jsx("div", __assign({ className: 'flex justify-center text-start' }, { children: _jsxs(Table, __assign({ className: '', sx: RawClickMuiTableStyle, size: 'small' }, { children: [_jsx(TableHead, { children: header && header.map(function (row) { return _jsx(TableRow, { children: row.map(function (item) {
                            return _jsx(TableCell, __assign({ className: "font-[550] ".concat(item.className), align: 'center', colSpan: item.colSpan, rowSpan: item.rowSpan, width: item.widthRatio }, { children: item.content }));
                        }) }); }) }), _jsx(TableBody, { children: row.map(function (index, count) { return _jsx(TableRow
                    //onClick={setSelectedRow.bind(this, count)}
                    , __assign({ 
                        //onClick={setSelectedRow.bind(this, count)}
                        onDoubleClick: index.rawClickEvent }, { children: index.data.map(function (item, index) {
                            return _jsx(TableCell, __assign({ className: "".concat(item.className), align: 'center', size: 'small', colSpan: item.colSpan, rowSpan: item.rowSpan }, { children: _jsx("div", __assign({ className: 'py-2' }, { children: item.content })) }));
                        }) })); }) })] })) })));
};
RawClickMuiTable.defaultProps = {};
export default RawClickMuiTable;
