import React from 'react';
import { SortType } from "./TableFooterContainer";
export interface ITableHeaderButtonGroupProps {
    children?: React.ReactNode;
    startComponent?: React.ReactNode;
    className?: string;
    sort?: SortType;
}
declare const TableHeaderContainer: ({ children, startComponent, className, sort }: ITableHeaderButtonGroupProps) => JSX.Element;
export default TableHeaderContainer;
