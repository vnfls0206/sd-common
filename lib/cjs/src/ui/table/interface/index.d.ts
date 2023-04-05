import { IUseTable } from "../useTable";
import { UseQueryResult } from "react-query";
export interface ITable<T> {
    useTable: IUseTable;
    result: UseQueryResult;
    data: T[];
    totalRows?: number;
}
