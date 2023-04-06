import React, { Dispatch, SetStateAction, useState } from 'react';
import {GridSizeType, ITableQueryData} from './datagrid/interface';
import TableService from './service';
import TableHeader from "./component/shared/TableHeader";
import CustomColumnTable from "./muitable/CustomColumnTable";
import RawClickMuiTable from "./muitable/RawClickMuiTable";
import ReactDataGrid from "./datagrid/ReactDataGrid";
import TableHeaderContainer from "./component/shared/TableHeaderContainer";
import TableFooterContainer from "./component/shared/TableFooterContainer";
import CustomPagination from "./component/shared/CustomPagination";


export interface IUseTableProps {
    // GridSizeType
    size?: GridSizeType,
    queryData?: ITableQueryData
}

export interface ITableQuery {
    tableQueryData: ITableQueryData,
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>,

}

export interface IUseTable {
    tableQueryData: ITableQueryData,
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>,

    getPagingProps: ITableQuery,
    getHeaderProps: { size: string}
    size: string,


    TableHeader: typeof TableHeader,
    CustomColumnTable: typeof CustomColumnTable,
    RawClickMuiTable: typeof RawClickMuiTable,
    ReactDataGrid: typeof ReactDataGrid,
    TableHeaderContainer: typeof TableHeaderContainer,
    TableFooterContainer: typeof TableFooterContainer,
    CustomPagination: typeof CustomPagination,
}

const useTable = (
    {
        size,
        queryData

    }: IUseTableProps): IUseTable => {


    const [tableQueryData, setTableQueryData] = useState<ITableQueryData>(queryData || TableService.getDefaultTableQueryData);

    const sizeString = TableService.getSizeClassName(size ?? GridSizeType.MEDIUM);




    const getPagingProps: ITableQuery = {
        tableQueryData: tableQueryData,
        setTableQueryData: setTableQueryData
    }

    const getHeaderProps: {size: string} = {
        size: sizeString
    }



    return {
        tableQueryData,
        setTableQueryData,
        getPagingProps,
        getHeaderProps,
        size: sizeString,
        TableHeader,
        CustomColumnTable,
        RawClickMuiTable,
        ReactDataGrid,
        TableHeaderContainer,
        TableFooterContainer,
        CustomPagination,

    };
};


export default useTable;