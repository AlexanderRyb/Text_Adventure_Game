import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { changeToDark, changeToLight } from "../../redux/actions";


function ToggleColorScheme(props) {
  return (
    <div>
      <button
        onClick={() => props.changeToLight()}
        className="light-theme-button"
      >
        toggle theme
      </button>
      <button
        onClick={() => props.changeToDark()}
        
        className="dark-theme-button"
      >
        Toggle theme
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    changeToDark: state.changeToDark,
    changeToLight: state.changeToLight,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeToLight: () => dispatch(changeToLight()),
    changeToDark: () => dispatch(changeToDark())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleColorScheme);
