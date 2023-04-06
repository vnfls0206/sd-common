import React from 'react';
import CustomColumnTable from './muitable/CustomColumnTable';
import ReactDataGrid from './datagrid/ReactDataGrid';
import CustomPagination from './component/CustomPagination';
import RawClickMuiTable from './muitable/RawClickMuiTable';

import {StoreApi, create} from 'zustand'
import createContext from 'zustand/context'
import {ITableQuery, IUseTable} from "./useTable";
import TableHeader from "./component/TableHeader";
import TableHeaderContainer from "./component/TableHeaderContainer";
import TableFooterContainer from "./component/TableFooterContainer";

export interface ITableProps {
    children: React.ReactNode
    useTable: IUseTable
}

export const tableContext = createContext<StoreApi<ITableQuery>>();


function Table(
    {
        children,
        useTable
    }: ITableProps) {

    const store = () =>
        create<ITableQuery>((get, set) => ({
            tableQueryData: useTable.tableQueryData,
            setTableQueryData: useTable.setTableQueryData
        }));
    
    return (
        <tableContext.Provider createStore={store}>
            <div className={'flex justify-center w-full'}>
                <div className={useTable.size}>
                    {children}
                </div>
            </div>
        </tableContext.Provider>

    );
};

Table.Header = TableHeader;
Table.CustomColumnTable = CustomColumnTable;
Table.RawClickMuiTable = RawClickMuiTable;
Table.DataGrid = ReactDataGrid;

Table.HeaderContainer = TableHeaderContainer;
Table.FooterContainer = TableFooterContainer;
Table.CustomPagenation = CustomPagination;

export default Table;
