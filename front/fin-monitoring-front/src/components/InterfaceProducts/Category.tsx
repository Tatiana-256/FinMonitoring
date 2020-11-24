import React from 'react'
import {ISubProduct} from "../../Fin-Redux/Products/Products-reduser";
import styles from "./InterfaceProducts.module.css";
import {useHistory} from 'react-router-dom';


interface ICategory {
    category: ISubProduct


}


export const Category: React.FC<ICategory> = ({category}) => {
    const history = useHistory();
    const goToCategory = () => {
        history.push(`Products/${category.name.split(' ').join('')}`)
    }

    return <div className={styles.category_container} onClick={goToCategory}>
        <div className={styles.category} style={{backgroundImage: `url(${category.img})`}}>
            {category.name}
        </div>
    </div>
}
// <NavLink to={`/info/${numberInfoPage}`}>
