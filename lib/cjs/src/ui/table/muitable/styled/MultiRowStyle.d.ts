declare function MultiRowStyle(): {
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
    };
    '& .MuiTableRow-root': {
        backgroundColor: string;
        border: string;
    };
    '& .MuiTableRow-head': {
        border: string;
        backgroundColor: string;
    };
    '& .MuiTableBody-root': {
        border: string;
    };
};
export default MultiRowStyle;
