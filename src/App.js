import React from 'react';
import TextBox from './Components/TextBox/TextBox';
import ChoicesBox from './Components/ChoicesBox/ChoicesBox';
import {Provider} from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <TextBox></TextBox>
     <ChoicesBox></ChoicesBox>
    </div>
    </Provider>
  );
}

export default App;
