import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class DeleteCampusButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.props.deleteCampus(this.props.campusId)}
                >Delete</button>
            </div>
        )
    }
}