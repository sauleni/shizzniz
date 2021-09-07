import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Nav from '../navbar';
import Button from '../button';
import { IoExitOutline } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';
import { Person } from '@material-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';
import { Modal } from '@material-ui/core';
import { BsArrowLeft } from 'react-icons/all'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <Modal
            open={menuOpen}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                }}
            >
                <div style={{
                    width: "100%",
                    display: "flex"
                }}>
                    <BsArrowLeft
                    style={{
                        color: "white",
                        padding: ".4em",
                        fontSize: "2em"
                    }}
                    onClick={() => setMenuOpen(false)}
                />
                </div>
                
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
                        }}
                    />
                </div>
                <div
                    style={{
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        flex: 1,
                    }}
                >
                    <p
                        style={{
                            fontSize: 24,
                            marginBottom: 5,
                            marginTop: 5,
                        }}
                    >
                        #Place Name
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Item text="LEAVE" color="red" icon={<IoExitOutline color="white" fontSize={24} />} />
                        <Item2 text="GOING TO" color="blue" icon={<MdLocationOn color="white" fontSize={24} />} />
                        <Item2 text="" color="yellow" icon={<FaFire color="white" fontSize={24} />} width2={140} />
                        <Item2 text="20" color="white" icon={<BsFillPersonFill color="white" fontSize={24} />} width2={60} />
                    </div>

                    {/* 3: footer */}
                    <Button to="main" title="My Profile" />
                    <Button to="main" title="Settings" />
                    <Button to="main" title="Logout" />
                </div>

            </div>

        </Modal>

    );
}

// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//             <Modal
//                 open={this.props.menuOpen}
//             >
//                 <div
//                     style={{
//                         width: "100%",
//                         height: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <BsArrowLeft
//                         style={{
//                             color: "white",
//                             paddingTop: 15,
//                             paddingLeft: 10,
//                         }}
//                         onClick={this.props.setMenuOpen(false)}
//                     />
//                     <div
//                         style={{
//                             backgroundColor: "pink",
//                             width: "100%",
//                             height: "200px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                         }}
//                     >
//                         <HomeIcon
//                             style={{
//                                 color: "white",
//                                 fontSize: 60,
//                             }} />import {AiFillMail, BsArrowLeft} from 'react-icons/all'
//                     </div>
//                     <div
//                         style={{
//                             backgroundColor: "white",
//                             display: "flex",
//                             flexDirection: "column",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             width: "100%",
//                         }}
//                     >
//                         <p
//                             style={{
//                                 fontSize: 24,
//                                 marginBottom: 5,
//                                 marginTop: 5,
//                             }}
//                         >
//                             #Place Name
//                         </p>

//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexWrap: "wrap",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <Item text="LEAVE" color="red" icon={<IoExitOutline color="white" fontSize={24} />} />
//                             <Item2 text="GOING TO" color="blue" icon={<MdLocationOn color="white" fontSize={24} />} />
//                             <Item2 text="" color="yellow" icon={<FaFire color="white" fontSize={24} />} width2={140} />
//                             <Item2 text="20" color="white" icon={<BsFillPersonFill color="white" fontSize={24} />} width2={60} />
//                         </div>

//                         {/* 3: footer */}
//                         <Button to="main" title="My Profile" />
//                         <Button to="main" title="Settings" />
//                         <Button to="main" title="Logout" />
//                     </div>

//                 </div>

//             </Modal>

//         );
//     }
// }

export function Item({ icon, text, color, width2 }) {
    return (
        <div
            style={{
                display: "flex",
                // flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: width2 ? width2 : 100,
                    height: 30,
                    backgroundColor: "white",
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    border: "2px solid rgb(50, 50, 50)",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        height: "70%",
                        width: "100%",
                        backgroundColor: color,
                        marginTop: 4,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        marginLeft: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            fontSize: 18,
                            color: "white",
                        }}
                    >
                        {text}
                    </span>
                </div>
            </div>

            <div
                style={{
                    width: 50,
                    height: 34,
                    backgroundColor: "rgb(50, 50, 50)",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {icon}
            </div>
        </div>
    )
}

export function Item2({ icon, text, color, width2 }) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
            }}
        >
            <div
                style={{
                    width: 50,
                    height: 34,
                    backgroundColor: "rgb(50, 50, 50)",
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {icon}
            </div>


            <div
                style={{
                    width: width2 ? width2 : 100,
                    height: 30,
                    backgroundColor: "white",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    border: "2px solid rgb(50, 50, 50)",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        height: "70%",
                        width: "100%",
                        backgroundColor: color,
                        marginTop: 4,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        marginRight: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: -0.5,
                    }}
                >
                    <span
                        style={{
                            fontSize: 18,
                            color: color === "white" ? "rgb(50, 50, 50)" : "white",
                        }}
                    >
                        {text}
                    </span>
                </div>
            </div>


        </div>
    )
}

// export default Menu;