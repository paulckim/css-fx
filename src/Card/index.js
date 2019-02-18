import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { STYLES, DEFAULT_STYLES } from "./constants.js";
import "./styles.css";

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    fxActive: PropTypes.bool
  }

  render() {
    const { className, fxActive, ...rest } = this.props;
    const styles = [...DEFAULT_STYLES];
    if(className) styles.push(className);
    if(fxActive) styles.push(STYLES.fxActive);
    return (
      <div className={styles.join(' ')} {...rest} >
        {this.props.children}
      </div>
    );
  }
}

export {
  STYLES as CardStyles
}
