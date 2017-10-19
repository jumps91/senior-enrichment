import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class DeleteStudentButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.props.deleteStudent(this.props.studentId)}
                >Delete</button>
            </div>
        )
    }
}