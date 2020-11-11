import React from 'react'
import styles from './Fund.module.css'
import {IFund} from '../../redux/fund-reduser';
import {Button} from "../../common-components/customButton/button";


interface IPropsStore {
    fund: IFund,
    deleteFund: (id: string) => void
}

export const FundStore: React.FC<IPropsStore> = ({fund, deleteFund}) => {
    return <div className={styles.fund}>
        <div>{fund.fundName}</div>
        <div>{fund.currency}</div>
        <div>{fund.goal}</div>
        <div>{fund.id}</div>
        <Button buttonClass={'red'} onClick={
            () => {
                deleteFund(fund.id)
            }
        }>Delete</Button>
    </div>
}

