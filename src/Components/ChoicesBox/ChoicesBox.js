import React from 'react';
import './styles.css'
import {changeText} from "../../redux/actions"
import {connect} from "react-redux";


function ChoicesBox(props) {
  return (
    <div className="choices-box">
     <button className="choice-button"
     onClick={() => props.changeText()}//get id of text box in other element?
      
    >
Start the game
     </button>

    </div>
    
  );
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeText: ()=> dispatch(changeText()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoicesBox)