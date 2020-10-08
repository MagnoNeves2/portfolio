import React from 'react';
import styles from './container.module.scss';

const Container = ({ children }) => {
    return (
        <div div className="mx-auto" >
            {children}
            <button type="button" id="btn" className={styles.btnTop}>&#9650;</button>
            {
                window.onscroll = function () {
                    const btn = document.getElementById("btn");

                    btn.addEventListener("click", () => {
                        document.documentElement.scrollTop = 0;
                    })

                    if (document.documentElement.scrollTop > 400) {
                        btn.style.display = "block"
                    } else {
                        btn.style.display = "none"
                    }
                }
            }
        </div>
    )
}
export default Container