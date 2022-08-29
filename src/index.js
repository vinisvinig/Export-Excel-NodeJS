const exportUsersToExcel = require('./exportService');

const users = [
    {
        id: 0,
        name: 'Viní',
        age: 20
    },
    {
        id: 1,
        name: 'Cledovaldo',
        age: 45
    }
];

const workSheetColumnName = [
    "ID",
    "Name",
    "Idade"
]

const workSheetName = 'Users';
const filePath = './outputFiles/excel-from-js.xlsx';

exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);