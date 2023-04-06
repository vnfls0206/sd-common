import React from 'react';
import { StoreApi } from 'zustand';
import { ITableQuery, IUseTable } from "./useTable/useTable";
export interface ITableProps {
    children: React.ReactNode;
    useTable: IUseTable;
}
export declare const tableContext: {
    Provider: ({ createStore, children, }: {
        createStore: () => StoreApi<ITableQuery>;
        children: React.ReactNode;
    }) => React.FunctionComponentElement<React.ProviderProps<StoreApi<ITableQuery> | undefined>>;
    useStore: {
        (): ITableQuery;
        <U>(selector: (state: ITableQuery) => U, equalityFn?: ((a: U, b: U) => boolean) | undefined): U;
    };
    useStoreApi: () => {
        setState: (partial: ITableQuery | Partial<ITableQuery> | ((state: ITableQuery) => ITableQuery | Partial<ITableQuery>), replace?: boolean | undefined) => void;
        getState: () => ITableQuery;
        subscribe: (listener: (state: ITableQuery, prevState: ITableQuery) => void) => () => void;
        destroy: () => void;
    };
};
declare function Table({ children, useTable }: ITableProps): JSX.Element;
declare namespace Table {
    var Header: ({ size, children }: import("./component/TableHeader").ITableHeaderProps) => JSX.Element;
    var CustomColumnTable: {
        ({ header, row, style }: import("./muitable/CustomColumnTable").ICustomColumnTableProps): JSX.Element;
        defaultProps: {};
    };
    var RawClickMuiTable: {
        ({ header, row, }: import("./muitable/RawClickMuiTable").IRawClickMuiTableProps): JSX.Element;
        defaultProps: {};
    };
    var DataGrid: ({ columns, rows, ...props }: import("./datagrid/ReactDataGrid").IReactDataGridPropsType) => JSX.Element;
    var HeaderContainer: ({ children, startComponent, className, sort }: import("./component/TableHeaderContainer").ITableHeaderButtonGroupProps) => JSX.Element;
    var FooterContainer: ({ children, startComponent, sort }: import("./component/TableFooterContainer").ITableFooterContainerProps) => JSX.Element;
    var CustomPagenation: ({ rowCount, tableQueryData, setTableQueryData, onChange }: import("./component/CustomPagination").ICustomPaginationProps) => JSX.Element;
}
export default Table;
