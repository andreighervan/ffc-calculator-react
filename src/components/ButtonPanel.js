import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "../App.css";

class ButtonPanel extends React.Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" idProp="clear" clickHandler={this.handleClick} />
                    <Button name="+/-" idProp="seven" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="÷" idProp="divide" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="7" idProp="seven" clickHandler={this.handleClick} />
                    <Button name="8" idProp="eight" clickHandler={this.handleClick} />
                    <Button name="9" idProp="nine" clickHandler={this.handleClick} />
                    <Button name="x" idProp="multiply" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="4" idProp="four" clickHandler={this.handleClick} />
                    <Button name="5" idProp="five" clickHandler={this.handleClick} />
                    <Button name="6" idProp="six" clickHandler={this.handleClick} />
                    <Button name="-" idProp="subtract" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="1" idProp="one" clickHandler={this.handleClick} />
                    <Button name="2" idProp="two" clickHandler={this.handleClick} />
                    <Button name="3" idProp="three" clickHandler={this.handleClick} />
                    <Button name="+" idProp="add" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="0" idProp="zero" clickHandler={this.handleClick} wide />
                    <Button name="." idProp="decimal" clickHandler={this.handleClick} />
                    <Button name="=" idProp="equals" clickHandler={this.handleClick} orange />
                </div>
            </div>
        );
    }
}
ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonPanel;