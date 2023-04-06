import {GridSizeType, ITableQueryData, tableQueryDataObj} from '../datagrid/interface';


const TableService = {

    getSizeClassName: (size: GridSizeType): string => {
        if (size === GridSizeType.SMALL) {
            return 'max-w-[72rem] w-[100%]';
        } else if (size === GridSizeType.MEDIUM) {
            return 'max-w-[124rem] w-[100%]';
        } else if (size === GridSizeType.LARGE) {
            return 'max-w-full w-[100%]';
        } else {
            return 'max-w-full w-[100%]';
        }
    },



    getPaging: (page: number | string, size: number | string): string => `page=${page}&size=${size}`,

    getDefaultTableQueryData: (): ITableQueryData => tableQueryDataObj({page: 0, size: 10, filter: ''}),


}


export default TableService;

