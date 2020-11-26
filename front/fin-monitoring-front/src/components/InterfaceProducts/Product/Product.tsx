import React, {useState} from 'react'
import styles from './Product.module.css'
import {IProd} from "../../../Fin-Redux/Products/Products-reduser";

interface IProps {
    addToBag: (prodName: string, prodPrice: number, productAmount: number) => void,
    subProd: IProd
}

export const Product: React.FC<IProps> = React.memo(({addToBag, subProd}) => {


        const [productAmount, setProductAmount] = useState<number>(1)

        return <div className={styles.product_container}>
            <div className={styles.product}
                 onClick={() => addToBag(subProd.productName, subProd.price, productAmount)}
                 style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${subProd.img})`}}>
                {subProd.productName}
            </div>
            <div className={styles.product_amount}>
                <div className={styles.product_min}
                     onClick={() => setProductAmount(prevState => prevState - 1)}
                >-
                </div>
                <div>{productAmount}</div>
                <div className={styles.product_plus}
                     onClick={() => setProductAmount(prevState => prevState + 1)}
                >+
                </div>
            </div>
        </div>
    }
)
