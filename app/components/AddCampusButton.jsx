import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class AddCampusButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campusName: '',
            campusImage: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.addCampus(event, this.state.campusName, this.state.campusImage)
                    this.setState({
                        campusName: '',
                        campusImage: ''
                    })
                }}>
                    <input
                        value={this.state.campusName}
                        onChange={e => this.setState({ campusName: e.target.value })}
                        placeholder="Enter Campus Name"
                    />
                    <input
                        value={this.state.campusImage}
                        onChange={e => this.setState({ campusImage: e.target.value })}
                        placeholder="Enter Campus Image"
                    />
                    <button type="submit">Add Campus</button>
                </form>
            </div>
        )
    }
}