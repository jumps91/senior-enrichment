import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class EditCampusButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCampusName: '',
            newImageUrl: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.editCampusButton(event, this.state.newCampusName, this.state.newImageUrl);
                    this.setState({
                        newCampusName: '',
                        newImageUrl: ''
                    });
                }}>
                    <input
                        value={this.state.newCampusName}
                        onChange={e => this.setState({ newCampusName: e.target.value })}
                        placeholder="Enter New Campus Name"
                    />
                    <input
                        value={this.state.newImageUrl}
                        onChange={e => this.setState({ newImageUrl: e.target.value })}
                        placeholder="Enter New Campus Image"
                    />
                    <button type="submit">Edit Campus</button>
                </form>
            </div>
        )
    }
}