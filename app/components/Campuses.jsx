import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';
import AddCampusButton from './AddCampusButton';

export default class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      campusName: '',
      campusImage: ''
    };

  this.addCampus = this.addCampus.bind(this);
  }

  addCampus(event) {
        event.preventDefault();
        axios.post('api/campus', {
            name: this.state.campusName,
            image: this.state.campusImage
        })
            .then(//we are getting back what we created over here
            //find a way to put it back on the list
            )
            .then(this.setState({ campusName: '' }))
            .then(this.setState({ campusImage: '' }))
    }

  componentDidMount() {
    axios.get('api/campus/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses });
      });
  }

  render() {
    return (
      <div>
        <AddCampusButton addCampus={this.addCampus} />
        {
          this.state.campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </div>
          ))
        }
      </div>
    )
  }
}