import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { SideBar } from './SideBar';
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a>
                    <img 
                        src="/images/logo.svg"
                        alt="tesla logo"
                        loading='lazy'
                        className={styles.teslaLogo}
                    />
                </a>
            </Link>

            <div className={styles.menu}>
                <li className={styles.items}>
                    <a href="#" className={styles.itemsLink}>
                        Shop
                    </a>
                </li>
                <li className={styles.items}>
                    <Link href="/sign_in">
                        <a>
                            Account
                        </a>
                    </Link>
                </li>
                <li className={styles.items} onClick={showSidebar}>
                    Menu
                </li>
            </div>

            <div className={sidebar ? 'side-menu active' : 'side-menu'}>
                <CloseIcon className='closeIcon' onClick={showSidebar} />
                <ul className="sideBarNav">
                    {SideBar.map((item, index) => {
                        return(
                            <li key={index} className="hamburgerLinks">
                                <Link href={item.path}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;