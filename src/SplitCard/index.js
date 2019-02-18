/**
 * @file index.js
 * @author Paul Cheor Kim
 * @license MIT
 * @fileoverview Entrypoint for the SplitCard Component. 
 * This module also neatly "packages" and exports other 
 * files/ variables of interest.
 */
import React, { PureComponent } from "react";
import { STYLES } from "./constants.js";
import "./styles.css";


const _defaultStyles = Object.freeze({
  parentWrapper: "fx-split-card",
  leftChild: "fx-left-card",
  rightChild: "fx-right-card"
});

export default class SplitCard extends PureComponent {
  render() {
    const { className, fxActive, ...rest } = this.props;
    const styles = [];
    if(className) styles.push(className);
    if(fxActive) styles.push(STYLES.fxActive);
    return (
      <div className={_defaultStyles.parentWrapper} {...rest} >
        <div className={`${_defaultStyles.leftChild} ${styles.join(' ')}`}>
          {this.props.children}
        </div>
        <div className={`${_defaultStyles.rightChild} ${styles.join(' ')}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export {
  STYLES as SplitCardStyles
}
