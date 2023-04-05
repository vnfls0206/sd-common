function MultiRowStyle() {
    return {
        border: 'none !important',
        tableLayout: 'fixed',
        wordBreak: 'keep-all',
        whiteSpace: 'pre-wrap',
        '& .MuiTableCell-body': {
            border: '1px solid #C1C1C4',
            borderRadius: '0px',
            color: '#000000',
            fontSize: '0.8rem',
            padding: 0,
            //paddingLeft: '0.1rem',
        },
        '& .MuiTableRow-root': {
            backgroundColor: 'white',
            border: '1px solid #d4d4d6',
        },
        '& .MuiTableRow-head': {
            border: '1px solid #d4d4d6',
            backgroundColor: '#f2f3f5',
        },
        '& .MuiTableBody-root': {
            border: '1px solid #d4d4d6',
        },
    };
}
;
export default MultiRowStyle;
