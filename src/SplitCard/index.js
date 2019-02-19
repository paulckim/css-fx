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
  rightChild: "fx-right-card",
  hideOverflow: "fx-hide-overflow"
});

export default class SplitCard extends PureComponent {
  render() {
    const { className, fxActive, fxOverflow, ...rest } = this.props;
    const styles = [], parentStyles = [ _defaultStyles.parentWrapper ];
    if(className) styles.push(className);
    if(fxActive) styles.push(STYLES.fxActive);
    if(!fxOverflow) parentStyles.push(_defaultStyles.hideOverflow);
    return (
      <div className={parentStyles.join(" ")} {...rest} >
        <div className={`${_defaultStyles.leftChild} ${styles.join(" ")}`}>
          {this.props.children}
        </div>
        <div className={`${_defaultStyles.rightChild} ${styles.join(" ")}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export {
  STYLES as SplitCardStyles
}
