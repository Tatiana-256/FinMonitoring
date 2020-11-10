import React from 'react'
import styles from './Fund.module.css'
import {IFundLocal} from "../../requests/api";
import {IFund} from '../../redux/fund-reduser';

interface IProps {
    fund: IFundLocal
}

export const Fund: React.FC<IProps> = ({fund}) => {
    return <div className={styles.fund}>
        <div>{fund.amount}</div>
        <div>{fund.fundName}</div>
        <div>{fund.goal}</div>
    </div>
}


interface IPropsStore {
    fund: IFund
}

export const FundStore: React.FC<IPropsStore> = ({fund}) => {
    return <div className={styles.fund}>
        <div>{fund.name}</div>
        <div>{fund.currency}</div>
        <div>{fund.goal}</div>
        <div>{fund.id}</div>
    </div>
}

