import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {NavMenu} from "./common-components/Nav-Menu/NavMenu";
import {Provider, useSelector} from 'react-redux';
import {Category} from "./components/Category/Category";
import {Ingredients} from "./components/Ingredients/Ingredients";
import store, {AppStateType} from './Fin-Redux/store';
import {InterfaceProducts} from './components/InterfaceProducts/InterfaceProducts';
import {ProductContainer} from "./components/InterfaceProducts/Product/ProductContainer";
import {BagStore} from './components/BagStore/BagStore';
import storebag from "./common-images/store-bag.png";
import styles from "./components/BagStore/BagStore.module.css";


function App() {
    return (
        <>
            <Route exact path="/Products/:prod" component={ProductContainer}/>
            <Route exact path="/Categories" component={Category}/>
            <Route exact path="/Ingredients" component={Ingredients}/>
            <Route exact path="/InterfaceProducts" component={InterfaceProducts}/>

        </>
    );
}

function AppGlobal() {

    const [bagStore, setBagStore] = useState(true)

    const setBurger = () => setBagStore(prevState => !prevState)


    return (
        <HashRouter>
            <Provider store={store}>
                <NavMenu/>
                <div className='App_container'>
                    <div className="App">
                        <App/>
                    </div>
                    <BagStore setBurger={setBurger} bagStore={bagStore}/>
                </div>

            </Provider>
        </HashRouter>
    );
}


export default AppGlobal;

