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
var react_1 = require("react");
var material_1 = require("@mui/material");
var CheckBoxOutlineBlankSharp_1 = require("@mui/icons-material/CheckBoxOutlineBlankSharp");
var CheckBoxSharp_1 = require("@mui/icons-material/CheckBoxSharp");
var CustomCheckBox = (0, react_1.forwardRef)(function (props, ref) {
    if (props.disabled) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Checkbox, __assign({ icon: (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlankSharp_1.default, {}), checkedIcon: (0, jsx_runtime_1.jsx)(CheckBoxSharp_1.default, {}), size: 'small', sx: {
            color: '#818187',
            '&.Mui-checked': {
                color: '#38383dff',
            },
            '&.MuiCheckbox-indeterminate': {
                color: '#38383dff',
            }
        }, ref: ref && null }, props)));
});
exports.default = CustomCheckBox;
