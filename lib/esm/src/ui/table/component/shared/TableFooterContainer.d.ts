import React from 'react';
export interface ITableFooterContainerProps {
    children?: React.ReactNode;
    startComponent?: React.ReactNode;
    sort?: SortType;
}
export declare const SortType: {
    readonly START: "justify-start";
    readonly END: "justify-end";
    readonly BETWEEN: "justify-between";
    readonly CENTER: "justify-center";
};
export type SortType = typeof SortType[keyof typeof SortType];
declare const TableFooterContainer: ({ children, startComponent, sort }: ITableFooterContainerProps) => JSX.Element;
export default TableFooterContainer;
