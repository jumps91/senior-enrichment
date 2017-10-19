import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';

export default class CampusInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {},
      students: []
    };
  }

  componentDidMount() {
    const getCampus = axios.get(`api/campus/${this.props.match.params.campusId}`)
      .then(res => res.data)
      .then(campus => {
        this.setState({ campus });
      });

    const getStudents = axios.get(`api/student/${this.props.match.params.campusId}/students`)
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    console.log('hitting campusInfo component state: ', this.state);
    return (
      <div>
        <h4>Campus Students:</h4>
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