/// <reference types="react" />
import { IStyledDataGridType } from './interface';
declare const StyledDataGrid: {
    ({ styledType, ...props }: IStyledDataGridType): JSX.Element;
    defaultProps: {
        styledType: "DEFAULT";
    };
};
export default StyledDataGrid;
