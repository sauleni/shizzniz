import React, { Component } from 'react';
import TextInput from '../../input';
import Nav from '../../navbar';
import './style.css'

class RestorePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: "",
            newPassword: "",
        };
    }
    render() {
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Nav type="arrow" title="Password Recovery" link="login"/>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <p>Please provide your Shizzniz profile and email and we will send you a new password</p>
                    <TextInput placeholder="Email" id="recoveryEmail"/>
                    <div className="inputContainer">
                        <button
                            id="LoginButton"
                            onClick={() => this.validate()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default RestorePassword;