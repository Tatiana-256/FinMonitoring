import React, {ChangeEvent, useState} from "react";
import styles from "./CommonTable.module.css";
import {Button} from "../customButton/button";
import {useDispatch} from "react-redux";
import {deleteCategory} from "../../Fin-Redux/Category/Category-actions";
import {ICategory} from "../../Fin-Redux/Category/category-reduser";
import {IIngredient, IIngredientAPI} from "../../Fin-Requests/Ingredients-API";

interface IProps {
    editItemCategory?: (id: string, category: ICategory) => void,
    editItemIngredient?: (id: string, ingredient: IIngredient) => void,
    tableType: 'Ingredient' | 'Category'
    deleteItem: (id: string) => void,
    name: string,
    id: string,
    tableHeader: boolean
}

export const Table: React.FC<IProps> = React.memo(({name, id, tableHeader, editItemCategory, deleteItem, editItemIngredient, tableType}) => {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false)
    const [changeInput, setChangeInput] = useState(name)

    const editCategoryLocal = () => {
        setEdit(prevState => !prevState)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeInput(e.currentTarget.value)
    }

    const saveChanges = () => {
        tableType === 'Category' ? editItemCategory!(id, {id: id, categoryName: changeInput}) :
            editItemIngredient!(id, {ingredientName: changeInput, id: id})
        setEdit(prevState => !prevState)

    }

    const deleteIt = () => {
        deleteItem(id)
    }


    const onKeyPress = (e: any) => {
        debugger
        if (e.key === 'Escape') {
            setEdit(prevState => !prevState)
        } else if (e.key === "Enter") {
            saveChanges()
        }
    }


    return <div className={tableHeader ? styles.container_header : styles.container}>
        {edit ? <input defaultValue={name} className={styles.options_input} onChange={onInputChange}
                       onKeyPress={onKeyPress}
            /> :
            <div className={styles.options}>{name}</div>}
        <div className={styles.options}>{id === "ID" ? id : id.slice(19)}</div>
        <div style={{display: "flex", alignItems: "center"}}>
            {tableHeader ? <div style={{width: "12rem"}}/> :
                edit ?
                    <>
                        <Button buttonClass={'general'}
                                onClick={saveChanges}
                                style={{marginRight: "2%"}}>
                            Save
                        </Button>
                        <Button buttonClass={'red'} onClick={editCategoryLocal}>
                            Cancel
                        </Button></>
                    :
                    <>
                        <Button buttonClass={'general'}
                                onClick={editCategoryLocal}
                                style={{marginRight: "2%"}}>
                            Edit
                        </Button>
                        <Button buttonClass={'red'} onClick={deleteIt}>
                            Delete
                        </Button></>}
        </div>
    </div>
})
