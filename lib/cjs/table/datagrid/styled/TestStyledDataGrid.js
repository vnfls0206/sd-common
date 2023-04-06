"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var x_data_grid_1 = require("@mui/x-data-grid");
var TestStyledDataGrid = function (props) {
    return ((0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, __assign({}, props, { sx: {
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
exports.default = TestStyledDataGrid;
