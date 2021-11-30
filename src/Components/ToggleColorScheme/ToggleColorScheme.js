import React from 'react'
import "./styles.css";
import { connect } from "react-redux";
import { toggleTheme } from "../../redux/actions";



function ToggleColorScheme(props) {
    return (
     <button onClick={() => props.toggleTheme()} className="toggle-theme-button">
         toggle theme
     </button>
    )
}
const mapStateToProps = (state) => {
    return {
      toggleTheme: state.toggleTheme,

    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
toggleTheme: ()=> dispatch(toggleTheme())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ToggleColorScheme);
