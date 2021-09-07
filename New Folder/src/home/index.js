import React, { Component, useState } from 'react';
import Places from '../places';
import Notifications from '../notifications';
import {
    Box,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';

// icons
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

// proptypes
import PropTypes from 'prop-types'
import Nav from '../navbar';
import FriendsProfile from '../friendProfile';
import './style.css'
import Menu from '../menu';
import MenuIcon from '@material-ui/icons/Menu';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={"span"}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function allyProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


// export default function Home() {
//     const [value, setValue] = useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <div
//             style={{
//                 width: "100%",
//             }}
//         >
//             <Nav />
//             <Paper
//                 square
//                 style={{
//                     width: '100%',
//                 }}
//             >
//                 <Tabs
//                     value={value}
//                     textColor="primary"
//                     onChange={handleChange}
//                     indicatorColor={"secondary"}

//                 >
//                     <Tab
//                         icon={<InfoIcon />}
//                         label="Notifications"
//                         {...allyProps(0)}
//                         style={{
//                             backgroundColor: value === 0 ? '#d21212' : 'rgb(55, 55, 55)',
//                             border: "none",
//                             color: "white",
//                         }}
//                     />
//                     <Tab
//                         icon={<PersonIcon />}
//                         label="Friends"
//                         {...allyProps(1)}
//                         style={{
//                             backgroundColor: value === 1 ? '#d21212' : 'rgb(55, 55, 55)',
//                             border: "none",
//                             color: "white",
//                         }}
//                     />
//                     <Tab
//                         icon={<HomeIcon />}
//                         label="Favourite Places"
//                         {...allyProps(2)}
//                         style={{
//                             backgroundColor: value === 2 ? '#d21212' : 'rgb(55, 55, 55)',
//                             border: "none",
//                             color: "white",
//                         }}
//                     />
//                 </Tabs>
//                 <TabPanel value={value} index={0} >
//                     <Notifications />
//                 </TabPanel>
//                 <TabPanel value={value} index={1} >
//                     <FriendsProfile />
//                 </TabPanel>
//                 <TabPanel value={value} index={2} >
//                     <Places />
//                 </TabPanel>
//             </Paper>
//         </div>
//     )
// }


export default function Home() {
    const [value, setValue] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (_, v) => {
        setValue(v)
        // this.state.value = newValue,
        console.log("tab changed", v);
    }

    const showMenuModal = e => {
        setMenuOpen(true);
    };

    const hideMenuModal = e => {
        setMenuOpen(false);
    };

    const ToggleMenu = e => {
        if (menuOpen) {
            hideMenuModal(e);
        } else {
            showMenuModal(e);
        }
    }


    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <div style={{
                width: "100%",
                height: "2em",
                display: "flex"
            }}>
                <MenuIcon
                    style={{
                        color: "black",
                        padding: ".3em",
                    }}
                    id="menuIcon"
                    onClick={e => setMenuOpen(true)}
                />
            </div>


            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Paper
                square
                style={{
                    width: '100%',
                }}
            >
                <Tabs
                    value={value}
                    textColor="primary"
                    onChange={handleChange}
                    indicatorColor={"secondary"}

                >
                    <Tab
                        icon={<InfoIcon />}
                        label="Notifications"
                        {...allyProps(0)}
                        style={{
                            backgroundColor: value === 0 ? '#d21212' : 'rgb(55, 55, 55)',
                            border: "none",
                            color: "white",
                        }}
                    />
                    <Tab
                        icon={<PersonIcon />}
                        label="Friends"
                        {...allyProps(1)}
                        style={{
                            backgroundColor: value === 1 ? '#d21212' : 'rgb(55, 55, 55)',
                            border: "none",
                            color: "white",
                        }}
                    />
                    <Tab
                        icon={<HomeIcon />}
                        label="Favourite Places"
                        {...allyProps(2)}
                        style={{
                            backgroundColor: value === 2 ? '#d21212' : 'rgb(55, 55, 55)',
                            border: "none",
                            color: "white",
                        }}
                    />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <Notifications />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <FriendsProfile />
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <Places />
                </TabPanel>
            </Paper>
        </div>

    )
}


// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 0,
//             menuOpen: false,
//         };
//     }
//     handleChange = (_, value) => {
//         this.setState({
//             value,
//         })
//         // this.state.value = newValue,
//         console.log("tab changed");
//     }
//     showMenuModal = e => {
//         this.setState({
//             menuOpen: true
//         });
//     };
//     ToggleMenu = e => {
//         if (this.state.menuOpen) {
//             this.hideMenuModal(e);
//         } else {
//             this.showMenuModal(e);
//         }
//     }

//     hideMenuModal = e => {
//         this.setState({
//             menuOpen: false
//         });
//     };

//     render() {

//         return (
//             <div
//                 style={{
//                     width: "100%",
//                 }}
//             >
//                 <Nav
//                     ToggleMenu={e => this.ToggleMenu(e)}
//                 />
//                 <Menu menuOpen={this.state.menuOpen} />
//                 <Paper
//                     square
//                     style={{
//                         width: '100%',
//                     }}
//                 >
//                     <Tabs
//                         value={this.state.value}
//                         textColor="primary"
//                         onChange={this.handleChange}
//                         indicatorColor={"secondary"}

//                     >
//                         <Tab
//                             icon={<InfoIcon />}
//                             label="Notifications"
//                             {...allyProps(0)}
//                             style={{
//                                 backgroundColor: this.state.value === 0 ? '#d21212' : 'rgb(55, 55, 55)',
//                                 border: "none",
//                                 color: "white",
//                             }}
//                         />
//                         <Tab
//                             icon={<PersonIcon />}
//                             label="Friends"
//                             {...allyProps(1)}
//                             style={{
//                                 backgroundColor: this.state.value === 1 ? '#d21212' : 'rgb(55, 55, 55)',
//                                 border: "none",
//                                 color: "white",
//                             }}
//                         />
//                         <Tab
//                             icon={<HomeIcon />}
//                             label="Favourite Places"
//                             {...allyProps(2)}
//                             style={{
//                                 backgroundColor: this.state.value === 2 ? '#d21212' : 'rgb(55, 55, 55)',
//                                 border: "none",
//                                 color: "white",
//                             }}
//                         />
//                     </Tabs>
//                     <TabPanel value={this.state.value} index={0} >
//                         <Notifications />
//                     </TabPanel>
//                     <TabPanel value={this.state.value} index={1} >
//                         <FriendsProfile />
//                     </TabPanel>
//                     <TabPanel value={this.state.value} index={2} >
//                         <Places />
//                     </TabPanel>
//                 </Paper>
//             </div>

//         )
//     }
// }

// export default Home;