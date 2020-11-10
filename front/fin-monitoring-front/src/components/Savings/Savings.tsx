import React, {useEffect, useState} from 'react'
import styles from './Savings.module.css'
import {Button} from "../../common-components/customButton/button";
import {fundsAPI, IFundLocal} from "../../requests/api";
import {AddItem} from '../Add-Item/Add-item';
import {Fund, FundStore} from "../Fund/Fund";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {actions} from "../../redux/fund-actions";
import {IFund, IFundHistory} from "../../redux/fund-reduser";

export const Savings = () => {


    const dispatch = useDispatch();
    const {funds} = useSelector((store: AppStateType) => store)

    const [newFund, setAddFund] = useState(false)
    const [fundsLocal, setFunds] = useState<Array<IFundLocal>>([])
    const showAddingFundForm = () => setAddFund(prevState => !prevState)

    useEffect(() => {
        const funds = fundsAPI.getFunds()
            .then(data => {
                console.log(data)
                setFunds(data)
            })

        console.log(funds)

    }, [])


    const addNewFund = (name:string, currency: string, goal: number) => {
        const fund: IFund = {
            name: name,
            id: Date.now().toString(),
            currency: currency,
            goal: goal,
            amount: 100,
            history: [] as Array<IFundHistory>
        }
        dispatch(actions.addFund(fund))


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
        {fundsLocal.map(fund => <Fund fund={fund}/>)}
        {funds.funds.map(fund => <FundStore fund={fund}/>)}

    </div>
}
