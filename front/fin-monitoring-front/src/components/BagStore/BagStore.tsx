import React from 'react';
import styles from "./BagStore.module.css";
import storebag from '../../common-images/store-bag.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import {BagItem} from "../BagItem/BagItem";

export const BagStore = () => {

    const {bagItems} = useSelector((store: AppStateType) => store)


    return <div className={styles.store_container}>
        <div className={styles.store_text}>
            <div>Store</div>
            <img src={storebag} className={styles.store_bag}/>

        </div>
        <div className={styles.head}>
            <div/>
            <div/>
            <div className={styles.head_text}>amount</div>
            <div className={styles.head_text}>price</div>
        </div>
        {bagItems.bagStore.map(item => <BagItem item={item}/>)}

    </div>
}
