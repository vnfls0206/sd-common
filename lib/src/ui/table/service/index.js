"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("../datagrid/interface");
var TableService = {
    getSizeClassName: function (size) {
        if (size === interface_1.GridSizeType.SMALL) {
            return 'max-w-[72rem] w-[100%]';
        }
        else if (size === interface_1.GridSizeType.MEDIUM) {
            return 'max-w-[124rem] w-[100%]';
        }
        else if (size === interface_1.GridSizeType.LARGE) {
            return 'max-w-full w-[100%]';
        }
        else {
            return 'max-w-full w-[100%]';
        }
    },
    getPaging: function (page, size) { return "page=".concat(page, "&size=").concat(size); },
    getDefaultTableQueryData: function () { return (0, interface_1.tableQueryDataObj)({ page: 0, size: 10, filter: '' }); },
};
exports.default = TableService;
