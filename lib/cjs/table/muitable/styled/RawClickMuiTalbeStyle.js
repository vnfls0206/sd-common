"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RawClickMuiTableStyle(_a) {
    return {
        tableLayout: 'fixed',
        wordBreak: 'keep-all',
        whiteSpace: 'pre-wrap',
        '& .MuiTableCell-body': {
            //border: '1px solid #C1C1C4',
            borderRadius: '0px',
            color: '#000000',
            fontSize: '0.8rem',
            padding: 0,
        },
        '& .MuiTableRow-root': {
            //backgroundColor: 'white',
            border: '1px solid #C1C1C4',
            '&:hover': {
                backgroundColor: '#EEEFF1',
            },
        },
        '& .Mui-selected': {
            backgroundColor: '#EEEFF1',
        },
        '& .Mui-selected:hover': {
            backgroundColor: '#E6E7E9',
        },
        '& .MuiTableBody-root': {
            borderBottom: '1px solid #C1C1C4',
        },
        '& .MuiTableHead-root': {
            border: '1px solid #C1C1C4',
            backgroundColor: '#f2f3f5',
        },
        '& .MuiTableCell-root': {
            borderBottom: '1px solid #C1C1C4',
        },
    };
}
;
RawClickMuiTableStyle.defaultProps = {};
exports.default = RawClickMuiTableStyle;
