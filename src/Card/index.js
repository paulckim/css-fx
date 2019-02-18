import React, { PureComponent } from "react";
import { STYLES, DEFAULT_STYLES } from "./constants.js";
import "./styles.css";

export default class Card extends PureComponent {
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
