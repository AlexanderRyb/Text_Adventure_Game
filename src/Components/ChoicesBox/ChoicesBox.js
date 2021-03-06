import React from "react";
import "./styles.css";
import { start } from "../../redux/actions";
import { left } from "../../redux/actions";
import { straight } from "../../redux/actions";
import { right } from "../../redux/actions";
import { attic } from "../../redux/actions";
import { newgame } from "../../redux/actions";
import { swim } from "../../redux/actions";
import { investigate } from "../../redux/actions"

import { connect } from "react-redux";

function ChoicesBox(props) {
  return (
    <div className="choices-box">
      <button className={props.showStartButton} onClick={() => props.start()}>
        Start the game
      </button>
      <div className={props.showCrossroadImage}><img src={"crossroads.jpg"}></img></div> 
      <button
        className={props.showNewgameButton}
        onClick={() => props.newgame()}
      >
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
      <button className={props.showSwimButton} onClick={() => props.swim()}>
        Swim in the lake
      </button>
      <button className={props.showInvestigateButton} onClick={() => props.investigate()}>
       Investigate
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    showStartButton: state.showStartButton,
    showCrossroadImage: state.showCrossroadImage,
    showLeftButton: state.showLeftButton,
    showRightButton: state.showRightButton,
    showStraightButton: state.showStraightButton,
    showAtticButton: state.showAtticButton,
    showNewgameButton: state.showNewgameButton,
    showSwimButton: state.showSwimButton,
    showInvestigateButton: state.showInvestigateButton
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(start()),
    left: () => dispatch(left()),
    right: () => dispatch(right()),
    straight: () => dispatch(straight()),
    attic: () => dispatch(attic()),
    newgame: () => dispatch(newgame()),
    swim: () => dispatch(swim()),
    investigate: () => dispatch(investigate())
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoicesBox);
