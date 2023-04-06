import { GridSizeType, tableQueryDataObj } from '../datagrid/interface';
var TableService = {
    getSizeClassName: function (size) {
        if (size === GridSizeType.SMALL) {
            return 'max-w-[72rem] w-[100%]';
        }
        else if (size === GridSizeType.MEDIUM) {
            return 'max-w-[124rem] w-[100%]';
        }
        else if (size === GridSizeType.LARGE) {
            return 'max-w-full w-[100%]';
        }
        else {
            return 'max-w-full w-[100%]';
        }
    },
    getPaging: function (page, size) { return "page=".concat(page, "&size=").concat(size); },
    getDefaultTableQueryData: function () { return tableQueryDataObj({ page: 0, size: 10, filter: '' }); },
};
export default TableService;
