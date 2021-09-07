import React, { Component } from 'react';
import { useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom';
import IMG from "../../../files/login.png"
import TextInput from '../../input';
import './style.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: "",
            password: "",
            passwordError: ""
        };
    }
    validate() {
        if(!this.state.email || !this.state.password) {
            if(!this.state.email) {
                document.getElementById("LoginEmail").placeholder = "Field required / Invalid email provided"
            }

            if(!this.state.password) {
                // document.getElementById("LoginPassword").type = "text"
                document.getElementById("LoginPassword").placeholder = "Field required / Invalid password provided"
            }
            return
        }else {
            alert("validating")
        }
    }

    passwordTyping(txt) {
        if(document.getElementById("LoginPassword").type === "text") {
            document.getElementById("LoginPassword").type = "password"
        }
        this.state.password = txt.target.value
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
                    overflow: "scroll",
                }}
            >
                <div
                    style={{
                        width: "90%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={IMG}
                        style={{
                            color: "red",
                            width: '100%',
                        }}
                    />
                </div>
                
                <div
                    style={{
                        width: "90%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "scroll",
                    }}
                >
                    <TextInput
                        id="LoginEmail"
                        placeholder="Email"
                        type="email"
                        required="true"
                    />

                    <TextInput
                        id="LoginPassword"
                        placeholder="Password"
                        type="password"
                        required="true"
                    />

                    <div>
                        <Link to="home">    
                            <button
                                style={{
                                    width: 100,
                                    backgroundColor: "#d21212",
                                    height: 40,
                                    fontSize: 20,
                                    color: "white",
                                    border: "none",
                                    marginBottom: 20,
                                    marginTop: 10,
                                }}
                                onClick={() => this.validate()}
                            >
                                Login
                            </button>
                        </Link>
                    </div>

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link to="recover">
                            <span
                                style={{
                                    width: "40%",
                                    fontSize: 16,
                                }}
                            >
                                Forgot Password?
                            </span>
                        </Link>
                        <span
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "50%",
                                fontSize: 16,
                            }}
                        >
                            <span>Register a profile</span>
                            <Link to="/register">
                                <IoIosAdd
                                    style={{
                                        color: "white",
                                        backgroundColor: "#d21212",
                                        borderRadius: 40,
                                        padding: 1,
                                        marginRight: 2,
                                        // position: "relative",
                                        // float:'right',
                                        // top: -2,
                                        fontSize: 20,
                                    }}
                                />
                            </Link>
                        </span>
                    
					</div>
            
                </div>
                
            </div>
        );
    }
}

const Goto = (page) => {
    const history = useHistory()
    useEffect(() => {
        history.push(page)
    }, [])
    
    return(
        <div>

        </div>
    )
}
export default Login;