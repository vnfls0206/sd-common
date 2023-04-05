import { ISearchFormProps } from "../../../../../../UI/molecules/SearchForm";
import { GridColDef } from "@mui/x-data-grid";
export interface ISearchTableProps extends Omit<ISearchFormProps, 'array'> {
    columns: GridColDef[];
}
declare const SearchRow: ({ columns, onChange, resetOnClick, register, }: ISearchTableProps) => import("../../interface").ICustomColumnRow[];
export default SearchRow;
