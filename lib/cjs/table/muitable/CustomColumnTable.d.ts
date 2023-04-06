/// <reference types="react" />
import { ICustomColumnHeader, ICustomColumnRow, MuiTableStyle } from './interface';
export interface ICustomColumnTableProps {
    header?: Array<ICustomColumnHeader[]>;
    row: Array<ICustomColumnRow[]>;
    style?: MuiTableStyle;
}
declare const CustomColumnTable: {
    ({ header, row, style }: ICustomColumnTableProps): JSX.Element;
    defaultProps: {};
};
export default CustomColumnTable;
