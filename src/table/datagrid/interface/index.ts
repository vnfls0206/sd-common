import React from 'react';
import {DataGridProps, GridAlignment, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import TableService from '../../service';


export const headerObj = <T extends string>(
    filed: T | 'id',
    header: string,

    headerAline: GridAlignment | undefined,
    align: GridAlignment | undefined,

    sortable: boolean,
    filterable: boolean,

    flex?: number,

    renderCell?: (param: GridRenderCellParams) => React.ReactNode

): GridColDef =>
    Object.freeze({
        field: filed,
        headerName: header,

        headerAlign: headerAline,
        align: align,

        sortable: sortable,
        filterable: filterable,

        flex: flex,
        renderCell: renderCell
    });

export type IRows<T> = Array<T & {
    id: number | string
}>

export const GridSizeType = Object.freeze({
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
} as const);

export type GridSizeType = typeof GridSizeType[keyof typeof GridSizeType];


export const StyledType = {
    DEFAULT: 'DEFAULT',
    QUESTION: 'QUESTION',
    TEST: 'TEST',
} as const;

export type StyledType = typeof StyledType[keyof typeof StyledType];


export interface IReactDataGridPropsType extends IPagingDataPropsType {
    sizeType?: GridSizeType,

}


export interface IPagingDataPropsType extends IOptionalDataGridType {

}

export interface IOptionalDataGridType extends OptionalType {

    isCustomPagination?: boolean,
}

export type OptionalType = IDataGridComponentsOption & IStyledDataGridType;

export interface IDataGridComponentsOption {
    isCustomPagination?: boolean,
    header? : JSX.Element,
    footer? : JSX.Element,
    noRowText?: string
}


export interface IStyledDataGridType extends DataGridProps {
    styledType?: StyledType
}


export interface IQueryString {
    paging: string,
    filter: string
}

export interface ITableQueryData {
    filter: string,

    page: number,
    size: number,

    paging: string,

    queryString: string,


}

export const tableQueryDataObj = (
    { page, size, filter }: Omit<ITableQueryData, 'paging' | 'queryString'>,
): ITableQueryData =>
    Object.freeze({
        page: page,
        size: size,

        filter: filter,

        paging: TableService.getPaging(page, size),
        queryString: TableService.getPaging(page, size) + filter,
    });


/*Options*/




export const getLabel = (value: string, option: any) => {
    return option[value];
};

export interface IValueOptions {
    value: string,
    label: string,
}