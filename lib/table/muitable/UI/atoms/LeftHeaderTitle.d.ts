import { ICustomColumnRow } from "../../interface";
export interface ILeftHeaderTitleProps {
    title: string;
    colSpan?: number;
    rowSpan?: number;
}
declare const LeftHeaderTitle: ({ title, colSpan, rowSpan }: ILeftHeaderTitleProps) => ICustomColumnRow;
export default LeftHeaderTitle;
