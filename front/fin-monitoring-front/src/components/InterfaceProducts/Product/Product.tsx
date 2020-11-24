import React, {useState} from 'react'
import styles from './Product.module.css'
import {IProd} from "../../../Fin-Redux/Products/Products-reduser";
import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Fin-Redux/store";


interface MatchParams {
    prod: string;
}


interface Props extends RouteComponentProps<MatchParams> {
}

// @ts-ignore
export const Product: React.FC<Props> = ({match}) => {

    const [productAmount, setProductAmount] = useState<number>(1)


    const productURL = match.params.prod
    const {products} = useSelector((store: AppStateType) => store.products);

    return <div className={styles.product_wrapper}>
        {
            products.find(prod => prod.name.split(' ').join('') === productURL)?.subProducts
                .map(subProd => <div className={styles.product_container}>
                    <div className={styles.product}
                         style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${subProd.img})`}}>
                        {subProd.productName}
                    </div>
                    <div className={styles.product_amount}>
                        <div className={styles.product_min}>-</div>
                        <div>{productAmount}</div>
                        <div className={styles.product_plus}>+</div>
                    </div>
                </div>)
        }
    </div>
}


