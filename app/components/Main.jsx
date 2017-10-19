import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';

import Campuses from './Campuses'
import Students from './Students'
import CampusInfo from './CampusInfo'
import StudentInfo from './StudentInfo'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      students: []
    };

    this.addCampus = this.addCampus.bind(this);
    this.deleteCampus = this.deleteCampus.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  addCampus(event, campusName, campusImage) {
    event.preventDefault();
    axios.post('api/campus', {
      name: campusName,
      image: campusImage
    })
      .then(res => res.data)
      .then(addedCampus => {
        this.setState({ campuses: this.state.campuses.concat(addedCampus) });
      });
  }

  deleteCampus(campusId) {
    axios.delete(`api/campus/${campusId}`)
      .then(
      axios.get('api/campus/')
        .then(res => res.data)
        .then(campuses => {
          this.setState({ campuses });
        }));
  }

  addStudent(event, studentName, studentEmail, studentCampusId) {
    event.preventDefault();
    axios.post('api/student', {
      name: studentName,
      email: studentEmail,
      campusId: parseInt(studentCampusId)
    })
      .then(res => res.data)
      .then(addedStudent => {
        this.setState({ students: this.state.students.concat(addedStudent) });
      });
  }

  deleteStudent(studentId) {
    axios.delete(`api/student/${studentId}`)
      .then(
      axios.get('api/student/')
        .then(res => res.data)
        .then(students => {
          this.setState({ students });
        }));
  }

  componentDidMount() {
    axios.get('api/campus/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses });
      });

    axios.get('api/student')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    return (
      <div>
        <div className="navbar" >
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">All Students</Link>
        </div>
        <Route
          exact path="/campuses"
          render={() => (<Campuses
            campuses={this.state.campuses}
            addCampus={this.addCampus}
            deleteCampus={this.deleteCampus}
          />)}
        />
        <Route
          exact path="/students"
          render={() => (<Students
            campuses={this.state.campuses}
            students={this.state.students}
            addStudent={this.addStudent}
            deleteStudent={this.deleteStudent}
          />)}
        />
        <Route
          exact path="/campuses/:campusId"
          render={() => (<CampusInfo
            addStudent={this.addStudent}
            deleteStudent={this.deleteStudent}
          />)}
        />
        <Route exact path="/students/:studentId" component={StudentInfo} />
      </div>
    )
  }
}