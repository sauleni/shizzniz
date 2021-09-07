import React, { Component } from 'react';
import './style.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            placeholder: props.placeholder,
            type:props.type,
            id: props.id,
            disabled: props.disabled ? true : false,
            onChange: props.onChange,
        };
    }

    onChange(txt) {
        this.state.onChange(txt)
    }
    render() {
        return (
            <div
                // id="inputContainer"
                style={{
                    marginTop: "1em",
                    borderTop: 0,
                    width: "95%",
                    height: "3em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    onChange={(txt) => {this.state.onChange(txt.target.value)}}
                    placeholder={this.state.placeholder ? this.state.placeholder : ""}
                    style={{
                        textAlign: "left",
                        border: "none",
                        boxShadow: "2px 2px 11px 2px #ddd",
                        outline: "none",
                        paddingLeft: 10,
                        paddingTop: 3,
                        paddingBottom: 3,
                        height: "100%",
                        width: "100%",
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                    id={this.state.id}
                    type={this.state.type ? this.state.type : "text"}
                    value={this.state.value ? this.state.value : ""}
                    disabled={this.state.disabled}
                />
            </div>
        );
    }
}

export default TextInput;