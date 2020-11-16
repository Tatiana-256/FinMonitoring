import React, {ChangeEvent} from 'react';
import {render} from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import AppGlobal from "./App";
import {create} from "react-test-renderer";
import {AddItemFin} from "./fin-monitoring-personal/Add-Item/Add-item";
import {Savings} from "./fin-monitoring-personal/Savings/Savings";
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {IFund} from "./fin-monitoring-personal/redux/fund-reduser";

describe("General tests of components", () => {
    const fix = () => {
    }
    const component = create(<AddItemFin onChangeCurrency={() => {
    }} onChangeFundName={fix} onSubmitForm={fix} onChangeTargetAmount={fix} onCancelForm={fix}/>);
    const root = component.root;


    test('renders learn react link', () => {
        const {getByText} = render(<App/>);
        const linkElement = getByText(/Savings/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('renders react div', () => {
        const root = document.createElement('div');
        ReactDOM.render(<AppGlobal/>, root)
    });

    test('find select at component', () => {
        let select = root.findByType("select");
        expect(select).toBeTruthy();

    })

    test('find button +', () => {
        // const root = document.createElement('div')
        // ReactDOM.cr(<Savings/>, root)
        const initialState = {funds: [] as Array<IFund>}
        const mockStore = configureStore()

        let store, wrapper
        store = mockStore(initialState)
        const {getByText} = render(<Provider store={store}><Savings/></Provider>)
        expect(getByText('Add new fund')).not.toBeNull()
    })
})
