import React from 'react';
import { ICustomColumnRow } from "../../interface";
export interface ILeftHeaderTableColumnProps {
    title: string;
    children: React.ReactNode;
}
declare const LeftHeaderRow: ({ title, children }: ILeftHeaderTableColumnProps) => Array<ICustomColumnRow>;
export default LeftHeaderRow;
