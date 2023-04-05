import React from 'react';
import {SortType} from "./TableFooterContainer";


export interface ITableHeaderButtonGroupProps {
    children?: React.ReactNode,
    startComponent?: React.ReactNode,
    className?: string,
    sort?: SortType
}

const TableHeaderContainer = (
    {
        children,
        startComponent,
        className = '',
        sort = 'justify-end'
    }: ITableHeaderButtonGroupProps
) => {

    return (
        <div className={sort + ' gap-x-2 flex border border-solid border-[#C1C1C4] border-b-0 py-2 px-2 mt-2 ' + className}>
            {startComponent}
            <div className={'flex gap-x-2'}>
                {children}
            </div>
        </div>
    );
};

export default TableHeaderContainer;