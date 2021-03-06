import React, {CSSProperties, useState} from 'react';
import styles from "./BagStore.module.css";
import storebag from '../../common-images/store-bag.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import {BagItem} from "../BagItem/BagItem";
import {Button} from "../../common-components/customButton/button";
import {BagIcon} from './BagIcon';

interface IProps {
    setBurger: () => void
    bagStore: boolean

}

export const BagStore: React.FC<IProps> = ({setBurger, bagStore}) => {

    const {bagItems} = useSelector((store: AppStateType) => store)

    const [displayNav, setDisplayNav] = useState(true)

    const displayMenu: CSSProperties = displayNav ? {transition: "1s", left: "100%"} : {}

    const setStoreBurger = () => {
        setDisplayNav(prev => !prev)
        setBurger()
    }

    const size = window.innerWidth <= 800

    return <>
        <div className={styles.store_container} style={displayMenu}>
            <div className={styles.store_header}>
                <div className={styles.store_text}>
                    <div>Store</div>
                    <img src={storebag} onClick={setStoreBurger} className={styles.store_bag}/>

                </div>
                <div className={styles.head}>
                    <div/>
                    <div/>
                    <div className={styles.head_text}>amount</div>
                    <div className={styles.head_text}>price</div>
                </div>
            </div>
            <div>
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
        {bagStore && size && <BagIcon setBurger={setStoreBurger}/>}
    </>
}
