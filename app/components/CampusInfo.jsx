import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';

import EditCampusButton from './EditCampusButton';

export default class CampusInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {},
      students: []
    };
    this.editCampusButton = this.editCampusButton.bind(this);
  }

  editCampusButton(event, newCampusName, newImageURL) {
    axios.put(`api/campus/${this.state.campus.id}`, {
      name: newCampusName,
      image: newImageURL
    })
      .then(
      axios.get(`api/campus/${this.props.match.params.campusId}`)
        .then(res => res.data)
        .then(campus => {
          this.setState({ campus });
        })
      );
  }

  componentDidMount() {
    axios.get(`api/campus/${this.props.match.params.campusId}`)
      .then(res => res.data)
      .then(campus => {
        this.setState({ campus });
      });

    axios.get(`api/student/${this.props.match.params.campusId}/students`)
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    return (
      <div>
        <EditCampusButton editCampusButton={this.editCampusButton} />
        <h4>{this.state.campus.name} Students:</h4>
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