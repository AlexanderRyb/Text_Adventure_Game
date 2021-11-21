import React from 'react';
import './styles.css'
import {connect} from "react-redux";
export function TextBox(props) {
  console.log(props)
  //const text = props.textNode

  return (
    <div className="text-box">
   </div>
  );
}
const mapStateToProps = (state) => {
  return {
    textNode: state.test
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TextBox)