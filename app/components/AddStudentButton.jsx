import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class AddstudentButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            studentEmail: '',
            studentCampusId: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.addStudent(event, this.state.studentName, this.state.studentEmail, this.state.studentCampusId);
                    this.setState({
                        studentName: '',
                        studentEmail: '',
                        studentCampusId: ''
                    });
                }}>
                    <input
                        value={this.state.studentName}
                        onChange={e => this.setState({ studentName: e.target.value })}
                        placeholder="Enter student Name"
                    />
                    <input
                        value={this.state.studentEmail}
                        onChange={e => this.setState({ studentEmail: e.target.value })}
                        placeholder="Enter student Email"
                    />
                    <select
                        onChange={e => this.setState({ studentCampusId: e.target.value })}>
                        <option selected hidden>SELECT CAMPUS</option>
                        {this.props.campuses.map(campus => (
                            <option
                                key={campus.id}
                                value={campus.id}
                            >{campus.name}
                            </option>
                        ))
                        }
                    </select>
                    <button type="submit">Add Student</button>
                </form>
            </div>
        )
    }
}