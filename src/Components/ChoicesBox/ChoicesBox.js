import React from "react";
import "./styles.css";
import { start } from "../../redux/actions";
import { left } from "../../redux/actions";
import { straight } from "../../redux/actions";
import { right } from "../../redux/actions";
import { attic } from "../../redux/actions";
import { newgame } from "../../redux/actions";
import { connect } from "react-redux";

function ChoicesBox(props) {
  return (
    <div className="choices-box">
      <button className={props.showStartButton} onClick={() => props.start()}>
        Start the game
      </button>
      <button className={props.showNewgameButton} onClick={()=> props.newgame()}> 
Try again
      </button>
      <button className={props.showLeftButton} onClick={() => props.left()}>
        Go left
      </button>

      <button
        className={props.showStraightButton}
        onClick={() => props.straight()}
      >
        Go straight ahead
      </button>
      <button className={props.showRightButton} onClick={() => props.right()}>
        Go right
      </button>

      <button className={props.showAtticButton} onClick={() => props.attic()}>
        Go to attic
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
    showAtticButton: state.showAtticButton,
    showNewgameButton: state.showNewgameButton
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(start()),
    left: () => dispatch(left()),
    right: () => dispatch(right()),
    straight: () => dispatch(straight()),
    attic: () => dispatch(attic()),
    newgame: () => dispatch(newgame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoicesBox);
