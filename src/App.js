import React from 'react';
import {Provider} from "react-redux";
import store from '../src/MovieStore'
import {NavBar} from "./component/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-footer/assets/index.css';
import Footer from "rc-footer/es";

function App() {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <Provider store={store}>
                <NavBar/>
                <Footer
                    theme="light"
                    bottom="Made with ❤️ by Averoes"
                />
            </Provider>
        </div>
    );
}

export default App;
