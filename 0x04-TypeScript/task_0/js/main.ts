interface Student {
    firstName: String,
    lastName: String,
    age: number,
    location: String
}

const student1: Student = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 17,
    location: 'New York'}
const student2: Student = {
    firstName: 'Brue',
    lastName: 'Wayne',
    age: 22,
    location: 'Gotham'}
const studentsList: Array<Student> = [student1, student2];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * renders a table for student information
 * @param students 
 */
export const display = (students: Array<Student>) : void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableRowHead = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    tableRowHead.insertAdjacentHTML('beforeend', '<td>FirtName</td>');
    tableRowHead.insertAdjacentHTML('beforeend', '<td>Location</td>')
    tableHead.insertAdjacentElement('beforeend', tableRowHead);

    students.forEach((student) => {
        const tableRow2 = document.createElement('tr');
        tableRow2.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        tableRow2.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.insertAdjacentElement('beforeend', tableRow2);
    })
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};

display(studentsList);
const styles = document.createElement('style');
styles.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styles);
document.title = 'Task 0';
