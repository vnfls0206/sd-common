import React from 'react';
import SearchForm, {ISearchFormProps} from "../../../../../../UI/molecules/SearchForm";
import LeftHeaderTableColumn from "../atoms/LeftHeaderRow";
import {GridColDef} from "@mui/x-data-grid";


export interface ISearchTableProps extends Omit<ISearchFormProps, 'array'>{
    //children?: React.ReactNode,
    columns: GridColDef[],
}

const SearchRow = (
    {
        columns,
        onChange,
        resetOnClick,
        register,

    }: ISearchTableProps
) => LeftHeaderTableColumn({
        title: '검색',
        children:
            <SearchForm
                className={'pl-2'}
                resetOnClick={resetOnClick}
                register={register}
                onChange={onChange}
                columns={columns}
                array={['통합검색', ...columns.filter(value => value.filterable).map(value => value.headerName ? value.headerName : '')]}
            />
    })

export default SearchRow;