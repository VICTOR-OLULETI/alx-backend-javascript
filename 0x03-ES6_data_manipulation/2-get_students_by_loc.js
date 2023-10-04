/**
 * 
 * @param {Array} students : list of student objects 
 * @param {String} location : specific city
 * @returns (an array of objects located in a specific city)
 */
export default function getStudentsByLocation(students, location) {
    if (students instanceof Array) {
      return (students.filter((student) => student.location === location));
    }
    return [];
  }
  