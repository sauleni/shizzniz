import React, { Component, useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useHistory } from "react-router-dom";
import './style.css'
import TextInput from '../../input';
import Dropdown from '../../dropdown';
import { Link } from 'react-router-dom';
import Nav from '../../navbar';


export default function Register({navigation}) {
    const history = useHistory();
    const [state, setState] = useState({
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
    })

    const selectImage = () => {

    };

    return (
        <div id="registerProfile">
            <Nav type="arrow" title="Register" link="login" />
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
                    onClick={selectImage}
                />
            </div>
            <div
                id="register_edit_form_container"
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >

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
                    values={state.countries}
                    id="registerCountry"
                />

                <Dropdown
                    values={state.cities}
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
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>

                <button
                    id="registerButton"
                    onClick={() => {
                        console.log("registration");
                        history.push("home");
                    }}
                >
                    Submit
                </button>
            </div>

        </div>

    )
}


// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ImageUrl: "",
//             Username: "",
//             Email: "",
//             MobileNumber: "",
//             Contry: "",
//             City: "",
//             DOB: "",
//             Password: "",
//             countries: [
//                 "Country",
//                 "A",
//                 "B",
//                 "C"
//             ],
//             cities: [
//                 "City",
//                 "A",
//                 "B",
//                 "C"
//             ]
//         };
//     }
//     selectImage() {
//         alert("image selection");
//     }

//     render() {
//         return (
//             <div id="registerProfile">
//                 <Nav type="arrow" title="Register" link="login" />
//                 <div id="editprofile_image_container">
//                     <PersonIcon
//                         id="personIcon"
//                     />
//                     <AddOutlinedIcon
//                         id="addIcon"
//                         style={{
//                             color: "white",
//                             fontSize: 28,
//                             backgroundColor: "red",
//                             borderRadius: 40,
//                             position: "relative",
//                             // top: -10,
//                             left: -25,
//                         }}
//                         onClick={this.selectImage}
//                     />
//                 </div>
//                 <div
//                     id="register_edit_form_container"
//                     style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                     }}
//                 >

//                     <TextInput
//                         placeholder="Username"
//                         id="registerUsername"
//                     />

//                     <TextInput
//                         placeholder="Email"
//                         id="registerEmail"
//                     />

//                     <TextInput
//                         placeholder="Mobile Number"
//                         id="registerMobileNumber"
//                     />

//                     <Dropdown
//                         values={this.state.countries}
//                         id="registerCountry"
//                     />

//                     <Dropdown
//                         values={this.state.cities}
//                         id="registerCity"
//                     />

//                     <TextInput
//                         style={{
//                             marginTop: 15,
//                         }}
//                         placeholder="Date of Birth"
//                         id="registerDOB"
//                         type="date"
//                     />

//                     <TextInput
//                         placeholder="Password"
//                         type="password"
//                         id="Password"
//                     />

//                     <TextInput
//                         placeholder="Confirm Password"
//                         type="password"
//                         id="confirmPassword"
//                     />

//                     <label className="container">By registering, you agree to our <Link>Terms and Condition</Link>
//                         <input type="checkbox" />
//                         <span className="checkmark"></span>
//                     </label>

//                     <button
//                         id="registerButton"
//                         onClick={() => {
//                             console.log("registration")

//                         }}
//                     >
//                         Submit
//                     </button>
//                 </div>

//             </div>

//         );
//     }
// }

// export default Register;