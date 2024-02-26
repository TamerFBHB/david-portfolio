'use client'
import Image from 'next/image';
import styles from './SideBar.module.scss';
import Clock from 'react-live-clock';
import { useEffect, useState } from 'react';


const SideBar = () => {

    return (
        <div className={styles.sideBar}>

            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Image src='https://wpriverthemes.com/HTML/stag/assets/imgs/logo.svg' width={50} height={50} alt="logo" className={styles.logo} />
                    <h2>STAG</h2>
                </div>

                <Clock
                    format={'HH:mm A'}
                    ticking={true}
                    timezone={'cairo/Egypt'}
                    className={styles.clock} />
            </div>



        </div>
    )
};
export default SideBar