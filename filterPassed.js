import { students } from '../data/students.js';
import { calculateAverage } from './calculateAverage.js';

export function filterPassed() {
  return students.filter(student => calculateAverage(student.grades) >= 60);
}