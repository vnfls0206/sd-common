import React from 'react';
import {IClickEventRaw, ICustomColumnHeader} from './interface';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import RawClickMuiTableStyle from './styled/RawClickMuiTalbeStyle';


export interface IRawClickMuiTableProps {
    header?: Array<ICustomColumnHeader[]>,
    row:  Array<IClickEventRaw>
}

const RawClickMuiTable = (
    {
        header,
        row,
    }: IRawClickMuiTableProps) => {

    //const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);


    return (
        <div className={'flex justify-center text-start'}>
            <Table className={''} sx={RawClickMuiTableStyle} size={'small'}>
                <TableHead>
                    {header && header.map(row => <TableRow>
                        {row.map(item =>
                            <TableCell
                                className={`font-[550] ${item.className}`}
                                align={'center'}
                                colSpan={item.colSpan}
                                rowSpan={item.rowSpan}
                                width={item.widthRatio}
                            >
                                {item.content}
                            </TableCell>,
                        )}
                    </TableRow>)}
                </TableHead>
                <TableBody>
                    {row.map((index, count) => <TableRow
                        //onClick={setSelectedRow.bind(this, count)}
                        onDoubleClick={index.rawClickEvent}
                        //selected={selectedRow === count}
                    >
                        {index.data.map((item, index) =>
                            <TableCell className={`${item.className}`}
                                       align={'center'}
                                       size={'small'}
                                       colSpan={item.colSpan}
                                       rowSpan={item.rowSpan}
                            >
                                <div className={'py-2'}>
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


RawClickMuiTable.defaultProps = {};

export default RawClickMuiTable;