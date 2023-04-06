import { ReactNode } from 'react';

export interface ICustomColumnHeader {
    content: ReactNode,
    colSpan: number,
    rowSpan: number,
    className: string,
    widthRatio?: string,
}




export const MuiTableStyle = {
    DEFAULT: 'DEFAULT',
    LEFT_HEADER: 'LEFT_HEADER',
    MODAL: 'MODAL',
    MULTIROW: 'MULTIROW'

} as const;

export type MuiTableStyle = typeof MuiTableStyle[keyof typeof MuiTableStyle];



export const CustomColumnHeader =
    (
        content: ReactNode,
        colSpan: number,
        rowSpan: number,
        className: string,
        widthRatio: string = '',
    ): ICustomColumnHeader =>
        Object.freeze(({
            content: content,
            colSpan: colSpan,
            rowSpan: rowSpan,
            className: className,
            widthRatio: widthRatio,
        }));



export interface ICustomColumnRow{
    content: ReactNode,
    colSpan: number,
    rowSpan: number,
    className?: string
}

export interface IClickEventRaw {
    data: ICustomColumnRow[],
    rawClickEvent?: () => void
}

export const CustomColumnRow =
    (
        content: ReactNode,
        colSpan: number,
        rowSpan: number,
        className?: string,
    ): ICustomColumnRow =>
        Object.freeze(({
            content: content,
            colSpan: colSpan,
            rowSpan: rowSpan,
            className: className,
        }));