import React, {useState} from "react";
import styles from "./CommonTable.module.css";
import {Button} from "../customButton/button";
import {useDispatch} from "react-redux";
import {deleteCategory} from "../../Fin-Redux/Category/Category-actions";
import {ICategory} from "../../Fin-Redux/Category/category-reduser";

interface IProps {
    editCategory: (id: string, category: ICategory) => void,
    name: string,
    id: string,
    tableHeader: boolean
}

export const Table: React.FC<IProps> = ({name, id, tableHeader, editCategory}) => {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false)

    const editCategoryLocal = () => {
        editCategory(id, {id: id, categoryName: name})
    }

    return <div className={tableHeader ? styles.container_header : styles.container}>
        <div className={styles.options}>{name}</div>
        <div className={styles.options}>{id}</div>
        <div style={{display: "flex", alignItems: "center"}}>
            {tableHeader ? <div style={{width: "12rem"}}/> : <><Button buttonClass={'general'}
                                                                       onClick={editCategoryLocal}
                                                                       style={{marginRight: "2%"}}>
                Edit
            </Button>
                <Button buttonClass={'red'} onClick={() => {
                    console.log(`delete: ${id}`)
                    dispatch(deleteCategory(id))
                }}>
                    Delete
                </Button></>}
        </div>
    </div>
}
