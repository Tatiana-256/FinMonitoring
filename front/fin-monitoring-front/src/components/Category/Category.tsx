import React, {ChangeEvent, useEffect, useState} from 'react'
import {AddItem} from "../../common-components/addItem/Add-item";
import {addCategory, getCategory, editCategory, deleteCategory} from "../../Fin-Redux/Category/Category-actions";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../Fin-Redux/store';
import {Table} from "../../common-components/CommonTable/CommonTable";
import styles from "./Category.module.css";
import {ICategoryAPI} from "../../Fin-Requests/category-API";
import {ICategory} from "../../Fin-Redux/Category/category-reduser";


export const Category = () => {
    useEffect(() => {
            console.log("hey")
            dispatch(getCategory())
        }, []
    )

    const dispatch = useDispatch();
    const {category} = useSelector((store: AppStateType) => store)
    const [newCategoryName, setNewCategoryName] = useState('')

    console.log(category)

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCategoryName(e.currentTarget.value)
    }

    const addCategorySubmit = () => {
        debugger
        dispatch(addCategory({categoryName: newCategoryName}))
    }

    const editExistCategory = (id: string, category: ICategory) => {
        dispatch(editCategory(id, category))
    }

    const deleteCategory = (id: string) => {
        dispatch(deleteCategory(id))
    }


    return <>
        <AddItem name={"Category"} onChangeInputName={onChangeInputName} addNewItem={addCategorySubmit}/>
        <div className={styles.category_container}>
            <Table name={"Category name"} id={"ID"} tableHeader={true} editItem={editExistCategory}
                   deleteItem={deleteCategory}/>
            {category.category.map(x => <Table name={x.categoryName}
                                               id={x.id} key={x.id}
                                               tableHeader={false}
                                               editItem={editExistCategory}
                                               deleteItem={deleteCategory}
            />)}
        </div>
    </>
}
