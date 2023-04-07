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
import { Input as MuiInput } from "@mui/material";
var ModalInput = function (_a) {
    var register = _a.register, _b = _a.className, className = _b === void 0 ? '' : _b, noSpaceForm = _a.noSpaceForm, defaultValue = _a.defaultValue;
    var inputStyle = {
        input: {
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px #FFFFFF inset',
                WebkitTextFillColor: 'black',
            },
        },
    };
    var noSpaceFormFunc = function (obj) {
        var str_space = /\s/;
        if (noSpaceForm) {
            if (str_space.exec(obj.target.value)) {
                obj.target.focus();
                obj.target.value = obj.target.value.replace(/\s | /gi, ''); //공백제거
                return false;
            }
        }
    };
    return (_jsx(MuiInput, __assign({}, register, { sx: inputStyle, className: 'text-sm w-full h-full  ' + className, disableUnderline: true, onChange: noSpaceFormFunc, defaultValue: defaultValue })));
};
export default ModalInput;
