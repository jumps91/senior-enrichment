import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';

import EditStudentButton from './EditStudentButton';

export default class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  this.editStudentButton = this.editStudentButton.bind(this);
  }

  editStudentButton(event, newStudentName, newStudentEmail, newStudentCampusId) {
    axios.put(`api/student/${this.state.student.id}`, {
      name: newStudentName,
      email: newStudentEmail,
      campusId: parseInt(newStudentCampusId)
    })
      .then(
      axios.get(`api/student/${this.props.match.params.studentId}`)
        .then(res => res.data)
        .then(student => {
          this.setState({ student });
        })
      );
  }

  componentDidMount() {

    axios.get(`api/student/${this.props.match.params.studentId}`)
      .then(res => res.data)
      .then(student => {
        this.setState({ student });
      });
  }

  render() {
    return (
      <div>
        <EditStudentButton campuses={this.props.campuses} editStudentButton={this.editStudentButton} />
        <h4>Student Information:</h4>
        <h5>Name: {this.state.student.name}</h5>
        <h5>Email: {this.state.student.email}</h5>
        <h5>Campus:
          {this.state.student.campus &&
            <Link to={`/campuses/${this.state.student.campus.id}`}>
              {this.state.student.campus.name}
            </Link>
          }
        </h5>
      </div>
    );
  }
}
