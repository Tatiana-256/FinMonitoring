import React, {ChangeEvent} from 'react';
import {render} from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import AppGlobal from "./App";
import {create} from "react-test-renderer";
import {AddItem} from "./components/Add-Item/Add-item";

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
    const fix = () => {
    }

    const component = create(<AddItem
        onChangeCurrency={() => {
        }} onChangeFundName={fix} onSubmitForm={fix}
        onChangeTargetAmount={fix} onCancelForm={fix}/>);
    const root = component.root;
    let select = root.findByType("select");
    expect(select).toBeInTheDocument();
})

test('find select at component', () => {
    const fix = () => {
    }

    const wrapper = create(<AddItem
        onChangeCurrency={() => {
        }} onChangeFundName={fix} onSubmitForm={fix}
        onChangeTargetAmount={fix} onCancelForm={fix}/>);
    // const root = component.root;
    // let select = wrapper.contains("select");
    // expect(select).toBeInTheDocument();
})

it('input area', () => {

})
