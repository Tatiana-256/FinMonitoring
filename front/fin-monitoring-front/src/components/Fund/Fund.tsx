import React from 'react'
import styles from './Fund.module.css'
import {IFund} from "../../requests/api";

interface IProps {
    fund: IFund

}

export const Fund: React.FC<IProps> = ({fund}) => {
    return <div className={styles.fund}>
        <div>{fund.amount}</div>
        <div>{fund.fundName}</div>
        <div>{fund.goal}</div>
    </div>
}
