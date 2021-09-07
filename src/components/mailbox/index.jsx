import React, { Component, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import PersonIcon from '@material-ui/icons/Person';
import Nav from '../navbar';
import './style.css';
import Modal from '@material-ui/core/Modal';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function MailBox() {
    const [open, setOpen] = useState(false)

    const onFilter = ()=> {
        if(open) {
            setOpen(false)
        }else {
            setOpen(true)
        }
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
            
        >
            <Nav type="arrow" title="MailBox" link="home" icon="filter" onPress={onFilter}/>
            <Filter open={open} setOpen={setOpen} />
            <div
                style={{
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <Mail status="Invite request sent" key={index}/>
                ))}
                
            </div>
        </div>
    );
}

function Mail({status}) {
    return (
        <div
            style={{
                width: "95%",
                marginTop: 5,
                paddingBottom: 5,
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid darkslategray",
            }}
        >
            <div
                style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <PersonIcon
                    style={{
                        fontSize: 60,
                        color: "white",
                        backgroundColor: "pink",
                        borderRadius: 50,
                        padding: 10
                    }}
                />
            </div>

            <div
                style={{
                    width: "45%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <span>#Username</span>
                <span>{status}</span>
            </div>
            
            <div
                style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <CheckIcon
                    style={{
                        fontSize: 18,
                        color: "white",
                        backgroundColor: "red",
                        borderRadius: 20,
                        padding: 5,
                        margin: 5,
                    }}
                />
                <CloseIcon
                    style={{
                        fontSize: 18,
                        color: "white",
                        backgroundColor: "#ccc",
                        borderRadius: 20,
                        padding: 5,
                        margin: 5,
                    }}
                />
            </div>
        </div>
    )
}

function Filter({open, setOpen}){
    const filters = [
        {
            title: "Show All",
            value: "all"
        },
        {
            title: "Invites Sent/Received",
            value: "sent_or_received"
        },
        {
            title: "Invites Accepted",
            value: "accepted"
        },
        {
            title: "Invites Rejected",
            value: "rejected"
        },
        {
            title: "Invites Cancelled",
            value: "cancelled"
        },
    ];

    const [currentFilter, setCurrentFilter] = useState(filters[0])

    const reset = () => {
        console.log("filter pressed")
        alert("filter pressed")
    }

    return(
        <Modal
            open={open}
            style={{
                width: "100%",
                height: 500,

            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: 40,
                        backgroundColor: "#d21212",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <p style={{ color: "white", fontSize: 26, marginLeft: 20,}}>Filter Mailbox</p>
                </div>
                <div
                    style={{
                        width: "100%",
                        // height: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "white",
                        paddingBottom: 15,
                    }}
                >

                    {filters.map((item, index) => (
                        <div
                            style={{
                                width: "90%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: 15,
                            }}
                            key={index}
                        >
                            <span
                                style={{
                                    color: "black",
                                    fontSize: 20,
                                }}
                            >{item.title}</span>
                            <input
                                type="radio"
                                value={item.value}
                                style={{
                                    width: 20,
                                    height: 20,
                                    border: "1px solid black",
                                }}
                                onChange={() => setCurrentFilter(item.value)}
                            />
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <button
                        onClick={reset}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50%",
                            height: 40,
                            fontSize: 20,
                            color: "white",
                            backgroundColor: "rgb(80, 80, 80)",
                            border: "none",
                        }}
                    >
                        Filter
                    </button>

                    <button
                        onClick={() => setOpen(false)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50%",
                            height: 40,
                            fontSize: 20,
                            color: "white",
                            backgroundColor: "rgb(80, 80, 80)",
                            border: "none",
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
}