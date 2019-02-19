/**
 * @file index.js
 * @author Paul Cheor Kim
 * @license MIT
 * @fileoverview Entrypoint for the SplitCard Component. 
 * This module also neatly "packages" and exports other 
 * files/ variables of interest.
 */
import React, { PureComponent } from "react";
import "./styles.css";

// private DEFAULT styles:
const _leftStyle = "fx-left-card";
const _rightStyle = "fx-right-card";
const _parentStyle = "fx-split-card";
const _hideOverflowStyle = "fx-hide-overflow";

export default class SplitCard extends PureComponent {
  render() {
    const { className, fxOverflow, ...rest } = this.props;
    const styles = [], parentStyles = [ _parentStyle ];
    if(className) styles.push(className);
    if(!fxOverflow) parentStyles.push(_hideOverflowStyle);
    return (
      <div className={parentStyles.join(" ")} {...rest} >
        <div className={`${_leftStyle} ${styles.join(" ")}`}>
          {this.props.children}
        </div>
        <div className={`${_rightStyle} ${styles.join(" ")}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
// Export public style sheetnames
const fxCollapse = "fx-collapse";
const fxSplit = "fx-split";
export {
  fxCollapse,
  fxSplit
}
