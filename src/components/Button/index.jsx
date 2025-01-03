import "./style.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
