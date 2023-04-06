export interface IRawClickMuiTableSytleProps {
}
declare function RawClickMuiTableStyle({}: IRawClickMuiTableSytleProps): {
    tableLayout: string;
    wordBreak: string;
    whiteSpace: string;
    '& .MuiTableCell-body': {
        borderRadius: string;
        color: string;
        fontSize: string;
        padding: number;
    };
    '& .MuiTableRow-root': {
        border: string;
        '&:hover': {
            backgroundColor: string;
        };
    };
    '& .Mui-selected': {
        backgroundColor: string;
    };
    '& .Mui-selected:hover': {
        backgroundColor: string;
    };
    '& .MuiTableBody-root': {
        borderBottom: string;
    };
    '& .MuiTableHead-root': {
        border: string;
        backgroundColor: string;
    };
    '& .MuiTableCell-root': {
        borderBottom: string;
    };
};
declare namespace RawClickMuiTableStyle {
    var defaultProps: {};
}
export default RawClickMuiTableStyle;
