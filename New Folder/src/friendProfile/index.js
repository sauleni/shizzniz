import { DateRange,
    Search,
    Person,
    Public,
    KeyboardArrowRight,
    KeyboardArrowDown
} from '@material-ui/icons';

import React, { Component } from 'react';
import Friend from './friend';
import Modal from '@material-ui/core/Modal';
import './style.css'
import { useState } from 'react';

class FriendsProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [1,1,1,1,1,1,1,1,1,1,1,1]
        };
    }
    componentDidMount() {
        document.getElementById("friends").style.display = "none";
        document.getElementById("shared_friends").style.display = "none";
    }

    showHideFriends() {
        let item = document.getElementById("friends");
        if(item.style.display !== "none") {
            item.style.display = "none";
        }else {
            item.style.display = "flex";
            item.style.flexWrap = "wrap";
        }
    }

    showHideSharedFriends() {
        let item = document.getElementById("shared_friends");
        if(item.style.display === "flex") {
            item.style.display = "none";
        }else {
            item.style.display = "flex";
            item.style.flexWrap = "wrap";
        }
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    margin: 0,
                    padding: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "80%",
                            backgroundColor: "#d21212",
                            height: 30,
                            borderRadius: 10,
                        }}
                    >
                        <span style={{color: "white"}}>ADD FRIENDS</span>
                    </div>

                    <div>
                        <Friend title="You are Friends!" color="green" />
                    </div>
                    <div
                        style={{
                            width: 300,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "left",
                            padding: 10,
                        }}
                    >
                        <p className="itemContainer">
                            <Person
                                style={{
                                    color: "red",
                                    marginRight: 10,
                                }}
                            />
                            <span className="itemDetails">#Username</span>
                        </p>

                        <p className="itemContainer">
                            <Public
                                style={{
                                    color: "red",
                                    marginRight: 10,
                                }}
                            />
                            <span className="itemDetails">#City, #Country</span>
                        </p>

                        <p className="itemContainer">
                            <DateRange
                                style={{
                                    color: "red",
                                    marginRight: 10,
                                }}
                            />
                            <span className="itemDetails">#Date Of Birth</span>
                        </p>
                    </div>
                    
                    <div className="itemContainer2">
                        <span onClick={() => this.showHideSharedFriends}>Shared Friends [3]</span>
                        <KeyboardArrowRight />
                    </div>
                    <div id="shared_friends">
                        {[1, 2, 3].map((item, index) => (
                            <Friend title="#Username" key={index}/>
                        ))}
                    </div>
                    <div className="itemContainer2">
                        <span>Shared Places [3]</span>
                        <KeyboardArrowRight />
                    </div>
                    <div
                        style={{
                            paddingLeft: 10,
                            // width: "80%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <input type="text" placeholder="Search Friends" id="text_input"/>
                        <Search
                            style={{
                                color: "gray",
                                position: "relative",
                                left: -40,
                                fontSize: 20,
                            }}
                        />
                        <KeyboardArrowDown />
                    </div>
                    
                    <div id="friends">
                        {this.state.friends.map((item, index) => (
                            <Friend title="#Username" key={index}/>
                        ))}
                    </div>
                    
                    {/* <button
                        id="inviteButton"
                    >
                        Send Invite
                    </button> */}

                    <div className="itemContainer2">
                        <span>All Places [8]</span>
                        <KeyboardArrowRight />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            width: "100%",
                            marginBottom: 20,
                        }}
                    >
                        <ToggleGroup />
                        <AddFriend />
                    </div>
                    
                </div>


            </div>
        );
    }
}

export default FriendsProfile;

function AddFriend() {
    const add = () => {
        alert("Add friend clicked");
    }
    return(
        <div>
            <button
                onClick={add}
                style={{
                    border: "none",
                    fontSize: 16,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: 10,
                    backgroundColor: 'transparent',
                }}
            >
                Add Friends
                <span
                    style={{
                        backgroundColor: "#d21212",
                        fontSize: 30,
                        borderRadius: 30,
                        // backgroundColor: rgb(210, 18, 18),
                        color: "white",
                        width: 30,
                        height: 30,
                        display: "flex",
                        padding: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 5,
                    }}
                >
                    +
                </span>
            </button>
        
        </div>
        
    )
}


function ToggleGroup() {
    const [open, setOpen] = useState(false)
    const [groupName, setGroupName] = useState("")

    const submitGroup = () => {
        if(groupName === "") {
            alert(`Group name cannot be empty`)
        }else{
            alert(`Group '${groupName}' created`)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    position: "absolute",
                    left: "15%",
                    top: 150,
                    width: "70%",
                    height: 120,
                    borderRadius: 5,
                    backgroundColor: "#ccc",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "33%",
                            backgroundColor: "red",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <p style={{color: "white", fontSize: 20}}>CREATE NEW GROUP</p>
                    </div>

                    <div
                        style={{
                            width: "100%",
                            height: "34%",
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            
                        }}
                    >
                        <input
                            type="text"
                            onChange={(txt) => setGroupName(txt.target.value)}
                            placeholder="Enter Group Name"
                            style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                textAlign: "center",
                                border: "none",
                                outline: "none",
                                fontSize: 20,
                            }}
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                            height: "33%",
                            backgroundColor: "#ccc",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <button
                            style={{
                                width: "50%",
                                backgroundColor: "#cccccc",
                                fontSize: "larger",
                                fontWeight: "bold",
                                border: "none",
                                outline: "none",
                                color: "white",
                            }}
                            onClick={submitGroup}
                        >
                            CREATE
                        </button>

                        <button
                            style={{
                                width: "50%",
                                backgroundColor: "#cccccc",
                                fontSize: "larger",
                                fontWeight: "bold",
                                border: "none",
                                outline: "none",
                                color: "white",
                            }}
                            onClick={() => setOpen(false)}
                        >
                            CLOSE
                        </button>
                    </div>
                    
                </div>
            </Modal>
            <button
                onClick={() => setOpen(true)}
                style={{
                    border: "none",
                    fontSize: 16,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: 10,
                    backgroundColor: 'transparent',
                }}
            >
                <span
                    style={{
                        backgroundColor: "#d21212",
                        fontSize: 30,
                        borderRadius: 30,
                        // backgroundColor: rgb(210, 18, 18),
                        color: "white",
                        width: 30,
                        height: 30,
                        display: "flex",
                        padding: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 5,
                    }}
                >
                    +
                </span> Create Group
            </button>
        </div>
        
    );
}