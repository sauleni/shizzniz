import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import './style.css'
import TextInput from '../../input';
import Dropdown from '../../dropdown';
import { Link } from 'react-router-dom';
import Nav from '../../navbar';


// import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import Image from '../../../components/Badge';
// import './style.css';
// import Button from '../../../components/Button';
// import Input from '../../../components/Input';
// import Select from '../../../components/Select';
// import { Checkbox } from '@material-ui/core';
// // import {IMAGES_PATH} from '../../../config/globals';
// import API from '../../../config/api';
// import { bindActionCreators } from 'redux';
// import {registerUserAction} from './actions';
// import { Snackbar } from '@material-ui/core';
// import * as ACTIONS from '../../constants';
// import {
//     Dialog,
//     DialogActions,
//     DialogTitle,
//     AppBar,
//     Toolbar,
//     IconButton,
//     Typography
// } from '@material-ui/core';

// import { Paper, ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';

// import ExpandMoreIcon from '@material-ui/icons/Event';

// import {DOMAIN} from '../../../config/globals';

// import StorageHandler from '../../../storage/StorageHandler';

// import CloseIcon from '@material-ui/icons/Close';

// import AddIcon from '@material-ui/icons/Add';

// import '../../../css/registration.css';

// //import tab from "../../Login/Sounds/tab.wav";

// //import error from "../../Login/Sounds/error.wav";

// import uuid from 'react-uuid';

// //const errorAudioObject = new Audio(error);

// //const tabAudioObject = new Audio(tab);

// import Avatar from '@material-ui/core/Avatar';
// var coutryItems;

// var cityItems;

// var allCities;

// var storageHandler = new StorageHandler();


class RegistrationForm extends Component {
	
