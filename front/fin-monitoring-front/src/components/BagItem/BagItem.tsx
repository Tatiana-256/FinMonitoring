import React from 'react';
import styles from "./BagItem.module.css";
import {IBagStoreItem} from "../../Fin-Redux/Bag-Store/BagStore-reduser";
import {useDispatch} from "react-redux";
import {bagActions} from "../../Fin-Redux/Bag-Store/Bag-Store-actions";


interface IBagProps {
    item: IBagStoreItem
}

export const BagItem: React.FC<IBagProps> = ({item}) => {

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(bagActions.deleteProductFromBag(item.id))
        dispatch(bagActions.deleteSumFromBag(priceAmount))
    }

    const priceAmount = item.price * item.amount

    return <div className={styles.item_container}>
        <div className={styles.item}>
            <div className={styles.delete}
                 onClick={deleteItem}
            >X
            </div>
            <div className={styles.item_name}>
                {item.name}
            </div>
            <div className={styles.amount}>{item.amount}</div>
            <div className={styles.amount}>{priceAmount} UAH</div>
        </div>
    </div>
}
