import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('api/student')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    return (
      <div>
        <button>Add Student</button>
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