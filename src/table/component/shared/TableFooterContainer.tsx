import React from 'react';


export interface ITableFooterContainerProps {
    children?: React.ReactNode,
    startComponent?: React.ReactNode,
    sort?: SortType
}

export const SortType = {
    START: 'justify-start',
    END: 'justify-end',
    BETWEEN: 'justify-between',
    CENTER: 'justify-center'
} as const;

export type SortType = typeof SortType[keyof typeof SortType];

const TableFooterContainer = (
    {
        children,
        startComponent,
        sort = 'justify-end'
    }: ITableFooterContainerProps
) => {

    return (
        <div className={'gap-x-2 flex border border-solid border-[#C1C1C4] border-t-0 py-4 px-2 ' + sort}>
            {startComponent}
            <div className={'flex gap-x-2'}>
                {children}
            </div>
        </div>
    );
};



export default TableFooterContainer;