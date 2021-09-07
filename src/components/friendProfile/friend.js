import React from 'react';
import { Person } from '@material-ui/icons';


export default function Friend({title, color}){
    return(
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
            }}
        >
            <Person
                style={{
                    color: "white",
                    backgroundColor: "#FFC0CB",
                    borderRadius: 50,
                    padding: 10,
                    fontSize: 60,
                }}
            />
            <p
                style={{
                    position: "relative",
                    top: -10,
                    fontSize: 11,
                    color: color ? color : "black"
                }}
            >{title}</p>
        </div>
        
    )
}