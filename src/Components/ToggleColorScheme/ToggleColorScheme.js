import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { changeToDark, changeToLight } from "../../redux/actions";


function ToggleColorScheme(props) {
  let isDarkThemeOn = true
  if (props.colorTheme === "dark"){
isDarkThemeOn = true
  }
  else{
    isDarkThemeOn = false
  }
  return (
    
      <label className="switch">
      <input type="checkbox"
      
      onClick={ isDarkThemeOn ? props.changeToLight : props.changeToDark}
      />
        
      <span className="slider"></span>
      </label>
    
  );
}
const mapStateToProps = (state) => {
  return {
    changeToDark: state.changeToDark,
    changeToLight: state.changeToLight,
    colorTheme: state.colorTheme
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeToLight: () => dispatch(changeToLight()),
    changeToDark: () => dispatch(changeToDark())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleColorScheme);
