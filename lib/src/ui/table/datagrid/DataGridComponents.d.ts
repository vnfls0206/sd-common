import { GridSlotsComponent } from '@mui/x-data-grid';
import { IDataGridComponentsOption } from './interface';
declare const DataGridComponents: {
    ({ isCustomPagination, header, footer, noRowText, ...props }: IDataGridComponentsOption): Partial<GridSlotsComponent>;
    defaultProps: {
        isCustomPagination: boolean;
    };
};
export default DataGridComponents;
