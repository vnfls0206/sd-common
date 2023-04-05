import React from 'react';


export interface ITableHeaderProps {
    size: string,
    children?: React.ReactNode,
}

const TableHeader = (
    {
        size,
        children
    }: ITableHeaderProps) => {

    return (
        <div className={`${size}`}>
            <div>{children}</div>
        </div>
    );
};



export default TableHeader;