import React from "react";
import styles from "./CommonTable.module.css";
import {Button} from "../customButton/button";
import {useDispatch} from "react-redux";
import {deleteCategory} from "../../Fin-Redux/Category/Category-actions";

interface IProps {
    name: string,
    id: string,
    tableHeader: boolean
}

export const Table: React.FC<IProps> = ({name, id, tableHeader}) => {
    const dispatch = useDispatch();

    return <div className={tableHeader ? styles.container_header : styles.container}>
        <div className={styles.options}>{name}</div>
        <div className={styles.options}>{id}</div>
        <div style={{display: "flex", alignItems: "center"}}>
            <Button buttonClass={'general'} onClick={() => {
            }} style={{marginLeft: "1%"}}>
                Edit
            </Button>
            <Button buttonClass={'red'} onClick={() => {
                console.log(`delete: ${id}`)
                dispatch(deleteCategory(id))
            }}>
                Delete
            </Button>
        </div>
    </div>
}
