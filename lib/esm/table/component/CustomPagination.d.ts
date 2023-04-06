import { Dispatch, SetStateAction } from 'react';
import { ITableQueryData } from '../datagrid/interface';
export interface ICustomPaginationProps {
    rowCount: number;
    tableQueryData: ITableQueryData;
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>;
    onChange?: Function;
}
declare const CustomPagination: ({ rowCount, tableQueryData, setTableQueryData, onChange }: ICustomPaginationProps) => JSX.Element;
export default CustomPagination;
