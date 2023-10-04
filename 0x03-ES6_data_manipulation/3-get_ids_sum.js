/**
 * 
 * @param {Array} students 
 * @returns (sum of all the student ids)
 */
export default function getStudentIdsSum(students) {
    if (students instanceof Array) {
        return students.reduce(
            (prev_student, cur_student) => prev_student + cur_student.id,
    0,
    );
    }
    return 0;
}
