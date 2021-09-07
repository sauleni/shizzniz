import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div
                style={{
                width: "100%",
                }}
            >
                <Link to={this.props.link}>    
                    <button
                        id="LoginButton"
                        style={{
                            color: "white",
                            backgroundColor: "#d21212",
                            width: "90%",
                            border: "none",
                            fontSize: "16px",
                            height: "50px",
                            fontWeight: "bold",
                        }}
                    >
                        {this.props.title}
                    </button>
                </Link>
            </div>
        );
    }
}

export default Button;