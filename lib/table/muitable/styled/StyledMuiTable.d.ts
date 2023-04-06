export interface IStyledMuiTableProps {
}
declare function StyledMuiTable({}: IStyledMuiTableProps): {
    border: string;
    tableLayout: string;
    wordBreak: string;
    whiteSpace: string;
    '& .MuiTableCell-head': {
        border: string;
        backgroundColor: string;
        color: string;
        fontWeight: string;
        fontSize: string;
    };
    '& .MuiTableCell-body': {
        border: string;
        width: string;
        borderRadius: string;
        color: string;
        fontSize: string;
        padding: number;
    };
    '& .MuiTableRow-head': {
        border: string;
    };
    '& .MuiTableRow-root': {
        backgroundColor: string;
    };
    '& .Mui-selected, & .Mui-selected:hover': {};
    '& .MuiTableBody-root': {
        border: string;
    };
};
export default StyledMuiTable;
