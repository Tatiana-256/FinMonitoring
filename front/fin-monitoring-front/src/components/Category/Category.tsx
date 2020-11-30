import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
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
        dispatch(addCategory({name: newCategoryName}))
    }

    const editExistCategory = useCallback((id: number, category: ICategory) => {
        // dispatch(editCategory(id, category))
    }, [])

    const deleteCategory = useCallback((id: number) => {
        // dispatch(deleteCategory(id))
    }, [])


    return <>
        <AddItem name={"Category"} onChangeInputName={onChangeInputName} addNewItem={addCategorySubmit}/>
        <div className={styles.category_container}>
            <Table name={"Category name"} id={0} tableHeader={true} editItemCategory={editExistCategory}
                   tableType={'Category'}

                   deleteItem={deleteCategory}/>
            {category.category.map(x => <Table name={x.name}
                                               id={x.id} key={x.id}
                                               tableHeader={false}
                                               editItemCategory={editExistCategory}
                                               deleteItem={deleteCategory}
                                               tableType={'Category'}
            />)}
        </div>
    </>
}
