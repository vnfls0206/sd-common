import React from 'react';
import {SxProps, Table, TableBody, TableCell, TableHead, TableRow,} from '@mui/material';
import StyledMuiTable from './styled/StyledMuiTable';
import {ICustomColumnHeader, ICustomColumnRow, MuiTableStyle} from './interface';
import LeftHeaderMuiTable from "./styled/LeftHeaderMuiTable";
import ModalMuiTable from "./styled/ModalMuiTable";
import MultiRowStyle from "./styled/MultiRowStyle";


export interface ICustomColumnTableProps {
    header?: Array<ICustomColumnHeader[]>,
    row:  Array<ICustomColumnRow[]>,

    style?: MuiTableStyle
}



const CustomColumnTable = (
    {
        header,
        row,

        style = MuiTableStyle.DEFAULT
    }: ICustomColumnTableProps,
) => {

    function styledTable(styledType: MuiTableStyle) {
        if (styledType === MuiTableStyle.LEFT_HEADER) {
            return LeftHeaderMuiTable;
        } else if(styledType === MuiTableStyle.MODAL){
            return ModalMuiTable;
        } else if(styledType === MuiTableStyle.MULTIROW){
            return MultiRowStyle;
        } else {
            return StyledMuiTable;
        }
    }



    return (
        <div className={'flex justify-center'}>
            <Table className={''} sx={styledTable(style)} size={'small'}>
                <TableHead>
                    {header && header.map((row, index) => <TableRow key={index}>
                        {row.map((item, index) =>
                            <TableCell
                                className={`${item.className}`}
                                key={index}
                                align={'center'}
                                colSpan={item.colSpan}
                                rowSpan={item.rowSpan}
                                width={item.widthRatio}
                            >
                                <div className={'text-sm h-full font-[550]'} key={item.className}>
                                    {item.content}
                                </div>
                            </TableCell>,
                        )}
                    </TableRow>)}
                </TableHead>
                <TableBody>
                    {row.map((body, index) => <TableRow key={index}>
                        {body.map((item, index) =>
                            <TableCell className={item.className}
                                       key={index}
                                       align={'center'}
                                       colSpan={item.colSpan}
                                       rowSpan={item.rowSpan}
                            >
                                <div className={'text-sm'} key={item.className}>
                                    {item.content}
                                </div>
                            </TableCell>,
                        )}
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>

    );
};


CustomColumnTable.defaultProps = {};

export default CustomColumnTable;