import React from 'react';
import styles from "./BagStore.module.css";
import storebag from '../../common-images/store-bag.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import {BagItem} from "../BagItem/BagItem";
import {Button} from "../../common-components/customButton/button";

interface IProps {
    setBurger: () => void

}

export const BagStore: React.FC<IProps> = ({setBurger}) => {

    const {bagItems} = useSelector((store: AppStateType) => store)


    return <div className={styles.store_container}>
        <div className={styles.store_header}>
            <div className={styles.store_text}>
                <div>Store</div>
                <img src={storebag} onClick={setBurger} className={styles.store_bag}/>

            </div>
            <div className={styles.head}>
                <div/>
                <div/>
                <div className={styles.head_text}>amount</div>
                <div className={styles.head_text}>price</div>
            </div>
        </div>
        <div style={{marginTop: ' 100px'}}>
            {bagItems.bagStore.map(item => <BagItem item={item}/>)}
        </div>
        <div className={styles.total}>
            <div>total</div>
            <div>{bagItems.total} UAH</div>
        </div>
        {bagItems.total > 0 && <div className={styles.bottom_button}>
            <Button buttonClass={'general'} style={{
                height: "50px",
                width: "80%"
            }}>Submit</Button>
        </div>
        }
    </div>
}
