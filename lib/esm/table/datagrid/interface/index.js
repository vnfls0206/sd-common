import TableService from '../../service';
export var headerObj = function (filed, header, headerAline, align, sortable, filterable, flex, renderCell) {
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
export var GridSizeType = Object.freeze({
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
});
export var StyledType = {
    DEFAULT: 'DEFAULT',
    QUESTION: 'QUESTION',
    TEST: 'TEST',
};
export var tableQueryDataObj = function (_a) {
    var page = _a.page, size = _a.size, filter = _a.filter;
    return Object.freeze({
        page: page,
        size: size,
        filter: filter,
        paging: TableService.getPaging(page, size),
        queryString: TableService.getPaging(page, size) + filter,
    });
};
/*Options*/
export var getLabel = function (value, option) {
    return option[value];
};
