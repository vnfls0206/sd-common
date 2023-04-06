import React from 'react';
export interface ITableHeaderProps {
    size: string;
    children?: React.ReactNode;
}
declare const TableHeader: ({ size, children }: ITableHeaderProps) => JSX.Element;
export default TableHeader;
