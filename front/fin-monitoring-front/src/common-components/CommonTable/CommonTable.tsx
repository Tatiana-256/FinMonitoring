import React from "react";
import styles from "./CommonTable.module.css";

interface IProps {
    name: string,
    id: string,
    tableHeader: boolean
}

export const Table: React.FC<IProps> = ({name, id, tableHeader}) => {
    return <div className={tableHeader ? styles.container_header : styles.container}>
        <div className={styles.options}>{name}</div>
        <div className={styles.options}>{id}</div>
    </div>
}
