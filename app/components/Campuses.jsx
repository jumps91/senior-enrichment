import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';
import AddCampusButton from './AddCampusButton';

export default class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: []
    };

    this.addCampus = this.addCampus.bind(this);
  }

  addCampus(event, campusName, campusImage) {
    event.preventDefault();
    axios.post('api/campus', {
      name: campusName,
      image: campusImage
    })
      .then(res => res.data)
      .then(addedCampus => {
        this.setState({ campuses: this.state.campuses.concat(addedCampus) })
      });
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