    constructor(props) {	
	
        super(props);	
		
        // this.handleClick = this.handleClick.bind(this);
		
        // this.readURL = this.readURL.bind(this);
		
        this.state = ({
            username: '',
            email: '',
            mobileNumber: '',
            age: '',
            password: '',
            confirmPassword: '',
            cityOptionIndex: '-1',
            countryOptionIndex: '-1',
            profileImage: 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURSM0P1Sx1qZHOvyyov2BZ0FsgWQrI8fq93nN6jVCS9pdS/uNd2NFRkeXuP3JvjxXZra5u/7+/rVZTfBmUoVNSTdFUCc3QY89Mvzm4ZSYnGC63dpjToba86pmXNna3EJLUqDV6/OfkTs8QlKiwzAyON50X3w1K0mCm0tARcPFyFe33plRS2ZVVs1YR7hPQEdOVTE3P/5wWf3x7o/e9tnz+9FwXv3Xz/a9s1QkHYFVVPCShGbC5zpRXqBEN1RRVrPk9vOmm+lkUTY+Rovc9T1hc4bJ43BJRzI5QedYRPzPxog6L0Z4j0623/a4rSwzPHVPTEBHTv3e1+xuW/lqVVS54U+YttNaSU6pzcNbTjEzOolXUp1dVL5nWYzf98JTQ1m12VNDRW/F5UROVqxWTEaNq5ng9uvr7NTs9fyeijtMVZLO5kI+Q6Lj99VhTf329P3s6eFgTnEwJ/RoU3BZWDpAR+hfS1Wz2Vm74pJQSvrTzPyahvjEupNbU0lPVig2QDlOWvyrm5pCNoI4LTxmeoDR7k+r0bVmV7JMPV5TVv3MwkNwhX1MSMJsXPm+tPy3qCs4QZLg9v3b0/2lkmlHR9BfTly328pXRvrWz0ecv+v3/DpBSY5gWmS936VLO+d6Y+RiT6jl92nB4qVbU+H0+rnq+VxDRnzP7P25q/p5X/2/sjpTYSQ2QFBWXclcTudXQ5ygoz1eb3pbWYdVT7xaTlCcu3VUVIs7ME6Rr4JdWoTW8L2/wr9uYUg+Q382LG9ZWd5iUD1ba+haRmsuJUuKpUFoe2RKSvzi3HJJSNTy+1SmyKJRQbVnWatKO0Z6kc1fUKLd8tZhUKNGOVSpzNlzYJLg+HPJ5zNJVMZdT0RziUd+ltJzYfyWgWhLSkBkdbppW1Wt0cpfSonR7UpRV/zo5I9QSvKZi/yhjZVANKRgV2q+4OpxXa3m9+hcSLxRQWxTU+56Zk6Usfe/trbo+EBmeHczKVhGSMDr+XpTT4pPSaTl+LBrX7Dn+EyMqHbL6HpVVAAAANpMKKEAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAANRUlEQVRoQ72bC3xT1RnAExoYpQwM0bbWaEYJo8uUxkbqZMBM47xtlRLs7AhMAt3YmtWFmtF7GaOlrWy1yEwplI1aWuujDY0PHF0VZ1ejDsVVB7QKWKGum8VptrCBbs7Hb9+55ya5Se7jJG05+LPtvd89//M9znfOPecehTru4sxJz23oqhkbTlGhkjI8VnOgITc9xxl3TWpFfI84V85KKsPUiOKBVpQlzVoZZwvioW8sSAKwB0hChb2cklSwMQ59iOkbG2pSVCJgXmM8qpSaBuIGENJ3gdbyaNwKaEDSLjIDkNCdBU3Cxpa42lRAEgLydOesLXGz0QNbGuT5cnRnQWJsll8gZ38Z+somYncLdcOmldJ8SXpOV0I25z/UlSPFl6LnDo8bDubPlcCL050PjMPo4WZ7VF3i0SdKP1I2AYrjKsqOiKkvRi8QSOaJNsejEgt+EfqBREkizx0Q1l6Q7kyaYLhKlSTofCG6s4k0pZM30tMkhBeg54xNPBzGnjGBnh9LzymbDLgwPobunBTN2ZF3LMb40fTJ8HkwOmJ9H02vmRyzc/OOpKiOF0Wf6H4e3Smi+n0kvYC8CyUoGZn1IuhHJjC9irQuJSLn8+nOLZPpdM71ZfzA59MfmHw49LsuXuTx6LkJujLex3jTjTA9Z/hSqA5NHQ6n3DC96xLB+bYP0VfGa8BxyIdmukG6M/7XlcTxodE2SJ/8PMNvbDDncPRL0dV589wtXKfn6LMSN2NCTzbgTo/pzsRf1hKCqzjlMf3Seh01GHuepV/SgMfGagrTdyVmvnE9xfZ5VnfS6Xtg/qLBNglm2+Ci+QHCNrHTHETfSDast239qDyzfN3qt0XqX/TbdZmZ5R9tlWpf+NEUtLSE6A1EzT2b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',
            termsOpen: false,
            termsAgree: false,
            errors: {},
			savingComplete:false,

            ImageUrl: "",
            Username: "",
            Email: "",
            MobileNumber: "",
            Contry: "",
            City: "",
            DOB: "",
            Password: "",
            countries: [
                "Country",
                "A",
                "B",
                "C"
            ],
            cities: [
                "City",
                "A",
                "B",
                "C"
            ]
        });
    }
	
	
//     onSubmit = async e => {
		
// 		localStorage.removeItem("cryodex_id");
		
// 		e.preventDefault();	
		
// 		//tabAudioObject.play();
		
// 		//document.getElementById("login").style.display = "none";
		
// 		//document.getElementById("load_").style.display = "block";
		
// 		var userInfo = {};	
		
// 		userInfo.profileImage = this.state.profileImage;
		
// 		userInfo.username = this.state.username;
		
// 		userInfo.age = this.state.age;
		
// 		userInfo.mobileNumber = this.state.mobileNumber;
		
// 		userInfo.cityOptionId = this.state.cityOptionId;
		
// 		userInfo.countryOptionId = this.state.countryOptionId;
		
// 		userInfo.email = this.state.email;
		
// 		userInfo.password = this.state.password;
		
// 		if(this.handleValidation())
// 		{
// 		   //
// 		}
// 		else
// 		{			
// 			this.setState({savingComplete : true});

// 			return;
// 		}
		
// 		var val1 = Math.floor(Math.random() * 10);
		
// 		var val2 = Math.floor(Math.random() * 10);
		
// 		var ans = parseInt(val1) + parseInt(val2);
		
// 		var resp = prompt("Verify you are human: "+val1+" + "+val2+" gives", "Shizzniz");
		
// 		if (resp != null) {

// 			if(parseInt(resp) === ans)
// 			{
// 				var response = await this.props.registerUserAction( userInfo );
				
// 				alert("Welcome to Shizzniz.");
				
// 				this.tabChangeL(null,1);
			
// 			}
// 		}
		
//     };
// 	tabChangeL=(e,value)=>{
	   
// 	   setTimeout(function(e,value){ 
// 			//
// 		 }, 3000);
		 
// 		 this.props.tabChangeLogin(e,value);
	  
//     }

//     change = e => {
		
//         this.setState({
//             [e.target.name]: e.target.value
//         });
		
//     };


//     handleClick(e) {
		
//         this.inputElement.click();

//     }

//     readURL(e) {
		
//         e.preventDefault();		
		
//         var imageFiles = e.target;	
		
//         var reader = new FileReader();
		
//         reader.onload = (e) => {
//             this.setState({ profileImage: e.target.result });
			
//         }

//         reader.readAsDataURL(imageFiles.files[0]);

//     }

//     onCountryChange = (e) => {
		
//         let citySortItems = [];
        
//         allCities.forEach(function (item) {
//             if (e.target.options[e.target.selectedIndex].id == item.Country_ID) {
//                 citySortItems.push(item);
//             }
//         });
		
//         this.setState({ countryOptionId: e.target.options[e.target.selectedIndex].id });
		      
		
// 		citySortItems.push("--Select City--");
		
// 		 this.buildCityOptions(citySortItems);
//     }

//     onCityChange = e => {
		
//         this.setState({ cityOptionId: e.target.options[e.target.selectedIndex].id });

//     }
	

//     buildCityOptions = (cities) => {
		
//         var cityOptionItems = cities.map((city) => <option id={city.City_ID} key={uuid()}> {city.Name} </option>);
		
//         this.setState({ cityOptionItems: cityOptionItems });

//     }
	
// 	 closeNotification(e) {
//         storageHandler.removeError();
//         storageHandler.removePasswordReset();
//         this.setState({savingComplete: false,passwordReseted:false});
//     }
	
//     handleValidation(){
		
//         let fields = this.state.email;
//         let pass = this.state.password;
//         let conf = this.state.confirmPassword;
//         let usr = this.state.username;
//         let age = this.state.age;
//         let mobileNumber = this.state.mobileNumber;
//         let cityOptionId = this.state.cityOptionId;
//         let countryOptionId = this.state.countryOptionId;   
		
//         let errors = {};
//         let formIsValid = true;
       
//         if(fields === ''){
//             errors["email"] = "Email cannot be empty"; 
//             formIsValid = false;
//         }else{

//             if(typeof fields !== "undefined"){
//             let lastAtPos = fields.lastIndexOf('@');
//             let lastDotPos = fields.lastIndexOf('.');

//             if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.indexOf('@@') == -1 && lastDotPos > 2 && (fields.length - lastDotPos) > 2)) {
//                 formIsValid = false;
//                 errors["email"] = "Email is not valid";
//                 }
//             } 
//          } 

//        if((pass.trim() === '')||(pass.length < 6)||(!pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))){
//             errors["password"] = "Password must be at least 6 - 16 characters(at least (1 digit, 1 Capital Letter, 1 Small letter, 1 special characters)";
//             formIsValid = false;
//        }

//        if(conf === ''){
//         errors["confirmPassword"] = "Password confirm cannot be empty";
//         formIsValid = false;
//         }

//         if(pass !== conf){
//             errors["passwordMatch"] = "Password and Confirm Password must match";
//             formIsValid = false;
//         }
//        if((usr === '')||(usr.length >= 4 && usr <= 20 ) &&((pass.match(/^[a-z0-9]+$/i)))){
//         errors["username"] = "Username must be between 4 and 20, letter or digits or both only";
//         formIsValid = false;
//         }

//         if(age === ''){
//             errors["age"] = "Select correct date of birth.";
//             formIsValid = false;
//         }
// 		else{
			
// 			var yearOfBirth = parseInt(age.split('-')[0]);
			
// 			var date = new Date();
			
// 			var currentYear = date.getFullYear();
			
// 			var age_ = parseInt(currentYear - yearOfBirth);
					
// 			if(age_ >= 18 && age_ <= 100){
// 				//
// 			}
// 			else{
				
// 				errors["age"] = "Age must be between 18 and 90 years";
				
// 				formIsValid = false;
// 			}
			
// 		}

//         if(!((mobileNumber.length >= 10)&& (mobileNumber.length < 15))){
// 			errors["mobileNumber"] = "Mobile number should be between 10 and 14 digits";
// 			formIsValid = false;
//         }else{
// 			//
//         }
		
//         if((cityOptionId === '') ||(typeof cityOptionId === 'undefined')){
//             errors["city"] = "City cannot be empty";
//             formIsValid = false;
//         }
		
//         if(countryOptionId === '' || (typeof countryOptionId === 'undefined')){
//             errors["country"] = "Country cannot be empty";
//             formIsValid = false;
//         }
		

//         if(this.state.termsAgree != true){
//             errors["terms"] = "Accept Terms to continue";
//             formIsValid = false;
//         }

//        this.setState({errors: errors});
	   
// 	   //errorAudioObject.play();
	   
//        return formIsValid;
//    }

