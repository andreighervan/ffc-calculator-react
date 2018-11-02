import React from "react";
import PropTypes from "prop-types";

import "../App.css";

class Display extends React.Component {
    render() {
        return (
            <div className="component-display">
                <div id="display">{this.props.value}</div>
            </div>
        );
    }
}
Display.propTypes = {
    value: PropTypes.string,
};
export default Display;