import React from 'react';
import styles from './container.module.scss';

export default ({ children }) => {
    return (
        <div div className={styles.container} >
            {children}
        </div >


    )
}