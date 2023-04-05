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
import CustomColumnTable from './muitable/CustomColumnTable';
import ReactDataGrid from './datagrid/ReactDataGrid';
import CustomPagination from './component/shared/CustomPagination';
import RawClickMuiTable from './muitable/RawClickMuiTable';
import { create } from 'zustand';
import createContext from 'zustand/context';
import TableHeader from "./component/shared/TableHeader";
import TableHeaderContainer from "./component/shared/TableHeaderContainer";
import TableFooterContainer from "./component/shared/TableFooterContainer";
export var tableContext = createContext();
function Table(_a) {
    var children = _a.children, useTable = _a.useTable;
    var store = function () {
        return create(function (get, set) { return ({
            tableQueryData: useTable.tableQueryData,
            setTableQueryData: useTable.setTableQueryData
        }); });
    };
    return (_jsx(tableContext.Provider, __assign({ createStore: store }, { children: _jsx("div", __assign({ className: 'flex justify-center w-full' }, { children: _jsx("div", __assign({ className: useTable.size }, { children: children })) })) })));
}
;
Table.Header = TableHeader;
Table.CustomColumnTable = CustomColumnTable;
Table.RawClickMuiTable = RawClickMuiTable;
Table.DataGrid = ReactDataGrid;
Table.HeaderContainer = TableHeaderContainer;
Table.FooterContainer = TableFooterContainer;
Table.CustomPagenation = CustomPagination;
export { Table };
