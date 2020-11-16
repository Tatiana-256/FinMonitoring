import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {NavMenu} from "./common-components/Nav-Menu/NavMenu";
import {Provider} from 'react-redux';
import {Category} from "./components/Category/Category";
import {Ingredients} from "./components/Ingredients/Ingredients";
import store from './Fin-Redux/store';


function App() {
    return (
        <>
            <Route exact path="/Categories" component={Category}/>
            <Route exact path="/Ingredients" component={Ingredients}/>
        </>
    );
}

function AppGlobal() {
    return (
        <HashRouter>
            <Provider store={store}>
                <NavMenu/>
                <div className="App">
                    <App/>
                </div>
            </Provider>
        </HashRouter>
    );
}


export default AppGlobal;
