import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {AddItem} from "../../common-components/addItem/Add-item";
import styles from "../Category/Category.module.css";
import {Table} from "../../common-components/CommonTable/CommonTable";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Fin-Redux/store";
import {getIngredients} from '../../Fin-Redux/Ingredients/Ingredients-actions';


export const Ingredients = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, [])


    const {ingredients} = useSelector((store: AppStateType) => store);

    console.log(ingredients)
    const [newIngredientName, setNewIngredientName] = useState('');

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewIngredientName(e.currentTarget.value);
    };

    const addCategorySubmit = () => {
    };

    const editExistIngredient = () => {
    };

    const deleteIngredient = (id: string) => {
        dispatch(deleteIngredient(id))
    }


    return <>
        <AddItem name={"Category"} onChangeInputName={onChangeInputName} addNewItem={addCategorySubmit}/>
        <div className={styles.category_container}>
            <Table name={"Ingredient name"} id={"ID"} tableHeader={true} editItem={editExistIngredient}
                   deleteItem={deleteIngredient}/>
            {ingredients.ingredients.map(x => <Table name={x.ingredientName}
                                                     id={x.id}
                                                     tableHeader={false}
                                                     editItem={editExistIngredient}
                                                     deleteItem={deleteIngredient}
                                                     key={x.id}
            />)}
        </div>
    </>
};
