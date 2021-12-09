import React from 'react';
import TextBox from './Components/TextBox/TextBox';
import ChoicesBox from './Components/ChoicesBox/ChoicesBox';
import ToggleColorScheme from './Components/ToggleColorScheme/ToggleColorScheme';
import { connect } from "react-redux";



function App(props) {
  return (
    <div className="App" id={props.colorTheme}>
     <TextBox></TextBox>
     <ChoicesBox></ChoicesBox>
<ToggleColorScheme></ToggleColorScheme>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    colorTheme: state.colorTheme
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
