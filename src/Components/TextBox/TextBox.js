import React from "react";
import "./styles.css";
import { connect } from "react-redux";
export function TextBox(props) {
  console.log(props.textNode);
  //const text = props.textNode

  return <div className="text-box">{props.textNode}</div>;
}
const mapStateToProps = (state) => {
  return {
    textNode: state.currentTextNode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
