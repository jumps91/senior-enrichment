import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class EditStudentButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStudentName: '',
            newStudentEmail: '',
            newStudentCampusId: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.editStudentButton(event, this.state.newStudentName, this.state.newStudentEmail, this.state.newStudentCampusId);
                    this.setState({
                        newStudentName: '',
                        newStudentEmail: '',
                        newStudentCampusId: ''
                    });
                }}>
                    <input
                        value={this.state.newStudentName}
                        onChange={e => this.setState({ newStudentName: e.target.value })}
                        placeholder="Enter New Student Name"
                    />
                    <input
                        value={this.state.newStudentEmail}
                        onChange={e => this.setState({ newStudentEmail: e.target.value })}
                        placeholder="Enter New Student Email"
                    />
                    <select
                        onChange={e => this.setState({ newStudentCampusId: e.target.value })}>
                        <option selected hidden>SELECT NEW CAMPUS</option>
                        {this.props.campuses.map(campus => (
                            <option
                                key={campus.id}
                                value={campus.id}
                            >{campus.name}
                            </option>
                        ))
                        }
                    </select>
                    <button type="submit">Edit Student</button>
                </form>
            </div>
        )
    }
}