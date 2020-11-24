import React from 'react';
import styles from "./BagItem.module.css";
import {IBagStoreItem} from "../../Fin-Redux/Bag-Store/BagStore-reduser";


interface IBagProps {
    item: IBagStoreItem
}

export const BagItem: React.FC<IBagProps> = ({item}) => {
    return <div className={styles.item_container}>
        <div className={styles.item}>
            <div className={styles.min}>X</div>
            <div className={styles.item_name}
                // style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${item.image})`}}
            >
                {item.name}
            </div>
            <div className={styles.amount}>{item.amount}</div>
            <div className={styles.amount}>{item.price * item.amount}</div>
        </div>
        {/*<div className={styles.item_descr}>*/}
        {/*    <div className={styles.amount}>*/}
        {/*        /!*<PlusMinus/>*!/*/}
        {/*     </div>*/}
        {/*</div>*/}
    </div>
}


// const PlusMinus = () => {
//     return <div className={styles.plus_min}>
//         <div className={styles.min}>-</div>
//         <div className={styles.plus}>+</div>
//     </div>
// }
