import React from 'react';
import {ICustomColumnHeader, ICustomColumnRow} from "./interface";
import {SxProps, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

export interface ICustomStyleTableProps {
    header?: Array<ICustomColumnHeader[]>,
    row:  Array<ICustomColumnRow[]>,
    style: SxProps,
    className?: string
}

const CustomStyleTable = (
    {
        header,
        row,
        style,
        className
    }: ICustomStyleTableProps
) => {

    return (
        <div className={'flex justify-center'}>
            <Table className={''} sx={style} size={'small'}>
                <TableHead>
                    {header && header.map((row, index) => <TableRow key={index}>
                        {row.map((item, index) =>
                            <TableCell
                                className={item.className}
                                key={index}
                                align={'center'}
                                colSpan={item.colSpan}
                                rowSpan={item.rowSpan}
                                width={item.widthRatio}
                            >
                                <div className={'text-sm h-full'} key={item.className}>
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
                                       valign={'middle'}
                                       colSpan={item.colSpan}
                                       rowSpan={item.rowSpan}
                            >
                                <div className={'text-xs font-[700] h-full min-h-4 ' + className} key={item.className}>
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

export default CustomStyleTable;