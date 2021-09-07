import React, { Component } from 'react';
import './style.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            values: null,
            id: null,
            placeholder: null
        };
    }

    render() {
        return (
            <div id="selectionContainer">
                {this.props.values && <select
                    id={this.props.id}
                    className="dropdown_items"
                    placeholder={this.props.placeholder}
                >
                    {this.props.values.map((item, index) => (
                        <option
                            key={index}
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>}
            </div>
        );
    }
}

export default Dropdown;