import { Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react"

class Event extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            Event:[
                {
                    Date:"20 jan 2020",
                    Description: "Live music",
                    Start: "08:00",
                    end:"17:00",
                    cost:"ZAR R50.00"
                },
                {
                    Date:"25 jan 2020",
                    Description: "Live music",
                    Start: "08:00",
                    end:"16:00",
                    cost:"ZAR R60.00"
                },
                {
                    Date:"15 feb 2020",
                    Description: "Live music",
                    Start: "08:00",
                    end:"17:00",
                    cost:"ZAR R35.00"
                },
                {
                    Date:"16 march 2020",
                    Description: "Live music",
                    Start: "08:00",
                    end:"17:00",
                    cost:"ZAR R50.00"
                }
            ],
            open: false,
        }
    }
    render(){
        return(
            <Modal
                open={this.state.open}
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "space-between",
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                >
                    <span
                        style={{
                            color: "white",
                            fontSize: 18,
                        }}
                    >Events</span>
                    <Close
                        style={{
                            color: "white",
                            fontSize: 20,
                        }}
                    />
                </div>
            </Modal>
        )
    }
}
export default Event;