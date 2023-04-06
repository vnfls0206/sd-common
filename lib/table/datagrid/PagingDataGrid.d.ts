/// <reference types="react" />
import { IPagingDataPropsType } from './interface';
declare const PagingDataGrid: {
    ({ paginationMode, autoPageSize, ...props }: IPagingDataPropsType): JSX.Element;
    defaultProps: {
        currentPage: number;
        pageSize: number;
        autoPageSize: boolean;
    };
};
export default PagingDataGrid;
