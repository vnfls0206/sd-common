export interface ILeftHeaderMuiTableProps {
}
declare function LeftHeaderMuiTable({}: ILeftHeaderMuiTableProps): {
    border: string;
    tableLayout: string;
    wordBreak: string;
    whiteSpace: string;
    '& .MuiTableCell-body': {
        border: string;
        borderRadius: string;
        color: string;
        fontSize: string;
        padding: number;
        '&:nth-of-type(odd)': {
            width: string;
            backgroundColor: string;
            fontWeight: string;
        };
    };
    '& .MuiTableRow-head': {
        border: string;
    };
    '& .MuiTableRow-root': {
        backgroundColor: string;
        border: string;
    };
    '& .MuiTableBody-root': {
        border: string;
    };
};
export default LeftHeaderMuiTable;
