import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import styles from "./BagStore.module.css";
import storebag from "../../common-images/store-bag.png";

interface IBagIcon {
    setBurger: () => void
}

export const BagIcon: React.FC<IBagIcon> = ({setBurger}) => {
    const {total} = useSelector((store: AppStateType) => store.bagItems);

    return <div className={styles.store_bag_burger_container}>
        <img src={storebag} className={styles.store_bag_burger}
             onClick={setBurger}
        />
        <div style={{fontWeight: "bold"}}>Sum:</div>
        <div>{total} UAH</div>
    </div>

}
