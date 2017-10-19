import React from 'react';
import { Link } from 'react-router-dom';

import AddStudentButton from './AddStudentButton';
import DeleteStudentButton from './DeleteStudentButton';

export default function Students(props) {
  return (
    <div>
      <AddStudentButton campuses={props.campuses} addStudent={props.addStudent} />
      {
        props.students.map(student => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
            <DeleteStudentButton studentId={student.id} deleteStudent={props.deleteStudent} />
          </div>
        ))
      }
    </div>
  );
}
