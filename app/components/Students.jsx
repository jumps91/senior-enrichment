import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddStudentButton from './AddStudentButton';

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      campuses: []
    };

    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(event, studentName, studentEmail, studentCampusId) {
    event.preventDefault();
    axios.post('api/student', {
      name: studentName,
      email: studentEmail,
      campusId: studentCampusId
    })
      .then(res => res.data)
      .then(addedStudent => {
        this.setState({ students: this.state.students.concat(addedStudent) });
      });
  }

  componentDidMount() {
    axios.get('api/student')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });

    axios.get('api/campus/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses });
      });
  }

  render() {
    return (
      <div>
        <AddStudentButton campuses={this.state.campuses} addStudent={this.addStudent} />
        {
          this.state.students.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>{student.name}</Link>
            </div>
          ))
        }
      </div>
    )
  }
}