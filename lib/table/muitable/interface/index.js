"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColumnRow = exports.CustomColumnHeader = exports.MuiTableStyle = void 0;
exports.MuiTableStyle = {
    DEFAULT: 'DEFAULT',
    LEFT_HEADER: 'LEFT_HEADER',
    MODAL: 'MODAL',
    MULTIROW: 'MULTIROW'
};
var CustomColumnHeader = function (content, colSpan, rowSpan, className, widthRatio) {
    if (widthRatio === void 0) { widthRatio = ''; }
    return Object.freeze(({
        content: content,
        colSpan: colSpan,
        rowSpan: rowSpan,
        className: className,
        widthRatio: widthRatio,
    }));
};
exports.CustomColumnHeader = CustomColumnHeader;
var CustomColumnRow = function (content, colSpan, rowSpan, className) {
    return Object.freeze(({
        content: content,
        colSpan: colSpan,
        rowSpan: rowSpan,
        className: className,
    }));
};
exports.CustomColumnRow = CustomColumnRow;
