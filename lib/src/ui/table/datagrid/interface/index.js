"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabel = exports.tableQueryDataObj = exports.StyledType = exports.GridSizeType = exports.headerObj = void 0;
var service_1 = require("../../service");
var headerObj = function (filed, header, headerAline, align, sortable, filterable, flex, renderCell) {
    return Object.freeze({
        field: filed,
        headerName: header,
        headerAlign: headerAline,
        align: align,
        sortable: sortable,
        filterable: filterable,
        flex: flex,
        renderCell: renderCell
    });
};
exports.headerObj = headerObj;
exports.GridSizeType = Object.freeze({
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
});
exports.StyledType = {
    DEFAULT: 'DEFAULT',
    QUESTION: 'QUESTION',
    TEST: 'TEST',
};
var tableQueryDataObj = function (_a) {
    var page = _a.page, size = _a.size, filter = _a.filter;
    return Object.freeze({
        page: page,
        size: size,
        filter: filter,
        paging: service_1.default.getPaging(page, size),
        queryString: service_1.default.getPaging(page, size) + filter,
    });
};
exports.tableQueryDataObj = tableQueryDataObj;
/*Options*/
var getLabel = function (value, option) {
    return option[value];
};
exports.getLabel = getLabel;
