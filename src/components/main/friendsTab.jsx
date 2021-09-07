import React, { Component } from 'react';
class FriendsTab extends Component {
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
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        width: "80%",
                        backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center"

                    }}
                >
                    <input type="button" value="add friend" id="addFriend"/>
                </div>
            </div>
        );
    }
}

export default FriendsTab;