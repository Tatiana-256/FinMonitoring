import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AddItem} from "./components/Add-Item/Add-item";
import {HashRouter, Route} from 'react-router-dom';
import {Savings} from './components/Savings/Savings';
import {NavMenu} from "./common-components/Nav-Menu/NavMenu";
import {Provider} from 'react-redux';
import store from "./redux/store";


function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <NavMenu/>
                <div className="App">
                    <Route exact path="/expenses" component={AddItem}/>
                    <Route exact path="/" component={Savings}/>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
