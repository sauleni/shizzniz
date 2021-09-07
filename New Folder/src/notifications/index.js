// import { Icon } from '@material-ui/core';
import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './style.css';


class Notifications extends Component {
    constructor(props) {
        super(props);
        console.log(">>>>>>", new Date())
        this.state = {
            months: [
                "Jan", "Feb", "Mar", "Apr",
                "May", "Jun", "Jul", "Aug",
                "Sep", "Oct", "Nov", "Dec"
            ],
            image: null,
            now: new Date(),
            // day: this.state.now.getDate().toString().length < 2 
            //     ? "0" + new Date().getDate() 
            //     : new Date().getDate(),
            // month: new Date().getMonth().toString(),
            // year: new Date().getFullYear().toString(),
            // hour: new Date().getHours().toString().length < 2 ? "0" + new Date().getHours() : new Date().getHours(),
            // minute: new Date().getMinutes().toString().length < 2 ? "0" + new Date().getMinutes() : new Date().getMinutes(),
            // date: this.state.day + " " + this.state.months[this.state.month] + " " + this.state.year + " " + this.state.hour + ":" + this.state.minute
        };
    }
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    flexDirection: "column",
                }}
            >
                {/* <Nav /> */}
                {[1,2,3, 4].map((item, index) => (
                    <div className="notification" key={index}>
                        <div className="image">
                            {
                                this.state.image
                                ? <img src={this.state.image} alt=""/>
                                : <PersonIcon style={{color: "white", fontSize: 50}}/>
                            }
                            
                        </div>
                        <div className="content">
                            <span
                                className="username"
                                // onClick={Goto('./places')}
                                >#Username</span>
                            <span className="isat">is AT</span> 
                            <span className="placename">#Place Name</span>
                            <div className="homeicon">
                                <HomeIcon
                                    style={{
                                        color: "white",
                                        fontSize: 50,
                                        background: 'pink',
                                        borderRadius: 10,
                                    }}
                                />
                            </div>
                            <span className="date">
                                { this.state.now.toString().slice(0, 21) }
                            </span>
                        </div>
                        <div
                            style={{
                                height: 10,
                                width: '100%',
                            }}
                        ></div>
                    </div>
            
                ))}
                
            </div>
        
        );
    }
}

export default Notifications;
