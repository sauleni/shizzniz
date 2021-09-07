import { Person, Search } from '@material-ui/icons';
import React, { Component } from 'react';
import Nav from '../navbar';
import './style.css'

class AddFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Nav title="Add Friends to Group" type="arrow" link="home" />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 16,
                        height: 50,
                        boxShadow: "-2px 2px 2px 2px #ddd",
                        marginTop: 10,
                    }}
                >
                    <input
                        id="addFriendInput"
                        type="text"
                        placeholder="Search All Friends"
                        style={{
                            border: "none",
                            outline: "none",
                            textAlign: "center",
                            height: "80%",
                            width: "80%",
                            fontWeight: "bold"
                        }}
                    />
                    <Search style={{color:"#cccccc", fontWeight: "bold"}} />
                </div>
                <div
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => (
                        <FriendToAdd key={index} />
                    ))}
                </div>

                <div
                    style={{
                        width: "100%",
                        marginBottom: 10,
                    }}
                >
                    <button
                        style={{
                            width: "50%",
                            height: 50,
                            backgroundColor: "#d21212",
                            fontSize: 20,
                            color: "white",
                        }}
                    >
                        ADD
                    </button>
                </div>
            </div>
        );
    }
}

function FriendToAdd() {
    return(
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",            
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                    marginTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    
                }}
            >
                <Person
                    style={{
                        fontSize: 50,
                        color: "white",
                        backgroundColor: "pink",
                        borderRadius: 50,
                        padding: 10,
                    }}
                />
                <div
                    style={{
                        fontSize: 26,
                        display: "flex",
                        width: "60%",
                        marginLeft: 10,
                    }}
                >
                    #Username
                </div>
                <input
                    className="add_friend_checkbox"
                    type="checkbox"
                    style={{
                        border: "1px solid rgb(50, 50, 50)",
                        width: 30,
                        height: 30,
                    }}
                />
                
            </div>
            <span
                style={{
                    width: "95%",
                    height: 1,
                    borderBottom: "2px solid #cbcbcb",
                    marginLeft: "2.5%",
                }}
            ></span>
        </div>
        
    )
}

export default AddFriends;