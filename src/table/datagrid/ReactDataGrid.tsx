import React from 'react';
import {Box} from '@mui/material';

import PagingDataGrid from './PagingDataGrid';
import {IPagingDataPropsType} from './interface';


export interface IReactDataGridPropsType extends IPagingDataPropsType {

}


const ReactDataGrid = (
    {
        columns,
        rows = [],

        ...props

    }: IReactDataGridPropsType,
) => {

    return (
        <Box>
            <PagingDataGrid
                columns={columns}
                rows={rows!}
                {...props}
            />
        </Box>
    );
};



export default ReactDataGrid;