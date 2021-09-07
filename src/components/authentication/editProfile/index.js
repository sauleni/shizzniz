import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import './style.css'
import TextInput from '../../input';
import Dropdown from '../../dropdown';
import Nav from '../../navbar';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: {
                currentImageUrl: "https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg",
                currentUsername: "",
                currentEmail: "",
                currentMobileNumber: "",
                currentContry: "",
                currentCity: "",
                currentDOB: "",
                currentPassword: "",
            },
            countries: [
                "#Current Country Selection",
                "A",
                "B",
                "C"
            ],
            cities: [
                "#Current City Selection",
                "A",
                "B",
                "C"
            ]
        };
    }
    selectImage() {
        alert("image selection")
    }
    render() {
        return (
            <div id="editProfile">
                <Nav />
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
                        value="#Current Username Selection"
                        id="newUsername"
                    />

                    <TextInput
                        value="#Current Email Selection"
                        id="newEmail"
                    />

                    <TextInput
                        value="#Current Mobile Number Selection"
                        id="newMobileNumber"
                    />

                    <Dropdown
                        values={this.state.countries}
                        id="newCountry"
                    />
                    <Dropdown
                        values={this.state.cities}
                        id="newCity"
                    />
                    <TextInput
                        style={{
                            marginTop: 15,
                        }}
                        value="#Current Date of Birth Selection"
                        id="newDOB"
                        type="date"
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingLeft: 20,
                        }}
                    >
                        <input style={{height: 25, width: 25}} type="checkbox" id="changePass" name="changePass"/>
                        <label style={{fontSize: "larger", paddingTop: "auto", paddingBottom: "auto"}} htmlFor="changePass">Set New Password</label>
                    </div>
                    
                    <TextInput
                        placeholder="Password"
                        type="password"
                        id="newPassword"
                        disabled="true"
                    />

                    <TextInput
                        placeholder="Confirm Password"
                        type="password"
                        id="confirmNewPassword"
                        disabled="true"
                    />
                    
                    <button
                        id="updateButton"
                        onClick={() => {
                            const newDetails = {
                                newImageUrl: "",
                                newUsername: "",
                                newEmail: "",
                                newMobileNumber: "",
                                newContry: "",
                                newCity: "",
                                newDOB: "",
                                newPassword: "",
                            }
                        }}
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        );
    }
}

export default EditProfile;