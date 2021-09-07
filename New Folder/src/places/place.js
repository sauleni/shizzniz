import React from 'react';
import { IoMdPeople } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import PinDropIcon from '@material-ui/icons/PinDrop';
import HomeIcon from '@material-ui/icons/Home';
import './style.css'
import Nav from '../navbar';

export default function Place() {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                backgroundColor: "#ED281A",
                // padding: 10,
                flexDirection: "column",
                height: "100%"
            }}
        >
            <Nav type="arrow" envelop="none" title="Place Profile" link="home"/>
            <div
                style={{
                    backgroundColor: "pink",
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <HomeIcon
                    style={{
                        color: "white",
                        fontSize: 60,
                    }}/>
            </div>
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <p
                    style={{
                        color: "white",
                        fontSize: 20,
                    }}
                >
                    #Place Name
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <span className="icon_span">
                        <BsInfoCircle className="icon"/>
                    </span>

                    <span className="icon_span">
                        <IoMdPeople className="icon"/>
                    </span>

                    <span className="icon_span">
                        <PinDropIcon className="icon"/>
                    </span>
                </div>

                <button
                    style={{
                        // width: 50,
                        height: 30,
                        color: "white",
                        backgroundColor: "#aaa",
                        marginBottom: 200,
                        border: "none",
                        padding: 10,
                    }}
                >
                    ADD PLACE
                </button>
            </div>

        </div>
    )
}