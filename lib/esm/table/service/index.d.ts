import { GridSizeType, ITableQueryData } from '../datagrid/interface';
declare const TableService: {
    getSizeClassName: (size: GridSizeType) => string;
    getPaging: (page: number | string, size: number | string) => string;
    getDefaultTableQueryData: () => ITableQueryData;
};
export default TableService;
