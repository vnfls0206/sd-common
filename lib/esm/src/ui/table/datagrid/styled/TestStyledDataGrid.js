var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { DataGrid } from '@mui/x-data-grid';
var TestStyledDataGrid = function (props) {
    return (_jsx(DataGrid, __assign({}, props, { sx: {
            border: 'none !important',
            height: '50rem',
            disableColumnMenu: 'true',
            '& .MuiDataGrid-columnHeaders': {
                borderTop: '2px solid #bbc2c9',
                borderBottom: '1px solid #bbc2c9',
                backgroundColor: 'whitesmoke',
                borderRadius: '0px',
            },
            '& .MuiDataGrid-cell': {
                whiteSpace: 'normal',
            },
            '& .MuiDataGrid-cell:focus-within': {
                outline: 'none !important',
            },
            '& .MuiDataGrid-cell:hover': {
                color: 'none',
            },
            '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
                display: 'none',
            },
            '& .MuiDataGrid-row:hover': {
                color: '#1976d2',
            },
            '& .MuiDataGrid-footerContainer': {
                borderTop: '1px solid #bbc2c9',
            },
        } })));
};
export default TestStyledDataGrid;
