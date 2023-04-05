import React from 'react';
import { DataGridProps, GridAlignment, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
export declare const headerObj: <T extends string>(filed: T | "id", header: string, headerAline: GridAlignment | undefined, align: GridAlignment | undefined, sortable: boolean, filterable: boolean, flex?: number, renderCell?: ((param: GridRenderCellParams) => React.ReactNode) | undefined) => GridColDef;
export type IRows<T> = Array<T & {
    id: number | string;
}>;
export declare const GridSizeType: Readonly<{
    readonly SMALL: "SMALL";
    readonly MEDIUM: "MEDIUM";
    readonly LARGE: "LARGE";
}>;
export type GridSizeType = typeof GridSizeType[keyof typeof GridSizeType];
export declare const StyledType: {
    readonly DEFAULT: "DEFAULT";
    readonly QUESTION: "QUESTION";
    readonly TEST: "TEST";
};
export type StyledType = typeof StyledType[keyof typeof StyledType];
export interface IReactDataGridPropsType extends IPagingDataPropsType {
    sizeType?: GridSizeType;
}
export interface IPagingDataPropsType extends IOptionalDataGridType {
}
export interface IOptionalDataGridType extends OptionalType {
    isCustomPagination?: boolean;
}
export type OptionalType = IDataGridComponentsOption & IStyledDataGridType;
export interface IDataGridComponentsOption {
    isCustomPagination?: boolean;
    header?: JSX.Element;
    footer?: JSX.Element;
    noRowText?: string;
}
export interface IStyledDataGridType extends DataGridProps {
    styledType?: StyledType;
}
export interface IQueryString {
    paging: string;
    filter: string;
}
export interface ITableQueryData {
    filter: string;
    page: number;
    size: number;
    paging: string;
    queryString: string;
}
export declare const tableQueryDataObj: ({ page, size, filter }: Omit<ITableQueryData, 'paging' | 'queryString'>) => ITableQueryData;
export declare const getLabel: (value: string, option: any) => any;
export interface IValueOptions {
    value: string;
    label: string;
}
