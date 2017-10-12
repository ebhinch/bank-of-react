// src/components/UserProfile.js

import React, { Component } from 'react';
import { Link } from "react-router-dom"

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h2>User Profile</h2>

                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <Link to="/">Home</Link>
                <br /> <br />
                <Link to="/account">Account Page</Link>
            </div>
        );
    }
}

export default UserProfile;