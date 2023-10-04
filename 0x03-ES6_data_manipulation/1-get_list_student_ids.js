/**
 * 
 * @param {*} student_list : contains the student objects
 * @returns (an array of students ids from a list of object)
 */

export default function getListStudentIds(student_list) {
    if (student_list instanceof Array) {
        return student_list.map((student) => student.id)
    }
    return [];
}
