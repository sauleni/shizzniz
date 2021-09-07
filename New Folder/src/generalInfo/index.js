import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';

export default function GeneralInfo({open, setOpen}) {
    // const [open, setOpen] = useState(true);

    return (
        <div
            style={{
                width: "100%",
                height: 400,
                border: "none",
            }}
        >
            <Modal
                open={open}
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
                                onClick={() => setOpen(false)}
                            />
                        </span>
                    </div>
                    
                </div>
            </Modal>
        </div>
    )
}
