import { useState } from 'react';
import { GridSizeType } from './datagrid/interface';
import TableService from './service';
import TableHeader from "./component/shared/TableHeader";
import CustomColumnTable from "./muitable/CustomColumnTable";
import RawClickMuiTable from "./muitable/RawClickMuiTable";
import ReactDataGrid from "./datagrid/ReactDataGrid";
import TableHeaderContainer from "./component/shared/TableHeaderContainer";
import TableFooterContainer from "./component/shared/TableFooterContainer";
import CustomPagination from "./component/shared/CustomPagination";
var useTable = function (_a) {
    var size = _a.size, queryData = _a.queryData;
    var _b = useState(queryData || TableService.getDefaultTableQueryData), tableQueryData = _b[0], setTableQueryData = _b[1];
    var sizeString = TableService.getSizeClassName(size !== null && size !== void 0 ? size : GridSizeType.MEDIUM);
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
        TableHeader: TableHeader,
        CustomColumnTable: CustomColumnTable,
        RawClickMuiTable: RawClickMuiTable,
        ReactDataGrid: ReactDataGrid,
        TableHeaderContainer: TableHeaderContainer,
        TableFooterContainer: TableFooterContainer,
        CustomPagination: CustomPagination,
    };
};
export default useTable;
