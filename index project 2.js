import { addStudent } from './modules/addStudent.js';
import { listStudents } from './modules/listStudents.js';
import { filterPassed } from './modules/filterPassed.js';

addStudent('Alice', [80, 90, 85]);
addStudent('Bob', [50, 40, 55]);
addStudent('Charlie', [70, 60, 65]);

listStudents();
console.log('Passed Students:', filterPassed());