"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function StyledMuiTable(_a) {
    return {
        border: 'none !important',
        tableLayout: 'fixed',
        wordBreak: 'keep-all',
        whiteSpace: 'pre-wrap',
        '& .MuiTableCell-head': {
            border: '1px solid #C1C1C4',
            backgroundColor: '#f2f3f5',
            color: '#000000',
            fontWeight: '400',
            fontSize: '0.7rem',
        },
        '& .MuiTableCell-body': {
            border: '1px solid #C1C1C4',
            width: '6rem',
            borderRadius: '0px',
            color: '#000000',
            fontSize: '0.7rem',
            padding: 0,
        },
        '& .MuiTableRow-head': {
            border: '1px solid #C1C1C4',
        },
        '& .MuiTableRow-root': {
            backgroundColor: 'white',
            // '&:hover':{
            //     backgroundColor: '#EEEFF1 !important',
            // },
        },
        '& .Mui-selected, & .Mui-selected:hover': {
        //backgroundColor: '#E6E7E9 !important',
        },
        '& .MuiTableBody-root': {
            border: '1px solid #C1C1C4',
        },
    };
}
;
exports.default = StyledMuiTable;
