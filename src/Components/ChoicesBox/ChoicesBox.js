import React from "react";
import "./styles.css";
import { start } from "../../redux/actions";
import { left } from "../../redux/actions";
import { straight } from "../../redux/actions";
import { right } from "../../redux/actions";
import { connect } from "react-redux";

function ChoicesBox(props) {
  return (
    <div className="choices-box">
      <button
        className={props.showStartButton}       
        onClick={() => props.start()}
      >
        Start the game
      </button>
      <button
        className={props.showLeftButton}       
        onClick={() => props.left()}
      >
        Go left
      </button>
      <button
        className={props.showStraightButton}       
        onClick={() => props.straight()}
      >
        Go straight ahead
      </button>
      <button
        className={props.showRightButton}       
        onClick={() => props.right()}
      >
        Go right
      </button>
     
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    showStartButton: state.showStartButton,
    showLeftButton: state.showLeftButton,
    showRightButton: state.showRightButton,
    showStraightButton: state.showStraightButton,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(start()),
    left: () => dispatch(left()),
    right: () => dispatch(right()),
    straight: () => dispatch(straight()),

    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoicesBox);
