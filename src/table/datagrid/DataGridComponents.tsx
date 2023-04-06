import React from 'react';
import {GridOverlay, GridSlotsComponent, GridFooterContainer,  GridFooter} from '@mui/x-data-grid';

import CustomCheckBox from '../component/CustomCheckBox';

import {IDataGridComponentsOption} from './interface';

import {tableContext} from '../Table';

const DataGridComponents = (
    {
        isCustomPagination,
        header,
        footer,
        noRowText,
        ...props


    }: IDataGridComponentsOption
): Partial<GridSlotsComponent> => {


    const {useStore} = tableContext;
    const setTableQueryData = useStore().setTableQueryData;

    return {
        Header: header ? () => <GridFooterContainer>
            {header}
        </GridFooterContainer> : undefined,
        Footer: footer ? () => <GridFooterContainer>
            {footer}
        </GridFooterContainer> : undefined,
        BaseCheckbox: CustomCheckBox,
        NoRowsOverlay: noRowText ? () =>
            <GridOverlay>
                <div>
                    {noRowText}
                </div>
            </GridOverlay> : undefined

    };
};

DataGridComponents.defaultProps = {
    isCustomPagination: false,
}


export default DataGridComponents;