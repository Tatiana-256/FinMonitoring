import React, {useEffect, useState} from 'react'
import styles from './Savings.module.css'
import {Button} from "../../common-components/customButton/button";
import {fundsAPI, IFundLocal} from "../../requests/api";
import {AddItem} from '../Add-Item/Add-item';
import {FundStore} from "../Fund/Fund";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {actions, addFund, deleteFund} from "../../redux/fund-actions";
import {IFund, IFundAPI, IFundHistory} from "../../redux/fund-reduser";

export const Savings = () => {


    const dispatch = useDispatch();

    const [newFund, setAddFund] = useState(false)
    const showAddingFundForm = () => setAddFund(prevState => !prevState)

    useEffect(() => {
        const funds = fundsAPI.getFunds()
            .then(data => {
                console.log(data)
                dispatch(actions.getFunds(data))
            })

        console.log(funds)

    }, [])

    const {funds} = useSelector((store: AppStateType) => store)


    const addNewFund = (name: string, currency: string, goal: number) => {
        const fund: IFundAPI = {
            fundName: name,
            currency: currency,
            goal: goal,
            amount: 100,
            history: [] as Array<IFundHistory>
        };
        dispatch(addFund(fund))
    };

    const deleteFundHandler = (id: string) => {
        dispatch(deleteFund(id))
    }

    return <div className={styles.add_item}>
        {newFund ?
            <AddItem showAddingFundForm={showAddingFundForm} addNewFund={addNewFund}/>
            :
            <div className={styles.add_fund}>
                <div style={{padding: '0 30px'}}>Add new fund</div>
                <div className={styles.plus} onClick={showAddingFundForm}>+</div>
            </div>
        }
        {funds.funds.map(fund => <FundStore fund={fund} deleteFund={deleteFundHandler}/>)}

    </div>
}
