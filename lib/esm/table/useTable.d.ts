import { Dispatch, SetStateAction } from 'react';
import { GridSizeType, ITableQueryData } from './datagrid/interface';
import TableHeader from "./component/TableHeader";
import CustomColumnTable from "./muitable/CustomColumnTable";
import RawClickMuiTable from "./muitable/RawClickMuiTable";
import ReactDataGrid from "./datagrid/ReactDataGrid";
import TableHeaderContainer from "./component/TableHeaderContainer";
import TableFooterContainer from "./component/TableFooterContainer";
import CustomPagination from "./component/CustomPagination";
export interface IUseTableProps {
    size?: GridSizeType;
    queryData?: ITableQueryData;
}
export interface ITableQuery {
    tableQueryData: ITableQueryData;
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>;
}
export interface IUseTable {
    tableQueryData: ITableQueryData;
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>;
    getPagingProps: ITableQuery;
    getHeaderProps: {
        size: string;
    };
    size: string;
    TableHeader: typeof TableHeader;
    CustomColumnTable: typeof CustomColumnTable;
    RawClickMuiTable: typeof RawClickMuiTable;
    ReactDataGrid: typeof ReactDataGrid;
    TableHeaderContainer: typeof TableHeaderContainer;
    TableFooterContainer: typeof TableFooterContainer;
    CustomPagination: typeof CustomPagination;
}
declare const useTable: ({ size, queryData }: IUseTableProps) => IUseTable;
export default useTable;
