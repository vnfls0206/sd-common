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
import { forwardRef } from 'react';
import { Checkbox } from "@mui/material";
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
var CustomCheckBox = forwardRef(function (props, ref) {
    if (props.disabled) {
        return null;
    }
    return (_jsx(Checkbox, __assign({ icon: _jsx(CheckBoxOutlineBlankSharpIcon, {}), checkedIcon: _jsx(CheckBoxSharpIcon, {}), size: 'small', sx: {
            color: '#818187',
            '&.Mui-checked': {
                color: '#38383dff',
            },
            '&.MuiCheckbox-indeterminate': {
                color: '#38383dff',
            }
        }, ref: ref && null }, props)));
});
export default CustomCheckBox;
