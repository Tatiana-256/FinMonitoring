import React, {CSSProperties} from 'react'
import styles from './NavMenu.module.css'
import {NavLink} from "react-router-dom";
import {BackButton} from "../back-button";

export const NavMenu= () => {


    return <div className={styles.menu_container}>
        <div style={{padding: '0 3%'}}><BackButton/></div>
        <div className={styles.nav_menu}>
            <NavLink to="/Categories">
                <div>Add Categories</div>
            </NavLink>
            <NavLink to="/Ingredients">
                <div>Add Ingredients</div>
            </NavLink>
            <NavLink to="/InterfaceProducts">
                <div>Interface Products</div>
            </NavLink>
        </div>
    </div>
};
