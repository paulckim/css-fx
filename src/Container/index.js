import React, { PureComponent } from "react";
import { STYLES, DEFAULT_STYLES } from "./constants.js";
import "./styles.css";

export default class Container extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [...DEFAULT_STYLES];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest} >
        {this.props.children}
      </div>
    );
  }
}

export {
  STYLES as ContainerStyles
}
