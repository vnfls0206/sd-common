/// <reference types="react" />
import { ICustomColumnHeader, ICustomColumnRow } from "./interface";
import { SxProps } from "@mui/material";
export interface ICustomStyleTableProps {
    header?: Array<ICustomColumnHeader[]>;
    row: Array<ICustomColumnRow[]>;
    style: SxProps;
    className?: string;
}
declare const CustomStyleTable: ({ header, row, style, className }: ICustomStyleTableProps) => JSX.Element;
export default CustomStyleTable;
