import React from 'react';
import {Provider} from "react-redux";
import store from '../src/MovieStore'
import {NavBar} from "./component/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{justifyContent:'center', alignItems:'center'}}>
        <Provider store={store}>
            <NavBar />
        </Provider>
    </div>
  );
}

export default App;
