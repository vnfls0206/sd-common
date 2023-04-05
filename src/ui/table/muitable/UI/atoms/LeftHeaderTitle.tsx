import React from 'react';
import {CustomColumnRow, ICustomColumnRow} from "../../interface";

export interface ILeftHeaderTitleProps {
    title: string,
    colSpan?: number,
    rowSpan?: number
}

const LeftHeaderTitle = (
    {
        title,
        colSpan = 1,
        rowSpan = 1
    }: ILeftHeaderTitleProps
): ICustomColumnRow => CustomColumnRow(<div className={'text-sm py-2'}>{title}</div>, colSpan, rowSpan)

export default LeftHeaderTitle;