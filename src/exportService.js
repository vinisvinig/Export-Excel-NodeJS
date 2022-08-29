const xlsx = require('xlsx');
const path = require('path');

const exportExcel = (data, workSheetColumnsNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSheetColumnsNames,
        ... data
    ];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, path.resolve(filePath));
}

const exportUsersToExcel = (users, workSheetColumnsNames, workSheetName, filePath) => {
    const data = users.map(user => {
        return [user.id, user.name, user.age];
    });
    exportExcel(data, workSheetColumnsNames, workSheetName, filePath)
}

module.exports = exportUsersToExcel;