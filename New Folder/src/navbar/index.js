import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AiFillMail, BsArrowLeft } from 'react-icons/all'
import { Link } from 'react-router-dom';
import './style.css'
import ICN from "../../files/icon.png";
import FilterListIcon from '@material-ui/icons/FilterList'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type ? this.props.type : "menu",
            title: this.props.title ? this.props.title : "Shizzniz",
            link: this.props.link,
            icon: this.props.icon,
            icon2: this.props.icon2,
            onPress: this.props.onPress
        };
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    // padding: 10,
                    backgroundColor: "rgb(250, 250, 250)",
                    margin: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "rgb(55, 55, 55)",
                        flexDirection: "row",
                        width: "100%",
                    }}
                >
                    
                    {this.state.type === "menu"
                    ? <div id="menuNavBar">
                        <MenuIcon
                            style={{
                                color: "white",
                                paddingTop: 15,
                                paddingLeft: 10,
                            }}
                            id="menuIcon"
                            onClick={e => this.props.ToggleMenu(e)}
                        />
                        
                    </div>
                    
                    :<Link to={this.state.link}>
                        <BsArrowLeft
                            style={{
                                color: "white",
                                paddingTop: 15,
                                paddingLeft: 10,
                            }}
                        />
                    </Link>
                    }
                    
                    <p
                        style={{
                            position: "relative",
                            top: -5,
                            color: "white",
                            fontSize: "large",
                            marginLeft: 20,
                            
                        }}
                    >
                        {this.state.title}
                    </p>

                    { this.state.type === "menu" &&
                        <Link to="mail">
                            <AiFillMail
                                style={{
                                    color: "white",
                                    padding: 10,
                                    marginLeft: 190,
                                }}
                                size={28}
                            />
                        </Link>
                    }
                    {this.state.icon
                        ? (this.state.icon === "filter" 
                            ? <span
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft: "auto",

                                    }}
                                    onClick={this.state.onPress}
                                >
                                    <FilterListIcon
                                        style={{
                                            color: "white",
                                            fontSize: 36,
                                        }}
                                        
                                    />
                                </span>
                            : <img src={ICN} alt="" style={{marginLeft: "auto"}}/>)
                        : null
                    }
                </div>
                <ul id="menuLink">
                    <li className="menuItem">
                        <Link to="login">Login</Link>
                    </li>

                    <li className="menuItem">
                        <Link to="register">Register</Link>
                    </li>

                    <li className="menuItem">
                        <Link to="edit">Edit Profile</Link>
                    </li>

                    <li className="menuItem">
                        <Link to="recover">Reset Password</Link>
                    </li>

                    <li className="menuItem">
                        <Link to="home">Home</Link>
                    </li>
                </ul>
            </div>
            
        );
    }
}

export default Nav;