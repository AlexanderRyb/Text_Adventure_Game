import React from "react";
import "./styles.css";
import { start } from "../../redux/actions";
import { connect } from "react-redux";

function ChoicesBox(props) {
  return (
    <div className="choices-box">
      <button
        className="choice-button"
        onClick={() => props.start()}
      >
        Start the game
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(start()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoicesBox);
