export var MuiTableStyle = {
    DEFAULT: 'DEFAULT',
    LEFT_HEADER: 'LEFT_HEADER',
    MODAL: 'MODAL',
    MULTIROW: 'MULTIROW'
};
export var CustomColumnHeader = function (content, colSpan, rowSpan, className, widthRatio) {
    if (widthRatio === void 0) { widthRatio = ''; }
    return Object.freeze(({
        content: content,
        colSpan: colSpan,
        rowSpan: rowSpan,
        className: className,
        widthRatio: widthRatio,
    }));
};
export var CustomColumnRow = function (content, colSpan, rowSpan, className) {
    return Object.freeze(({
        content: content,
        colSpan: colSpan,
        rowSpan: rowSpan,
        className: className,
    }));
};
