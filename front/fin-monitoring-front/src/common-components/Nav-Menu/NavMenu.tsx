import React from 'react'
import styles from './NavMenu.module.css'
import {NavLink} from "react-router-dom";


export const NavMenu = () => {
    return <div className={styles.nav_menu}>
        <NavLink to="/Categories">
            <div>Categories</div>
        </NavLink>
        <NavLink to="/Ingredients">
            <div>Ingredients</div>
        </NavLink>
    </div>
};
