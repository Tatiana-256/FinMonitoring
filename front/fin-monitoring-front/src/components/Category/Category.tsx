import React, {useEffect} from 'react'
import {AddItem} from "../../common-components/addItem/Add-item";
import {getCategory} from "../../Fin-Redux/Category/Category-actions";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../Fin-Redux/store';
import {Table} from "../../common-components/CommonTable/CommonTable";
import styles from "./Category.module.css";


export const Category = () => {
    useEffect(() => {
            console.log("hey")
            dispatch(getCategory())
        }, []
    )

    const dispatch = useDispatch();
    const {category} = useSelector((store: AppStateType) => store)


    console.log(category)

    return <>
        <AddItem name={"Category"}/>
        <div className={styles.category_container}>
            <Table name={"Category name"} id={"ID"} tableHeader={true}/>
            {category.category.map(x => <Table name={x.categoryName} id={x.id} key={x.id} tableHeader={false}/>)}
        </div>
    </>
}