    render() {

        // const api = new API();

        // if (this.props.cities && this.props.cities.data && this.props.countries && this.props.countries.data) {
		
		//     coutryItems = this.props.countries.data.map((country) =>			 
        //      <option id={country.Country_ID} key={country.Country_ID}>{country.Name}</option>
        //     );
            
        //     allCities = this.props.cities.data;
        // }
		// else
		// {
		// 	let countries = JSON.parse(localStorage.getItem("countries"));
			
			
		// 	if(countries)
		// 	{			
		// 		 coutryItems = countries.map((country) =>
		// 			<option id={country.Country_ID} key={country.Country_ID}>{country.Name}</option>
		// 		);
		// 	}
		// 	else
		// 	{
				
		// 		//window.location.reload(); 
		// 	}
			
		// 	let cities = JSON.parse(localStorage.getItem("cities"));

        //     allCities = cities;
		// }

/*
<div id="load_" style={{display:'none'}}>
				<Avatar alt="Logo" src={'./images/loader-white.gif'}  
				style={{
					
					margin: 10,
					marginTop:30,
					width: "30%",
					height: "30%",
					marginLeft: '35%',
					marginRight: '35%',
					align: "center",
					borderRadius:'0%',
				}}
				/>
				
				<br/>
				<br/>
				<p style={{color:'red',textAlign:'center'}}>  33%</p>
				</div>

*/
        return (
            <div id="registerProfile">
                <Nav type="arrow" title="Register" link="login" envelop="env"/>
                <div id="editprofile_image_container">
                    <PersonIcon
                        id="personIcon"
                    />
                    <AddOutlinedIcon
                        id="addIcon"
                        style={{
                            color: "white",
                            fontSize: 28,
                            backgroundColor: "red",
                            borderRadius: 40,
                            position: "relative",
                            // top: -10,
                            left: -25,
                        }}
                        onClick={this.selectImage}
                    />
                </div>
                <div className="edit_form_container">
                    
                    <TextInput
                        placeholder="Username"
                        id="registerUsername"
                    />

                    <TextInput
                        placeholder="Email"
                        id="registerEmail"
                    />

                    <TextInput
                        placeholder="Mobile Number"
                        id="registerMobileNumber"
                    />

                    <Dropdown
                        values={this.state.countries}
                        id="registerCountry"
                    />

                    <Dropdown
                        values={this.state.cities}
                        id="registerCity"
                    />

                    <TextInput
                        style={{
                            marginTop: 15,
                        }}
                        placeholder="Date of Birth"
                        id="registerDOB"
                        type="date"
                    />
                    
                    <TextInput
                        placeholder="Password"
                        type="password"
                        id="Password"
                    />

                    <TextInput
                        placeholder="Confirm Password"
                        type="password"
                        id="confirmPassword"
                    />

                    <label className="container">By registering, you agree to our <Link>Terms and Condition</Link>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <Link to="home">
                        <button
                            id="registerButton"
                            onClick={() => {
                                console.log("registration")
                            }}
                        >
                            Submit
                        </button>
                    </Link>
                        
                </div>
            </div>
        );
    }
}
export default RegistrationForm;
// const mapStateToProps = (state) => {
//     return {
//         //users: state.users,
//         countries: state.countries,
//         cities: state.cities,
//     };
// };

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({
// 				registerUserAction:registerUserAction
//             },
//             dispatch)
// }


// export default connect(mapStateToProps, matchDispatchToProps)(RegistrationForm);