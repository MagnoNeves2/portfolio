import React from 'react';
import styles from './header.module.css'

export default props =>
    <h1 className={styles.title}>
        {props.title}
    </h1>
