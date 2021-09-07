import React, { useState } from 'react';
import Places from '../places';
import Notifications from '../notifications';

// material-ui components
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
import FriendsTab from './friendsTab';

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


export default function Main() {
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="main">
            <Nav />
            <Paper
                square
                style={{
                    width: 'fit-content',
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
                        
                    />
                    <Tab
                        icon={<PersonIcon />}
                        label="Friends"
                        {...allyProps(1)}
                    />
                    <Tab
                        icon={<HomeIcon />}
                        label="Favourite Places"
                        {...allyProps(2)}
                        // style={{
                        //     color: "white"
                        // }}
                    />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <Notifications />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <FriendsTab />
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <Places />
                </TabPanel>
            </Paper>
        </div>
    )
}
