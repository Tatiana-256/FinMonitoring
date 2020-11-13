import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './Savings.module.css'
import {Button} from "../../common-components/customButton/button";
import {fundsAPI, IFundLocal} from "../../requests/api";
import {AddItem} from '../Add-Item/Add-item';
import {Fund} from "../Fund/Fund";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {actions, addFund, deleteFund, editFundAC} from "../../redux/fund-actions";
import {IFund, IFundAPI, IFundHistory} from "../../redux/fund-reduser";
import {FundHeader} from "../FundHeader/FundHeader";

export const Savings = () => {


    useEffect(() => {
        const funds = fundsAPI.getFunds()
            .then(data => {
                console.log(data)
                dispatch(actions.getFunds(data))
            })

        console.log(funds)

    }, [])


    const dispatch = useDispatch();
    const {funds} = useSelector((store: AppStateType) => store)


    /*_____________________ ADDING NEW FUND ______________________*/

    const [newFund, setAddFund] = useState(false)
    const showAddingFundForm = () => setAddFund(prevState => !prevState)


    const addNewFund = (name: string, currency: string, goal: number) => {
        const fund: IFundAPI = {
            fundName: name,
            currency: currency,
            goal: goal,
            amount: 0,
            history: [] as Array<IFundHistory>
        };
        dispatch(addFund(fund))
    };


    /*_____________________ INPUT HANDLING ______________________*/

    const [fundName, setFundName] = useState("")
    const [targetAmount, setTargetAmount] = useState<number>(0)
    const [fundCurrency, setFundCurrency] = useState("USD")


    const onChangeFundName = (e: ChangeEvent<HTMLInputElement>) => {
        setFundName(e.currentTarget.value)
    }
    const onChangeTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetAmount(Number(e.currentTarget.value))
    }

    const onChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
        setFundCurrency(e.currentTarget.value)
    }

    const onSubmitForm = () => {
        addNewFund(fundName, fundCurrency, targetAmount)
        showAddingFundForm()
        console.log(fundName, targetAmount, fundCurrency)
    }

    const onCancelForm = () => {
        showAddingFundForm()
        setTargetAmount(0)
        setFundName('')
        setFundCurrency('')
    }


    const editFund = (id: string, amount: number, fundNameStore: string, targetAmountStore: number) => {
        debugger
        const newFund = {
            id: id,
            fundName: fundName ? fundName : fundNameStore,
            amount: amount,
            currency: fundCurrency,
            goal: targetAmount ? targetAmount : targetAmountStore,
            history: []
        }
        dispatch(editFundAC(id, newFund))
    }
    /*_____________________ DELETE FUND ______________________*/

    const deleteFundHandler = (id: string) => {
        dispatch(deleteFund(id))
    }


    return <div className={styles.add_item}>
        {newFund ?
            <AddItem onSubmitForm={onSubmitForm}
                     onCancelForm={onCancelForm}
                     onChangeCurrency={onChangeCurrency}
                     onChangeFundName={onChangeFundName}
                     onChangeTargetAmount={onChangeTargetAmount}
            />
            :
            <div className={styles.add_fund}>
                <div style={{paddingLeft: '5vw'}}>
                    <div className={styles.plus} onClick={showAddingFundForm}>+</div>
                </div>
                <div style={{padding: '0 30px'}}>Add new fund</div>
            </div>
        }
        <FundHeader/>
        {funds.funds.map(fund => <Fund fund={fund}
                                       onChangeFundName={onChangeFundName}
                                       deleteFund={deleteFundHandler}
                                       onChangeCurrency={onChangeCurrency}
                                       onChangeGoal={onChangeTargetAmount}
                                       editFund={editFund}
        />)}

    </div>
}
