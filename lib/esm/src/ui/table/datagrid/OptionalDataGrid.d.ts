/// <reference types="react" />
import { IOptionalDataGridType } from './interface';
declare const OptionalDataGrid: {
    ({ ...props }: IOptionalDataGridType): JSX.Element;
    defaultProps: {
        className: string;
        title: string;
        disableColumnSelector: boolean;
        disableColumnFilter: boolean;
        density: string;
        rowsPerPageOptions: number[];
        autoHeight: boolean;
        autoPageSize: boolean;
        checkboxSelection: boolean;
        hideToolbarOption: boolean;
        searchable: boolean;
        searchMode: string;
        disableColumnMenu: boolean;
        hideFooterSelectedRowCount: boolean;
        hideFooterPagination: boolean;
        hideFooter: boolean;
        header: null;
        footer: null;
    };
};
export default OptionalDataGrid;
