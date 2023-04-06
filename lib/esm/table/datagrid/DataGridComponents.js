var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { GridOverlay, GridFooterContainer } from '@mui/x-data-grid';
import CustomCheckBox from '../component/shared/CustomCheckBox';
import { tableContext } from '../Table';
var DataGridComponents = function (_a) {
    var isCustomPagination = _a.isCustomPagination, header = _a.header, footer = _a.footer, noRowText = _a.noRowText, props = __rest(_a, ["isCustomPagination", "header", "footer", "noRowText"]);
    var useStore = tableContext.useStore;
    var setTableQueryData = useStore().setTableQueryData;
    return {
        Header: header ? function () { return _jsx(GridFooterContainer, { children: header }); } : undefined,
        Footer: footer ? function () { return _jsx(GridFooterContainer, { children: footer }); } : undefined,
        BaseCheckbox: CustomCheckBox,
        NoRowsOverlay: noRowText ? function () {
            return _jsx(GridOverlay, { children: _jsx("div", { children: noRowText }) });
        } : undefined
    };
};
DataGridComponents.defaultProps = {
    isCustomPagination: false,
};
export default DataGridComponents;
