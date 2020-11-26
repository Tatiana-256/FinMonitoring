import React, {useCallback, useState} from 'react'
import styles from './Product.module.css'
import {IProd} from "../../../Fin-Redux/Products/Products-reduser";
import {RouteComponentProps} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Fin-Redux/store";
import {bagActions} from "../../../Fin-Redux/Bag-Store/Bag-Store-actions";
import {Product} from "./Product";


interface MatchParams {
    prod: string;
}


interface Props extends RouteComponentProps<MatchParams> {
}

// @ts-ignore
export const ProductContainer: React.FC<Props> = ({match}) => {


    const productURL = match.params.prod
    const {products} = useSelector((store: AppStateType) => store.products);


    const dispatch = useDispatch();

    const addToBag = useCallback((prodName: string, prodPrice: number, productAmount: number) => {

        const item = {
            id: Math.random().toString(),
            name: prodName,
            amount: productAmount,
            price: prodPrice
        }
        dispatch(bagActions.addProductToBag(item))
        dispatch(bagActions.addTotalToBag(productAmount * prodPrice))
    }, [])


    // addProductToBag


    return <div className={styles.product_wrapper}>
        {
            products.find(prod => prod.name.split(' ').join('') === productURL)?.subProducts
                .map(subProd => <Product addToBag={addToBag} subProd={subProd}/>
                )
        }
    </div>
}


