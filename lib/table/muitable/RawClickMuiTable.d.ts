/// <reference types="react" />
import { IClickEventRaw, ICustomColumnHeader } from './interface';
export interface IRawClickMuiTableProps {
    header?: Array<ICustomColumnHeader[]>;
    row: Array<IClickEventRaw>;
}
declare const RawClickMuiTable: {
    ({ header, row, }: IRawClickMuiTableProps): JSX.Element;
    defaultProps: {};
};
export default RawClickMuiTable;
