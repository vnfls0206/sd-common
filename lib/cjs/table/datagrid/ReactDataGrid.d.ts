/// <reference types="react" />
import { IPagingDataPropsType } from './interface';
export interface IReactDataGridPropsType extends IPagingDataPropsType {
}
declare const ReactDataGrid: ({ columns, rows, ...props }: IReactDataGridPropsType) => JSX.Element;
export default ReactDataGrid;
