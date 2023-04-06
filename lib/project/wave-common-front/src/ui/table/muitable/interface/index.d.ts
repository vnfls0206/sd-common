import { ReactNode } from 'react';
export interface ICustomColumnHeader {
    content: ReactNode;
    colSpan: number;
    rowSpan: number;
    className: string;
    widthRatio?: string;
}
export declare const MuiTableStyle: {
    readonly DEFAULT: "DEFAULT";
    readonly LEFT_HEADER: "LEFT_HEADER";
    readonly MODAL: "MODAL";
    readonly MULTIROW: "MULTIROW";
};
export type MuiTableStyle = typeof MuiTableStyle[keyof typeof MuiTableStyle];
export declare const CustomColumnHeader: (content: ReactNode, colSpan: number, rowSpan: number, className: string, widthRatio?: string) => ICustomColumnHeader;
export interface ICustomColumnRow {
    content: ReactNode;
    colSpan: number;
    rowSpan: number;
    className?: string;
}
export interface IClickEventRaw {
    data: ICustomColumnRow[];
    rawClickEvent?: () => void;
}
export declare const CustomColumnRow: (content: ReactNode, colSpan: number, rowSpan: number, className?: string) => ICustomColumnRow;
