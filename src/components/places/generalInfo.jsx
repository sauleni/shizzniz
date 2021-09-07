import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.show,
            hideInfoModal: this.props.hideInfoModal,
        };
    }
    render() {
        return (
            <Modal
                open={this.props.show}
            >
                <div
                    style={{
                        width: "100%",
                        height: 400,
                        display: "flex",
                        flexDirection: "column",
                        border: "none",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            backgroundColor: "rgb(50, 50, 50)",
                            padding: 10,
                            border: "none",
                        }}
                    >
                        <div
                            style={{
                                width: "90%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "none",
                            }}
                        >
                            <span style={{color: "white", fontSize: 20}}>General Information</span>
                            <span>
                                <CloseIcon
                                    style={{
                                        color: "white",
                                        fontSize: 20
                                    }}
                                    onClick={e => this.props.hideInfoModal(e) }
                                />
                            </span>
                        </div>
                    </div>
                
                    <div
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        {/* decription */}
                        <div
                            style={{
                                width: "95%",
                                height: 120,
                                display: "flex",
                                flexDirection: "row",
                                padding: "2%",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#d21212",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    width: "30%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >Description</span>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    width: "70%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                    boxShadow: "1px 0.3px 1px 1px #ddd",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    This is a short description of the Place. Max. 164 characters
                                </span>
                            </div>

                        </div>
                        
                        <div
                            style={{
                                width: "95%",
                                height: 50,
                                display: "flex",
                                flexDirection: "row",
                                padding: "2%",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#d21212",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    width: "30%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >Type</span>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    width: "70%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                    boxShadow: "1px 0.3px 1px 1px #ddd",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    Place Type. Max. 41 characters
                                </span>
                            </div>

                        </div>
                        
                        <div
                            style={{
                                width: "95%",
                                height: 50,
                                display: "flex",
                                flexDirection: "row",
                                padding: "2%",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#d21212",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    width: "30%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >Address</span>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    width: "70%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                    boxShadow: "1px 0.3px 1px 1px #ddd",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    Place Address. Max. 82 characters.
                                </span>
                            </div>

                        </div>
                        
                        <div
                            style={{
                                width: "95%",
                                height: 50,
                                display: "flex",
                                flexDirection: "row",
                                padding: "2%",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#d21212",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    width: "30%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >Operating hours</span>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    width: "70%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                    boxShadow: "1px 0.3px 1px 1px #ddd",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    ...
                                </span>
                            </div>

                        </div>
                        
                        <div
                            style={{
                                width: "95%",
                                height: 50,
                                display: "flex",
                                flexDirection: "row",
                                padding: "2%",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#d21212",
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    width: "30%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                }}
                            >
                                <span
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                    }}
                                >Happy Hours</span>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    width: "70%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    hight: "100%",
                                    boxShadow: "1px 0.3px 1px 1px #ddd",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    ...
                                </span>
                            </div>

                        </div>
                        
                    </div>
                
                </div>
                
            </Modal>
                
        )
    }
}

export default GeneralInfo;