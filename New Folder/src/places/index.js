import React, { Component, useState } from 'react';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { GoCalendar } from 'react-icons/go';
import { IoMdPeople } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PinDropIcon from '@material-ui/icons/PinDrop';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import './style.css'
import { Link } from 'react-router-dom';
import { Item, Item2 } from '../menu';
import { IoExitOutline } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';
import GeneralInfo from './generalInfo';
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from '@material-ui/core';

// export default function Places() {
//     const [open, setOpen] = useState(false);

//     const show = () => {
//         setOpen(true)
//     }

//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: '100%',
//                 backgroundColor: "#d21212",
//                 flexDirection: "column"
//             }}
//         >
//             {/* <Nav type="arrow" title="Favourite Place Profile" icon="bin" link="home"/> */}
//             <GeneralInfo open={open} setOpen={setOpen}/>
//             <div
//                 style={{
//                     backgroundColor: "pink",
//                     width: "100%",
//                     height: "200px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }}
//             >
//                 <HomeIcon
//                     style={{
//                         color: "white",
//                         fontSize: 60,
//                     }}/>
//             </div>
//             <div
//                 style={{
//                     width: "100%",
//                     padding: 10,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }}
//             >
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         width: "100%",
//                         border: "none",
//                         height: 30,
//                         borderRadius: 10,
//                     }}
//                 >
//                     <Link to="place">
//                         <span style={{color: "white"}}>ADD PLACES</span>
//                     </Link>
//                 </div>

//                 <div
//                     style={{
//                         width: "100%",
//                         display: "flex",
//                         flexWrap: "wrap",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Item text="LEAVE" color="red" icon={<IoExitOutline color="white" fontSize={24} />} />
//                     <Item2 text="GOING TO" color="blue" icon={<MdLocationOn color="white" fontSize={24} />} />
//                     <Item2 text="" color="yellow" icon={<FaFire color="white" fontSize={24} />} width2={140} />
//                     <Item2 text="20" color="white" icon={<IoExitOutline color="white" fontSize={24} />} width2={60} />
//                 </div>
                
//                 <div
//                     style={{
//                         width: "100%",
//                         display: "flex",
//                         flexWrap: "wrap",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <span className="icon_span" onClick={show}>
//                         <BsInfoCircle className="icon" />
//                     </span>

//                     <span className="icon_span">
//                         <LocalCafeIcon className="icon"/>
//                     </span>

//                     <span className="icon_span">
//                         <GoCalendar className="icon"/>
//                     </span>

//                     <span className="icon_span">
//                         <CameraAltIcon className="icon"/>
//                     </span>
                    
//                     <span className="icon_span">
//                         <IoMdPeople className="icon"/>
//                     </span>
                    
//                     <span className="icon_span">
//                         <RecordVoiceOverIcon className="icon"/>
//                     </span>

//                     <span className="icon_span">
//                         <PinDropIcon className="icon"/>
//                     </span>

//                     <span className="icon_span">
//                         <PersonIcon className="icon"/>
//                     </span>

//                     <span className="icon_span">
//                         <PersonIcon className="icon"/>
//                     </span>
                    
//                 </div>
//             </div>
//         </div>
    
//     );
// }

class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    showInfoModal = e => {
        this.setState({
            show: true
        });
    };

    hideInfoModal = e => {
        this.setState({
            show: false
        });
    };

    render() {
        
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    width: '100%',
                    backgroundColor: "#d21212",
                    flexDirection: "column"
                }}
            >
                <GeneralInfo
                    show={this.state.show}
                    hideInfoModal={e => this.hideInfoModal()}
                />
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
                        width: "100%",
                        padding: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            border: "none",
                            height: 30,
                            borderRadius: 10,
                        }}
                    >
                        <Link to="place">
                            <span style={{color: "white"}}>ADD PLACES</span>
                        </Link>
                    </div>

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Item text="LEAVE" color="red" icon={<IoExitOutline color="white" fontSize={24} />} />
                        <Item2 text="GOING TO" color="blue" icon={<MdLocationOn color="white" fontSize={24} />} />
                        <Item2 text="" color="yellow" icon={<FaFire color="white" fontSize={24} />} width2={140} />
                        <Item2 text="20" color="white" icon={<IoExitOutline color="white" fontSize={24} />} width2={60} />
                    </div>
                    
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span
                            className="icon_span"
                            onClick={e => this.showInfoModal() }
                        >
                            <BsInfoCircle className="icon" />
                        </span>

                        <span className="icon_span">
                            <LocalCafeIcon className="icon"/>
                        </span>

                        <span className="icon_span">
                            <GoCalendar className="icon"/>
                        </span>

                        <span className="icon_span">
                            <CameraAltIcon className="icon"/>
                        </span>
                        
                        <span className="icon_span">
                            <IoMdPeople className="icon"/>
                        </span>
                        
                        <span className="icon_span">
                            <RecordVoiceOverIcon className="icon"/>
                        </span>

                        <span className="icon_span">
                            <PinDropIcon className="icon"/>
                        </span>

                        <span className="icon_span">
                            <PersonIcon className="icon"/>
                        </span>

                        <span className="icon_span">
                            <PersonIcon className="icon"/>
                        </span>
                        
                    </div>
                </div>
            </div>
    
        );
    }
}

export default Places;