import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {NavMenu} from "./common-components/Nav-Menu/NavMenu";
import {Provider} from 'react-redux';
import {Category} from "./components/Category/Category";
import {Ingredients} from "./components/Ingredients/Ingredients";
import store from './Fin-Redux/store';
import {InterfaceProducts} from './components/InterfaceProducts/InterfaceProducts';
import {Product} from "./components/InterfaceProducts/Product/Product";
import { BagStore } from './components/BagStore/BagStore';


function App() {
    return (
        <>
            <Route exact path="/Products/:prod" component={Product}/>
            <Route exact path="/Categories" component={Category}/>
            <Route exact path="/Ingredients" component={Ingredients}/>
            <Route exact path="/InterfaceProducts" component={InterfaceProducts}/>

        </>
    );
}

function AppGlobal() {
    return (
        <HashRouter>
            <Provider store={store}>
                <NavMenu/>
                <div className='App_container'>
                <div className="App">
                    <App/>
                </div>
                    <BagStore/>
                </div>

            </Provider>
        </HashRouter>
    );
}


export default AppGlobal;
