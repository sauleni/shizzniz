
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { resetPasswordAction } from './actions';
import { connect } from 'react-redux';
import Image from '../../../components/Badge';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Checkbox } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import {IMAGES_PATH} from '../../../config/globals';

import {
    Dialog,
    DialogActions,
    DialogTitle,
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import '../../../css/registration.css';
import Avatar from '@material-ui/core/Avatar';
import StorageHandler from '../../../storage/StorageHandler';
import * as ACTIONS from '../../constants';
import { Snackbar } from '@material-ui/core';


//import error from "../../Login/Sounds/error.wav";

//import tab from "../../Login/Sounds/tab.wav";

//const tabAudioObject = new Audio(tab);

//const errorAudioObject = new Audio(error);

var React = require('react');

var storageHandler = new StorageHandler();

const styles = theme => ({
    avatar: {
        margin: 10,
		marginTop:30,
        width: "30%",
        height: "30%",
        marginLeft: '35%',
        marginRight: '35%',
        align: "center",
        borderRadius:'0%',
    },
    title: {
      fontFamily: 'bahnschrift',
      color: '#000'
    }
});

const logoStyle ={
	margin: 10,
	marginLeft: '40%',
	marginRight: '40%',
	align: "center",
	borderRadius:'0%',
}

class RegistrationForm extends React.Component {
	
    constructor(props) {
		
        super(props);

        this.state = ({
            email: '',
            errors: {},
        });
    }
	componentDidMount(){
		document.body.classList.add("background-portfolio");
	};

    onSubmit = (e) => {
		
        e.preventDefault();
		
		//document.getElementById("login").style.display = "none";
		
		//document.getElementById("load_").style.display = "block";
		
		//tabAudioObject.play();
		
        var userInfo = {};
		
        userInfo.email = this.state.email;

        if(this.handleValidation()){
			//
        }else{
		
			this.setState({savingComplete : true});
		  	   
			return;
        }

        this.props.resetPasswordAction(userInfo);

    };

    validate = (userInfo) => {
		
        if ((userInfo.email === "")) {
            return false;
        }
		
        return true;
    }

    change = e => {
		
        this.setState({
            [e.target.name]: e.target.value
        });
		
    };
		
    closeNotification(e) {
        storageHandler.removeError();
        this.setState({savingComplete: false});
    }

    handleValidation(){
		
        let fields = this.state.email;
		
        let errors = {};
		
        let formIsValid = true;
       
        if(fields === ''){
			
            errors["email"] = "Email cannot be empty"; 
            formIsValid = false;
			
        }else{
			
            if(typeof fields !== "undefined"){
				
				let lastAtPos = fields.lastIndexOf('@');
				let lastDotPos = fields.lastIndexOf('.');

				if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.indexOf('@@') == -1 && lastDotPos > 2 && (fields.length - lastDotPos) > 2)) {
					formIsValid = false;
					errors["email"] = "Email is not valid";
                }
            } 
         } 
		 
        this.setState({errors: errors});
		
		//errorAudioObject.play();
           
        return formIsValid;
		
    }
	/*
	<div id="load_" style={{display:'none'}}>
			<Avatar alt="Logo" src={'./images/loader-white.gif'} className={classes.avatar} />
			<br/>
			<br/>
			<p style={{color:'red',textAlign:'center'}}>  33%</p>
			</div>
	
	*/
	
    render() {
		
		const { classes, theme } = this.props;

        return (
		
            <div className="wrapper">
			
			<div id="login">
			
			 <div style={{textAlign:"center", width:"90%", marginLeft : "5%"}}>
				<br/>
				<br/>				
				<div>
					 <Avatar alt="Logo" src={'./images/logo-red.jpg'} className={classes.avatar} />
				 </div>
				 
				 <br />
				 <br />
				 
				 <form className="contact50-form validate-form">
				 
					 <div className="form-group">
						 <Input icon="glyphicon " name="email" value={this.state.username} holder="Email" type="email" onChange={e=> this.change(e)}
						 />
						 <span style={{color: "red"}}>{this.state.errors["email"]}</span>
					 </div>
					 
					 <div className="contact100-form-btn" onClick={e=> this.onSubmit(e)}>
						 <div className="form-group">
							 <Button  />
						 </div>
					 </div>
					 
				 </form>	

				<Typography   align='center' variant="h6" >
                    { "version" }
                </Typography>
				
                <Typography  align='center' variant="h6" >
                    { ACTIONS.PWA_VERSION }
                </Typography>
				
                <Typography   align='center' variant="h6" >
                    { "OPERATED BY SHIZZNIZ ONLINE (PTY) LTD" }
                </Typography>
				
                <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
							
                            open={this.state.savingComplete}
							
                            autoHideDuration={5000}
							
                            onClose={e => this.closeNotification(e)}
							
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
							
                            message={<span id="message-id" style={{fontsize:'12px'}}>Enter correct information.</span>}
							
                            action={[
                                <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={e => this.closeNotification(e)}
                                >
								
                                <CloseIcon />
								
                                </IconButton>,
                            ]}
							
                        />	
				</div>						
			 </div>
		 </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        resetPasswordAction: resetPasswordAction
    },
    dispatch)
}

export default compose(withRouter,withStyles(styles),connect(mapStateToProps, matchDispatchToProps))(RegistrationForm);