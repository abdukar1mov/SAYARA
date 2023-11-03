import React from 'react';
import styles from '../styles/Home.module.css'
import Reveal from 'react-reveal/Reveal'

const Header = () => {
    return (
        <section className={styles.section}>
            <Reveal effect="fadeInUp">
                <div className={styles.textsArea}>
                    <h3>Welcome to our online magazine</h3>
                    <p>By Abdulboriy Abdukarimov</p>
                </div>
            </Reveal>
            <Reveal effect="fadeInUp2">
                <div className={styles.buttons}>
                    <div className={styles.btnMain}>
                    </div>
                    <img
                        src="/images/down-arrow.svg"
                        className={styles.downIcon}
                        alt="down icon" 
                    />
                </div>
            </Reveal>
        </section>
    );
};

export default Header;