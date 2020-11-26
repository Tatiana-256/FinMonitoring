import React from "react";
import styles from "./InterfaceProducts.module.css";
import {ProductContainer} from "./Product/ProductContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import {Category} from "./Category";


export const InterfaceProducts = () => {

    const {products} = useSelector((store: AppStateType) => store);

    return <div className={styles.products_container}>
        {products.products.map(prod => <Category category={prod}/>)}
    </div>
}
