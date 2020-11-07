import React from 'react'
import styles from './NavMenu.module.css'
import {AddItem} from "../../components/Add-Item/Add-item";
import {Savings} from "../../components/Savings/Savings";
import {NavLink} from "react-router-dom";


export const NavMenu = () => {
    return <div className={styles.nav_menu}>
        <NavLink to="/expenses">
            <div>Add item</div>
        </NavLink>
        <NavLink to="/">
            <div>Savings</div>
        </NavLink>
    </div>
}
