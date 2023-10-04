/**
 * 
 * @param {Array} students : contains the student objects
 * @returns (an array of students ids from a list of object)
 */

export default function getListStudentIds(students) {
    if (students instanceof Array) {
      return students.map((student) => student.id);
    }
    return [];
  }
