import React from 'react';
import {CustomColumnRow, ICustomColumnRow} from "../../interface";


export interface ILeftHeaderTableColumnProps {
    title: string,
    children: React.ReactNode
}

const LeftHeaderRow = (
    {
        title,
        children
    }: ILeftHeaderTableColumnProps
) : Array<ICustomColumnRow> => [
    CustomColumnRow(<div className={'text-sm py-2'}>{title}</div>, 1, 1),
    CustomColumnRow(children, 1, 1)
]


export default LeftHeaderRow;