import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';

import DeleteStudentButton from './DeleteStudentButton';
import AddStudentButton from './AddStudentButton';


export default class CampusInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampus: {},
      campusStudents: []
    };
  }

  componentDidMount() {
    axios.get(`api/campus/${this.props.match.params.campusId}`)
      .then(res => res.data)
      .then(selectedCampus => {
        this.setState({ selectedCampus });
      });

    axios.get(`api/student/${this.props.match.params.campusId}/students`)
      .then(res => res.data)
      .then(campusStudents => {
        this.setState({ campusStudents });
      });
  }

  render() {
    return (
      <div>
        <h4>{this.state.selectedCampus.name} Students:</h4>
        <AddStudentButton campuses={this.state.selectedCampus} addStudent={this.props.addStudent} />
        {
          this.state.campusStudents.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>{student.name}</Link>
              <DeleteStudentButton studentId={student.id} deleteStudent={this.props.deleteStudent} />
            </div>
          ))
        }
      </div>
    )
  }
}