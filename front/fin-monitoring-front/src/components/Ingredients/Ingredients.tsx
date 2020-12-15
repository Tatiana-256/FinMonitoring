import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {AddItem} from "../../common-components/addItem/Add-item";
import styles from "../Category/Category.module.css";
import {Table} from "../../common-components/CommonTable/CommonTable";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import {
    deleteIngredient,
    getIngredients,
    addNewIngredient,
    editIngredient
} from '../../Fin-Redux/Ingredients/Ingredients-actions';
import {IIngredient, IIngredientAPI} from "../../Fin-Requests/Ingredients-API";
import styled from "styled-components"

export const Ingredients = () => {


    const f = styled.div`
    disp
    `

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [])


    const {ingredients} = useSelector((store: AppStateType) => store);
    const [newIngredientName, setNewIngredientName] = useState('');


    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewIngredientName(e.currentTarget.value);
    };

    const addIngredientSubmit = () => {
        dispatch(addNewIngredient({name: newIngredientName, measurementId: 1}))
    };

    const editExistIngredient = (id: number, ingredient: IIngredient) => {
        dispatch(editIngredient(id, ingredient))
    };

    const deleteIngr = (id: number) => {

       dispatch(deleteIngredient(id))
    }


    return <>
        <AddItem name={"Category"} onChangeInputName={onChangeInputName} addNewItem={addIngredientSubmit}/>
        <div className={styles.category_container}>
            <Table name={"Ingredient name"} id={"ID"} tableHeader={true} editItemIngredient={editExistIngredient}
                   tableType={'Ingredient'}
                   deleteItem={deleteIngredient}/>
            {ingredients.ingredients.map(x => <Table name={x.name}
                                                     id={x.id}
                                                     tableHeader={false}
                                                     editItemIngredient={editExistIngredient}
                                                     deleteItem={deleteIngr}
                                                     key={x.id}
                                                     tableType={'Ingredient'}
            />)}
        </div>
    </>
};
