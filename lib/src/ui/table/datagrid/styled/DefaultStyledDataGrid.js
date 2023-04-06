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
var DefaultStyledDataGrid = function (props) {
    return ((0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, __assign({}, props, { sx: {
            border: 'none !important',
            //border: '1px solid #bbc2c9 !important',
            '& .MuiDataGrid-main': {
                //border: '1px solid #E6E6E6',
                border: '1px solid #C1C1C4',
                borderTop: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
                //borderTop: '1px solid #222222',
                backgroundColor: '#f2f3f5',
                // backgroundColor: '#EEEFF1',
                borderRadius: '0px',
                borderBottom: '1px solid #C1C1C4',
                borderTop: '1px solid #C1C1C4',
                color: 'black',
                fontWeight: '700'
            },
            '& .MuiDataGrid-columnHeader:focus': {
                outline: 'none !important',
            },
            '& .MuiDataGrid-cell': {
                whiteSpace: 'normal',
                '& .MuiDataGrid-cellContent': {
                    whiteSpace: 'pre-wrap !important',
                    textAlign: 'center',
                },
                //borderRight: '1px solid rgba(224, 224, 224, 1)',
                borderRight: '1px solid #d4d4d6',
                //borderTop: '1px solid #C1C1C4',
                '&:focus-within': {
                    outline: 'none !important',
                },
                '&:hover': {
                    backgroundColor: 'none',
                }
            },
            '& .MuiDataGrid-row': {
                backgroundColor: '#FFFFFF !important',
                '&:hover': {
                    backgroundColor: '#F2F2F2 !important',
                },
            },
            '& .MuiDataGrid-cellCheckbox': {
            //border: '1px solid #bbc2c9 !important',
            },
            '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
                display: 'none',
            },
            '& .MuiDataGrid-footerContainer': {
            //borderTop: '1px solid #bbc2c9',
            },
        } })));
};
exports.default = DefaultStyledDataGrid;
