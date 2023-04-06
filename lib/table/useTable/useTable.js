"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var interface_1 = require("../datagrid/interface");
var service_1 = require("../service");
var TableHeader_1 = require("../component/TableHeader");
var CustomColumnTable_1 = require("../muitable/CustomColumnTable");
var RawClickMuiTable_1 = require("../muitable/RawClickMuiTable");
var ReactDataGrid_1 = require("../datagrid/ReactDataGrid");
var TableHeaderContainer_1 = require("../component/TableHeaderContainer");
var TableFooterContainer_1 = require("../component/TableFooterContainer");
var CustomPagination_1 = require("../component/CustomPagination");
var useTable = function (_a) {
    var size = _a.size, queryData = _a.queryData;
    var _b = (0, react_1.useState)(queryData || service_1.default.getDefaultTableQueryData), tableQueryData = _b[0], setTableQueryData = _b[1];
    var sizeString = service_1.default.getSizeClassName(size !== null && size !== void 0 ? size : interface_1.GridSizeType.MEDIUM);
    var getPagingProps = {
        tableQueryData: tableQueryData,
        setTableQueryData: setTableQueryData
    };
    var getHeaderProps = {
        size: sizeString
    };
    return {
        tableQueryData: tableQueryData,
        setTableQueryData: setTableQueryData,
        getPagingProps: getPagingProps,
        getHeaderProps: getHeaderProps,
        size: sizeString,
        TableHeader: TableHeader_1.default,
        CustomColumnTable: CustomColumnTable_1.default,
        RawClickMuiTable: RawClickMuiTable_1.default,
        ReactDataGrid: ReactDataGrid_1.default,
        TableHeaderContainer: TableHeaderContainer_1.default,
        TableFooterContainer: TableFooterContainer_1.default,
        CustomPagination: CustomPagination_1.default,
    };
};
exports.default = useTable;
